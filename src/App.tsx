import React, { useEffect, useState } from 'react';
import { 
  Clock, 
  CheckCircle2, 
  FileCheck, 
  Bell, 
  ArrowRight,
  Star,
  ChevronRight,
  MessageSquareMore,
  AlertCircle,
  Zap,
  Mail,
  Bell as BellIcon,
  Activity,
  Headphones,
  Plus
} from 'lucide-react';
import clientsConfig, { ClientConfig } from './clients.config';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const [clientConfig, setClientConfig] = useState<ClientConfig>(clientsConfig.default);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const clientId = urlParams.get('client');
    
    if (clientId) {
      const clientKey = Object.keys(clientsConfig).find(
        key => key.toLowerCase() === clientId.toLowerCase()
      );
      
      if (clientKey) {
        setClientConfig(clientsConfig[clientKey]);
      } else {
        setClientConfig(clientsConfig.default);
      }
    } else {
      setClientConfig(clientsConfig.default);
    }
  }, []);

  const showLogoPlaceholder = !clientConfig.logoUrl;
  const showVideoPlaceholder = !clientConfig.loomVideoUrl;

  return (
    <div className="min-h-screen bg-dark text-gray-100 relative overflow-hidden">
      {/* Geometric Shapes */}
      <div className="geometric-shape w-[500px] h-[500px] left-[-100px] top-[20%]" />
      <div className="geometric-shape w-[300px] h-[300px] right-[-50px] top-[40%]" />
      <div className="geometric-shape w-[400px] h-[400px] left-[30%] bottom-[-100px]" />

      {/* Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-50"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Sticky Navigation */}
      <nav className={`fixed w-full z-40 transition-all duration-500 ${
        isSticky ? 'bg-dark-100/80 backdrop-blur-lg shadow-lg py-2' : 'bg-transparent py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="w-[200px] h-[80px] bg-dark-200 rounded-lg flex items-center justify-center overflow-hidden">
            {showLogoPlaceholder ? (
              <span className="text-gray-400">Your Logo</span>
            ) : (
              <img 
                src={clientConfig.logoUrl} 
                alt="Client Logo" 
                className="max-h-full max-w-full object-contain p-2"
              />
            )}
          </div>
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 flex items-center group">
            Book Audit Call 
            <ChevronRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 gradient-text leading-tight">
            Stop Leaking Clients & Reclaim Your Firm's Time
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Tired of losing potential clients to faster firms and drowning in administrative work? 
            We implement targeted automations that plug the leaks and free up your team.
          </p>
          {/* Loom Video: either a placeholder or the actual embedded video */}
          <div className="w-full max-w-4xl mx-auto mb-8">
            {showVideoPlaceholder ? (
              <div className="aspect-video w-full bg-dark-100 border border-gray-800 flex items-center justify-center rounded-2xl">
                <span className="text-gray-400">Your Loom Video Here</span>
              </div>
            ) : (
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }} className="rounded-2xl overflow-hidden">
                <iframe 
                  src={clientConfig.loomVideoUrl}
                  frameBorder="0"
                  data-webkit-allowfullscreen="true"
                  data-moz-allowfullscreen="true"
                  allowFullScreen
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                ></iframe>
              </div>
            )}
          </div>
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 animate-bounce shadow-lg hover:shadow-blue-500/25">
            Book Your Free Automation Audit
          </button>
        </div>
      </section>

      {/* Value Proposition Cards */}
      <section className="py-20 bg-dark-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Clock className="h-8 w-8 text-blue-400" />,
                title: "Instant Lead Response",
                description: "Engage prospects within 60 seconds, 24/7"
              },
              {
                icon: <CheckCircle2 className="h-8 w-8 text-purple-400" />,
                title: "Eliminate Data Entry",
                description: "Save hours per week and prevent costly errors"
              },
              {
                icon: <FileCheck className="h-8 w-8 text-blue-400" />,
                title: "Seamless Integration",
                description: "Works with your existing software stack"
              },
              {
                icon: <Bell className="h-8 w-8 text-purple-400" />,
                title: "Never Miss a Lead",
                description: "Every inquiry tracked and actioned"
              }
            ].map((card, index) => (
              <div key={index} className="card-hover rounded-xl p-6 border border-gray-800">
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{card.title}</h3>
                <p className="text-gray-400">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Offering Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gradient">Core Offering: The Intake Accelerator</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Industry data shows firms lose over 40% of potential clients due to delays, and manual data entry eats up hours of valuable time.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="card-hover rounded-xl p-8 border border-gray-800 mb-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center text-red-400">
                  <AlertCircle className="h-6 w-6 mr-2" />
                  The Problem
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Slow lead response is costing you clients daily. Manual data entry eats up hours of valuable time, and inconsistent follow-up processes lead to missed opportunities.
                </p>
              </div>

              <div className="card-hover rounded-xl p-8 border border-gray-800">
                <h3 className="text-2xl font-bold mb-4 flex items-center text-green-400">
                  <Zap className="h-6 w-6 mr-2" />
                  Our Solution
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We install an automated system that instantly captures leads from your website/email, provides immediate confirmation to the prospect, enters their data flawlessly into your system (Clio, MyCase, PracticePanther, etc.), and alerts your team for rapid follow-up.
                </p>
              </div>
            </div>
            <div className="bg-dark-100 rounded-2xl p-8 border border-gray-800 flex items-center justify-center">
              <span className="text-gray-400">Customized Flow Chart</span>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center text-gradient">What's Included</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <FileCheck className="h-6 w-6" />,
                  title: "Custom Intake Workflow Build & Configuration",
                  description: "Tailored to your firm's specific process and requirements"
                },
                {
                  icon: <Mail className="h-6 w-6" />,
                  title: "Personalized Email/SMS Templates",
                  description: "Automated client communications that reflect your brand"
                },
                {
                  icon: <BellIcon className="h-6 w-6" />,
                  title: "Automated Team Notifications",
                  description: "Ensure your team is alerted instantly to new leads"
                },
                {
                  icon: <Activity className="h-6 w-6" />,
                  title: "Ongoing Monitoring & Maintenance",
                  description: "We ensure your system runs smoothly at all times"
                },
                {
                  icon: <Headphones className="h-6 w-6" />,
                  title: "Basic Monthly Support",
                  description: "1 hour included for regular assistance and optimization"
                },
                {
                  icon: <CheckCircle2 className="h-6 w-6" />,
                  title: "Integration with Your Core Systems",
                  description: "Works with Clio, MyCase, PracticePanther, and more"
                }
              ].map((item, index) => (
                <div key={index} className="card-hover rounded-xl p-6 border border-gray-800">
                  <div className="text-blue-400 mb-4">{item.icon}</div>
                  <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center bg-dark-100 rounded-2xl p-8 border border-gray-800">
            <div className="flex justify-center items-center gap-8 flex-wrap">
              <div>
                <h4 className="text-gray-400 mb-2">One-Time Setup Fee</h4>
                <div className="text-4xl font-bold">$2,499</div>
              </div>
              <div className="text-3xl font-bold text-gray-400">+</div>
              <div>
                <h4 className="text-gray-400 mb-2">Monthly Retainer</h4>
                <div className="text-4xl font-bold">$499<span className="text-xl text-gray-400">/month</span></div>
                <p className="text-sm text-gray-400 mt-1">Peace of Mind & Continuous Operation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expansion Modules Section */}
      <section className="py-20 bg-dark-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gradient">Automation Expansion Modules</h2>
            <p className="text-xl text-gray-300">
              Unlock further efficiency by automating other critical bottlenecks.
            </p>
            <p className="text-gray-400 mt-2">
              (Requires Intake Accelerator)
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                tag: "Selected Upsell 1",
                title: "Automated Client Onboarding",
                problem: "Manually generating engagement letters and standard onboarding forms is time-consuming and prone to errors.",
                solution: "Automatically generate personalized engagement letters and key onboarding documents using client data from your system the moment they commit. Optional e-signature integration.",
                benefit: "Drastically reduce drafting time (saves hours per client), ensure consistency, and get clients formally onboarded faster.",
                price: "$999",
                monthly: "$250"
              },
              {
                tag: "Selected Upsell 2",
                title: "Proactive Case Milestone Updates",
                problem: "Clients feel ignored (\"lack of communication\" is the #1 complaint), leading to frustration and excessive \"checking in\" calls/emails that disrupt your team.",
                solution: "Automatically send pre-approved, templated email/SMS updates to clients at key case milestones (e.g., hearing scheduled, filing confirmed, next steps outlined).",
                benefit: "Dramatically improve client satisfaction, reduce non-billable communication overhead, and build trust through transparency.",
                price: "$499",
                monthly: "$150"
              }
            ].map((module, index) => (
              <div key={index} className="card-hover rounded-xl overflow-hidden border border-gray-800">
                <div className="bg-emerald-600 text-white py-2 px-4 text-center">
                  {module.tag}
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-6">{module.title}</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-red-400 font-semibold mb-2">The Problem:</h4>
                      <p className="text-gray-300">{module.problem}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-green-400 font-semibold mb-2">The Solution:</h4>
                      <p className="text-gray-300">{module.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-blue-400 font-semibold mb-2">The Benefit:</h4>
                      <p className="text-gray-300">{module.benefit}</p>
                    </div>
                  </div>

                  <div className="mt-8 flex items-center justify-between">
                    <div>
                      <h4 className="text-gray-400 text-sm mb-1">Add-on Investment:</h4>
                      <div className="text-2xl font-bold">
                        {module.price} <span className="text-gray-400 text-base">+ {module.monthly}/month</span>
                      </div>
                    </div>
                    <button className="bg-transparent border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white px-4 py-2 rounded-lg transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gradient">Trusted by Leading Law Firms</h2>
          
          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="card-hover rounded-xl p-6 border border-gray-800">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  "The automation system has transformed our intake process. We're capturing more leads and our team is saving hours each week."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-dark-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-white">John Smith</h4>
                    <p className="text-sm text-gray-400">Managing Partner</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Client Logos */}
          <div className="flex justify-center space-x-12">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <div key={index} className="w-32 h-12 bg-dark-100 rounded border border-gray-800"></div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900/50 to-purple-900/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">Ready to stop losing clients and wasting time?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-300">
            Book a complimentary 15-minute Automation Audit call to see if this is right for your firm
          </p>
          <button className="bg-white text-dark hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center mx-auto group">
            Book Your Free Audit Call 
            <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="mt-12 flex justify-center space-x-8">
            {[
              { icon: <CheckCircle2 className="h-6 w-6" />, text: "No obligation" },
              { icon: <Clock className="h-6 w-6" />, text: "15-minute call" },
              { icon: <MessageSquareMore className="h-6 w-6" />, text: "Custom roadmap" }
            ].map((item, index) => (
              <div key={index} className="flex items-center text-gray-300">
                {item.icon}
                <span className="ml-2">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating CTA */}
      <button className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50">
        <MessageSquareMore className="h-6 w-6" />
      </button>
    </div>
  );
}

export default App;