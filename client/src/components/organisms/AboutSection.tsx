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
            Hello! I'm a Senior Software Engineer with 5+ years of experience building full-stack solutions and transitioning into AI/ML engineering.
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
                I build full-stack solutions – from crafting intuitive front-end interfaces in React and TypeScript to 
                architecting robust back-end services in Python, Java (NestJS, Spring Boot) and deploying them in the 
                cloud. I love designing scalable systems and have led engineering teams to deliver high-impact products 
                in production. Currently at iVoyant, I design and deploy scalable NestJS and Node.js microservices on 
                Kubernetes for AT&T's Cricket Wireless platform, serving millions of users daily.
              </Paragraph>
              
              <Paragraph
                style={{
                  fontSize: '1.1rem',
                  color: 'var(--ant-color-text-secondary)',
                  marginBottom: '16px',
                  lineHeight: 1.6,
                }}
              >
                Recently, I've been diving into AI/ML, applying my software expertise to machine learning projects and 
                building applications with Large Language Models to unlock intelligent features. I've built 
                transformer-based language models from scratch (sheepOp), created production-grade RAG optimization 
                libraries, and developed self-hosted AI platforms. I'm proud of my track record of innovation – for 
                example, I redesigned a core web workflow that streamlined the user experience and saved over $20 million 
                a year in costs, and I optimized our CI/CD pipeline to cut deployment times by 95% (from 45 minutes to 
                2 minutes).
              </Paragraph>
              
              <Paragraph
                style={{
                  fontSize: '1.1rem',
                  color: 'var(--ant-color-text-secondary)',
                  marginBottom: '16px',
                  lineHeight: 1.6,
                }}
              >
                I always aim to stay ahead of the curve, leveraging modern best practices in DevOps and software 
                architecture to solve complex problems. Outside of work, I'm an open-source contributor and tech blogger 
                – I enjoy sharing knowledge, and I regularly challenge myself with coding puzzles (LeetCode) to keep my 
                problem-solving sharp. I'm passionate about continuous learning and excited about the future of AI in 
                building smarter, more efficient applications.
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
