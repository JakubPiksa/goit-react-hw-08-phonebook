import React from 'react';

const UserMenu = () => {
  const handleLogout = () => {
    // Implement logout logic here
  };

  return (
    <div>
      <p>mango@mail.com</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;
