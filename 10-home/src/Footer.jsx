import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-10 py-6">
      <div className="mx-auto flex flex-col md:flex-row justify-center items-center text-gray-600 text-sm">
        <p className="">&copy; {new Date().getFullYear()} BlogVerse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
