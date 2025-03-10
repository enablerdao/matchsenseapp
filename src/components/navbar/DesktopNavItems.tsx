
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NavLink } from './types';
import { menuItemVariants } from './animation-variants';

interface DesktopNavItemsProps {
  navLinks: NavLink[];
}

const DesktopNavItems: React.FC<DesktopNavItemsProps> = ({ navLinks }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="hidden md:flex items-center space-x-8">
      {navLinks.map((link, index) => (
        <motion.div
          key={link.name}
          initial="hidden"
          animate="visible"
          custom={index}
          variants={menuItemVariants}
          whileHover="hover"
          onHoverStart={() => setHoveredIndex(index)}
          onHoverEnd={() => setHoveredIndex(null)}
          className="relative"
        >
          {link.isPage ? (
            <Link
              to={link.href}
              className="text-gray-700 transition-all duration-200 text-sm font-medium flex items-center gap-1"
            >
              {hoveredIndex === index && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-primary-500"
                >
                  <Sparkles size={14} />
                </motion.span>
              )}
              {link.name}
              {hoveredIndex === index && (
                <motion.span
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronRight size={14} />
                </motion.span>
              )}
            </Link>
          ) : (
            <a
              href={link.href}
              className="text-gray-700 transition-all duration-200 text-sm font-medium flex items-center gap-1"
            >
              {hoveredIndex === index && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-primary-500"
                >
                  <Sparkles size={14} />
                </motion.span>
              )}
              {link.name}
            </a>
          )}
          <motion.div
            className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-500 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            style={{ originX: 0 }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default DesktopNavItems;
