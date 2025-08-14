import type { Metadata } from "next";
import Link from "next/link";
import { 
  CheckIcon,
  PhoneIcon,
  ChartBarIcon,
  UserGroupIcon,
  BoltIcon,
  ShieldCheckIcon
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Service Business Website Development | Lead Generation Focus | BuildnWeb",
  description: "Professional service business website development with guaranteed lead generation. Launch high-converting websites for consultants, agencies, and professional services. Expert lead generation website design.",
  keywords: "service business website development, lead generation website design, professional services web development, consultant website design, business website development, lead generation optimization",
  openGraph: {
    title: "Service Business Website Development - Lead Generation Focus",
    description: "Launch lead-generating websites for professional service businesses. Guaranteed qualified leads with conversion-optimized design and development.",
    url: "https://buildnweb.in/services/service-business-websites",
  },
  alternates: {
    canonical: "/services/service-business-websites",
  },
};

const features = [
  {
    icon: <PhoneIcon className="h-6 w-6" />,
    title: "Qualified Lead Generation",
    description: "Convert website visitors into qualified leads with optimized contact forms and clear value propositions."
  },
  {
    icon: <ChartBarIcon className="h-6 w-6" />,
    title: "Lead Tracking & Analytics",
    description: "Track lead sources, conversion rates, and ROI with detailed reporting and CRM integration."
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Authority Building", 
    description: "Establish credibility with professional design, client testimonials, and case study showcases."
  },
  {
    icon: <ShieldCheckIcon className="h-6 w-6" />,
    title: "Lead Quality Guarantee",
    description: "We guarantee higher quality leads within 45 days or continue optimizing until you see results."
  }
];

const process = [
  {
    step: "1",
    title: "Business Discovery & Strategy",
    description: "We analyze your target clients, services, and competitive landscape to create a lead-focused website strategy."
  },
  {
    step: "2", 
    title: "Lead Conversion Architecture",
    description: "Design user journeys that guide potential clients from awareness to consultation booking with clear CTAs."
  },
  {
    step: "3",
    title: "Professional Development",
    description: "Build your service business website with trust-building elements: testimonials, case studies, and professional credentials."
  },
  {
    step: "4",
    title: "Launch & Lead Optimize",
    description: "Deploy with lead tracking, form optimization, and ongoing conversion rate improvements."
  }
];

const packages = [
  {
    name: "Professional Starter",
    price: "₹50,000",
    description: "Perfect for solo consultants and small firms",
    features: [
      "5-page professional website",
      "Lead capture optimization",
      "Contact form integration",
      "Mobile-responsive design",
      "Basic SEO optimization",
      "7-day launch guarantee"
    ]
  },
  {
    name: "Authority Builder",
    price: "₹1,00,000", 
    popular: true,
    description: "Ideal for growing service businesses",
    features: [
      "Custom professional website",
      "Case study showcase pages",
      "Advanced lead qualification",
      "CRM integration", 
      "Local SEO optimization",
      "6-month lead optimization"
    ]
  },
  {
    name: "Enterprise Services",
    price: "₹2,00,000+",
    description: "For large professional service firms",
    features: [
      "Multi-service website platform",
      "Team directory and profiles",
      "Advanced lead nurturing",
      "Enterprise CRM integration",
      "Multi-location optimization",
      "12-month growth partnership"
    ]
  }
];

export default function ServiceBusinessWebsites() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-brand-success-light to-brand-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="inline-flex items-center bg-gradient-to-r from-brand-success to-brand-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                  <PhoneIcon className="h-4 w-4 mr-2" />
                  Lead Quality Guarantee
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Service Business Websites That
                <span className="gradient-text-growth"> Generate Leads</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Launch professional service business websites that convert visitors into qualified leads. 
                Our proven development process delivers <strong>5x more consultation bookings</strong> 
                with conversion-optimized design and lead nurturing systems.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link 
                  href="#contact" 
                  className="btn-primary text-center"
                >
                  Get Free Business Audit
                </Link>
                <Link 
                  href="#case-studies" 
                  className="btn-secondary text-center"
                >
                  View Client Success
                </Link>
              </div>
              
              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-brand-success rounded-full"></div>
                  <span>5x More Leads</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                  <span>Higher Quality Clients</span>
                </div>
              </div>
            </div>
            
            <div className="lg:pl-12">
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold mb-6 text-center">Service Business Results</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-brand-success rounded-xl bg-opacity-10">
                    <span className="font-medium">Lead Generation</span>
                    <span className="text-2xl font-bold text-brand-success">+420%</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-brand-primary-light rounded-xl">
                    <span className="font-medium">Qualified Consultations</span>
                    <span className="text-2xl font-bold text-brand-primary">+310%</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-brand-accent-light rounded-xl">
                    <span className="font-medium">Client Acquisition Cost</span>
                    <span className="text-2xl font-bold text-brand-accent">-65%</span>
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
              Why Service Businesses Choose BuildnWeb
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in professional service website development with proven strategies 
              that generate qualified leads and establish market authority.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-success to-brand-primary rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
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
              Our Lead-Focused Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategy to launch in just 7 days. Our streamlined process maximizes 
              lead generation and establishes your professional authority.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {process.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-brand-success to-brand-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
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
              <h3 className="text-2xl font-bold mb-6">Ready to Generate More Leads?</h3>
              <p className="text-gray-600 mb-6">
                Book a free 30-minute business consultation and discover how we can 
                increase your qualified leads by 5x in the next 45 days.
              </p>
              <Link 
                href="#contact" 
                className="w-full btn-primary text-center block"
              >
                Schedule Free Consultation
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
              Service Business Website Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect package for your business size. 
              All packages include lead optimization and our quality guarantee.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={index} 
                className={`relative bg-white rounded-3xl p-8 shadow-xl ${
                  pkg.popular ? 'ring-2 ring-brand-success' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-brand-success text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{pkg.name}</h3>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                <div className="text-4xl font-bold text-brand-success mb-6">{pkg.price}</div>
                
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
                      ? 'bg-brand-success text-white hover:bg-brand-success-dark' 
                      : 'border-2 border-brand-success text-brand-success hover:bg-brand-success hover:text-white'
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
              Service Business Website FAQ
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about our professional service website development.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-3 text-gray-900">
                How do you guarantee 5x more qualified leads?
              </h3>
              <p className="text-gray-600">
                We implement proven lead generation strategies including optimized contact forms, 
                clear value propositions, social proof placement, and lead qualification systems. 
                Our approach is backed by data from 100+ successful service business launches.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-3 text-gray-900">
                What types of service businesses do you work with?
              </h3>
              <p className="text-gray-600">
                We work with consultants, agencies, professional services, coaching businesses, 
                legal firms, accounting practices, healthcare professionals, and any service-based 
                business looking to generate more qualified leads online.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-3 text-gray-900">
                Do you integrate with CRM systems?
              </h3>
              <p className="text-gray-600">
                Yes, we integrate with popular CRM systems including HubSpot, Salesforce, 
                Pipedrive, and Zoho CRM. This ensures all leads are automatically captured 
                and tracked for better follow-up and conversion measurement.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-3 text-gray-900">
                How do you establish credibility and authority?
              </h3>
              <p className="text-gray-600">
                We build authority through professional design, client testimonials, 
                detailed case studies, team credentials, industry certifications, 
                and thought leadership content that positions you as an expert.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-success to-brand-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Service Business Online?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join 150+ service professionals who have increased their qualified leads 
            with our proven website development process. Start your transformation today.
          </p>
          <Link 
            href="#contact" 
            className="inline-flex items-center bg-white text-brand-success px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <PhoneIcon className="h-5 w-5 mr-2" />
            Start Generating Leads
          </Link>
        </div>
      </section>
    </main>
  );
}