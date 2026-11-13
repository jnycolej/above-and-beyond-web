"use client"
import { useState } from "react";

const services = [
  {
    number: "01",
    title: "VA Fiduciary Services",
    audience: "FOR BENEFICIARIES & FAMILIES",
    description: "Serving as a VA fiduciary to help beneficiaries manage their VA benefits.",
    detail: "Every person's circumstances are different. Get in touch to discuss fiduciary services and whether Above & Beyond may be a fit for your needs.",
    icon: "v"
  },
  {
    number: "02",
    title: "Adult Day Health Consulting",
    audience: "FOR ASPIRING CENTER OPERATORS",
    description: "Practical guidance for those planning to start an Adult Day Health Center.",
    detail: "Draw on firsthand adult day health experience to talk through your plans, questions, and next steps. Consulting availability and scope are disclosed individually.",
    icon: "⌂",
  },
]

export default function Home() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header>
        <a className="brand" href="#" aria-label="Above and Beyond home">
          <img
            src="/logo.png"
            alt="Above & Beyond Social Services"
            width="152"
            height="80"
          />
        </a>
        <button
          className="menu-toggle"
          aria-expanded={menu}
          aria-controls="navigation"
          onClick={() => setMenu(!menu)}
        >
          {menu ? "Close ✕" : "Menu ☰"}
        </button>
        <nav
          id="navigation"
          className={menu ? "open" : ""}
          aria-label="Main navigation"
        >
          <a onClick={() => setMenu(false)} href="#services">
            Services
          </a>
          <a onClick={() => setMenu(false)} href="#about">
            Our experience
          </a>
          <a onClick={() => setMenu(false)} href="#contact">
            Contact
          </a>
          <a
            onClick={() => setMenu(false)}
            className="button red"
            href="#contact"
          >
            Get in touch <span>↗</span>
          </a>
        </nav>
      </header>
      <main id="main">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">
              <span /> ABOVE & BEYOND SOCIAL SERVICES
            </p>
            <h1>
              Clear guidance.
              <br />
              Meaningful
              <br />
              <span>support.</span>
            </h1>
            <div className="short-rule" />
            <p className="intro">
              VA fiduciary services and practical guidance for those planning an
              Adult Day Health Center.
            </p>
            <div className="actions">
              <a className="button red" href="#services">
                Explore services <span>↗</span>
              </a>
            </div>
            <p className="hero-note">Experience that puts people first.</p>
          </div>
          <div className="architecture" aria-hidden="true">
            <div className="sky" />
            <div className="glass glass-one" />
            <div className="glass glass-two" />
            <div className="glass glass-three" />
            <div className="glass glass-four" />
            <div className="red-line" />
            <div className="gold-line" />
            <div className="architecture-caption">
              A stronger foundation.
              <br />A clearer path forward.
            </div>
          </div>
          <div className="hero-bottom">
            <span>PERSONAL COMMITMENT. PRACTICAL EXPERIENCE.</span>
            <a href="#services" aria-label="Scroll to services">
              ↓
            </a>
          </div>
        </section>
        <section id="services" className="services section">
          <p className="eyebrow">
            <span /> HOW WE CAN HELP
          </p>
          <div className="section-heading">
            <h2>
              Two services.
              <br />
              One thoughtful approach.
            </h2>
            <p>
              Focused support for individuals and families.
              <br />
              Experienced guidance for what comes next.
            </p>
          </div>
          <div className="service-grid">
            {services.map((s) => (
              <article className="service-card" key={s.number}>
                <div className="card-top">
                  <span className="number">{s.number}</span>
                  <span className="card-icon" aria-hidden="true">
                    {s.icon}
                  </span>
                </div>
                <p className="micro">{s.audience}</p>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                <details>
                  <summary>
                    Explore this service <span>+</span>
                  </summary>
                  <div className="detail-copy">
                    <p>{s.detail}</p>
                    <a href="#contact">Start a conversation →</a>
                  </div>
                </details>
              </article>
            ))}
          </div>
        </section>
         <section id="about" className="experience">
          <div className="experience-inner">
            <div>
              <p className="eyebrow light">
                <span /> GROUNDED IN EXPERIENCE
              </p>
              <h2>
                A strong foundation
                <br />
                of real-world
                <br />
                <em>experience.</em>
              </h2>
              <p>
                Behind Above & Beyond is more than two decades in home health
                administration, including ten years working at an adult day
                health center.
              </p>
              <p>
                That background informs a practical, personal approach to
                serving beneficiaries and advising those taking their first
                steps toward opening a center.
              </p>
            </div>
            <div className="stats">
              <div>
                <strong>
                  20<span>+</span>
                </strong>
                <div>
                  <b>years</b>
                  <p>Home health administration</p>
                </div>
              </div>
              <div>
                <strong>10</strong>
                <div>
                  <b>years</b>
                  <p>Adult day health experience</p>
                </div>
              </div>
              <small>Experience brought to every conversation.</small>
            </div>
          </div>
        </section>
                <section className="approach section">
          <p className="eyebrow">
            <span /> A PERSONAL APPROACH
          </p>
          <div className="approach-grid">
            <h2>
              Start with a question.
              <br />
              Find your next step.
            </h2>
            <ol>
              <li>
                <span>01</span>
                <div>
                  <h3>Tell us what brings you here.</h3>
                  <p>
                    Whether you’re seeking fiduciary services or exploring an
                    adult day health center, begin with your goals.
                  </p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <h3>Talk through the possibilities.</h3>
                  <p>
                    Discuss your circumstances, questions, and the kind of
                    support you’re looking for.
                  </p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <h3>Decide how to move forward.</h3>
                  <p>
                    Clarify the next steps and whether our services are the
                    right fit.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>
        <section id="contact" className="contact">
          <div>
            <p className="eyebrow">
              <span /> LET’S CONNECT
            </p>
            <h2>
              Let’s start a<br />
              conversation<span>.</span>
            </h2>
            <p>
              Looking for fiduciary services?
              <br />
              Planning an Adult Day Health Center?
              <br />
              We’d love to hear what you have in mind.
            </p>
          </div>
          <div className="contact-panel">
            <span className="micro">CONTACT ABOVE & BEYOND</span>
            <h3>
              A personal connection
              <br />
              starts here.
            </h3>
            <p>
              Contact details are being updated.
              <br />
              Please check back soon.
            </p>
            <div className="contact-status">
              <span /> Contact information coming soon
            </div>
          </div>
        </section>
      </main>
      <footer>
        <a href="#" className="brand">
          <img
            src="/logo.png"
            alt="Above & Beyond Social Services"
            width="140"
            height="74"
          />
        </a>
        <p>Thoughtful guidance. Personal commitment.</p>
        <div>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <small>
          © {new Date().getFullYear()} Above & Beyond Social Services
        </small>
      </footer>
    </>
  );
}
