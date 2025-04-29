import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Import Components
import { Navbar } from './components/Navbar';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { GeometricShapes } from './components/GeometricShapes';
import { FloatingCTA } from './components/FloatingCTA';

// Import Pages
import DFYRAGChatbotPage from './pages/DFYRAGChatbotPage';
import FreeLeadMagnetPage from './pages/FreeLeadMagnetPage';
import ClientIntakeAcceleratorPage from './pages/ClientIntakeAcceleratorPage';
import DFYClientIntakeAcceleratorPage from './pages/DFYClientIntakeAcceleratorPage';
import WhiteGlovePage from './pages/WhiteGlovePage';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';

// Import Config
import { config } from './config'; // Import the new config file
import clientsConfig, { ClientConfig } from './clients.config'; // Keep config for now

function App() {
  const [clientConfig, setClientConfig] = useState<ClientConfig>(clientsConfig.default);

  // Client config effect - can potentially be moved to a context later
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

  // Determine logo placeholder based on config
  const logoPlaceholder = !clientConfig.logoUrl 
    ? <span className="text-gray-400">Your Logo</span> 
    : <img src={clientConfig.logoUrl} alt="Client Logo" className="max-h-full max-w-full object-contain p-2" />;

  return (
    <div className="min-h-screen bg-dark text-gray-100 relative overflow-hidden">
      {/* Always render these components */} 
      <Navbar 
        logoPlaceholder={logoPlaceholder} 
        bookCallButtonText="Book Audit Call" 
        bookCallButtonLink={config.CALENDLY_LINK}
      />
      <ScrollProgressBar />
      <GeometricShapes />
      
      <Routes>
        <Route path="/" element={<DFYClientIntakeAcceleratorPage />} />
        <Route path="/rag-chatbot" element={<DFYRAGChatbotPage />} />
        <Route path="/free-lead-magnet" element={<FreeLeadMagnetPage />} />
        <Route path="/intake-accelerator" element={<ClientIntakeAcceleratorPage />} />
        <Route path="/white-glove" element={<WhiteGlovePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFoundPage />} /> {/* Catch-all for 404 */}
      </Routes>
      
      <FloatingCTA /> { /* Consider props for link/action later */}
    </div>
  );
}

export default App;