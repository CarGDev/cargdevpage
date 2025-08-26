import { Layout } from 'antd';
import {
  Header,
  HeroSection,
  AboutSection,
  SkillsSection,
  ExperienceSection,
  ProjectsSection,
  LeetCodeSection,
  CertificationsSection,
  ContactSection,
  Footer,
} from '@/components/organisms';

export function PortfolioTemplate() {
  return (
    <Layout>
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <LeetCodeSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </Layout>
  );
}
