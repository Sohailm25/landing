import React from 'react';
import { Linkedin, Mail } from 'lucide-react'; // Import icons
import profilePic from '../assets/profile.png'; // Import the profile picture

// --- Image Embedding Recommendation ---
// 1. Save your image (e.g., profile.jpg) in `src/assets/`
// 2. Import it: `import profilePic from '../assets/profile.jpg';`
// 3. Use it: `src={profilePic}`
// OR
// 1. Save your image (e.g., profile.jpg) in the `public/` directory
// 2. Use it: `src="/profile.jpg"`
// Choose one method and replace the placeholder URL below.

const ProfilePage: React.FC = () => {
  // Placeholder data - replace with actual content
  const founderName = "Sohail Mohammed"; // Updated name assumption
  const founderTitle = "Founder & Automation Expert";
  const story = `Senior AI/ML Ops Engineer at JPMorgan Chase & Wendy's, architecting RAG assistant chatbots and end-to-end MLOps pipelines that tripled developer throughput and drove 15% revenue lift—now delivering turnkey, compliance-driven intake automations that double law-firm client onboardings and cut non-billable hours by 30%.`;
  const mission = "Our mission is to empower law firms by automating critical processes, freeing up valuable time, reducing errors, and allowing legal professionals to focus on delivering exceptional client value.";
  const vision = "We envision a future where law firms operate with peak efficiency, leveraging smart automation to enhance client experiences and drive sustainable growth.";
  const linkedInUrl = "https://www.linkedin.com/in/sohail-mo/"; // Updated LinkedIn URL
  const emailAddress = "mailto:sohailmo.ai@gmail.com"; // Updated email

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Centered content container */}
      <div className="max-w-4xl mx-auto bg-dark-100 p-8 md:p-12 rounded-2xl shadow-2xl border border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
          {/* Image Column - Centers its content */}
          <div className="md:col-span-1 flex flex-col items-center">
            <img 
              src={profilePic}
              alt={founderName}
              className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover mb-4 border-4 border-blue-500 shadow-lg object-top"
            />
            <h2 className="text-2xl font-bold text-white text-center">{founderName}</h2>
            <p className="text-blue-400 text-center mb-4">{founderTitle}</p>
            {/* Centered social links */}
            <div className="flex justify-center space-x-4">
              <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href={emailAddress} aria-label="Email" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="md:col-span-2">
            {/* Heading is centered within its column space on small screens, left-aligned otherwise */}
            <h1 className="text-3xl md:text-4xl font-bold text-gradient mb-6 text-center">About Me</h1>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-2 text-center">My Story</h3>
              <p className="text-gray-300 leading-relaxed whitespace-pre-line text-center">
                {story}
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-2 text-center">Mission</h3>
              <p className="text-gray-300 leading-relaxed text-center">
                {mission}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-2 text-center">Vision</h3>
              <p className="text-gray-300 leading-relaxed text-center">
                {vision}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage; 