import React from 'react';
import { 
  Hero, 
  ValueProposition, 
  CoreOffering, 
  ExpansionModules, 
  SocialProof, 
  CTASection 
} from '../components'; // Assuming index.ts in components later
import {
  Clock, CheckCircle2, FileCheck, Bell, ArrowRight, Star, 
  MessageSquareMore, Mail, Bell as BellIcon, Activity, Headphones
} from 'lucide-react';
import { config } from '../config'; // For CTA link

// Placeholder data for components
const valueCards = [
  { icon: <Clock className="h-8 w-8 text-blue-400" />, title: "Instant Lead Response", description: "Engage prospects within 60 seconds, 24/7" },
  { icon: <CheckCircle2 className="h-8 w-8 text-purple-400" />, title: "Eliminate Data Entry", description: "Save hours per week and prevent costly errors" },
  { icon: <FileCheck className="h-8 w-8 text-blue-400" />, title: "Seamless Integration", description: "Works with your existing software stack" },
  { icon: <Bell className="h-8 w-8 text-purple-400" />, title: "Never Miss a Lead", description: "Every inquiry tracked and actioned" }
];

const coreFeatures = [
  { icon: <FileCheck />, title: "Custom Intake Workflow Build & Configuration", description: "Tailored to your firm's specific process and requirements" },
  { icon: <Mail />, title: "Personalized Email/SMS Templates", description: "Automated client communications that reflect your brand" },
  { icon: <BellIcon />, title: "Automated Team Notifications", description: "Ensure your team is alerted instantly to new leads" },
  { icon: <Activity />, title: "Ongoing Monitoring & Maintenance", description: "We ensure your system runs smoothly at all times" },
  { icon: <Headphones />, title: "Basic Monthly Support", description: "1 hour included for regular assistance and optimization" },
  { icon: <CheckCircle2 />, title: "Integration with Your Core Systems", description: "Works with Clio, MyCase, PracticePanther, and more" }
];

const expansionModules = [
  {
    title: "Automated Client Onboarding",
    problem: "Manually generating engagement letters and standard onboarding forms is time-consuming and prone to errors.",
    solution: "Automatically generate personalized engagement letters and key onboarding documents using client data from your system the moment they commit. Optional e-signature integration.",
    benefit: "Drastically reduce drafting time (saves hours per client), ensure consistency, and get clients formally onboarded faster.",
    price: "$999", monthly: "$250", learnMoreLink: '#' // Placeholder link
  },
  {
    title: "Proactive Case Milestone Updates",
    problem: "Clients feel ignored ('lack of communication' is the #1 complaint), leading to frustration and excessive 'checking in' calls/emails that disrupt your team.",
    solution: "Automatically send pre-approved, templated email/SMS updates to clients at key case milestones (e.g., hearing scheduled, filing confirmed, next steps outlined).",
    benefit: "Dramatically improve client satisfaction, reduce non-billable communication overhead, and build trust through transparency.",
    price: "$499", monthly: "$150", learnMoreLink: '#' // Placeholder link
  }
];

const testimonials = [
  { rating: 5, text: "The automation system has transformed our intake process. We're capturing more leads and our team is saving hours each week.", authorName: "John Smith", authorTitle: "Managing Partner" },
  { rating: 5, text: "Implementation was seamless, and the immediate response to leads has made a noticeable difference.", authorName: "Jane Doe", authorTitle: "Lead Attorney" },
  { rating: 5, text: "This is exactly what our firm needed to scale efficiently. Highly recommend!", authorName: "Robert Johnson", authorTitle: "Operations Manager" },
];

const ctaBenefits = [
  { icon: <CheckCircle2 />, text: "No obligation" },
  { icon: <Clock />, text: "15-minute call" },
  { icon: <MessageSquareMore />, text: "Custom roadmap" }
];

// Placeholder Loom video component
const LoomVideoPlaceholder = () => (
  <div className="aspect-video w-full bg-dark-100 border border-gray-800 flex items-center justify-center rounded-2xl">
    <span className="text-gray-400">Your Loom Video Here</span>
  </div>
);

// Placeholder Flowchart component
const FlowchartPlaceholder = () => (
  <div className="aspect-square w-full max-w-md mx-auto bg-dark-100 border border-gray-800 flex items-center justify-center rounded-2xl">
    <span className="text-gray-400">Customized Flow Chart</span>
  </div>
);

const DFYClientIntakeAcceleratorPage: React.FC = () => {
  const handleBookConsultClick = () => {
    window.open(config.CALENDLY_LINK, '_blank');
  };

  return (
    <>
      <Hero 
        title="DFY Client Intake Accelerator: Stop Leaking Clients & Reclaim Your Time"
        subtitle="Tired of losing potential clients and drowning in admin? We install our proven Intake Accelerator FOR YOU, tailored to your firm."
        videoPlaceholder={<LoomVideoPlaceholder />} 
        ctaButtonText="Book Your Free Consultation"
        onCtaClick={handleBookConsultClick}
      />
      <ValueProposition cards={valueCards} />
      <CoreOffering
        title="The Done-For-You Intake Accelerator Package"
        subtitle="We handle the entire setup, integration, and deployment of the core intake automation system into your firm's workflow."
        problemTitle="The Implementation Hurdle"
        problemDescription="Setting up automation requires technical know-how and time you don't have. Getting it wrong wastes resources and delays results."
        solutionTitle="Our White-Glove Setup"
        solutionDescription="We integrate with your lead sources (website, email) and CRM/Case Management (Clio, MyCase, etc.), configure the workflows, personalize templates, and ensure everything runs smoothly."
        flowchartPlaceholder={<FlowchartPlaceholder />} 
        featuresTitle="What's Included in the DFY Package"
        features={coreFeatures} // Re-use features from original
        oneTimeFee="$449" // Updated price
        monthlyFee="$99" // Example retainer, adjust as needed
        monthlyFeeSubtitle="Optional: Ongoing Support & Optimization"
      />
      <ExpansionModules 
        title="Optional Expansion Modules"
        subtitle="Enhance your automation further with these add-ons (Requires DFY Intake Accelerator)."
        requirementText="Requires DFY Intake Accelerator Package"
        modules={expansionModules}
      />
      <SocialProof 
        title="Trusted by Forward-Thinking Law Firms"
        testimonials={testimonials}
        clientLogoPlaceholders={5}
      />
      <CTASection 
        title="Ready for Effortless Client Intake?"
        subtitle="Let us build your automated intake system. Book a free consultation to discuss your firm's specific needs."
        buttonText="Book Your Free Consultation"
        buttonLink={config.CALENDLY_LINK}
        benefits={ctaBenefits}
      />
    </>
  );
};

export default DFYClientIntakeAcceleratorPage; 