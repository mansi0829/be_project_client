import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav class="nav flex flex-wrap items-center justify-between px-8">
      <div class="flex flex-no-shrink items-center mr-6 py-5 text-gray-100">
        <span class="font-semibold text-xl tracking-tight">PAAS Platform</span>
      </div>

      <input class="menu-btn hidden" type="checkbox" id="menu-btn" />
      <label
        class="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
        for="menu-btn"
      >
        <span class="navicon bg-gray-100 flex items-center relative"></span>
      </label>

      <ul class="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
        <li class="border-t md:border-none transition duration-300 ease-in-out transform hover:scale-105">
          <a
            href="/"
            class="block md:inline-block px-4 py-3 no-underline text-gray-100 hover:text-gray-300 font-bold"
          >
            Home
          </a>
        </li>

        <li class="border-t md:border-none transition duration-300 ease-in-out transform hover:scale-105">
          <a
            href="/search/"
            class="block md:inline-block px-4 py-3 no-underline text-gray-100 hover:text-gray-300 font-bold"
          >
            Search
          </a>
        </li>
        <li class="border-t md:border-none transition duration-300 ease-in-out transform hover:scale-105">
          <a
            href="/contact/"
            class="block md:inline-block px-4 py-3 no-underline text-gray-100 hover:text-gray-300 font-bold"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
