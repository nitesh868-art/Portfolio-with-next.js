# Nitesh Pandey - Portfolio (Next.js Version)

A modern, responsive portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Modern Design**: Clean, professional design with glass morphism effects
- 🌙 **Dark Mode**: Always-on dark theme for better user experience
- ⚡ **Fast Performance**: Built with Next.js 15 and optimized for speed
- 📱 **Responsive**: Fully responsive design that works on all devices
- ✨ **Animations**: Smooth animations powered by Framer Motion
- 🎯 **TypeScript**: Full TypeScript support for better development experience

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Typing Animation**: React Typed

## Pages

- **Home**: Landing page with introduction and social links
- **About**: Personal information and expertise areas
- **Skills**: Interactive skills showcase with filtering
- **Projects**: Portfolio projects with live demo and GitHub links
- **Contact**: Contact form and contact information

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) (or the port shown in terminal)

## Project Structure

```
port-folio/
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── skills/
│   │   │   └── page.tsx
│   │   ├── projects/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   └── components/
│       ├── Header.tsx
│       ├── Navbar.tsx
│       ├── Footer.tsx
│       └── StarBackground.tsx
├── public/
│   ├── assets/
│   │   └── pic.jpg
│   └── my_resume.pdf
└── package.json
```

## Customization

### Personal Information
Update the following files with your information:
- `src/app/page.tsx` - Home page content
- `src/app/about/page.tsx` - About page content
- `src/app/contact/page.tsx` - Contact information
- `src/components/Header.tsx` - Header name and title

### Skills
Edit the skills array in `src/app/skills/page.tsx` to match your skillset.

### Projects
Update the projects array in `src/app/projects/page.tsx` with your projects.

### Styling
Modify `src/app/globals.css` and `tailwind.config.ts` for custom styling.

## Deployment

This project can be easily deployed to Vercel, Netlify, or any other hosting platform that supports Next.js.

## License

This project is open source and available under the [MIT License](LICENSE).
