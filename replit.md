# Overview

This is a personal portfolio website for Carlos Gutierrez, a Senior Software Engineer based in Atlanta, GA. The application is built as a full-stack web application showcasing Carlos's professional experience, technical skills, projects, and achievements. The portfolio includes sections for personal information, skills, professional experience, open source projects, LeetCode statistics, certifications, and contact information. The application features a modern, responsive design with dark/light theme support and smooth scrolling navigation.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The frontend is built using **React 18** with **TypeScript** and follows a component-based architecture organized into atomic design patterns:
- **Atoms**: Basic UI components (buttons, tags, links)
- **Molecules**: Composite components (navigation menu, project cards, skill categories)
- **Organisms**: Complex sections (header, hero section, skills section, etc.)
- **Templates**: Page layouts combining multiple organisms

The styling is implemented using **Tailwind CSS** with **Ant Design** components for enhanced UI consistency. The application includes a comprehensive theme system supporting both light and dark modes through React Context.

## Backend Architecture
The backend uses **Express.js** with **TypeScript** running on **Node.js**. The server architecture includes:
- RESTful API routing structure with `/api` prefix
- Middleware for request logging and error handling
- In-memory storage implementation with plans for database integration
- Vite integration for development mode with hot module replacement

## Build System
- **Vite** as the primary build tool and development server
- **ESBuild** for production server bundling
- **TypeScript** compilation with strict mode enabled
- Path aliases configured for clean imports (`@/`, `@shared/`)

## Component Library Integration
The application integrates multiple UI libraries:
- **Radix UI** primitives for accessible, unstyled components
- **Ant Design** for complex UI components and layouts
- **shadcn/ui** components built on top of Radix UI
- **Lucide React** for consistent iconography

## State Management
- **TanStack Query** (React Query) for server state management and data fetching
- React Context for theme management and global state
- Local component state using React hooks

## Database Schema
Uses **Drizzle ORM** with **PostgreSQL** configured through environment variables. The schema includes:
- User table with UUID primary keys
- Zod validation schemas for type-safe data handling
- Migration support through Drizzle Kit

# External Dependencies

## Database & ORM
- **PostgreSQL** via **Neon Database** serverless connection
- **Drizzle ORM** for type-safe database operations
- **Drizzle Kit** for schema migrations and management

## UI & Styling
- **Ant Design** component library with custom theming
- **Tailwind CSS** for utility-first styling
- **Radix UI** primitives for accessible components
- **Lucide React** for SVG icons
- **Google Fonts** (Inter and JetBrains Mono) for typography

## Development Tools
- **Vite** for development server and build tooling
- **TypeScript** for type safety and developer experience
- **ESLint** and **Prettier** configurations (implied by dependencies)
- **PostCSS** with Autoprefixer for CSS processing

## Routing & Navigation
- **Wouter** for lightweight client-side routing
- Smooth scrolling navigation between sections
- Mobile-responsive navigation menu

## External Services
- Portfolio data is currently static but structured for potential API integration
- Contact form ready for backend email service integration
- LeetCode statistics display (prepared for API integration)
- GitHub and social media link integrations

## Session Management
- **connect-pg-simple** for PostgreSQL session storage
- Session-based authentication infrastructure in place