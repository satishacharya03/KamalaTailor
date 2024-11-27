
# Kamal Tailor - E-commerce Platform

A modern e-commerce platform built with Next.js 13+, featuring a customer-facing storefront and an administrative dashboard.

## Features

### Customer Features
- User authentication (Email/Password and Google OAuth)
- Product browsing and searching
- Shopping cart functionality
- Order management
- Wishlist management
- Real-time chat support
- Account management
- Responsive design

### Admin Features
- Comprehensive dashboard
- Product management
- Order management
- Customer management
- Category management
- Real-time chat with customers
- Analytics and reporting
- User role management (Admin/Customer)

## Tech Stack

### Frontend
- Next.js 13+ (App Router)
- React
- Tailwind CSS
- shadcn/ui components
- TypeScript

### Backend
- Next.js API Routes
- Prisma ORM
- PostgreSQL
- NextAuth.js for authentication

### Additional Features
- Real-time updates using Pusher
- Form handling with React Hook Form
- Data validation with Zod
- Responsive design

## Getting Started

1. Clone the repository
```bash
git clone [your-repository-url]
cd kamalatailor
```

#Create a .env file in the root directory and add:
```
DATABASE_URL="your_postgresql_url"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your_nextauth_secret"
GOOGLE_CLIENT_ID="your_google_client_id"
GOOGLE_CLIENT_SECRET="your_google_client_secret"
PUSHER_APP_ID="your_pusher_app_id"
PUSHER_KEY="your_pusher_key"
PUSHER_SECRET="your_pusher_secret"
PUSHER_CLUSTER="your_pusher_cluster"
```


#Run database migrationsStart the development server
```
npx prisma generate
npx prisma db push
npm run dev
```

#Project Structure
```kamalatailor/
├── app/                    # Next.js 13+ app directory
│   ├── admin/             # Admin dashboard pages
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   ├── account/           # User account pages
│   └── chat/              # Chat functionality
├── components/            # Reusable components
├── lib/                   # Utility functions and configurations
├── prisma/               # Database schema and migrations
└── public/               # Static assets
```
#Deployment
```
 npm run build
```
#Support
For support, email [contact@acharyasatish.com.np].
