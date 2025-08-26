import { Menu } from 'antd';
import { useState, useEffect } from 'react';

interface NavigationMenuProps {
  mode?: 'horizontal' | 'vertical';
}

const menuItems = [
  { key: 'home', label: 'Home' },
  { key: 'about', label: 'About' },
  { key: 'skills', label: 'Skills' },
  { key: 'experience', label: 'Experience' },
  { key: 'projects', label: 'Projects' },
  { key: 'leetcode', label: 'LeetCode' },
  { key: 'certifications', label: 'Certifications' },
  { key: 'contact', label: 'Contact' },
];

export function NavigationMenu({ mode = 'horizontal' }: NavigationMenuProps) {
  const [selectedKey, setSelectedKey] = useState('home');

  const handleClick = (e: any) => {
    const targetId = e.key;
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setSelectedKey(targetId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => document.getElementById(item.key));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setSelectedKey(menuItems[i].key);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Menu
      mode={mode}
      selectedKeys={[selectedKey]}
      items={menuItems}
      onClick={handleClick}
      style={{
        backgroundColor: 'transparent',
        border: 'none',
        fontWeight: 500,
      }}
    />
  );
}
