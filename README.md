# Saad Mahmood - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, showcasing full-stack development skills and projects with stunning 3D effects and glassy UI components.

## 🚀 Features

- **Modern 3D Design**: Stunning glassy effects with 3D hover animations
- **Responsive Layout**: Optimized for all device sizes
- **Interactive Components**: Smooth animations and micro-interactions
- **Project Showcase**: Detailed project modals with screenshots and tech stack
- **Contact Form**: Fully functional contact form with EmailJS integration
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Performance Focused**: Lighthouse score >95
- **Dark/Light Mode**: Theme toggle with system preference detection

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS with custom 3D effects
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form + Zod validation
- **Email Service**: EmailJS for contact form functionality
- **Icons**: Lucide React
- **Deployment**: Vercel/Netlify ready

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── sections/           # Page sections
│   ├── Navbar.tsx         # Navigation component
│   └── Footer.tsx         # Footer component
├── data/
│   └── portfolio.ts       # Portfolio data (projects, experience, skills)
├── hooks/
│   └── useTheme.ts        # Theme management hook
├── types/
│   └── index.ts           # TypeScript type definitions
└── App.tsx                # Main application component
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/saad-mahmoood/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📧 Email Setup

To enable the contact form to send emails to your inbox:

1. Follow the detailed setup guide in `EMAILJS_SETUP.md`
2. Create a free account at [EmailJS](https://www.emailjs.com/)
3. Configure your email service (Gmail, Outlook, etc.)
4. Copy `.env.example` to `.env.local` and add your EmailJS credentials

The contact form will automatically send emails to your configured email address!

## 📝 Customization

### Personal Information

Edit `src/data/portfolio.ts` to update:
- Projects with your own GitHub repositories and live demos
- Work experience and education
- Skills and technologies
- Contact information

### Styling

- Modify `tailwind.config.js` for color schemes and design tokens
- Update component styles in individual files
- Customize animations in Framer Motion components

### Images

Replace placeholder images with your own:
- Profile photo in Hero section
- Project screenshots
- Update image URLs in the data file

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with default settings

### Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to [Netlify](https://netlify.com)

### Manual Deployment Steps

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Upload to hosting provider**:
   - Upload the `dist` folder contents to your web server
   - Ensure your server is configured to serve the `index.html` for all routes

3. **Configure domain** (optional):
   - Point your custom domain to your hosting provider
   - Set up SSL certificate for HTTPS

## 📧 Contact Form Setup

To make the contact form functional:

1. **Using Formspree** (Recommended):
   ```javascript
   // In src/components/sections/Contact.tsx
   const onSubmit = async (data: ContactForm) => {
     const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(data)
     });
     // Handle response
   };
   ```

2. **Using Netlify Forms**:
   - Add `netlify` attribute to your form
   - Add hidden input: `<input type="hidden" name="form-name" value="contact" />`

3. **Using EmailJS**:
   ```bash
   npm install @emailjs/browser
   ```
   Then configure EmailJS in your component.

## 🔧 Environment Variables

Create a `.env` file for any API keys:

```bash
VITE_CONTACT_FORM_ENDPOINT=your_contact_form_api
VITE_ANALYTICS_ID=your_analytics_id
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

## 📊 Performance

This portfolio is optimized for:
- **Performance**: Fast loading with optimized images and code splitting
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **SEO**: Meta tags, semantic HTML, and structured data
- **Best Practices**: Modern React patterns and clean code

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Responsive Design

Breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

## 🎨 Design System

### Colors
- Primary: Blue (#3b82f6)
- Secondary: Emerald (#22c55e)
- Neutral: Gray scale for backgrounds and text

### Typography
- Font: Inter (system fallback)
- Headings: Bold weights with proper hierarchy
- Body: Regular weight with 1.5 line height

### 3D Effects
- Glassy cards with backdrop blur
- Hover animations with 3D transforms
- Gradient backgrounds with animated elements

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📧 Contact

**Saad Mahmood**
- Email: saad.mhmoood@gmail.com
- LinkedIn: [linkedin.com/in/saadmahmoood](https://linkedin.com/in/saadmahmoood)
- GitHub: [github.com/saad-mahmoood](https://github.com/saad-mahmoood)
- Phone: +92 322 0615475
- Location: Lahore, Pakistan

---

Built with ❤️ using React, TypeScript, and Tailwind CSS