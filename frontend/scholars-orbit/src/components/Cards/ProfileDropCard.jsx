import React, { useEffect, useRef, useState } from 'react';
import './ProfileInfo.css';

const ProfileDropCard = ({
  //default
  //   name = 'Nishant Kumar',
  firstName = 'Nishant',
  lastName = 'kumar',
  email = 'Nishant@example.com',

  avatarUrl,
  onSignOut = () => alert('Signed out!'), // Default sign out handler
}) => {
  const name = firstName + ' ' + lastName;
  const generatedAvatarUrl =
    avatarUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(`${name}`)}&size=128`;

  // State to track if the menu is open
  const [open, setOpen] = useState(false);

  // Refs for elements so we can detect outside clicks and manage focus
  const btnRef = useRef(null); // Avatar button reference
  const menuRef = useRef(null); // Dropdown menu reference
  const firstItemRef = useRef(null); // First menu item (for autofocus)

  // Effect: Close menu when clicking outside or pressing Escape
  useEffect(() => {
    // Handle outside click
    function handleClickOutside(e) {
      if (!open) return; // Do nothing if menu is closed
      // If click is NOT inside menu AND NOT on avatar button → close
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        btnRef.current &&
        !btnRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }

    // Handle Escape key press
    function handleEscape(e) {
      if (e.key === 'Escape') setOpen(false);
    }

    // Add event listeners
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    // Cleanup event listeners when effect re-runs or component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open]);

  // Effect: When menu opens, automatically focus the first menu item
  useEffect(() => {
    if (open && firstItemRef.current) {
      firstItemRef.current.focus();
    }
  }, [open]);

  // Handle keyboard navigation inside the menu
  const handleMenuKeyDown = (e) => {
    // Get all menu items
    const items = Array.from(menuRef.current.querySelectorAll('[role="menuitem"]'));
    const idx = items.indexOf(document.activeElement);

    // Arrow Down → Move focus to next item (wrap around)
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = items[(idx + 1) % items.length];
      next?.focus();
    }

    // Arrow Up → Move focus to previous item (wrap around)
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = items[(idx - 1 + items.length) % items.length];
      prev?.focus();
    }
  };

  return (
    <div className="profile-dropcard">
      {/* Avatar button that toggles menu open/closed */}
      <button
        ref={btnRef}
        className="avatar-btn"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls="profile-menu"
        onClick={() => setOpen((v) => !v)} // Toggle open state
      >
        <img src={generatedAvatarUrl} alt={`${name} avatar`} className="avatar-img" />
      </button>

      {/* Dropdown menu (only rendered if open) */}
      {open && (
        <div
          id="profile-menu"
          ref={menuRef}
          role="menu"
          tabIndex={-1}
          className="menu"
          onKeyDown={handleMenuKeyDown} // Handle arrow key navigation
        >
          {/* Menu header with user info */}
          <div className="menu-header">
            <img src={generatedAvatarUrl} alt="" className="menu-avatar" />
            <div className="user-meta">
              <div className="user-name">{name}</div>
              <div className="user-email" title={email}>
                {email}
              </div>
            </div>
          </div>

          <div className="menu-divider" />

          {/* Menu items */}
          <a
            href="/profile"
            role="menuitem"
            className="menu-item"
            ref={firstItemRef} // Autofocus when menu opens
          >
            My Profile
          </a>
          <a href="/settings" role="menuitem" className="menu-item">
            Settings
          </a>
          <a href="/billing" role="menuitem" className="menu-item">
            Billing
          </a>

          <div className="menu-divider" />

          {/* Sign out button */}
          <button
            role="menuitem"
            className="menu-item danger"
            onClick={() => {
              setOpen(false); // Close menu
              onSignOut(); // Trigger sign out
            }}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileDropCard;
