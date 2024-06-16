import React from 'react';

const Footer = () => {
  const companyName = 'Momentum Solutions';
  
  // Get the current date
  const today = new Date();
  
  // Format the date
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const currentDate = today.toLocaleDateString(undefined, options);
  
  return (
    <footer className="Footer py-4 text-center bg-light">
      <p>&copy; {companyName}</p>
      <p>Submitted on: {currentDate}</p>
    </footer>
  );
};

export default Footer;
