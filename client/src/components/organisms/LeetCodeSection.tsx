import { Layout, Row, Col, Typography, Card, Statistic, Button } from 'antd';
import { LinkOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { leetcodeStats } from '@/data/portfolio';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

export function LeetCodeSection() {
  const stats = [
    { label: 'Problems Solved', value: `${leetcodeStats.totalSolved}+` },
    { label: 'Easy Problems', value: leetcodeStats.easyCount },
    { label: 'Medium Problems', value: leetcodeStats.mediumCount },
    { label: 'Hard Problems', value: leetcodeStats.hardCount },
    { label: 'Acceptance Rate', value: leetcodeStats.acceptanceRate },
  ];

  return (
    <Content
      id="leetcode"
      style={{
        background: 'var(--ant-color-bg-container)',
        padding: '64px 24px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <Title level={2} style={{ fontSize: '2.5rem', fontWeight: 700 }}>
            LeetCode & Problem Solving
          </Title>
          <Paragraph
            style={{
              fontSize: '1.1rem',
              color: 'var(--ant-color-text-secondary)',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            Consistent practice in data structures and algorithms, demonstrating strong analytical thinking and coding skills.
          </Paragraph>
        </div>
        
        <Row gutter={[24, 24]} justify="center">
          {stats.map((stat, index) => (
            <Col xs={12} sm={8} md={6} lg={4} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card
                style={{
                  textAlign: 'center',
                  background: 'var(--ant-color-bg-base)',
                  border: '1px solid var(--ant-color-border)',
                }}
                data-testid={`card-leetcode-${stat.label}`}
              >
                <Statistic
                  value={stat.value}
                  valueStyle={{
                    fontSize: '2.5rem',
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
                  {stat.label}
                </div>
              </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
        
        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <Button
            type="primary"
            size="large"
            icon={<LinkOutlined />}
            href="https://leetcode.com/u/cargdev/"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-leetcode-profile"
          >
            View LeetCode Profile
          </Button>
        </div>
      </div>
    </Content>
  );
}
