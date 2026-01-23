# 🚀 Startup Ideas Platform

A modern, full-stack web application for entrepreneurs to share, discover, and collaborate on startup ideas. Built with Next.js 16, TypeScript, Prisma, and NextAuth, this platform provides a seamless experience for the startup community to connect and innovate.

[![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-7.2.0-2D3748?style=flat&logo=prisma)](https://www.prisma.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.18-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)

---

## 🎥 Demo

https://user-images.githubusercontent.com/Screen%20Recording%202026-01-23%20114757.mp4

*Watch the platform in action - from browsing startup ideas to creating your own*

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Database Setup](#database-setup)
- [Development](#-development)
- [Usage](#-usage)
- [API Routes](#-api-routes)
- [Database Schema](#-database-schema)
- [Authentication](#-authentication)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

### Core Functionality
- 🎯 **Share Startup Ideas**: Create and publish your startup concepts with detailed descriptions
- 🔍 **Browse & Discover**: Explore innovative startup ideas from entrepreneurs worldwide
- 👤 **User Profiles**: Manage your startups and track your submissions
- 🔐 **Secure Authentication**: GitHub OAuth integration via NextAuth v5
- 📊 **View Tracking**: Monitor engagement with view counts on each startup
- 🏷️ **Category System**: Organize startups by categories (Tech, Health, Finance, Education, etc.)
- 📱 **Fully Responsive**: Mobile-first design with seamless experience across all devices

### Technical Features
- ⚡ **Server-Side Rendering**: Optimized performance with Next.js App Router
- 🎨 **Modern UI**: Beautiful interface with Tailwind CSS and custom animations
- 🔄 **Real-time Updates**: Form submissions with React Server Actions
- 🗃️ **Type-Safe Database**: Prisma ORM with PostgreSQL
- 🛡️ **Form Validation**: Comprehensive client and server-side validation
- 🎭 **Animated Components**: Smooth animations and transitions
- 📝 **Rich Content**: Support for detailed pitches and descriptions

---

## 🛠 Tech Stack

### Frontend
- **[Next.js 16.1.1](https://nextjs.org/)** - React framework with App Router
- **[React 19.2.3](https://react.dev/)** - UI library
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS 4.1.18](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **[Class Variance Authority](https://cva.style/docs)** - CSS class composition utility

### Backend
- **[NextAuth 5](https://authjs.dev/)** - Authentication solution
- **[Prisma 7.2.0](https://www.prisma.io/)** - Modern ORM
- **[PostgreSQL](https://www.postgresql.org/)** - Primary database
- **[LibSQL](https://github.com/tursodatabase/libsql)** - Alternative database support

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting
- **[PostCSS](https://postcss.org/)** - CSS processing
- **[npm 11.6.2](https://www.npmjs.com/)** - Package manager

---

## 📁 Project Structure

```
startup/
├── app/                          # Next.js App Router
│   ├── (root)/                  # Root route group
│   │   ├── layout.tsx           # Root layout wrapper
│   │   └── page.tsx             # Homepage with hero section
│   ├── api/                     # API routes
│   │   └── auth/                # Authentication endpoints
│   │       └── [...nextauth]/   # NextAuth.js handler
│   │           └── route.ts     # Auth API route
│   ├── components/              # Shared components
│   │   └── Navbar.tsx           # Navigation bar component
│   ├── startup/                 # Startup feature routes
│   │   └── create/              # Create startup page
│   │       ├── page.tsx         # Create page wrapper
│   │       └── StartupForm.tsx  # Startup creation form
│   ├── startups/                # Browse startups
│   │   └── page.tsx             # Startups listing page
│   ├── globals.css              # Global styles
│   └── layout.tsx               # Root application layout
├── data/                        # Static data files
│   └── startups.json            # Sample startup data
├── lib/                         # Utility functions
│   ├── actions.ts               # Server actions
│   ├── db.ts                    # Database operations
│   └── utils.ts                 # Helper functions
├── prisma/                      # Database configuration
│   ├── schema.prisma            # Database schema
│   └── prisma.config.ts         # Prisma configuration
├── public/                      # Static assets
├── auth.ts                      # NextAuth configuration
├── components.json              # shadcn/ui configuration
├── eslint.config.mjs            # ESLint configuration
├── next-env.d.ts                # Next.js TypeScript declarations
├── next.config.ts               # Next.js configuration
├── package.json                 # Project dependencies
├── postcss.config.mjs           # PostCSS configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── README.md                    # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 20 or higher ([Download](https://nodejs.org/))
- **npm**: Version 11.6.2 or higher (comes with Node.js)
- **PostgreSQL**: Version 12 or higher ([Download](https://www.postgresql.org/download/))
- **Git**: For version control ([Download](https://git-scm.com/))
- **GitHub Account**: For OAuth authentication

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd startup
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (see [Environment Variables](#environment-variables))

4. **Initialize the database** (see [Database Setup](#database-setup))

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Database Configuration
DATABASE_URL="postgresql://username:password@localhost:5432/startup_db?schema=public"

# Alternative LibSQL Configuration (optional)
# TURSO_DATABASE_URL="libsql://your-database.turso.io"
# TURSO_AUTH_TOKEN="your-auth-token"

# NextAuth Configuration
AUTH_SECRET="your-super-secret-key-here"  # Generate with: openssl rand -base64 32
AUTH_GITHUB_ID="your-github-oauth-app-id"
AUTH_GITHUB_SECRET="your-github-oauth-app-secret"

# Application URL
NEXTAUTH_URL="http://localhost:3000"
```

#### Setting up GitHub OAuth

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Click "New OAuth App"
3. Fill in the details:
   - **Application name**: Startup Ideas Platform
   - **Homepage URL**: `http://localhost:3000`
   - **Authorization callback URL**: `http://localhost:3000/api/auth/callback/github`
4. Copy the **Client ID** to `AUTH_GITHUB_ID`
5. Generate a **Client Secret** and copy it to `AUTH_GITHUB_SECRET`

### Database Setup

1. **Create a PostgreSQL database**
   ```bash
   # Using psql
   psql -U postgres
   CREATE DATABASE startup_db;
   \q
   ```

2. **Generate Prisma client**
   ```bash
   npx prisma generate
   ```

3. **Run database migrations**
   ```bash
   npx prisma db push
   ```

4. **Optional: Seed the database**
   ```bash
   # You can create a seed script or manually add data through the app
   npx prisma studio  # Opens Prisma Studio for manual data entry
   ```

---

## 💻 Development

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

The development server features:
- 🔥 **Hot Module Replacement**: Instant updates as you edit files
- 📝 **TypeScript Support**: Real-time type checking
- 🎨 **Tailwind JIT**: Just-in-time CSS compilation
- 🔍 **Error Overlay**: Detailed error messages in the browser

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Create production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint for code quality |
| `npx prisma studio` | Open Prisma Studio (database GUI) |
| `npx prisma generate` | Generate Prisma client |
| `npx prisma db push` | Push schema changes to database |
| `npx prisma migrate dev` | Create and apply migrations |

### Development Workflow

1. **Create a new feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** with hot reloading enabled

3. **Run linter** to check code quality
   ```bash
   npm run lint
   ```

4. **Test your changes** in the browser

5. **Commit and push**
   ```bash
   git add .
   git commit -m "Add: your feature description"
   git push origin feature/your-feature-name
   ```

---

## 📖 Usage

### Creating a Startup

1. **Sign in** with your GitHub account
2. Navigate to **"Share Your Idea"** or click the button on the homepage
3. Fill in the startup form:
   - **Title**: Name of your startup (min. 3 characters)
   - **Category**: Select from available categories
   - **Description**: Detailed description (min. 100 characters)
   - **Image URL**: Optional image for your startup
   - **Pitch**: Your elevator pitch
   - **Stage**: Current stage (Idea, MVP, Growth, etc.)
4. Click **"Submit Your Startup"**

### Browsing Startups

1. Navigate to **"Browse Startups"** from the homepage
2. Browse through all submitted startup ideas
3. Click on any card to view more details
4. View counts are automatically tracked

### Managing Your Startups

- View all your submissions in the **Startups** page
- Each startup displays:
  - Title and category
  - Description and pitch
  - Current stage
  - View count
  - Creation date
  - Author information

---

## 🔌 API Routes

### Authentication Routes

#### `GET/POST /api/auth/[...nextauth]`
NextAuth.js catch-all route handling all authentication requests.

**Supported Providers:**
- GitHub OAuth

**Endpoints:**
- `/api/auth/signin` - Sign in page
- `/api/auth/signout` - Sign out
- `/api/auth/session` - Get current session
- `/api/auth/callback/github` - GitHub OAuth callback

### Server Actions

#### `createStartup`
Server action to create a new startup.

**Location:** `lib/actions.ts`

**Parameters:**
- `formData`: FormData object containing:
  - `title` (string, required, min 3 chars)
  - `category` (string, required)
  - `description` (string, required, min 100 chars)
  - `image` (string, optional)
  - `pitch` (string, optional)
  - `stage` (string, default: "idea")

**Returns:**
- Success: `{ success: true }` + redirect to startups page
- Error: `{ error: string, success: false }`

**Authentication:** Required

---

## 🗄 Database Schema

### User Model

```prisma
model User {
  id            String    @id @default(cuid())
  name          String?
  email         String    @unique
  emailVerified DateTime?
  image         String?
  createdAt     DateTime  @default(now())
  
  startups      Startup[] // One-to-many relationship
}
```

**Fields:**
- `id`: Unique identifier (CUID)
- `name`: User's display name
- `email`: Unique email address
- `emailVerified`: Email verification timestamp
- `image`: Profile image URL
- `createdAt`: Account creation timestamp

### Startup Model

```prisma
model Startup {
  id          String   @id @default(cuid())
  title       String
  category    String
  description String
  image       String?
  pitch       String?
  stage       String   @default("idea")
  views       Int      @default(0)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  authorId    String
  author      User     @relation(fields: [authorId], references: [id], onDelete: Cascade)
  
  @@index([authorId])
  @@index([createdAt])
}
```

**Fields:**
- `id`: Unique identifier (CUID)
- `title`: Startup name/title
- `category`: Startup category
- `description`: Full description
- `image`: Optional image URL
- `pitch`: Elevator pitch
- `stage`: Development stage (idea, mvp, growth, etc.)
- `views`: View count
- `createdAt`: Creation timestamp
- `updatedAt`: Last update timestamp
- `authorId`: Foreign key to User
- `author`: Relation to User model

**Indexes:**
- `authorId`: For efficient user startup queries
- `createdAt`: For chronological sorting

---

## 🔐 Authentication

This application uses **NextAuth.js v5** (Beta) for authentication.

### Authentication Flow

1. User clicks "Sign In" on the Navbar
2. Redirected to GitHub OAuth consent page
3. User authorizes the application
4. GitHub redirects back with authorization code
5. NextAuth exchanges code for access token
6. User session is created and stored
7. User is redirected back to the application

### Session Management

- Sessions are handled server-side
- Session data is encrypted and stored in cookies
- Protected routes check for valid session
- `auth()` helper provides current user information

### Protected Routes

Routes that require authentication:
- `/startup/create` - Create new startup

### Authorization

- Users can only create startups when authenticated
- All users can browse public startup listings
- User information is embedded in startup submissions

---

## 🚢 Deployment

### Deploy on Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import your repository on Vercel**
   - Go to [Vercel](https://vercel.com)
   - Click "Import Project"
   - Select your repository

3. **Configure environment variables**
   - Add all variables from your `.env` file
   - Update `NEXTAUTH_URL` to your production domain

4. **Set up PostgreSQL database**
   - Use [Vercel Postgres](https://vercel.com/storage/postgres)
   - Or use [Neon](https://neon.tech/)
   - Or use [Supabase](https://supabase.com/)
   - Update `DATABASE_URL` in Vercel environment variables

5. **Deploy**
   - Vercel will automatically build and deploy
   - Run database migrations after first deployment

### Alternative Deployment Options

#### Docker
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npx prisma generate
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

#### Manual Deployment

1. Build the application
   ```bash
   npm run build
   ```

2. Set up environment variables on your server

3. Run database migrations
   ```bash
   npx prisma db push
   ```

4. Start the production server
   ```bash
   npm start
   ```

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

### Reporting Bugs

1. Check if the bug has already been reported in [Issues](../../issues)
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable
   - Your environment (OS, Node version, etc.)

### Suggesting Features

1. Check [Issues](../../issues) for existing feature requests
2. Create a new issue with:
   - Clear description of the feature
   - Use cases and benefits
   - Possible implementation approach

### Pull Requests

1. Fork the repository
2. Create a feature branch
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. Make your changes
4. Run linter and tests
   ```bash
   npm run lint
   ```
5. Commit your changes
   ```bash
   git commit -m "Add: amazing feature"
   ```
6. Push to your fork
   ```bash
   git push origin feature/amazing-feature
   ```
7. Open a Pull Request

### Code Style

- Follow existing code conventions
- Use TypeScript for type safety
- Write meaningful commit messages
- Comment complex logic
- Keep functions small and focused

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Vercel](https://vercel.com/) - Deployment platform
- [Prisma](https://www.prisma.io/) - Next-generation ORM
- [NextAuth.js](https://authjs.dev/) - Authentication solution
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Lucide](https://lucide.dev/) - Icon library

---

## 📞 Support

If you have any questions or need help, please:

- 📧 Open an issue in this repository
- 💬 Start a discussion in the Discussions tab
- 📖 Check the [Next.js Documentation](https://nextjs.org/docs)
- 🔍 Search existing issues and discussions

---

## 🗺️ Roadmap

Future features and improvements:

- [ ] User profiles with bio and social links
- [ ] Startup detail pages with comments
- [ ] Like/upvote system
- [ ] Search and filtering functionality
- [ ] Tags/hashtags for better discovery
- [ ] Email notifications
- [ ] Startup collaboration features
- [ ] Analytics dashboard
- [ ] Export startup data
- [ ] Dark mode support
- [ ] Multi-language support
- [ ] Admin panel
- [ ] Rate limiting
- [ ] API documentation
- [ ] Mobile app

---

**Built with ❤️ by entrepreneurs, for entrepreneurs**

*Last Updated: January 2026*
