// src/app/(auth)/layout.tsx

// Remove unnecessary imports if they are not used within this specific layout.
// If 'Inter' is only for 'inter.className' on the body in the root layout, it's not needed here.
// import { Inter } from 'next/font/google'; // Likely can remove this

import Navbar from '@/components/Navbar';

// No need for metadata here unless you want specific metadata for auth pages
// export const metadata = {
//   title: 'True Feedback Auth',
//   description: 'Authentication pages for True Feedback.',
// };

interface AuthLayoutProps { // Renamed for clarity, you can keep RootLayoutProps if you prefer
  children: React.ReactNode;
}

// This layout should NOT have <html> or <body> tags.
// It just wraps its children with common elements for this route group.
export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    // Wrap your content in a single parent element like a div or React.Fragment
    <div>
      <Navbar/>
      {children}
    </div>
  );
}