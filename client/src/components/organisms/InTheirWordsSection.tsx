import { Layout, Typography, Card, Button, Row, Col } from 'antd';
import { 
  MessageOutlined,
  CheckOutlined,
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons';
import { motion } from 'framer-motion';
import { testimonials } from '@/data/portfolio';
import { useState, useEffect, useCallback } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

export function InTheirWordsSection() {
  const isMobile = useIsMobile();
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = isMobile ? 1 : 3;
  const totalPages = Math.ceil(testimonials.length / cardsPerPage);

  const goToNextPage = useCallback(() => {
    setCurrentPage((prev) => {
      const cardsPerPage = isMobile ? 1 : 3;
      const total = Math.ceil(testimonials.length / cardsPerPage);
      return (prev + 1) % total;
    });
  }, [isMobile]);

  const goToPrevPage = useCallback(() => {
    setCurrentPage((prev) => {
      const cardsPerPage = isMobile ? 1 : 3;
      const total = Math.ceil(testimonials.length / cardsPerPage);
      return (prev - 1 + total) % total;
    });
  }, [isMobile]);

  // Reset to first page when cardsPerPage changes
  useEffect(() => {
    setCurrentPage(0);
  }, [isMobile]);

  const getCurrentTestimonials = () => {
    const start = currentPage * cardsPerPage;
    return testimonials.slice(start, start + cardsPerPage);
  };

  const renderTestimonialCard = (testimonial: typeof testimonials[0], index: number) => (
    <Col xs={24} md={8} key={index} style={{ marginBottom: '24px' }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ scale: 1.02, y: -5 }}
      >
        <Card
          style={{
            height: '100%',
            border: '1px solid var(--ant-color-border)',
            display: 'flex',
            flexDirection: 'column',
            minHeight: '500px',
          }}
          data-testid={`card-testimonial-${testimonial.company}`}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '20px',
            }}
          >
            <div
              style={{
                width: '50px',
                height: '50px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                color: 'white',
                marginRight: '12px',
              }}
            >
              <MessageOutlined />
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: 'var(--ant-color-text)',
                  marginBottom: '4px',
                }}
              >
                {testimonial.company}
              </div>
              <div
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--ant-color-text-secondary)',
                }}
              >
                {testimonial.position} • {testimonial.duration}
              </div>
            </div>
          </div>
          
          <Paragraph
            style={{
              color: 'var(--ant-color-text)',
              fontSize: '0.95rem',
              lineHeight: 1.7,
              marginBottom: '20px',
              fontStyle: 'italic',
              flex: 1,
            }}
          >
            "{testimonial.quote}"
          </Paragraph>
          
          <div
            style={{
              borderTop: '1px solid var(--ant-color-border)',
              paddingTop: '16px',
              marginTop: 'auto',
            }}
          >
            <div
              style={{
                fontSize: '0.9rem',
                fontWeight: 600,
                color: 'var(--ant-color-text)',
                marginBottom: '8px',
              }}
            >
              Key Contributions:
            </div>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
              }}
            >
              {testimonial.highlights.slice(0, 3).map((highlight, idx) => (
                <li
                  key={idx}
                  style={{
                    marginBottom: '6px',
                    position: 'relative',
                    paddingLeft: '20px',
                    color: 'var(--ant-color-text-secondary)',
                    fontSize: '0.85rem',
                    lineHeight: 1.5,
                  }}
                >
                  <CheckOutlined
                    style={{
                      position: 'absolute',
                      left: 0,
                      color: '#52c41a',
                      fontSize: '12px',
                      top: '3px',
                    }}
                  />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
          
          <div
            style={{
              marginTop: '16px',
              paddingTop: '16px',
              borderTop: '1px solid var(--ant-color-border)',
              textAlign: 'right',
            }}
          >
            <Text
              style={{
                fontSize: '0.85rem',
                color: 'var(--ant-color-text-secondary)',
                fontWeight: 500,
              }}
            >
              — {testimonial.author}
            </Text>
            <br />
            <Text
              style={{
                fontSize: '0.75rem',
                color: 'var(--ant-color-text-secondary)',
              }}
            >
              {testimonial.authorTitle}
            </Text>
          </div>
        </Card>
      </motion.div>
    </Col>
  );

  return (
    <Content
      id="testimonials"
      style={{
        background: 'var(--ant-color-bg-container)',
        padding: '64px 24px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <Title level={2} style={{ fontSize: '2.5rem', fontWeight: 700 }}>
            In Their Words
          </Title>
          <Paragraph
            style={{
              fontSize: '1.1rem',
              color: 'var(--ant-color-text-secondary)',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            Employment verification letters and recommendations from previous employers highlighting my professional contributions and impact.
          </Paragraph>
        </div>
        
        <div style={{ position: 'relative', width: '100%', padding: isMobile ? '0' : '0 60px' }}>
          <div style={{ position: 'relative', marginBottom: '24px' }}>
            
            
            <div style={{ overflow: 'hidden', width: '100%' }}>
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <Row gutter={[24, 24]} justify="center">
                  {getCurrentTestimonials().map((testimonial, index) =>
                    renderTestimonialCard(testimonial, currentPage * cardsPerPage + index)
                  )}
                </Row>
              </motion.div>
            </div>

            
          </div>

          {/* Mobile navigation buttons */}
          {isMobile && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '16px',
                marginBottom: '24px',
              }}
            >
              <Button
                type="primary"
                shape="circle"
                icon={<LeftOutlined />}
                onClick={goToPrevPage}
                size="large"
                style={{
                  borderRadius: '50%',
                }}
              />
              <Button
                type="primary"
                shape="circle"
                icon={<RightOutlined />}
                onClick={goToNextPage}
                size="large"
                style={{
                  borderRadius: '50%',
                }}
              />
            </div>
          )}

          {/* Dots indicator */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '8px',
              marginTop: '24px',
            }}
          >
            {Array.from({ length: totalPages }).map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentPage(index)}
                style={{
                  width: currentPage === index ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: currentPage === index ? '#1890ff' : 'var(--ant-color-border)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </Content>
  );
}

