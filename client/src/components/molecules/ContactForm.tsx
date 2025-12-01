import { Form, Input, Button, message } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';

const { TextArea } = Input;

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactForm() {
  const [form] = Form.useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      message.success('Thank you for your message! I\'ll get back to you soon.');
      form.resetFields();
    },
    onError: (error: any) => {
      console.error('Contact form error:', error);
      message.error('Failed to send message. Please try again.');
    },
  });

  const handleSubmit = async (values: ContactFormData) => {
    setIsSubmitting(true);
    try {
      await contactMutation.mutateAsync(values);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleSubmit}
      style={{
        background: 'var(--ant-color-bg-container)',
        padding: '32px',
        borderRadius: '12px',
        border: '1px solid var(--ant-color-border)',
      }}
    >
      <h3 style={{ marginBottom: '24px', fontSize: '1.2rem' }}>Send a Message</h3>
      
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please input your name!' }]}
      >
        <Input data-testid="input-name" placeholder="Your full name" />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: 'Please input your email!' },
          { type: 'email', message: 'Please enter a valid email!' }
        ]}
      >
        <Input data-testid="input-email" placeholder="your.email@example.com" />
      </Form.Item>

      <Form.Item
        label="Subject"
        name="subject"
        rules={[{ required: true, message: 'Please input a subject!' }]}
      >
        <Input data-testid="input-subject" placeholder="What is this about?" />
      </Form.Item>

      <Form.Item
        label="Message"
        name="message"
        rules={[{ required: true, message: 'Please input your message!' }]}
      >
        <TextArea
          rows={5}
          data-testid="input-message"
          placeholder="Tell me about your project or inquiry..."
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          icon={<SendOutlined />}
          loading={isSubmitting || contactMutation.isPending}
          data-testid="button-send-message"
          style={{
            background: '#1890ff !important',
            borderColor: '#1890ff !important',
          }}
        >
          {isSubmitting || contactMutation.isPending ? 'Sending...' : 'Send Message'}
        </Button>
      </Form.Item>
    </Form>
  );
}
