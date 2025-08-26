import { Card } from 'antd';
import { 
  FaCode,
  FaCloud,
  FaWrench,
  FaLayerGroup,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { SkillTag } from '@/components/atoms';
import type { SkillCategory as SkillCategoryType } from '@/data/portfolio';

interface SkillCategoryProps {
  category: SkillCategoryType;
}

const iconMap = {
  FaCode: FaCode,
  FaLayerGroup: FaLayerGroup,
  FaCloud: FaCloud,
  FaWrench: FaWrench,
};

export function SkillCategory({ category }: SkillCategoryProps) {
  const IconComponent = iconMap[category.icon as keyof typeof iconMap] || FaCode;

  return (
    <Card
      style={{
        height: '100%',
        border: '1px solid var(--ant-color-border)',
      }}
      data-testid={`card-skill-category-${category.title}`}
    >
      <h3
        style={{
          fontSize: '1.3rem',
          marginBottom: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          color: 'var(--ant-color-text)',
        }}
      >
        <IconComponent style={{ color: '#1890ff' }} />
        {category.title}
      </h3>
      
      <div>
        {category.skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            style={{ display: 'inline-block' }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ scale: 1.1 }}
          >
            <SkillTag skill={skill} />
          </motion.div>
        ))}
      </div>
    </Card>
  );
}
