EventHub - Event Management App

1. Short Project Description
EventHub is a full-stack event management platform built with Next.js 14 (App Router) and Firebase Authentication. Users can browse events, search/filter listings, and authenticated users can add and manage their own events. The app features a modern responsive design with 10 landing page sections.

2. Key Features
Authentication: Email/Password + Google login with protected routes

CRUD Operations: Create, read, and delete events

Search & Filter: Search by title + filter by category and price range

Responsive UI: Mobile/tablet/desktop with Tailwind CSS

Protected Pages: Add events and manage events (login required)

Dynamic Routes: Individual event pages with related items

User Dropdown: Shows user info and protected links after login

3. Setup & Installation
# Install dependencies
npm install

# Create .env.local with Firebase config
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Run development server
npm run dev

# Build for production
npm run build
npm start

4. Route Summary
Route	Access	Description
/	Public	Landing page with 10 sections
/items	Public	Browse events with search/filter
/items/[id]	Public	Event details page
/about	Public	About information
/login	Public	Sign in page
/register	Public	Create account
/items/add	Protected	Add new event form
/items/manage	Protected	Manage events (view/delete)
