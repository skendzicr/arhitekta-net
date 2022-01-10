import React, { useMemo } from "react";

const Footer = () => {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="w-full max-w-container mx-auto border-t py-5 text-center flex items-center justify-center text-sm text-gray-500">
      <div>
        <p>&copy; arhitekta.net ${year}</p>
      </div>
    </footer>
  );
};

export default Footer;
