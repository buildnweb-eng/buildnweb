import type { Metadata } from "next";
import Link from "next/link";
import { 
  CheckIcon,
  RocketLaunchIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  BoltIcon,
  ShieldCheckIcon
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "SaaS Website Development Services | 7-Day Launch Guarantee | BuildnWeb",
  description: "Professional SaaS website development with guaranteed demo booking optimization. Launch high-converting SaaS websites in 7 days with measurable ROI. Expert SaaS web development services in India.",
  keywords: "SaaS website development, SaaS web development services, demo booking optimization, SaaS landing page design, conversion optimization, SaaS website design, high-converting SaaS websites",
  openGraph: {
    title: "SaaS Website Development Services - 7-Day Launch Guarantee",
    description: "Launch high-converting SaaS websites that drive demo bookings. Professional SaaS web development with guaranteed results in 7 days.",
    url: "https://buildnweb.in/services/saas-website-development",
  },
  alternates: {
    canonical: "/services/saas-website-development",
  },
};

const features = [
  {
    icon: <CursorArrowRaysIcon className="h-6 w-6" />,
    title: "Demo Booking Optimization",
    description: "Convert 3x more visitors into qualified demo bookings with proven SaaS conversion strategies."
  },
  {
    icon: <ChartBarIcon className="h-6 w-6" />,
    title: "Revenue-Focused Analytics",
    description: "Track every metric that matters - from visitor behavior to conversion rates and revenue attribution."
  },
  {
    icon: <BoltIcon className="h-6 w-6" />,
    title: "Lightning-Fast Performance", 
    description: "Sub-2 second load times ensure maximum conversions and better search rankings."
  },
  {
    icon: <ShieldCheckIcon className="h-6 w-6" />,
    title: "ROI Guarantee",
    description: "Measurable revenue growth within 30 days or we optimize for free until you see results."
  }
];

const process = [
  {
    step: "1",
    title: "SaaS Audit & Strategy",
    description: "We analyze your current conversion funnel, competitor landscape, and identify optimization opportunities for maximum demo bookings."
  },
  {
    step: "2", 
    title: "Conversion Blueprint",
    description: "Create wireframes and user journeys specifically designed to guide SaaS visitors toward booking demos and trials."
  },
  {
    step: "3",
    title: "High-Converting Development",
    description: "Build your SaaS website with proven conversion elements: compelling CTAs, social proof, and friction-free demo booking."
  },
  {
    step: "4",
    title: "Launch & Optimize",
    description: "Deploy with conversion tracking, A/B testing setup, and immediate optimization based on user behavior data."
  }
];

const packages = [
  {
    name: "SaaS Starter",
    price: "₹75,000",
    description: "Perfect for early-stage SaaS companies",
    features: [
      "5-page responsive SaaS website",
      "Demo booking form optimization",
      "Basic conversion tracking",
      "Mobile-first design",
      "7-day launch guarantee",
      "30-day support included"
    ]
  },
  {
    name: "SaaS Growth",
    price: "₹1,50,000", 
    popular: true,
    description: "Ideal for scaling SaaS businesses",
    features: [
      "Custom SaaS website with advanced features",
      "A/B testing setup for key pages",
      "Advanced analytics & conversion tracking", 
      "Lead scoring integration",
      "CRM integration",
      "6-month optimization included"
    ]
  },
  {
    name: "Enterprise SaaS",
    price: "₹3,00,000+",
    description: "For established SaaS companies",
    features: [
      "Full SaaS platform website",
      "Multi-variate testing framework",
      "Advanced personalization",
      "Enterprise integrations",
      "Dedicated account manager",
      "12-month growth partnership"
    ]
  }
];

export default function SaaSWebsiteDevelopment() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-brand-primary-light to-brand-secondary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="inline-flex items-center bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-4 py-2 rounded-full text-sm font-semibold">
                  <RocketLaunchIcon className="h-4 w-4 mr-2" />
                  7-Day Launch Guarantee
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                SaaS Website Development That
                <span className="gradient-text"> Converts</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Launch high-converting SaaS websites that turn visitors into demo bookings. 
                Our proven development process delivers <strong>3x more qualified leads</strong> 
                with guaranteed results in just 7 days.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link 
                  href="#contact" 
                  className="btn-primary text-center"
                >
                  Get Free SaaS Audit
                </Link>
                <Link 
                  href="#case-studies" 
                  className="btn-secondary text-center"
                >
                  View Success Stories
                </Link>
              </div>
              
              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                  <span>3x Demo Bookings</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                  <span>7-Day Guarantee</span>
                </div>
              </div>
            </div>
            
            <div className="lg:pl-12">
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold mb-6 text-center">SaaS Conversion Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-brand-accent-light rounded-xl">
                    <span className="font-medium">Demo Bookings</span>
                    <span className="text-2xl font-bold text-brand-accent">+285%</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-brand-primary-light rounded-xl">
                    <span className="font-medium">Conversion Rate</span>
                    <span className="text-2xl font-bold text-brand-primary">+180%</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-brand-secondary-light rounded-xl">
                    <span className="font-medium">Revenue Growth</span>
                    <span className="text-2xl font-bold text-brand-secondary">+320%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why SaaS Companies Choose BuildnWeb
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in SaaS website development with a proven track record of 
              increasing demo bookings and driving measurable revenue growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Proven SaaS Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From audit to launch in just 7 days. Our streamlined process ensures 
              maximum conversions and rapid time-to-market.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {process.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
              <p className="text-gray-600 mb-6">
                Book a free 30-minute SaaS audit call and discover how we can 
                increase your demo bookings by 3x in the next 30 days.
              </p>
              <Link 
                href="#contact" 
                className="w-full btn-primary text-center block"
              >
                Schedule Free Audit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              SaaS Website Development Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect package for your SaaS business stage. 
              All packages include our 7-day launch guarantee and ROI promise.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={index} 
                className={`relative bg-white rounded-3xl p-8 shadow-xl ${
                  pkg.popular ? 'ring-2 ring-brand-primary' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-brand-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{pkg.name}</h3>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                <div className="text-4xl font-bold text-brand-primary mb-6">{pkg.price}</div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center space-x-3">
                      <CheckIcon className="h-5 w-5 text-brand-accent flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="#contact" 
                  className={`w-full text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 block ${
                    pkg.popular 
                      ? 'bg-brand-primary text-white hover:bg-brand-primary-dark' 
                      : 'border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our SaaS website development services.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-3 text-gray-900">
                How do you guarantee 3x more demo bookings?
              </h3>
              <p className="text-gray-600">
                We use proven SaaS conversion strategies including optimized demo booking forms, 
                social proof placement, compelling CTAs, and friction-reduction techniques. 
                Our process is backed by data from 50+ successful SaaS launches.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-3 text-gray-900">
                What&apos;s included in the 7-day launch guarantee?
              </h3>
              <p className="text-gray-600">
                Your complete SaaS website will be live within 7 business days or you don&apos;t pay. 
                This includes design, development, conversion optimization, analytics setup, 
                and demo booking integration.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-3 text-gray-900">
                Do you work with early-stage SaaS companies?
              </h3>
              <p className="text-gray-600">
                Yes! We work with SaaS companies at all stages - from pre-launch startups 
                to established enterprises. Our SaaS Starter package is perfect for 
                early-stage companies with limited budgets.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-3 text-gray-900">
                What happens if I don&apos;t see results in 30 days?
              </h3>
              <p className="text-gray-600">
                We offer a money-back guarantee if you don&apos;t see measurable improvement 
                in demo bookings within 30 days. Plus, we&apos;ll continue optimizing for 
                free until you achieve your conversion goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-primary to-brand-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Launch Your High-Converting SaaS Website?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join 100+ SaaS companies that have increased their demo bookings 
            with our proven development process. Start your 7-day launch today.
          </p>
          <Link 
            href="#contact" 
            className="inline-flex items-center bg-white text-brand-primary px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <RocketLaunchIcon className="h-5 w-5 mr-2" />
            Start Your 7-Day Launch
          </Link>
        </div>
      </section>
    </main>
  );
}