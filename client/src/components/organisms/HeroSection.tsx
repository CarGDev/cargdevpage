import { Layout, Row, Col, Typography, Space } from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { SocialLink } from '@/components/atoms';
import { personalInfo, socialLinks } from '@/data/portfolio';
import avatarPath from '@assets/CargdevCONFONDObco_1756133331615.png';

const { Content } = Layout;
const { Title, Text, Paragraph } = Typography;

export function HeroSection() {
  return (
    <Content
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '80px',
        padding: '80px 24px 64px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <Row gutter={[48, 48]} align="middle" style={{ width: '100%' }}>
        <Col xs={24} lg={14}>
          <motion.div 
            data-testid="hero-text-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Title
              level={1}
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                fontWeight: 700,
                marginBottom: '16px',
                background: 'linear-gradient(135deg, #1890ff, #52c41a)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {personalInfo.fullName}
            </Title>
            
            <Text
              style={{
                fontSize: '1.5rem',
                color: 'var(--ant-color-text-secondary)',
                display: 'block',
                marginBottom: '8px',
              }}
            >
              {personalInfo.title}
            </Text>
            
            <div
              style={{
                fontSize: '1.1rem',
                color: 'var(--ant-color-text-secondary)',
                marginBottom: '32px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <EnvironmentOutlined />
              {personalInfo.location}
            </div>
            
            <Paragraph
              style={{
                fontSize: '1.1rem',
                color: 'var(--ant-color-text-secondary)',
                marginBottom: '32px',
                lineHeight: 1.6,
              }}
            >
              {personalInfo.description}
            </Paragraph>
            
            <Space wrap size="middle">
              {socialLinks.map((link, index) => (
                <motion.div
                  key={link.platform}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <SocialLink {...link} />
                </motion.div>
              ))}
            </Space>
          </motion.div>
        </Col>
        
        <Col xs={24} lg={10}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            style={{
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
            }}
          >
            <img
              src={avatarPath}
              alt={`${personalInfo.fullName} - Professional avatar`}
              style={{
                width: '100%',
                height: '400px',
                objectFit: 'cover',
              }}
              data-testid="hero-profile-image"
            />
          </motion.div>
        </Col>
      </Row>
    </Content>
  );
}
