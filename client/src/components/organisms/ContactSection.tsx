import { Layout, Row, Col, Typography, Card } from 'antd';
import { 
  MailOutlined,
  EnvironmentOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from '@ant-design/icons';
import { ContactForm } from '@/components/molecules';
import { personalInfo } from '@/data/portfolio';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

export function ContactSection() {
  const contactItems = [
    {
      icon: MailOutlined,
      title: 'Email',
      content: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: EnvironmentOutlined,
      title: 'Location',
      content: personalInfo.location,
    },
    {
      icon: LinkedinOutlined,
      title: 'LinkedIn',
      content: 'linkedin.com/in/cargdev',
      href: 'https://linkedin.com/in/cargdev',
    },
    {
      icon: GithubOutlined,
      title: 'GitHub',
      content: 'github.com/CarGDev',
      href: 'https://github.com/CarGDev',
    },
  ];

  return (
    <Content
      id="contact"
      style={{
        background: 'var(--ant-color-bg-container)',
        padding: '64px 24px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <Title level={2} style={{ fontSize: '2.5rem', fontWeight: 700 }}>
            Get In Touch
          </Title>
          <Paragraph
            style={{
              fontSize: '1.1rem',
              color: 'var(--ant-color-text-secondary)',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            Let's discuss opportunities, collaborate on projects, or just connect and share ideas.
          </Paragraph>
        </div>
        
        <Row gutter={[48, 48]}>
          <Col xs={24} lg={12}>
            <div>
              <Title level={3} style={{ marginBottom: '24px' }}>
                Contact Information
              </Title>
              
              {contactItems.map((item, index) => {
                const IconComponent = item.icon;
                
                return (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      marginBottom: '24px',
                    }}
                  >
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        background: '#1890ff',
                        color: 'white',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <IconComponent />
                    </div>
                    <div>
                      <div
                        style={{
                          fontWeight: 600,
                          marginBottom: '2px',
                          color: 'var(--ant-color-text)',
                        }}
                      >
                        {item.title}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.title === 'Email' ? undefined : '_blank'}
                          rel={item.title === 'Email' ? undefined : 'noopener noreferrer'}
                          style={{
                            color: 'var(--ant-color-text)',
                            textDecoration: 'none',
                          }}
                          data-testid={`link-contact-${item.title.toLowerCase()}`}
                        >
                          {item.content}
                        </a>
                      ) : (
                        <div style={{ color: 'var(--ant-color-text)' }}>
                          {item.content}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </Col>
          
          <Col xs={24} lg={12}>
            <ContactForm />
          </Col>
        </Row>
      </div>
    </Content>
  );
}
