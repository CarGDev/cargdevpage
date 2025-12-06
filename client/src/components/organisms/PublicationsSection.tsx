import { Layout, Row, Col, Typography, Card, Tag } from 'antd';
import { 
  FileTextOutlined,
  LinkOutlined,
} from '@ant-design/icons';
import { motion } from 'framer-motion';
import { publications } from '@/data/portfolio';

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

const platformColors = {
  arxiv: '#B31B1B',
  researchgate: '#00CCBB',
  'peer-reviewed': '#0066CC',
};

const platformLabels = {
  arxiv: 'arXiv',
  researchgate: 'ResearchGate',
  'peer-reviewed': 'Peer-Reviewed',
};

export function PublicationsSection() {
  return (
    <Content
      id="publications"
      style={{
        padding: '64px 24px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <Title level={2} style={{ fontSize: '2.5rem', fontWeight: 700 }}>
            Publications & Research
          </Title>
          <Paragraph
            style={{
              fontSize: '1.1rem',
              color: 'var(--ant-color-text-secondary)',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            A curated selection of my research publications and scholarly contributions.
          </Paragraph>
        </div>
        
        <Row gutter={[24, 24]}>
          {publications.map((publication, index) => {
            return (
              <Col xs={24} md={12} lg={8} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Card
                    hoverable
                    style={{
                      height: '100%',
                      border: '1px solid var(--ant-color-border)',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                    data-testid={`card-publication-${publication.title}`}
                    onClick={() => {
                      window.open(publication.url, '_blank', 'noopener,noreferrer');
                    }}
                  >
                    <div
                      style={{
                        width: '60px',
                        height: '60px',
                        marginBottom: '16px',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.5rem',
                        color: 'white',
                      }}
                    >
                      <FileTextOutlined />
                    </div>
                    
                    <Tag
                      color={platformColors[publication.platform]}
                      style={{
                        marginBottom: '12px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                      }}
                    >
                      {platformLabels[publication.platform]}
                    </Tag>
                    
                    <Title
                      level={4}
                      style={{
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        marginBottom: '12px',
                        lineHeight: 1.4,
                      }}
                    >
                      {publication.title}
                    </Title>
                    
                    <div
                      style={{
                        marginBottom: '12px',
                      }}
                    >
                      <Text
                        style={{
                          color: 'var(--ant-color-text-secondary)',
                          fontSize: '0.85rem',
                        }}
                      >
                        {publication.authors.join(', ')}
                      </Text>
                      <Text
                        style={{
                          color: 'var(--ant-color-text-secondary)',
                          fontSize: '0.85rem',
                          marginLeft: '8px',
                        }}
                      >
                        • {publication.year}
                      </Text>
                    </div>
                    
                    <Paragraph
                      style={{
                        color: 'var(--ant-color-text-secondary)',
                        fontSize: '0.9rem',
                        lineHeight: 1.6,
                        flex: 1,
                        marginBottom: '16px',
                      }}
                    >
                      {publication.description}
                    </Paragraph>
                    
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        color: '#1890ff',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        marginTop: 'auto',
                      }}
                    >
                      <LinkOutlined style={{ marginRight: '6px' }} />
                      View Publication
                    </div>
                  </Card>
                </motion.div>
              </Col>
            );
          })}
        </Row>
      </div>
    </Content>
  );
}

