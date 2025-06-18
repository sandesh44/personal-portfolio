'use client';

import Navigation from '@/components/navigation';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import ProjectsSection from '@/components/projects-section';
import ResumeSection from '@/components/resume-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </main>
  );
}