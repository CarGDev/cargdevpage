import { Layout, Row, Col, Typography, Card } from 'antd';
import { 
  UsergroupAddOutlined,
  ProjectOutlined,
  GlobalOutlined,
} from '@ant-design/icons';
import { motion } from 'framer-motion';
import { certifications } from '@/data/portfolio';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const iconMap = {
  users: UsergroupAddOutlined,
  'project-diagram': ProjectOutlined,
  globe: GlobalOutlined,
};

export function CertificationsSection() {
  return (
    <Content
      id="certifications"
      style={{
        padding: '64px 24px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <Title level={2} style={{ fontSize: '2.5rem', fontWeight: 700 }}>
            Certifications
          </Title>
          <Paragraph
            style={{
              fontSize: '1.1rem',
              color: 'var(--ant-color-text-secondary)',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            Continuous professional development and validated expertise in key technologies and methodologies.
          </Paragraph>
        </div>
        
        <Row gutter={[24, 24]}>
          {certifications.map((cert, index) => {
            const IconComponent = iconMap[cert.icon as keyof typeof iconMap] || UsergroupAddOutlined;
            
            return (
              <Col xs={24} md={12} lg={8} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Card
                  hoverable
                  style={{
                    height: '100%',
                    textAlign: 'center',
                    border: '1px solid var(--ant-color-border)',
                    cursor: cert.verificationUrl ? 'pointer' : 'default',
                  }}
                  data-testid={`card-certification-${cert.title}`}
                  onClick={() => {
                    if (cert.verificationUrl) {
                      window.open(cert.verificationUrl, '_blank', 'noopener,noreferrer');
                    }
                  }}
                >
                  <div
                    style={{
                      width: '80px',
                      height: '80px',
                      margin: '0 auto 16px',
                      background: '#1890ff',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2rem',
                      color: 'white',
                    }}
                  >
                    <IconComponent />
                  </div>
                  
                  <Title
                    level={4}
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 600,
                      marginBottom: '8px',
                    }}
                  >
                    {cert.title}
                  </Title>
                  
                  <div
                    style={{
                      color: 'var(--ant-color-text-secondary)',
                      marginBottom: '16px',
                      fontWeight: 500,
                    }}
                  >
                    {cert.organization}
                  </div>
                  
                  <Paragraph
                    style={{
                      color: 'var(--ant-color-text-secondary)',
                      fontSize: '0.9rem',
                      lineHeight: 1.6,
                    }}
                  >
                    {cert.description}
                  </Paragraph>
                </Card>
                </motion.div>
              </Col>
            );
          })}
        </Row>
      </div>
    </Content>
  );
}
