// src/layouts/RootLayout.jsx
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import AuthModal from '../components/Auth/AuthModal';
import { Suspense, useState } from 'react';
import Loading from '../components/Loading/Loading';

export default function RootLayout() {
  const [showAuth, setShowAuth] = useState(false);
  const [authView, setAuthView] = useState('login'); // 'login' or 'signup'

  const handleLoginClick = () => {
    setAuthView('login');
    setShowAuth(true);
  };

  const handleSignupClick = () => {
    setAuthView('signup');
    setShowAuth(true);
  };

  const handleCloseAuth = () => {
    setShowAuth(false);
  };

  return (
    <>
      {/* Persistent top navigation */}
      {/* Pass trigger callbacks into Navbar */}
      <Navbar
        onLoginClick={handleLoginClick}
        onSignupClick={handleSignupClick}
      />

      {/* Conditionally render the auth modal */}
      {showAuth && (
        <AuthModal
          onClose={handleCloseAuth}
          initialView={authView}
        />
      )}

      {/* The active route's content goes here */}
      <main>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>

      {/* Persistent footer */}
      <Footer />
    </>
  );
}
