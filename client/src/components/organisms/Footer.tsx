import { Layout, Typography } from 'antd';

const { Footer: AntFooter } = Layout;
const { Text } = Typography;

export function Footer() {
  return (
    <AntFooter
      style={{
        background: 'var(--ant-color-bg-base)',
        borderTop: '1px solid var(--ant-color-border)',
        padding: '32px 24px',
        textAlign: 'center',
      }}
    >
      <div style={{ marginBottom: '16px' }}>
        <Text
          style={{
            color: 'var(--ant-color-text)',
            fontSize: '1.1rem',
            fontWeight: 600,
            fontStyle: 'italic',
          }}
        >
          Precise Solutions, Commanding Tools, Purposeful Delivery.
        </Text>
      </div>
      <Text
        style={{
          color: 'var(--ant-color-text-secondary)',
        }}
      >
        © 2024 Carlos Gutierrez. Built with modern web technologies and attention to detail.
      </Text>
    </AntFooter>
  );
}
