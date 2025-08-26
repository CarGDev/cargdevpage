import { Menu, Dropdown, Button } from 'antd';
import { useState, useEffect } from 'react';
import { MoreOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

interface NavigationMenuProps {
  mode?: 'horizontal' | 'vertical';
  isMobile?: boolean;
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

export function NavigationMenu({ mode = 'horizontal', isMobile = false }: NavigationMenuProps) {
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

  // For mobile, show first 5 items in main menu and rest in dropdown
  const mainMenuItems = menuItems.slice(0, 5);
  const dropdownItems = menuItems.slice(5);

  if (isMobile) {
    const dropdownMenuProps: MenuProps = {
      items: dropdownItems.map(item => ({
        key: item.key,
        label: item.label,
        onClick: () => handleClick({ key: item.key }),
      })),
      style: {
        backgroundColor: 'var(--ant-color-bg-container)',
        border: '1px solid var(--ant-color-border)',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        minWidth: '150px',
      },
    };

    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Menu
          mode="horizontal"
          selectedKeys={[selectedKey]}
          items={mainMenuItems}
          onClick={handleClick}
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            fontWeight: 500,
          }}
        />
        <Dropdown
          menu={dropdownMenuProps}
          placement="bottomRight"
          trigger={['click']}
          overlayStyle={{ zIndex: 9999 }}
        >
          <Button
            type="text"
            icon={<MoreOutlined />}
            style={{
              color: 'var(--ant-color-text)',
              border: 'none',
              padding: '4px 8px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
        </Dropdown>
      </div>
    );
  }

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
