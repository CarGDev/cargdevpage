import { Card, Button, Space } from 'antd';
import { GithubOutlined, LinkOutlined, RocketOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { SkillTag } from '@/components/atoms';
import type { Project } from '@/data/portfolio';

interface ProjectCardProps {
  project: Project;
}

const iconMap: { [key: string]: string } = {
  brain: '🧠',
  'git-alt': '🔧',
  lightbulb: '💡',
  react: '⚛️',
  robot: '🤖',
  'calendar-alt': '📅',
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5 }}
    >
      <Card
      hoverable
      style={{
        height: '100%',
        transition: 'all 0.3s ease',
        border: '1px solid var(--ant-color-border)',
      }}
      styles={{
        body: { padding: 0 },
      }}
      data-testid={`card-project-${project.name}`}
    >
      <div
        style={{
          height: '200px',
          background: 'linear-gradient(135deg, #1890ff, #52c41a)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '3rem',
          color: 'white',
        }}
      >
        {iconMap[project.icon] || '📦'}
      </div>
      
      <div style={{ padding: '24px' }}>
        <h3 
          style={{ 
            fontSize: '1.3rem', 
            fontWeight: 600, 
            marginBottom: '8px',
            color: 'var(--ant-color-text)'
          }}
        >
          {project.name}
        </h3>
        
        <p 
          style={{ 
            color: 'var(--ant-color-text-secondary)', 
            marginBottom: '16px',
            lineHeight: 1.6
          }}
        >
          {project.description}
        </p>
        
        <div style={{ marginBottom: '16px' }}>
          {project.technologies.map((tech) => (
            <SkillTag key={tech}>{tech}</SkillTag>
          ))}
        </div>
        
        <Space>
          {project.liveUrl && (
            <Button
              type="primary"
              icon={<LinkOutlined />}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`link-project-live-${project.name}`}
            >
              Live Demo
            </Button>
          )}
          {project.githubUrl && (
            <Button
              icon={<GithubOutlined />}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`link-project-github-${project.name}`}
            >
              GitHub
            </Button>
          )}
          {project.npmUrl && (
            <Button
              icon={<RocketOutlined />}
              href={project.npmUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`link-project-npm-${project.name}`}
            >
              NPM Package
            </Button>
          )}
        </Space>
      </div>
    </Card>
    </motion.div>
  );
}
