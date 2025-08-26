import { Layout, Row, Col, Typography } from 'antd';
import { ProjectCard } from '@/components/molecules';
import { projects } from '@/data/portfolio';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

export function ProjectsSection() {
  return (
    <Content
      id="projects"
      style={{
        padding: '64px 24px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <Title level={2} style={{ fontSize: '2.5rem', fontWeight: 700 }}>
            Projects & Open Source
          </Title>
          <Paragraph
            style={{
              fontSize: '1.1rem',
              color: 'var(--ant-color-text-secondary)',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            Building tools and solutions that solve real-world problems and contribute to the developer community.
          </Paragraph>
        </div>
        
        <Row gutter={[24, 24]}>
          {projects.map((project) => (
            <Col xs={24} md={12} lg={8} key={project.name}>
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>
      </div>
    </Content>
  );
}
