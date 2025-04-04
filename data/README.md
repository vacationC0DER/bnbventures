# B&B Ventures Company Website

A modern, responsive website for B&B Ventures, built with Next.js and Tailwind CSS.

## Features

- Responsive design optimized for all devices
- Custom company branding and color scheme
- Dark/light mode support
- Career page with Paycor integration
- Static site generation for optimal performance

## Color Scheme

The website uses the following company color palette:

- Primary Blue: `#1A73BB`
- Secondary Blue: `#3B88C4`
- Light Blue: `#BAD5EA`
- Dark Blue: `#15639F`
- Gray: `#666666`
- Light Gray: `#CCCCCC` 
- Dark Gray: `#333333`

These colors are implemented in the Tailwind CSS configuration (`tailwind.config.ts`) and can be used with utility classes like `text-primary`, `bg-primary-light`, etc. Dark mode variants are also available using the `dark:` prefix.

## Implementation Details

- Color definitions are stored in `src/lib/colors.ts`
- Global CSS variables are defined in `src/app/globals.css`
- Tailwind theme extends the base theme in `tailwind.config.ts`
- Component-specific styles use the custom color scheme in their respective files

## Getting Started

1. Install the dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

To create a production build:

```bash
npm run build
```

This will generate static HTML files in the `dist` directory that can be deployed to any static hosting service.

## Deployment

The site is currently deployed using Docker and Nginx. The configuration files can be found in the `nginx-prod` directory.

## Technologies Used

- [Next.js](https://nextjs.org) - React framework for production
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [Radix UI](https://www.radix-ui.com) - Unstyled, accessible UI components
- [Paycor Recruiting](https://recruitingbypaycor.com) - Careers page integration
- [Docker](https://www.docker.com) - Containerization
- [Nginx](https://nginx.org) - Web server

## License

© 2024 B&B Ventures. All rights reserved.

## Notes

This project uses
[`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to
automatically optimize and load Inter, a custom Google Font.

This project uses
[`Tremor Raw`](https://raw.tremor.so/docs/getting-started/installation)
components for the UI.

## Learn more

For a deeper understanding of the technologies used in this template, check out
the resources listed below:

- [Tailwind CSS](https://tailwindcss.com) - A utility-first CSS framework
- [Next.js](https://nextjs.org/docs) - Next.js documentation
- [Radix UI](https://www.radix-ui.com) - Radix UI Website
- [Shiki](https://shiki.style) - Shiki Website (Syntax highlighter)
