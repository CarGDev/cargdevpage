import { Card } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import type { Experience } from '@/data/portfolio';

interface ExperienceItemProps {
  experience: Experience;
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ x: 10 }}
      style={{
        position: 'relative',
        marginLeft: '80px',
        marginBottom: '48px',
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: '-65px',
          top: '24px',
          width: '14px',
          height: '14px',
          background: '#1890ff',
          borderRadius: '50%',
          border: '3px solid var(--ant-color-bg-container)',
          zIndex: 2,
        }}
      />
      
      <Card
        style={{
          background: 'var(--ant-color-bg-container)',
          border: '1px solid var(--ant-color-border)',
        }}
        data-testid={`card-experience-${experience.company}`}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '16px',
          }}
        >
          <div>
            <div
              style={{
                fontSize: '1.1rem',
                color: '#1890ff',
                marginBottom: '4px',
                fontWeight: 600,
              }}
            >
              {experience.company}
            </div>
            <div
              style={{
                fontSize: '1.3rem',
                fontWeight: 600,
                color: 'var(--ant-color-text)',
              }}
            >
              {experience.title}
            </div>
          </div>
          <div
            style={{
              background: '#1890ff',
              color: 'white',
              padding: '4px 8px',
              borderRadius: '8px',
              fontSize: '0.8rem',
              fontWeight: 500,
            }}
          >
            {experience.duration}
          </div>
        </div>
        
        <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0' }}>
          {experience.achievements.map((achievement, index) => (
            <li
              key={index}
              style={{
                marginBottom: '8px',
                position: 'relative',
                paddingLeft: '24px',
                color: 'var(--ant-color-text-secondary)',
                lineHeight: 1.6,
              }}
            >
              <CheckOutlined
                style={{
                  position: 'absolute',
                  left: 0,
                  color: '#52c41a',
                  fontSize: '14px',
                  top: '4px',
                }}
              />
              {achievement}
            </li>
          ))}
        </ul>
      </Card>
    </motion.div>
  );
}
