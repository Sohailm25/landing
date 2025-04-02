/**
 * Client-specific configuration for the landing page
 * 
 * To add a new client:
 * 1. Add a new entry using the client's identifier as the key
 * 2. Provide logoUrl and loomVideoUrl
 * 3. Access via URL parameter: /?client=clientId
 * 
 * For Loom videos:
 * - When embedding a Loom video, copy ONLY the src URL from the iframe tag
 * - Example: "https://www.loom.com/embed/edefbca4f73246609b832e1a97a54b2f?sid=eb0fff7e-800a-4702-acfe-b57c4632c626"
 */

export interface ClientConfig {
  logoUrl: string;
  loomVideoUrl: string;
}

export type ClientsConfig = {
  [clientId: string]: ClientConfig;
};

const clientsConfig: ClientsConfig = {
  // Default configuration (used when no client parameter is provided)
  default: {
    logoUrl: "",  // Empty string uses the placeholder
    loomVideoUrl: "", // Empty string uses the placeholder
  },
  
  // Example clients (replace with your actual clients)
  acme: {
    logoUrl: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80",
    loomVideoUrl: "https://www.loom.com/embed/edefbca4f73246609b832e1a97a54b2f?sid=eb0fff7e-800a-4702-acfe-b57c4632c626",
  },
  
  betaCorp: {
    logoUrl: "https://images.unsplash.com/photo-1568290624809-9e6fb3522bbe?w=200&q=80",
    loomVideoUrl: "https://www.loom.com/embed/edefbca4f73246609b832e1a97a54b2f?sid=eb0fff7e-800a-4702-acfe-b57c4632c626",
  },
};

export default clientsConfig; 