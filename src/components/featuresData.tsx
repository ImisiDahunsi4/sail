import React from 'react';
import UploadCloudIcon from './icons/UploadCloudIcon';
import MessageAnchorIcon from './icons/MessageAnchorIcon';
import NotebookCompassIcon from './icons/NotebookCompassIcon';
import NetworkSailIcon from './icons/NetworkSailIcon';
import ChartSourcesMockup from './mockups/ChartSourcesMockup';
import NavigateAIMockup from './mockups/NavigateAIMockup';
import OrganizeDiscoveriesMockup from './mockups/OrganizeDiscoveriesMockup';
import ConnectDotsMockup from './mockups/ConnectDotsMockup';

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  mockup: React.ReactNode;
}

export const featuresData: Feature[] = [
  {
    icon: <UploadCloudIcon className="h-12 w-12 text-ocean-950" />,
    title: "Chart Your Sources",
    description: "Intelligently ingest and process any source type, from dense research papers and audio files to web links and documents. Our smart parsing understands context and structure.",
    mockup: <ChartSourcesMockup />,
  },
  {
    icon: <MessageAnchorIcon className="h-12 w-12 text-ocean-950" />,
    title: "Navigate with AI",
    description: "Chat naturally with your research materials using AI that understands context and provides grounded responses with precise citations. Ask questions, explore ideas, discover connections.",
    mockup: <NavigateAIMockup />,
  },
  {
    icon: <NotebookCompassIcon className="h-12 w-12 text-ocean-950" />,
    title: "Organize Your Discoveries",
    description: "Capture insights with smart note-taking that automatically tags, categorizes, and connects related information. Build your knowledge map as you research.",
    mockup: <OrganizeDiscoveriesMockup />,
  },
  {
    icon: <NetworkSailIcon className="h-12 w-12 text-ocean-950" />,
    title: "Connect the Dots",
    description: "Visualize relationships between sources, uncover hidden patterns, and synthesize insights across your entire research collection. See the big picture emerge.",
    mockup: <ConnectDotsMockup />,
  },
];