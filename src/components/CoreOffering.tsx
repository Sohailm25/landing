import React from 'react';
import { AlertCircle, Zap, FileCheck, Mail, Bell, Activity, Headphones, CheckCircle2, LucideProps } from 'lucide-react';

interface FeatureItem {
  icon: React.ReactElement<LucideProps>;
  title: string;
  description: string;
}

interface CoreOfferingProps {
  title: string;
  subtitle: string;
  problemTitle: string;
  problemDescription: string;
  solutionTitle: string;
  solutionDescription: string;
  flowchartPlaceholder: React.ReactNode;
  featuresTitle: string;
  features: FeatureItem[];
  oneTimeFee: string;
  monthlyFee: string;
  monthlyFeeSubtitle: string;
}

const FeatureCard: React.FC<FeatureItem> = ({ icon, title, description }) => (
  <div className="card-hover rounded-xl p-6 border border-gray-800">
    <div className="text-blue-400 mb-4">{React.cloneElement(icon, { className: 'h-6 w-6' })}</div>
    <h4 className="text-lg font-semibold mb-2">{title}</h4>
    <p className="text-gray-400">{description}</p>
  </div>
);

export const CoreOffering: React.FC<CoreOfferingProps> = ({
  title,
  subtitle,
  problemTitle,
  problemDescription,
  solutionTitle,
  solutionDescription,
  flowchartPlaceholder,
  featuresTitle,
  features,
  oneTimeFee,
  monthlyFee,
  monthlyFeeSubtitle,
}) => {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">{title}</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="card-hover rounded-xl p-8 border border-gray-800 mb-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center text-red-400">
                <AlertCircle className="h-6 w-6 mr-2" />
                {problemTitle}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {problemDescription}
              </p>
            </div>

            <div className="card-hover rounded-xl p-8 border border-gray-800">
              <h3 className="text-2xl font-bold mb-4 flex items-center text-green-400">
                <Zap className="h-6 w-6 mr-2" />
                {solutionTitle}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {solutionDescription}
              </p>
            </div>
          </div>
          <div className="bg-dark-100 rounded-2xl p-8 border border-gray-800 flex items-center justify-center min-h-[300px]">
            {flowchartPlaceholder}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-gradient">{featuresTitle}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((item, index) => (
              <FeatureCard 
                key={index} 
                icon={item.icon} 
                title={item.title} 
                description={item.description} 
              />
            ))}
          </div>
        </div>

        <div className="text-center bg-dark-100 rounded-2xl p-8 border border-gray-800">
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div>
              <h4 className="text-gray-400 mb-2">One-Time Setup Fee</h4>
              <div className="text-4xl font-bold">{oneTimeFee}</div>
            </div>
            <div className="text-3xl font-bold text-gray-400">+</div>
            <div>
              <h4 className="text-gray-400 mb-2">Monthly Retainer</h4>
              <div className="text-4xl font-bold">{monthlyFee}<span className="text-xl text-gray-400">/month</span></div>
              <p className="text-sm text-gray-400 mt-1">{monthlyFeeSubtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 