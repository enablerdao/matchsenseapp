
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { logoVariants } from './animation-variants';
import LogoVariations from '../brand-guidelines/LogoVariations';

interface NavbarLogoProps {
  scrolled: boolean;
}

const NavbarLogo: React.FC<NavbarLogoProps> = ({ scrolled }) => {
  // Get current year
  const currentYear = new Date().getFullYear();
  
  return (
    <motion.div
      initial="normal"
      animate={scrolled ? "scrolled" : "normal"}
      variants={logoVariants}
      className="flex items-center"
    >
      <Link to="/" className="flex items-center">
        <div className={scrolled ? "w-28" : "w-36"}>
          <LogoVariations variant="modern" size={scrolled ? "sm" : "md"} year={currentYear} />
        </div>
      </Link>
    </motion.div>
  );
};

export default NavbarLogo;
