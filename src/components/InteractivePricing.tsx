import React, { useState, useEffect, useMemo } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/ui/card";
import { Button } from "@/components/ui/ui/button";
import { Badge } from "@/components/ui/ui/badge";
import { Slider } from "@/components/ui/ui/slider";
import { Switch } from "@/components/ui/ui/switch";
import { Separator } from "@/components/ui/ui/separator";
import {
  CheckCircle,
  Star,
  Zap,
  Target,
  Globe,
  Shield,
  TrendingUp,
  Clock,
} from "lucide-react";

const InteractivePricing = () => {
  const [config, setConfig] = useState({
    websiteType: "basic",
    pages: [5],
    ecommerce: false,
    seo: true,
    socialMedia: false,
    paidAds: false,
    analytics: true,
    maintenance: true,
    priority: false,
  });

  const [calculatedPrice, setCalculatedPrice] = useState(0);
  const [estimatedROI, setEstimatedROI] = useState(0);

  const websiteTypes = useMemo(() => ({
    basic: { name: "Business Website", basePrice: 25000, multiplier: 1 },
    ecommerce: { name: "E-commerce Store", basePrice: 45000, multiplier: 1.5 },
    enterprise: {
      name: "Enterprise Solution",
      basePrice: 85000,
      multiplier: 2.2,
    },
  }), []);

  const addOns = useMemo(() => ({
    ecommerce: { price: 15000, roi: 300 },
    seo: { price: 8000, roi: 250 },
    socialMedia: { price: 5000, roi: 180 },
    paidAds: { price: 10000, roi: 340 },
    analytics: { price: 3000, roi: 120 },
    maintenance: { price: 4000, roi: 150 },
    priority: { price: 12000, roi: 200 },
  }), []);

  useEffect(() => {
    let basePrice =
      websiteTypes[config.websiteType as keyof typeof websiteTypes].basePrice;
    let totalPrice = basePrice;
    let totalROI = 180; // Base ROI

    // Add page costs
    const pageCount = config.pages[0];
    if (pageCount > 5) {
      totalPrice += (pageCount - 5) * 2000;
    }

    // Add-on pricing
    Object.entries(config).forEach(([key, value]) => {
      if (value === true && addOns[key as keyof typeof addOns]) {
        totalPrice += addOns[key as keyof typeof addOns].price;
        totalROI += addOns[key as keyof typeof addOns].roi * 0.1;
      }
    });

    setCalculatedPrice(totalPrice);
    setEstimatedROI(Math.round(totalROI));
  }, [config, websiteTypes, addOns]);

  const handleConfigChange = (key: string, value: any) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
  };

  const getFeatureList = () => {
    const features = [
      "Professional Design",
      "Mobile Responsive",
      "SSL Certificate",
      "Basic SEO Setup",
    ];

    if (config.ecommerce)
      features.push("Payment Gateway", "Inventory Management");
    if (config.seo) features.push("Advanced SEO", "Google My Business Setup");
    if (config.socialMedia)
      features.push("Social Media Integration", "Content Calendar");
    if (config.paidAds)
      features.push("Google Ads Setup", "Facebook Ads Management");
    if (config.analytics)
      features.push("Advanced Analytics", "Conversion Tracking");
    if (config.maintenance)
      features.push("Monthly Maintenance", "24/7 Support");
    if (config.priority) features.push("Priority Support", "7-Day Delivery");

    return features;
  };

  return (
    <section className="py-16 lg:py-24 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="bg-purple-100 text-purple-800 px-4 py-2 text-lg font-semibold mb-6">
            Interactive Pricing
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Build Your Perfect Package
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Customize your solution and see real-time pricing. No hidden costs,
            no surprises.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Configuration Panel */}
          <Card className="shadow-2xl border-2 border-blue-100">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">
                Configure Your Project
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Website Type */}
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  Project Type
                </label>
                <div className="grid gap-3">
                  {Object.entries(websiteTypes).map(([key, type]) => (
                    <button
                      key={key}
                      onClick={() => handleConfigChange("websiteType", key)}
                      className={`p-4 rounded-xl border-2 text-left transition-all ${
                        config.websiteType === key
                          ? "border-blue-500 bg-blue-50 shadow-md"
                          : "border-gray-200 hover:border-blue-300"
                      }`}
                    >
                      <div className="font-semibold text-gray-900">
                        {type.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        Starting at ₹{type.basePrice.toLocaleString()}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Page Count */}
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  Number of Pages: {config.pages[0]}
                </label>
                <Slider
                  value={config.pages}
                  onValueChange={(value: number[]) =>
                    handleConfigChange("pages", value)
                  }
                  max={20}
                  min={3}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>3 pages</span>
                  <span>20+ pages</span>
                </div>
              </div>

              <Separator />

              {/* Add-ons */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Additional Services
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      key: "ecommerce",
                      label: "E-commerce Features",
                      icon: Globe,
                      description: "Online store, payments, inventory",
                    },
                    {
                      key: "seo",
                      label: "Advanced SEO",
                      icon: TrendingUp,
                      description: "Rank higher on Google",
                    },
                    {
                      key: "socialMedia",
                      label: "Social Media Management",
                      icon: Star,
                      description: "Content creation & posting",
                    },
                    {
                      key: "paidAds",
                      label: "Paid Advertising",
                      icon: Target,
                      description: "Google & Facebook ads",
                    },
                    {
                      key: "analytics",
                      label: "Advanced Analytics",
                      icon: TrendingUp,
                      description: "Detailed reporting dashboard",
                    },
                    {
                      key: "maintenance",
                      label: "Monthly Maintenance",
                      icon: Shield,
                      description: "Updates, backups, support",
                    },
                    {
                      key: "priority",
                      label: "Priority Support",
                      icon: Zap,
                      description: "7-day delivery, priority support",
                    },
                  ].map((addon) => (
                    <div
                      key={addon.key}
                      className="flex items-center justify-between p-4 bg-white rounded-lg border"
                    >
                      <div className="flex items-center space-x-3">
                        <addon.icon className="h-5 w-5 text-blue-600" />
                        <div>
                          <div className="font-medium text-gray-900">
                            {addon.label}
                          </div>
                          <div className="text-sm text-gray-600">
                            {addon.description} 
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-sm font-medium text-gray-700">
                          +₹
                          {addOns[
                            addon.key as keyof typeof addOns
                          ].price.toLocaleString()}
                        </span>
                        <Switch
                          checked={
                            config[addon.key as keyof typeof config] as boolean
                          }
                          onCheckedChange={(checked: boolean) =>
                            handleConfigChange(addon.key, checked)
                          }
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pricing Summary */}
          <div className="space-y-8">
            {/* Price Card */}
            <Card className="shadow-2xl border-2 border-green-200 bg-gradient-to-br from-green-50 to-blue-50">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="text-5xl font-bold text-green-600 mb-2">
                    ₹{calculatedPrice.toLocaleString()}
                  </div>
                  <div className="text-lg text-gray-600">
                    One-time investment
                  </div>
                  <div className="text-sm text-gray-500 mt-2">
                    + Monthly services as selected
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 mb-6 border border-green-200">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {estimatedROI}% ROI
                    </div>
                    <div className="text-sm text-gray-600">
                      Expected return in 6 months
                    </div>
                    <div className="text-lg font-semibold text-green-600 mt-2">
                      ≈ ₹
                      {Math.round(
                        (calculatedPrice * estimatedROI) / 100
                      ).toLocaleString()}{" "}
                      revenue
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-lg py-6 mb-6">
                  Start Your Project Today
                  <Zap className="ml-2 h-5 w-5" />
                </Button>

                <div className="text-center text-sm text-gray-600">
                  <Clock className="inline h-4 w-4 mr-1" />
                  7-day delivery guarantee
                </div>
              </CardContent>
            </Card>

            {/* Features Included */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">
                  What&apos;s Included
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {getFeatureList().map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Guarantee */}
            <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-yellow-800 mb-2">
                  50-Year Guarantee
                </h3>
                <p className="text-yellow-700">
                  Not satisfied? Get your money back within 30 days. That&apos;s our
                  promise after 50 years in business.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractivePricing;
