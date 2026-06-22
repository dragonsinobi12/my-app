# 📱 Ronnakit's Portfolio

A modern, responsive portfolio website built with **Next.js 16** and **Tailwind CSS 4** showcasing student profile and information.

## ✨ Features

- 🎨 **Modern Design** - Clean, professional UI with gradient backgrounds and glassmorphism effects
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- ⚡ **Fast Performance** - Built with Next.js for optimal speed and SEO
- 🎯 **Multiple Sections**:
  - Hero section with profile image
  - About/info section with student details
  - Contact section with social links
  - Sticky navigation bar
  - Professional footer

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-github-repo-url>
cd my-app
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio.

## 📁 Project Structure

```
my-app/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main portfolio page
│   └── globals.css      # Global styles and Tailwind imports
├── public/              # Static assets (profile.jpg)
├── package.json         # Project dependencies
├── tsconfig.json        # TypeScript configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── next.config.ts       # Next.js configuration
```

## 🛠️ Built With

- **Framework**: [Next.js 16](https://nextjs.org/) - React framework with App Router
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Font**: [Geist Font](https://vercel.com/font) - Custom font by Vercel

## 📝 Customization

### Edit Your Information

Open `app/page.tsx` and update:
- Name and title in the hero section
- Student ID, Major, and University in the about section
- Instagram handle in the contact section
- Profile image (ensure `public/profile.jpg` exists)

### Modify Styling

All styling uses Tailwind CSS classes. To customize:
1. Edit class names in `app/page.tsx`
2. Create custom styles in `app/globals.css` if needed
3. Modify color scheme in `tailwind.config.ts`

## 🚢 Building & Deployment

### Build for Production
```bash
npm run build
npm start
```

### Deploy on Vercel (Recommended)
1. Push code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Vercel automatically deploys on every push

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs) - Official Next.js guide
- [Tailwind CSS Docs](https://tailwindcss.com/docs) - Tailwind CSS reference
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - TypeScript guide
- [Web Design Best Practices](https://www.smashingmagazine.com/) - Design inspiration

## 👤 About the Author

- **Name**: Ronnakit Sakeaw
- **Student ID**: 663450351-5
- **Major**: Computer Information Systems (CIS)
- **University**: Khon Kaen University, Nong Khai Campus
- **Instagram**: [@pungpon_rnk](https://instagram.com/pungpon_rnk)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! To contribute:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📧 Contact & Support

For questions or suggestions:
- 📱 Instagram: [@pungpon_rnk](https://instagram.com/pungpon_rnk)
- 📧 Reach out through the portfolio contact section

---

**Made with ❤️ for educational purposes**
