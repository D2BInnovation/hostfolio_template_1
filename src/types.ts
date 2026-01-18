export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  linkedin: string;
  github: string;
  bio: string;
}

export interface HeroSection {
  greeting: string;
  description: string;
  primaryButton: {
    text: string;
    link: string;
  };
  secondaryButton: {
    text: string;
    link: string;
  };
}

export interface AboutSection {
  description: string[];
  skills: string[];
}

export interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  image: string;
  featured: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ContactSection {
  title: string;
  description: string;
  socialLinks: SocialLink[];
}

export interface PortfolioData {
  personal: PersonalInfo;
  hero: HeroSection;
  about: AboutSection;
  experience: ExperienceItem[];
  projects: ProjectItem[];
  contact: ContactSection;
}
