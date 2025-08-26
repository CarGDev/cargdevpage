import { Button } from 'antd';
import { 
  MailOutlined, 
  LinkedinOutlined, 
  GithubOutlined, 
  CodeOutlined, 
  EditOutlined 
} from '@ant-design/icons';

interface SocialLinkProps {
  platform: string;
  url: string;
  label: string;
  icon: string;
}

const iconMap = {
  envelope: MailOutlined,
  linkedin: LinkedinOutlined,
  github: GithubOutlined,
  code: CodeOutlined,
  blog: EditOutlined,
};

export function SocialLink({ platform, url, label, icon }: SocialLinkProps) {
  const IconComponent = iconMap[icon as keyof typeof iconMap] || CodeOutlined;

  return (
    <Button
      href={url}
      target={platform !== 'email' ? '_blank' : undefined}
      rel={platform !== 'email' ? 'noopener noreferrer' : undefined}
      icon={<IconComponent />}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 16px',
        height: 'auto',
        border: '1px solid var(--ant-color-border)',
        borderRadius: '8px',
        transition: 'all 0.3s ease',
      }}
      data-testid={`link-${platform}`}
    >
      {label}
    </Button>
  );
}
