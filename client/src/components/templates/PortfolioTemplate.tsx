import { Layout } from 'antd';
import {
  Header,
  HeroSection,
  AboutSection,
  SkillsSection,
  PublicationsSection,
  ExperienceSection,
  ProjectsSection,
  LeetCodeSection,
  CertificationsSection,
  InTheirWordsSection,
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
      <PublicationsSection />
      <ExperienceSection />
      <ProjectsSection />
      <LeetCodeSection />
      <CertificationsSection />
      <InTheirWordsSection />
      <ContactSection />
      <Footer />
    </Layout>
  );
}
