import { Layout } from 'antd';
import { motion } from 'framer-motion';
import { NavigationMenu } from '@/components/molecules';
import { ThemeToggle } from '@/components/atoms';
import { useIsMobile } from '@/hooks/use-mobile';
import { useThemeContext } from '@/providers/ThemeProvider';
import lightLogoPath from '@assets/cargdevlogo_transparente_1756133331615.png';
import darkLogoPath from '@assets/cargdevlogo_transparente_dark_1756134926359.png';

const { Header: AntHeader } = Layout;

export function Header() {
  const isMobile = useIsMobile();
  const { theme } = useThemeContext();
  const logoPath = theme === 'dark' ? darkLogoPath : lightLogoPath;
  console.log(theme);

  return (
    <AntHeader
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'var(--ant-color-bg-container) !important',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--ant-color-border)',
        padding: '0 24px',
        height: '80px',
      }}
    >
      <motion.div
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '40px',
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.img
          src={logoPath}
          alt="CargDev Logo"
          style={{
            height: '40px',
            width: 'auto',
          }}
          key={theme} // Force re-render on theme change
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
      
      {!isMobile ? <NavigationMenu /> : <NavigationMenu isMobile={true} />}
      
      <ThemeToggle />
    </AntHeader>
  );
}
