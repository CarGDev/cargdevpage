import type { ThemeConfig } from 'antd';

export const lightTheme: ThemeConfig = {
  token: {
    colorPrimary: '#1890ff',
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#ff4d4f',
    colorInfo: '#1890ff',
    colorBgBase: '#fafafa',
    colorBgContainer: '#ffffff',
    colorText: '#262626',
    colorTextSecondary: '#8c8c8c',
    colorBorder: '#f0f0f0',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontSize: 14,
    borderRadius: 8,
    lineHeight: 1.6,
  },
  components: {
    Layout: {
      headerBg: '#ffffff',
      bodyBg: '#fafafa',
    },
    Card: {
      colorBgContainer: '#ffffff',
    },
    Button: {
      borderRadius: 8,
    },
  },
};

export const darkTheme: ThemeConfig = {
  token: {
    colorPrimary: '#1890ff',
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#ff4d4f',
    colorInfo: '#1890ff',
    colorBgBase: '#141414',
    colorBgContainer: '#1f1f1f',
    colorText: '#f0f0f0',
    colorTextSecondary: '#bfbfbf',
    colorBorder: '#303030',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontSize: 14,
    borderRadius: 8,
    lineHeight: 1.6,
  },
  components: {
    Layout: {
      headerBg: '#1f1f1f',
      bodyBg: '#141414',
    },
    Card: {
      colorBgContainer: '#1f1f1f',
    },
    Button: {
      borderRadius: 8,
    },
  },
};
