import type { Metadata } from "next";
import Link from "next/link";
import { 
  CheckIcon,
  ShoppingCartIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  BoltIcon,
  ShieldCheckIcon
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "E-commerce Website Development Services | Revenue Growth Guarantee | BuildnWeb",
  description: "Professional e-commerce development with guaranteed revenue growth. Launch high-converting online stores in 7 days. Expert e-commerce web development services with AOV optimization.",
  keywords: "e-commerce development, online store development, e-commerce website design, shopping cart development, revenue optimization, conversion rate optimization, e-commerce web development services",
  openGraph: {
    title: "E-commerce Development Services - Revenue Growth Guarantee",
    description: "Launch revenue-optimized e-commerce websites that drive sales. Professional online store development with guaranteed results in 7 days.",
    url: "https://buildnweb.in/services/ecommerce-development",
  },
  alternates: {
    canonical: "/services/ecommerce-development",
  },
};

const features = [
  {
    icon: <ShoppingCartIcon className="h-6 w-6" />,
    title: "Cart Abandonment Recovery",
    description: "Recover 30-40% of lost sales with automated email sequences and exit-intent popups."
  },
  {
    icon: <ChartBarIcon className="h-6 w-6" />,
    title: "Revenue Analytics",
    description: "Track customer lifetime value, average order value, and conversion rates with detailed reporting."
  },
  {
    icon: <BoltIcon className="h-6 w-6" />,
    title: "One-Click Checkout", 
    description: "Reduce checkout friction with streamlined payment flows and guest checkout options."
  },
  {
    icon: <CurrencyDollarIcon className="h-6 w-6" />,
    title: "Revenue Guarantee",
    description: "We guarantee measurable revenue growth within 60 days or continue optimizing for free."
  }
];

const process = [
  {
    step: "1",
    title: "Store Audit & Strategy",
    description: "We analyze your products, target market, and competition to create a revenue-focused e-commerce strategy."
  },
  {
    step: "2", 
    title: "Conversion Architecture",
    description: "Design user flows that maximize average order value and minimize cart abandonment rates."
  },
  {
    step: "3",
    title: "Revenue-Optimized Development",
    description: "Build your store with proven e-commerce features: product recommendations, upsells, and social proof."
  },
  {
    step: "4",
    title: "Launch & Scale",
    description: "Deploy with conversion tracking, inventory management, and ongoing revenue optimization."
  }
];

const packages = [
  {
    name: "Store Starter",
    price: "₹1,00,000",
    description: "Perfect for new e-commerce businesses",
    features: [
      "Up to 100 products",
      "Mobile-responsive design",
      "Payment gateway integration",
      "Basic inventory management",
      "Cart abandonment recovery",
      "7-day launch guarantee"
    ]
  },
  {
    name: "Revenue Engine",
    price: "₹2,00,000", 
    popular: true,
    description: "Ideal for growing online stores",
    features: [
      "Unlimited products",
      "Advanced product recommendations",
      "Multi-currency support",
      "Advanced analytics dashboard", 
      "Email marketing integration",
      "6-month revenue optimization"
    ]
  },
  {
    name: "Enterprise Store",
    price: "₹4,00,000+",
    description: "For large-scale e-commerce operations",
    features: [
      "Custom e-commerce platform",
      "Multi-vendor marketplace",
      "Advanced automation",
      "Enterprise integrations",
      "Dedicated account manager",
      "12-month growth partnership"
    ]
  }
];

export default function EcommerceDevelopment() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-brand-accent-light to-brand-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="inline-flex items-center bg-gradient-to-r from-brand-accent to-brand-success text-white px-4 py-2 rounded-full text-sm font-semibold">
                  <ShoppingCartIcon className="h-4 w-4 mr-2" />
                  Revenue Growth Guarantee
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                E-commerce Development That
                <span className="gradient-text-revenue"> Drives Sales</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Launch revenue-optimized e-commerce websites that convert browsers into buyers. 
                Our proven development process increases <strong>average order value by 40%</strong> 
                and reduces cart abandonment with guaranteed results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link 
                  href="#contact" 
                  className="btn-primary text-center"
                >
                  Get Free Store Audit
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
                  <span>40% Higher AOV</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-brand-success rounded-full"></div>
                  <span>30% Less Abandonment</span>
                </div>
              </div>
            </div>
            
            <div className="lg:pl-12">
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold mb-6 text-center">E-commerce Growth Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-brand-accent-light rounded-xl">
                    <span className="font-medium">Revenue Growth</span>
                    <span className="text-2xl font-bold text-brand-accent">+250%</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-brand-success rounded-xl bg-opacity-10">
                    <span className="font-medium">Average Order Value</span>
                    <span className="text-2xl font-bold text-brand-success">+40%</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-brand-primary-light rounded-xl">
                    <span className="font-medium">Conversion Rate</span>
                    <span className="text-2xl font-bold text-brand-primary">+180%</span>
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
              Why E-commerce Brands Choose BuildnWeb
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in revenue-driven e-commerce development with proven strategies 
              that increase sales and customer lifetime value.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-accent to-brand-success rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
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
              Our Revenue-Focused Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategy to launch in just 7 days. Our streamlined process maximizes 
              revenue potential and customer experience.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {process.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-brand-accent to-brand-success rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
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
              <h3 className="text-2xl font-bold mb-6">Ready to Boost Revenue?</h3>
              <p className="text-gray-600 mb-6">
                Book a free 30-minute store audit and discover how we can 
                increase your online revenue by 40% in the next 60 days.
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
              E-commerce Development Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect package for your business size. 
              All packages include revenue optimization and our growth guarantee.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={index} 
                className={`relative bg-white rounded-3xl p-8 shadow-xl ${
                  pkg.popular ? 'ring-2 ring-brand-accent' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-brand-accent text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{pkg.name}</h3>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                <div className="text-4xl font-bold text-brand-accent mb-6">{pkg.price}</div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center space-x-3">
                      <CheckIcon className="h-5 w-5 text-brand-success flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="#contact" 
                  className={`w-full text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 block ${
                    pkg.popular 
                      ? 'bg-brand-accent text-white hover:bg-brand-accent-dark' 
                      : 'border-2 border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white'
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
              E-commerce Development FAQ
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about our e-commerce development services.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-3 text-gray-900">
                How do you guarantee 40% higher average order value?
              </h3>
              <p className="text-gray-600">
                We implement proven revenue optimization strategies including product bundling, 
                cross-sell recommendations, quantity discounts, and strategic upsells at checkout. 
                These techniques consistently increase AOV across all our e-commerce projects.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-3 text-gray-900">
                What payment gateways do you integrate?
              </h3>
              <p className="text-gray-600">
                We integrate all major Indian payment gateways including Razorpay, PayU, CCAvenue, 
                Instamojo, and Paytm. We also support international gateways like Stripe and PayPal 
                for global sales.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-3 text-gray-900">
                Do you provide inventory management features?
              </h3>
              <p className="text-gray-600">
                Yes, all our packages include inventory management with stock tracking, 
                low stock alerts, automated reorder points, and detailed sales reporting. 
                Enterprise packages include multi-warehouse management.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-3 text-gray-900">
                Can you migrate my existing store to a new platform?
              </h3>
              <p className="text-gray-600">
                Absolutely! We provide complete store migration services including product data, 
                customer information, order history, and SEO settings. We ensure zero downtime 
                and maintain all your existing search rankings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-accent to-brand-success">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Launch Your Revenue-Driving Store?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join 200+ e-commerce brands that have increased their online revenue 
            with our proven development process. Start your store transformation today.
          </p>
          <Link 
            href="#contact" 
            className="inline-flex items-center bg-white text-brand-accent px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <ShoppingCartIcon className="h-5 w-5 mr-2" />
            Start Your Store Launch
          </Link>
        </div>
      </section>
    </main>
  );
}