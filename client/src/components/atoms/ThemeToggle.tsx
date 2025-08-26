import { Button } from 'antd';
import { MoonOutlined, SunOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { useThemeContext } from '@/providers/ThemeProvider';

export function ThemeToggle() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Button
        type="text"
        icon={theme === 'dark' ? <SunOutlined /> : <MoonOutlined />}
        onClick={toggleTheme}
        data-testid="button-theme-toggle"
        style={{
          border: '1px solid var(--ant-color-border)',
          borderRadius: 8,
        }}
      />
    </motion.div>
  );
}
