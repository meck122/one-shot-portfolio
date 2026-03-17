import Nav from "@/components/nav";
import Hero from "@/components/hero";
import About from "@/components/about";
import Experience, { allJobs } from "@/components/experience";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Education from "@/components/education";
import Contact from "@/components/contact";
import FadeInSection from "@/components/fade-in-section";

export default function Home() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="snap-section" id="hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/hero-bg.jpg" className="snap-bg" alt="" />
        <div className="snap-vignette" />
        <div className="snap-content mx-auto max-w-6xl px-4 sm:px-6">
          <Hero />
        </div>
      </section>

      {/* About */}
      <section className="snap-section" id="about">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/about-bg.jpg" className="snap-bg" alt="" loading="lazy" />
        <div className="snap-vignette" />
        <div className="snap-content mx-auto max-w-6xl px-4 sm:px-6">
          <FadeInSection>
            <About />
          </FadeInSection>
        </div>
      </section>

      {/* Experience 1/3 — ZoomInfo */}
      <section className="snap-section" id="experience">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/experience-bg.jpg" className="snap-bg" alt="" loading="lazy" />
        <div className="snap-vignette" />
        <div className="snap-content mx-auto max-w-6xl px-4 sm:px-6">
          <FadeInSection>
            <Experience jobs={allJobs.slice(0, 1)} />
          </FadeInSection>
        </div>
      </section>

      {/* Experience 2/3 — Cisco */}
      <section className="snap-section" id="experience-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/experience-bg.jpg" className="snap-bg" alt="" loading="lazy" />
        <div className="snap-vignette" />
        <div className="snap-content mx-auto max-w-6xl px-4 sm:px-6">
          <FadeInSection>
            <Experience jobs={allJobs.slice(1, 2)} />
          </FadeInSection>
        </div>
      </section>

      {/* Experience 3/3 — Amazon + Zoom */}
      <section className="snap-section" id="experience-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/experience-bg.jpg" className="snap-bg" alt="" loading="lazy" />
        <div className="snap-vignette" />
        <div className="snap-content mx-auto max-w-6xl px-4 sm:px-6">
          <FadeInSection>
            <Experience jobs={allJobs.slice(2)} />
          </FadeInSection>
        </div>
      </section>

      {/* Projects */}
      <section className="snap-section" id="projects">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/projects-bg.jpg" className="snap-bg" alt="" loading="lazy" />
        <div className="snap-vignette" />
        <div className="snap-content mx-auto max-w-6xl px-4 sm:px-6">
          <FadeInSection>
            <Projects />
          </FadeInSection>
        </div>
      </section>

      {/* Skills */}
      <section className="snap-section" id="skills">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/skills-bg.jpg" className="snap-bg" alt="" loading="lazy" />
        <div className="snap-vignette" />
        <div className="snap-content mx-auto max-w-6xl px-4 sm:px-6">
          <FadeInSection>
            <Skills />
          </FadeInSection>
        </div>
      </section>

      {/* Education */}
      <section className="snap-section" id="education">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/education-bg.jpg" className="snap-bg" alt="" loading="lazy" />
        <div className="snap-vignette" />
        <div className="snap-content mx-auto max-w-6xl px-4 sm:px-6">
          <FadeInSection>
            <Education />
          </FadeInSection>
        </div>
      </section>

      {/* Contact */}
      <section className="snap-section" id="contact">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/contact-bg.jpg" className="snap-bg" alt="" loading="lazy" />
        <div className="snap-vignette" />
        <div className="snap-content mx-auto max-w-6xl px-4 sm:px-6">
          <FadeInSection>
            <Contact />
          </FadeInSection>
        </div>
      </section>
    </>
  );
}
