# Sample React Conversion - ASKR Fashion E-commerce

This project has been converted from traditional HTML/CSS pages into a React application using Create React App.

## Page Structure (Traditional Flow)

### Landing Page
1. **Login** (`/`) - Shows by default when app starts
   - New users can sign up via "Sign Up" link
   - Existing users enter credentials to login
   - After successful login, redirected to home page

### Protected Pages (Require Login)
2. **Home** (`/home`) - Main dashboard (demo.pro.1.html)
   - Hero section with promotions
   - Category grid
   - Trending items
   - Bottom navigation with home, search, cart, profile

3. **About** (`/about`) - Company information

4. **Men** (`/men`) - Men's collection with products

5. **Women** (`/women`) - Women's collection with products

6. **Child** (`/child`) - Kids collection with products

7. **Cart** (`/cart`) - Shopping cart with order placement

8. **Profile** (`/profile`) - User profile and order history

9. **Signup** (`/signup`) - Account creation page

## Navigation

- **When Logged Out**: Only login/signup pages visible
- **When Logged In**: Full navigation bar appears with links to all pages
  - Home | About | Men | Women | Child | Cart | Profile | Logout

## Features

- **Login State Management**: Uses React state and localStorage to track login status
- **Protected Routes**: Pages require login to access
- **Original Styling**: All original CSS preserved exactly - same sizes, padding, colors
- **HTML Rendering**: Pages render original HTML via fetch() to maintain exact layout
- **Shopping Cart**: Add items, place orders, view history
- **User Authentication**: Email/password validation with localStorage

## Installation & Running

```bash
npm install
npm start
```

Opens at: **http://localhost:3000**

## Folder Structure

```
src/
  ├── App.jsx              (Main app with routing & login state)
  ├── index.js             (React entry point)
  ├── index.css            (Global styles)
  ├── style.css            (Home page styles)
  ├── login.css, about.css, etc. (Page-specific styles)
  ├── pages/
  │   ├── Login.jsx        (Login page component)
  │   ├── Signup.jsx       (Signup page component)
  │   ├── DemoPro1.jsx     (Home page - demo.pro.1)
  │   ├── About.jsx
  │   ├── Men.jsx
  │   ├── Women.jsx
  │   ├── Child.jsx
  │   ├── Cart.jsx
  │   └── Profile.jsx
  └── App.jsx

public/
  ├── index.html           (Main HTML)
  ├── login.html           (Login form HTML)
  ├── signup.html          (Signup form HTML)
  ├── demo.pro.1.html      (Home page HTML)
  ├── about.html
  ├── men.html, women.html, child.html
  ├── cart.html
  ├── profile.html
  ├── (All CSS files)
  └── (All JS files - cart.js)
```

## How It Works

1. App starts → Login page loads
2. User enters credentials and clicks Login
3. JavaScript validates credentials against localStorage
4. On success: Login state updates → Navigation bar shows → Redirects to /home
5. User navigates between pages via top navigation
6. Each page loads original HTML content while maintaining React routing

## User Flow

```
Start App
   ↓
Login Page (Required)
   ↓
Sign Up (if new) → Create Account → Back to Login
   ↓
Enter Credentials
   ↓
Home Page (demo.pro.1)
   ↓
Can access: About, Men, Women, Child, Cart, Profile
```

## Notes

- All original HTML/CSS/sizing preserved
- LocalStorage used for user data persistence
- Shopping cart stores items in localStorage
- User orders saved in localStorage
- Profile displays current logged-in user info

