# SensAI - AI Career Coach

An intelligent career coaching application built with Next.js 16 that helps users with resume building, interview preparation, cover letter generation, and career insights.

## Features

### 🎯 Dashboard
- Industry insights and market overview
- Salary ranges by role visualization
- Growth rate and demand level indicators
- Key industry trends and recommended skills

### 📝 Resume Builder
- Create and edit professional resumes
- Markdown editor with live preview
- Export to PDF
- AI-powered content suggestions

### 🎤 Interview Practice
- Generate technical interview questions
- Multiple choice format with explanations
- Track quiz history and performance
- Personalized improvement tips

### ✉️ AI Cover Letter Generator
- Generate cover letters based on job descriptions
- AI-powered content tailored to your industry
- Save and manage multiple cover letters

### 👤 Onboarding
- Industry and specialization selection
- Experience and skills profiling
- Professional bio creation

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI**: React 19, Tailwind CSS, shadcn/ui
- **Authentication**: Clerk
- **Database**: PostgreSQL with Prisma
- **AI**: Google Gemini API
- **State Management**: React Hook Form + Zod
- **Charts**: Recharts
- **Background Jobs**: Inngest

## Prerequisites

- Node.js 18+
- PostgreSQL database
- Google Cloud API key (Gemini)
- Clerk account for authentication

## Installation

```bash
# Clone the repository
git clone <repository-url>
cd sensai

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Generate Prisma client
npx prisma generate

# Run the development server
npm run dev
```

## Environment Variables

Create a `.env` file with:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

# Database
DATABASE_URL=postgresql://...

# Google Gemini API
GEMINI_API_KEY=AIza...
```

## Project Structure

```
sensai/
├── actions/              # Server actions
│   ├── dashboard.js      # AI insights generation
│   ├── interview.js      # Quiz generation
│   ├── cover-letter.js  # Cover letter generation
│   ├── resume.js        # Resume handling
│   └── user.js          # User profile management
├── app/
│   ├── (main)/          # Protected routes
│   │   ├── dashboard/   # Dashboard with insights
│   │   ├── resume/     # Resume builder
│   │   ├── interview/  # Interview practice
│   │   ├── onboarding/ # User onboarding
│   │   └── ai-cover-letter/ # Cover letters
│   ├── (auth)/          # Authentication routes
│   └── api/             # API routes
├── components/           # React components
├── lib/                 # Utilities and configs
├── prisma/              # Database schema
└── data/                # Static data (industries, etc.)
```

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## License

MIT