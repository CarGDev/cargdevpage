import { Tag } from 'antd';
import { ReactNode } from 'react';

interface SkillTagProps {
  children: ReactNode;
  onClick?: () => void;
}

export function SkillTag({ children, onClick }: SkillTagProps) {
  return (
    <Tag
      style={{
        cursor: onClick ? 'pointer' : 'default',
        transition: 'all 0.3s ease',
        borderRadius: '20px',
        padding: '4px 12px',
        fontSize: '0.9rem',
        margin: '4px',
      }}
      onClick={onClick}
      data-testid={`skill-tag-${children}`}
    >
      {children}
    </Tag>
  );
}
