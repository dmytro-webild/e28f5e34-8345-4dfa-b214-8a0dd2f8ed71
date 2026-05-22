"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwelve from '@/components/sections/feature/FeatureCardTwelve';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import TeamCardFive from '@/components/sections/team/TeamCardFive';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="medium"
        background="none"
        cardStyle="gradient-mesh"
        primaryButtonStyle="flat"
        secondaryButtonStyle="solid"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "features",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="SAAR Holdings"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{
        variant: "radial-gradient",
      }}
      title="We Build. We Hold. We Grow."
      description="SAAR Holdings is a UK-based strategic investment and operational management company partnering with business owners to build long-term value."
      kpis={[
        {
          value: "100+",
          label: "Projects Managed",
        },
        {
          value: "20%",
          label: "Average Growth",
        },
        {
          value: "5+",
          label: "Sectors Covered",
        },
      ]}
      enableKpiAnimation={true}
      imageSrc="http://img.b2bpic.net/free-photo/relax-area-hotel_1150-10812.jpg"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/man-woman-together-car-dealership_23-2148333029.jpg",
          alt: "Investment professional 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/empty-office-workspace-showcases-monitor-with-research-analysis-meetings_482257-118634.jpg",
          alt: "Investment professional 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/employee-drinking-coffee-holding-laptop-working-strategy_482257-78092.jpg",
          alt: "Investment professional 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/company-managers-gathering-meeting-room-watching-project-presentation-computer-monitor-together-holding-paper-report-business-communication-teamwork-concept_74855-11622.jpg",
          alt: "Investment professional 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/sky-modern-houston-facade-glass_1203-6006.jpg",
          alt: "Investment professional 5",
        },
      ]}
      avatarText="Join 500+ institutional partners"
      marqueeItems={[
        {
          type: "text",
          text: "Strategic Growth",
        },
        {
          type: "text",
          text: "Operational Excellence",
        },
        {
          type: "text",
          text: "Sustainable Value",
        },
        {
          type: "text",
          text: "Direct Management",
        },
        {
          type: "text",
          text: "Portfolio Expansion",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Transforming Business Potential"
      description="From hospitality to healthcare, property to professional services – we bring hands-on expertise and strategic capital to businesses ready for transformation."
      metrics={[
        {
          value: "Strategic",
          title: "Capital Injection",
        },
        {
          value: "Operational",
          title: "Management Excellence",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/coworkers-engaging-problem-solving-meeting-corporation_482257-122842.jpg"
      mediaAnimation="slide-up"
      metricsAnimation="blur-reveal"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwelve
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        {
          id: "f1",
          label: "Finance",
          title: "Strategic Investment",
          items: [
            "Asset acquisition",
            "Turnaround strategy",
            "Capital restructuring",
          ],
        },
        {
          id: "f2",
          label: "Operations",
          title: "Operational Management",
          items: [
            "Process stabilization",
            "Resource allocation",
            "Scaling services",
          ],
        },
        {
          id: "f3",
          label: "Growth",
          title: "Asset Development",
          items: [
            "Market positioning",
            "Value optimization",
            "Portfolio expansion",
          ],
        },
      ]}
      title="Our Core Services"
      description="Comprehensive investment solutions tailored to stabilize and grow your assets."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="scale-rotate"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "35%",
          title: "Operational Efficiency",
          items: [
            "Automated workflows",
            "Cost reduction",
            "Resource optimization",
          ],
        },
        {
          id: "m2",
          value: "2.5x",
          title: "Value Creation",
          items: [
            "Asset valuation",
            "Market share gain",
            "Revenue synergy",
          ],
        },
        {
          id: "m3",
          value: "500",
          title: "Team Members",
          items: [
            "Expert consultants",
            "Specialized leads",
            "Direct management",
          ],
        },
      ]}
      title="Proven Performance Metrics"
      description="Our systematic approach delivers measurable results across our diverse investment portfolio."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      team={[
        {
          id: "t1",
          name: "John Doe",
          role: "CEO",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-confident-corporate-woman-professional-entrepreneur-smiling-cross-arms-chest-smiling-enthusiastic-standing-white-background_1258-85600.jpg",
        },
        {
          id: "t2",
          name: "Jane Smith",
          role: "Head of Finance",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-mature-businessman-sitting-staircase-making-hand-gesture_23-2147955296.jpg",
        },
        {
          id: "t3",
          name: "Michael Chen",
          role: "Operational Lead",
          imageSrc: "http://img.b2bpic.net/free-photo/friendly-successful-business-woman-posing-with-arms-crossed_74855-2813.jpg",
        },
      ]}
      title="Our Executive Team"
      description="Led by experienced industry veterans focused on stability and transformation."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah Johnson",
          handle: "@sjohnson",
          testimonial: "SAAR Holdings transformed our operations completely.",
          imageSrc: "http://img.b2bpic.net/free-photo/content-beautiful-businesswoman-standing-window_1262-1778.jpg",
        },
        {
          id: "2",
          name: "Michael Chen",
          handle: "@mchen",
          testimonial: "Exceptional capital injection and strategic insight.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-business-woman-classy-suit-by-office-center_1303-25335.jpg",
        },
        {
          id: "3",
          name: "Emily Rodriguez",
          handle: "@erod",
          testimonial: "Their hands-on approach is truly market leading.",
          imageSrc: "http://img.b2bpic.net/free-photo/modern-office-interior-design-with-wooden-walls-green-vertical-garden_191095-99739.jpg",
        },
        {
          id: "4",
          name: "David Kim",
          handle: "@dkim",
          testimonial: "A reliable partner for long-term growth.",
          imageSrc: "http://img.b2bpic.net/free-photo/financial-advisor-senior-couple-talking-while-analyzing-documents-consultations-office_637285-1178.jpg",
        },
        {
          id: "5",
          name: "Laura Williams",
          handle: "@lwilliams",
          testimonial: "They stabilized our business within six months.",
          imageSrc: "http://img.b2bpic.net/free-photo/businessman-leader-modern-office-with-businesspeople-working_1139-959.jpg",
        },
      ]}
      title="Partner Feedback"
      description="Building sustainable value through trusted long-term partnerships."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",
          title: "What industries do you operate in?",
          content: "We cover hospitality, healthcare, property, and professional services.",
        },
        {
          id: "q2",
          title: "How do you add value?",
          content: "By injecting strategic capital and hands-on operational management.",
        },
        {
          id: "q3",
          title: "What is the typical exit horizon?",
          content: "We focus on long-term value and sustainable growth.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Common inquiries regarding our investment and operational strategy."
      faqsAnimation="slide-up"
      imageSrc="http://img.b2bpic.net/free-photo/empty-office-workspace-showcases-monitor-with-research-analysis-meetings_482257-118634.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient",
      }}
      text="Ready to discuss your business transformation? Get in touch with our operations team today."
      buttons={[
        {
          text: "operations@saarholdings.co.uk",
          href: "mailto:operations@saarholdings.co.uk",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/beautiful-architecture-office-business-building-with-glass-window-shape_74190-6425.jpg"
      logoText="SAAR Holdings"
      columns={[
        {
          title: "Navigation",
          items: [
            {
              label: "Home",
              href: "#hero",
            },
            {
              label: "About",
              href: "#about",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Use",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2025 SAAR Holdings Ltd. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
