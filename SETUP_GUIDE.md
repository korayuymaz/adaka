# Next.js + TypeScript + shadcn/ui Setup Guide

## 🚀 Recommended Versions

### Core Technologies

- **Next.js**: `14.2.0` (latest stable)
- **React**: `18.3.0` (comes with Next.js)
- **TypeScript**: `5.4.0` (latest stable)
- **Node.js**: `18.18.0` or `20.12.0` (LTS versions)

### UI & Styling

- **shadcn/ui**: `0.0.1` (latest)
- **Tailwind CSS**: `3.4.0` (latest stable)
- **class-variance-authority**: `0.7.0`
- **clsx**: `2.1.0`
- **tailwind-merge**: `2.2.0`
- **lucide-react**: `0.344.0` (for icons)

### Development Tools

- **ESLint**: `8.57.0`
- **Prettier**: `3.2.0`
- **@types/node**: `20.12.0`
- **@types/react**: `18.3.0`
- **@types/react-dom**: `18.3.0`

## 📦 Installation Commands

### 1. Create Next.js Project

```bash
npx create-next-app@latest adaka-website --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

**When prompted, choose:**

- ✅ Would you like to use TypeScript? → Yes
- ✅ Would you like to use ESLint? → Yes
- ✅ Would you like to use Tailwind CSS? → Yes
- ✅ Would you like to use `src/` directory? → Yes
- ✅ Would you like to use App Router? → Yes
- ✅ Would you like to customize the default import alias (@/\*)? → Yes

### 2. Navigate to Project

```bash
cd adaka-website
```

### 3. Install shadcn/ui

```bash
npx shadcn@latest init
```

**When prompted, choose:**

- ✅ Would you like to use TypeScript (recommended)? → Yes
- ✅ Which style would you like to use? → Default
- ✅ Which color would you like to use as base color? → Slate
- ✅ Where is your global CSS file? → src/app/globals.css
- ✅ Do you want to use CSS variables for colors? → Yes
- ✅ Where is your tailwind.config.js located? → tailwind.config.ts
- ✅ Configure the import alias for components? → @/components
- ✅ Configure the import alias for utils? → @/lib/utils
- ✅ Are you using React Server Components? → Yes
- ✅ Write configuration to components.json? → Yes

### 4. Install Essential shadcn/ui Components

```bash
# Layout & Navigation
npx shadcn@latest add button
npx shadcn@latest add navigation-menu
npx shadcn@latest add sheet
npx shadcn@latest add separator

# Content & Typography
npx shadcn@latest add card
npx shadcn@latest add badge
npx shadcn@latest add avatar
npx shadcn@latest add typography

# Forms & Inputs
npx shadcn@latest add input
npx shadcn@latest add textarea
npx shadcn@latest add select
npx shadcn@latest add form
npx shadcn@latest add label

# Feedback & Status
npx shadcn@latest add alert
npx shadcn@latest add toast
npx shadcn@latest add progress
npx shadcn@latest add skeleton

# Data Display
npx shadcn@latest add table
npx shadcn@latest add tabs
npx shadcn@latest add accordion
npx shadcn@latest add carousel

# Overlay & Modals
npx shadcn@latest add dialog
npx shadcn@latest add popover
npx shadcn@latest add tooltip
npx shadcn@latest add dropdown-menu
```

### 5. Install Additional Dependencies

```bash
# Icons
npm install lucide-react

# Forms & Validation
npm install react-hook-form @hookform/resolvers zod

# Animation
npm install framer-motion

# Date handling
npm install date-fns

# Image optimization
npm install next/image

# SEO
npm install next-seo

# Analytics (optional)
npm install @vercel/analytics
```

## 🛠️ Configuration Files

### 1. Update `tailwind.config.ts`

```typescript
import type { Config } from "tailwindcss";

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
```

### 2. Update `next.config.js`

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		domains: ["your-domain.com"], // Add your image domains
	},
	// Enable static exports if needed
	// output: 'export',
};

module.exports = nextConfig;
```

### 3. Update `tsconfig.json`

```json
{
	"compilerOptions": {
		"target": "es5",
		"lib": ["dom", "dom.iterable", "es6"],
		"allowJs": true,
		"skipLibCheck": true,
		"strict": true,
		"noEmit": true,
		"esModuleInterop": true,
		"module": "esnext",
		"moduleResolution": "bundler",
		"resolveJsonModule": true,
		"isolatedModules": true,
		"jsx": "preserve",
		"incremental": true,
		"plugins": [
			{
				"name": "next"
			}
		],
		"baseUrl": ".",
		"paths": {
			"@/*": ["./src/*"],
			"@/components/*": ["./src/components/*"],
			"@/lib/*": ["./src/lib/*"],
			"@/types/*": ["./src/types/*"],
			"@/utils/*": ["./src/utils/*"]
		}
	},
	"include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
	"exclude": ["node_modules"]
}
```

## 📁 Recommended Project Structure

```
src/
├── app/
│   ├── (routes)/
│   │   ├── company/
│   │   │   └── page.tsx
│   │   └── products/
│   │       └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── ...
│   ├── layout/
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   └── navigation.tsx
│   └── sections/
│       ├── hero.tsx
│       ├── about.tsx
│       └── products-grid.tsx
├── lib/
│   ├── utils.ts
│   └── validations.ts
├── types/
│   └── index.ts
└── utils/
    ├── constants.ts
    └── helpers.ts
```

## 🚀 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Type checking
npm run type-check
```

## 📝 Next Steps

1. **Initialize the project** using the commands above
2. **Set up the basic layout** with header and footer
3. **Create the three main pages** (Home, Company, Products)
4. **Implement responsive navigation**
5. **Add content and styling**
6. **Test and optimize**

## 🔧 Additional Tools (Optional)

### Code Quality

```bash
# Prettier
npm install -D prettier prettier-plugin-tailwindcss

# Husky for git hooks
npm install -D husky lint-staged

# Commitizen for conventional commits
npm install -D commitizen cz-conventional-changelog
```

### Performance Monitoring

```bash
# Bundle analyzer
npm install -D @next/bundle-analyzer

# Performance monitoring
npm install @vercel/speed-insights
```

This setup will give you a modern, type-safe, and highly maintainable foundation for your company website with excellent developer experience and performance!
