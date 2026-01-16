# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Vite.

## Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Data-Driven** - All content managed through a single JSON file
- **TypeScript** - Full type safety and better development experience
- **Performance Optimized** - Fast loading with Vite build system

## Sections

- **Hero** - Eye-catching introduction with call-to-action buttons
- **About** - Personal bio and skills showcase
- **Experience** - Professional timeline with achievements
- **Projects** - Portfolio of work with live demos and GitHub links
- **Contact** - Contact form and social media links

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser

## Customization

### Update Personal Information

Edit the `src/data/data.json` file to customize all content:

- Personal details (name, title, contact info)
- About section (bio, skills)
- Experience timeline
- Projects showcase
- Contact information and social links

### Styling

Each component has its own CSS file for easy customization:

- `src/components/Hero.css`
- `src/components/About.css`
- `src/components/Experience.css`
- `src/components/Projects.css`
- `src/components/Contact.css`
- `src/components/Navigation.css`

### Adding Images

1. Add your images to the `public/images/` directory
2. Update the image paths in `data.json`
3. Replace the profile placeholder in the Hero section

## Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Technologies Used

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **CSS3** - Styling with modern features
- **ESLint** - Code linting

## Project Structure

```
src/
├── components/          # React components
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Experience.tsx  # Experience timeline
│   ├── Projects.tsx    # Projects showcase
│   ├── Contact.tsx     # Contact form
│   ├── Navigation.tsx  # Navigation bar
│   └── *.css          # Component styles
├── data/
│   └── data.json      # All content data
├── App.tsx            # Main app component
├── App.css            # Global styles
└── main.tsx           # App entry point
```

## License

This project is open source and available under the [MIT License](LICENSE).