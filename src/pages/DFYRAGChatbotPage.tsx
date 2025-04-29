import React from 'react';
import { Hero, CTASection, ValueProposition, SocialProof } from '../components'; // Import necessary components
import { config } from '../config';
import { 
  MessageSquareText, 
  Zap, 
  Clock, 
  BarChart3, 
  ShieldCheck, 
  Settings, 
  Headphones,
  CheckCircle2,
  MessageSquareMore,
  Star,
  Briefcase
} from 'lucide-react'; // Example icons
import { Link } from 'react-router-dom';

// Placeholder Loom video component (could be shared)
const LoomVideoPlaceholder = () => (
  <div className="aspect-video w-full bg-dark-100 border border-gray-800 flex items-center justify-center rounded-2xl">
    <span className="text-gray-400">Your Generic Loom Video Here</span>
  </div>
);

// Placeholder data
const ragValueCards = [
  { icon: <MessageSquareText className="h-8 w-8 text-blue-400" />, title: "Instant Client Qualification", description: "Qualify leads 24/7 based on your firm's criteria, even after hours." },
  { icon: <Zap className="h-8 w-8 text-purple-400" />, title: "Reduce Non-Billable Hours", description: "Automate answers to common questions, freeing up your team for complex work." },
  { icon: <Clock className="h-8 w-8 text-blue-400" />, title: "Boost Intake Capacity", description: "Handle more inquiries simultaneously without increasing staff." },
  { icon: <BarChart3 className="h-8 w-8 text-purple-400" />, title: "Actionable Insights", description: "Understand common client questions and bottlenecks in your intake." }
];

const ragFeatures = [
  { icon: <ShieldCheck />, title: "Custom RAG Implementation", description: "Tailored to your website content and specific legal documents for accurate, relevant answers." },
  { icon: <Settings />, title: "Compliance-Driven Design", description: "Built with legal ethics and data privacy considerations at the forefront." },
  { icon: <Clock />, title: "24/7 & After-Hours Support", description: "Ensures potential clients get immediate engagement any time of day." },
  { icon: <Headphones />, title: "Includes 2 Optimization Calls", description: "We refine the chatbot's performance based on real-world interactions." },
  // Add more specific features as needed
];

const testimonials = [
  { rating: 5, text: "The RAG chatbot handles initial queries perfectly, letting us focus on qualified leads.", authorName: "Partner A", authorTitle: "Law Firm X" },
  { rating: 5, text: "Reduced our team's time spent on repetitive questions significantly.", authorName: "Associate B", authorTitle: "Law Firm Y" },
  { rating: 5, text: "A game-changer for client intake and satisfaction.", authorName: "Admin C", authorTitle: "Law Firm Z" },
];

const ctaBenefits = [
  { icon: <CheckCircle2 />, text: "Double Intake Capacity" },
  { icon: <Clock />, text: "Cut Non-Billable Hours by 30%" },
  { icon: <MessageSquareMore />, text: "Free Consultation" }
];

const DFYRAGChatbotPage: React.FC = () => {
  const handleBookConsultClick = () => {
    window.open(config.CALENDLY_LINK, '_blank');
  };

  return (
    <>
      <Hero 
        title="Automate Client Intake & Qualification with a Custom AI Chatbot"
        subtitle="Our DFY RAG Chatbot provides instant, accurate answers 24/7, qualifies leads based on your criteria, and drastically reduces non-billable hours. Built specifically for your law firm."
        videoPlaceholder={<LoomVideoPlaceholder />} 
        ctaButtonText="Book Your Free AI Consultation"
        onCtaClick={handleBookConsultClick}
      />
      
      <ValueProposition cards={ragValueCards} />

      {/* Core Offer Features Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gradient">DFY RAG Chatbot Implementation</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage the power of Retrieval-Augmented Generation, tailored to your firm's knowledge base.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {ragFeatures.map((item, index) => (
              <div key={index} className="card-hover rounded-xl p-6 border border-gray-800">
                <div className="text-blue-400 mb-4">{React.cloneElement(item.icon, { className: 'h-8 w-8' })}</div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          {/* --- NEW PRICING TIER SECTION --- */}
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold mb-4 text-gradient">Choose Your Implementation Level</h2>
             <p className="text-lg text-gray-400 max-w-2xl mx-auto">
               Select the package that best fits your firm's needs and scale.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            
            {/* Tier 1: DFY RAG Chatbot (Recommended) */}
            <div className="card-hover rounded-xl p-8 border-2 border-blue-500 shadow-lg relative flex flex-col">
              <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              <MessageSquareText className="h-10 w-10 text-blue-400 mb-4 self-center" />
              <h3 className="text-2xl font-bold text-center mb-4 text-white">DFY RAG Chatbot</h3>
              <p className="text-gray-400 text-center mb-6 flex-grow">The core package to automate intake, qualify leads, and reduce non-billable hours with a custom AI chatbot.</p>
              <ul className="text-left text-gray-400 space-y-2 mb-6 text-sm list-disc list-inside flex-grow">
                <li>Custom RAG Implementation</li>
                <li>Compliance-Driven Design</li>
                <li>24/7 & After-Hours Support</li>
                <li>2 Included Optimization Calls</li>
              </ul>
              <div className="text-center mb-6">
                <div className="text-4xl font-bold">$2,499</div>
                <div className="text-gray-400 text-sm">One-Time Setup</div>
                <p className="text-xs text-gray-500 mt-1">Ongoing support optional</p>
              </div>
              <button 
                onClick={handleBookConsultClick}
                className="w-full mt-auto bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Book Free Consultation
              </button>
            </div>

            {/* Tier 2: White Glove Service (Price Anchor) */}
            <div className="card-hover rounded-xl p-8 border border-gray-800 flex flex-col">
              <Briefcase className="h-10 w-10 text-yellow-400 mb-4 self-center" />
              <h3 className="text-2xl font-bold text-center mb-4 text-white">White Glove Service</h3>
              <p className="text-gray-400 text-center mb-6 flex-grow">Comprehensive enterprise solution for firms needing extensive automation strategy, premium support, and custom integrations.</p>
               <ul className="text-left text-gray-400 space-y-2 mb-6 text-sm list-disc list-inside flex-grow">
                 <li>Includes Everything in DFY RAG</li>
                 <li>+ Unlimited Automations Audit</li>
                 <li>+ Dedicated Account Manager</li>
                 <li>+ Premium SLA & Priority Support</li>
                 <li>+ 1 Included Expansion Module</li>
                 <li>+ Advanced Customization</li>
               </ul>
              <div className="text-center mb-6">
                <div className="text-4xl font-bold">$4,499+</div>
                <div className="text-gray-400 text-sm">Starting One-Time Setup</div>
                 <p className="text-xs text-gray-500 mt-1">Includes monthly retainer</p>
              </div>
              <Link 
                to="/white-glove" 
                className="w-full mt-auto text-center bg-dark-200 hover:bg-dark-100 text-gray-300 px-6 py-3 rounded-lg font-semibold transition-all duration-300 border border-gray-700"
              >
                Learn More
              </Link>
            </div>
          </div>
          
          {/* Removed old pricing section and White Glove teaser */}
          {/* <div className="text-center bg-dark-100 rounded-2xl p-8 border border-gray-800 max-w-2xl mx-auto"> ... </div> */}
          {/* <div className="text-center mt-10 max-w-2xl mx-auto"> ... </div> */}
        </div>
      </section>

      <SocialProof 
        title="See How AI is Transforming Law Firms"
        testimonials={testimonials} // Use specific testimonials if available
        clientLogoPlaceholders={4} // Adjust as needed
      />

      <CTASection 
        title="Ready to Deploy Your Firm's AI Assistant?"
        subtitle="Stop losing time and potential clients. Schedule a free consultation to see how a custom RAG chatbot can revolutionize your intake process."
        buttonText="Book Your Free AI Consultation"
        buttonLink={config.CALENDLY_LINK}
        benefits={ctaBenefits} // Use specific benefits
      />
    </>
  );
};

export default DFYRAGChatbotPage; 