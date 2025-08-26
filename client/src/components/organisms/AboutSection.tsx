import { Layout, Row, Col, Typography, Card, Statistic } from 'antd';
import { motion } from 'framer-motion';
import { highlights } from '@/data/portfolio';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

export function AboutSection() {
  return (
    <Content
      id="about"
      style={{
        background: 'var(--ant-color-bg-container)',
        padding: '64px 24px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <Title level={2} style={{ fontSize: '2.5rem', fontWeight: 700 }}>
            About Me
          </Title>
          <Paragraph
            style={{
              fontSize: '1.1rem',
              color: 'var(--ant-color-text-secondary)',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            Driven by a passion for technology and continuous learning, I build solutions that make a difference.
          </Paragraph>
        </div>
        
        <Row gutter={[48, 48]} align="middle">
          <Col xs={24} lg={12}>
            <motion.div 
              data-testid="about-text-content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Paragraph
                style={{
                  fontSize: '1.1rem',
                  color: 'var(--ant-color-text-secondary)',
                  marginBottom: '16px',
                  lineHeight: 1.6,
                }}
              >
                As a Senior Software Engineer with extensive full-stack experience, I specialize in creating robust, 
                scalable applications using modern technologies. My expertise spans across Python, JavaScript, TypeScript, 
                and various frameworks including React, NestJS, and Spring Boot.
              </Paragraph>
              
              <Paragraph
                style={{
                  fontSize: '1.1rem',
                  color: 'var(--ant-color-text-secondary)',
                  marginBottom: '16px',
                  lineHeight: 1.6,
                }}
              >
                I thrive in leadership roles, driving technical initiatives that deliver measurable business impact. 
                My experience includes optimizing CI/CD pipelines, implementing security solutions, and migrating 
                legacy systems to modern architectures. I'm passionate about open source contributions and 
                maintaining active engagement in the developer community.
              </Paragraph>
              
              <Paragraph
                style={{
                  fontSize: '1.1rem',
                  color: 'var(--ant-color-text-secondary)',
                  lineHeight: 1.6,
                }}
              >
                When not coding, I enjoy solving algorithmic challenges on LeetCode, contributing to open source projects, 
                and sharing knowledge through my technical blog.
              </Paragraph>
            </motion.div>
          </Col>
          
          <Col xs={24} lg={12}>
            <Row gutter={[16, 16]}>
              {highlights.map((highlight, index) => (
                <Col xs={12} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Card
                    style={{
                      textAlign: 'center',
                      background: 'var(--ant-color-bg-base)',
                      border: '1px solid var(--ant-color-border)',
                    }}
                    data-testid={`card-highlight-${highlight.label}`}
                  >
                    <Statistic
                      value={highlight.number}
                      suffix=""
                      valueStyle={{
                        fontSize: '2rem',
                        fontWeight: 700,
                        color: '#1890ff',
                      }}
                    />
                    <div
                      style={{
                        fontSize: '0.9rem',
                        color: 'var(--ant-color-text-secondary)',
                        marginTop: '8px',
                      }}
                    >
                      {highlight.label}
                    </div>
                  </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    </Content>
  );
}
