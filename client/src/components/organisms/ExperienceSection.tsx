import { Layout, Typography } from 'antd';
import { ExperienceItem } from '@/components/molecules';
import { experiences } from '@/data/portfolio';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

export function ExperienceSection() {
  return (
    <Content
      id="experience"
      style={{
        background: 'var(--ant-color-bg-container)',
        padding: '64px 24px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <Title level={2} style={{ fontSize: '2.5rem', fontWeight: 700 }}>
            Professional Experience
          </Title>
          <Paragraph
            style={{
              fontSize: '1.1rem',
              color: 'var(--ant-color-text-secondary)',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            Building impactful solutions across diverse industries and technologies.
          </Paragraph>
        </div>
        
        <div
          style={{
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: '30px',
              top: 0,
              bottom: 0,
              width: '2px',
              background: 'var(--ant-color-border)',
            }}
          />
          
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} experience={experience} />
          ))}
        </div>
      </div>
    </Content>
  );
}
