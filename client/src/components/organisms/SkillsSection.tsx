import { Layout, Row, Col, Typography } from 'antd';
import { motion } from 'framer-motion';
import { SkillCategory } from '@/components/molecules';
import { skillCategories } from '@/data/portfolio';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

export function SkillsSection() {
  return (
    <Content
      id="skills"
      style={{
        padding: '64px 24px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <Title level={2} style={{ fontSize: '2.5rem', fontWeight: 700 }}>
            Technical Skills
          </Title>
          <Paragraph
            style={{
              fontSize: '1.1rem',
              color: 'var(--ant-color-text-secondary)',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            A comprehensive toolkit built through years of hands-on development and continuous learning.
          </Paragraph>
        </div>
        
        <Row gutter={[24, 24]}>
          {skillCategories.map((category, index) => (
            <Col xs={24} md={12} lg={12} xl={6} key={category.title}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SkillCategory category={category} />
              </motion.div>
            </Col>
          ))}
        </Row>
      </div>
    </Content>
  );
}
