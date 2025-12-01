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
            From mechatronics to software engineering, I bridge the gap between hardware and software to build resilient, scalable systems that power millions of users.
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
                Currently at iVoyant, I design and deploy scalable NestJS and Node.js microservices on Kubernetes for 
                AT&T's Cricket Wireless platform, serving millions of users daily. My work includes leading frontend 
                development that resulted in $20M/year operational savings and optimizing CI/CD pipelines from 45 minutes 
                to just 2 minutes.
              </Paragraph>
              
              <Paragraph
                style={{
                  fontSize: '1.1rem',
                  color: 'var(--ant-color-text-secondary)',
                  marginBottom: '16px',
                  lineHeight: 1.6,
                }}
              >
                Beyond production systems, I'm deeply passionate about AI/ML research and development. I've built 
                transformer-based language models from scratch (sheepOp), created production-grade RAG optimization 
                libraries, and developed self-hosted AI platforms. My expertise spans Python, JavaScript, TypeScript, 
                React, NestJS, and Spring Boot, with a focus on building systems that balance performance, scalability, 
                and maintainability.
              </Paragraph>
              
              <Paragraph
                style={{
                  fontSize: '1.1rem',
                  color: 'var(--ant-color-text-secondary)',
                  lineHeight: 1.6,
                }}
              >
                I'm an active open source contributor, maintainer of multiple NPM packages, and enjoy sharing knowledge 
                through my technical blog. When not building production systems, you'll find me solving algorithmic 
                challenges on LeetCode, contributing to open source projects, or exploring the latest in AI/ML research.
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
