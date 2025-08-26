import { Card } from 'antd';
import { 
  CodeOutlined,
  CloudOutlined,
  ToolOutlined,
  AppstoreOutlined,
} from '@ant-design/icons';
import { motion } from 'framer-motion';
import { SkillTag } from '@/components/atoms';
import type { SkillCategory as SkillCategoryType } from '@/data/portfolio';

interface SkillCategoryProps {
  category: SkillCategoryType;
}

const iconMap = {
  code: CodeOutlined,
  'layer-group': AppstoreOutlined,
  cloud: CloudOutlined,
  tools: ToolOutlined,
};

export function SkillCategory({ category }: SkillCategoryProps) {
  const IconComponent = iconMap[category.icon as keyof typeof iconMap] || CodeOutlined;

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
            key={skill}
            style={{ display: 'inline-block' }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ scale: 1.1 }}
          >
            <SkillTag>{skill}</SkillTag>
          </motion.div>
        ))}
      </div>
    </Card>
  );
}
