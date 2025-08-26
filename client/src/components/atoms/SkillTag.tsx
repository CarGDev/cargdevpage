import { Tag } from 'antd';
import { 
  FaPython, FaJs, FaDatabase, FaJava, FaTerminal, FaReact, FaAngular, FaDocker, FaAws, FaGithub, FaGit, FaNpm, FaMicrosoft
} from 'react-icons/fa';
import { 
  SiTypescript, SiLua, SiRedux, SiNestjs, SiExpress, SiSpringboot, SiGraphql, SiGooglecloud, SiKubernetes, SiCloudflare, SiTailscale, SiPostman, SiCypress, SiNeovim, SiApache
} from 'react-icons/si';

interface SkillTagProps {
  skill: {
    name: string;
    icon?: string;
  };
  onClick?: () => void;
}

export function SkillTag({ skill, onClick }: SkillTagProps) {
  // Safety check for undefined skill
  if (!skill) {
    return null;
  }

  const iconMap: { [key: string]: any } = {
    FaPython, FaJs, FaDatabase, FaJava, FaTerminal, FaReact, FaAngular, FaDocker, FaAws, FaGithub, FaGit, FaNpm, FaMicrosoft,
    SiTypescript, SiLua, SiRedux, SiNestjs, SiExpress, SiSpringboot, SiGraphql, SiGooglecloud, SiKubernetes, SiCloudflare, SiTailscale, SiPostman, SiCypress, SiNeovim, SiApache
  };

  const IconComponent = skill.icon ? iconMap[skill.icon] : null;
  
  // Debug logging to help identify missing icons
  if (skill.icon && !IconComponent) {
    console.warn(`Icon not found: ${skill.icon} for skill: ${skill.name}`);
  }

  return (
    <Tag
      style={{
        cursor: onClick ? 'pointer' : 'default',
        transition: 'all 0.3s ease',
        borderRadius: '20px',
        padding: '4px 12px',
        fontSize: '0.9rem',
        margin: '4px',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
      }}
      onClick={onClick}
      data-testid={`skill-tag-${skill.name}`}
    >
      {IconComponent && <IconComponent style={{ fontSize: '14px' }} />}
      {skill.name}
    </Tag>
  );
}
