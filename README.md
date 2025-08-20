# 🚢 Sail - Navigate Your Research Effortlessly

![Sail Logo](./public/sail-logo.png)

Sail is an AI-powered research platform that serves as an intelligent alternative to NotebookLM. Transform documents, audio, and web sources into navigable knowledge with our maritime-themed interface.

## ✨ Features

- **Intelligent Research Companion**: Chat with your sources and discover insights
- **Multi-Source Ingestion**: Support for PDF, text, audio, URLs, and pasted content
- **Notebook Organization**: Create and manage research notebooks
- **Citation & Note-taking**: Built-in citation management and note-taking capabilities
- **Maritime-Themed UI**: Professional, minimalistic design with ocean-inspired aesthetics

## 🚀 Live Demo

[View Live Website](https://xzynnkv6zo11.space.minimax.io)

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Animation**: Custom CSS animations with Tailwind
- **Font**: Inter (Google Fonts)

## 🎨 Design Principles

- **Professional Expertise**: Clean typography and structured layout
- **Innovation**: Subtle animations and modern gradients
- **Navigation Theme**: Maritime-inspired visual metaphors
- **Trustworthiness**: Balanced composition and readable text
- **Accessibility**: WCAG AA compliance with reduced motion support

## 📱 Responsive Design

- **Desktop (1200px+)**: Full layout with all interactive elements
- **Tablet (768-1199px)**: Optimized spacing and font sizes
- **Mobile (< 768px)**: Stacked layout with touch-friendly interactions

## 🚦 Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/ImisiDahunsi4/sail.git

# Navigate to project directory
cd sail

# Install dependencies
npm install
# or
pnpm install

# Start development server
npm run dev
# or
pnpm dev
```

### Build for Production

```bash
# Build the project
npm run build
# or
pnpm build

# Preview the production build
npm run preview
# or
pnpm preview
```

## 🎯 Project Structure

```
sail/
├── public/
│   └── sail-logo.png           # Sail logo asset
├── src/
│   ├── components/
│   │   ├── Header.tsx           # Navigation header
│   │   ├── HeroSection.tsx      # Main hero section
│   │   ├── FloatingElements.tsx # Animated document icons
│   │   ├── GeometricAccents.tsx # Maritime decorative elements
│   │   └── WavePattern.tsx      # Background wave patterns
│   ├── hooks/
│   │   └── use-mobile.tsx       # Mobile detection hook
│   ├── App.tsx                  # Main application component
│   ├── main.tsx                 # Application entry point
│   └── index.css               # Global styles and animations
├── tailwind.config.js          # Tailwind configuration
├── vite.config.ts              # Vite configuration
└── tsconfig.json               # TypeScript configuration
```

## 🎨 Design System

### Color Palette

- **Ocean Blue**: `#1e40af` - Primary CTA and navigation elements
- **Teal**: `#0891b2` - Gradient transitions and accents
- **Seafoam Green**: `#059669` - Gradient endpoints and highlights
- **Charcoal**: `#2d3748` - Primary text and headings
- **Light Gray**: `#f8fafc` - Background gradients

### Typography

- **Font Family**: Inter (Google Fonts)
- **Headline**: 48-64px (desktop), 36-48px (mobile)
- **Subtext**: 18-20px (desktop), 16-18px (mobile)
- **Line Height**: 1.6 for optimal readability

### Animations

- **Floating Elements**: 3-4 second cycles with staggered delays
- **Gradient Text**: Shimmer effect on hover
- **Button Interactions**: Ripple effect and subtle scale transforms
- **Accessibility**: Respects `prefers-reduced-motion`

## 🌊 Maritime Theme Elements

- **Compass**: Navigation and direction metaphors
- **Anchor**: Stability and grounding concepts
- **Ship Wheel**: Control and steering themes
- **Wave Patterns**: Fluid, organic background elements
- **Floating Icons**: Documents as navigational buoys

## ♿ Accessibility Features

- Semantic HTML structure
- WCAG AA color contrast compliance (4.5:1 minimum)
- Keyboard navigation support
- Screen reader optimized
- Reduced motion preferences respected
- Focus management and indicators

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or suggestions, please reach out through GitHub issues.

---

*Navigate your research journey with Sail - where knowledge meets the horizon.* 🌅