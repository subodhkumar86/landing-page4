import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Menu,
  X,
  Check,
  ChevronDown,
  Sparkles,
  BarChart3,
  Layers3,
  Target,
  ShieldCheck,
  Zap,
  MessageCircle
} from "lucide-react";
import "./styles.css";

const services = [
  { icon: Target, title: "Growth Strategy", text: "Turn business goals into a focused digital roadmap with measurable priorities." },
  { icon: Layers3, title: "Experience Design", text: "Create intuitive digital journeys that make your brand easier to trust and choose." },
  { icon: BarChart3, title: "Performance Marketing", text: "Build acquisition systems around qualified traffic, better tracking and clear ROI." },
  { icon: Zap, title: "Conversion Systems", text: "Remove friction from your funnel and improve the actions that matter most." }
];

const process = [
  ["01", "Discover", "We understand your audience, offer, market and current growth bottlenecks."],
  ["02", "Define", "We turn insight into positioning, messaging and a clear digital experience."],
  ["03", "Build", "We design and ship the strategy, website or funnel around commercial goals."],
  ["04", "Improve", "We measure the right signals and iterate in a continuous growth loop."]
];

const faqs = [
  ["What does Xntrova help with?", "We help brands improve digital experience, acquisition and conversion systems through strategy, design and performance-focused execution."],
  ["Can you work with an existing website?", "Yes. We can audit the current funnel, identify friction and improve the experience without a full rebuild."],
  ["How do projects usually start?", "Most partnerships begin with a discovery conversation and a focused recommendation based on your goals, audience and current performance."],
  ["Do you support ongoing growth?", "Yes. We can stay involved through iteration, optimization, content or performance campaigns based on the business need."]
];

function App() {
  const [menu, setMenu] = useState(false);
  const [open, setOpen] = useState(null);
  const [sent, setSent] = useState(false);

  const submit = (event) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <div className="site-shell">
      <header className="main-header">
        <div className="container nav-row">
          <a href="#top" className="brand-link" onClick={() => setMenu(false)}>
            <span className="brand-mark">X</span>
            <span>xntrova<span className="dot">.</span></span>
          </a>

          <nav className={menu ? "main-nav open" : "main-nav"}>
            <a href="#capabilities" onClick={() => setMenu(false)}>Capabilities</a>
            <a href="#approach" onClick={() => setMenu(false)}>Approach</a>
            <a href="#results" onClick={() => setMenu(false)}>Results</a>
            <a href="#faq" onClick={() => setMenu(false)}>FAQ</a>
            <a className="nav-cta" href="#contact" onClick={() => setMenu(false)}>Start a project <ArrowUpRight size={16} /></a>
          </nav>

          <button className="menu-btn" aria-label="Toggle menu" aria-expanded={menu} onClick={() => setMenu(!menu)}>
            {menu ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><Sparkles size={15} /> DIGITAL GROWTH PARTNER</div>
              <h1>Make your digital presence your <em>unfair advantage.</em></h1>
              <p>
                Xntrova helps ambitious companies turn strategy, design and technology into digital experiences that move people and business forward.
              </p>

              <div className="hero-actions">
                <a href="#contact" className="primary-btn">Talk to our team <ArrowUpRight size={18} /></a>
                <a href="#capabilities" className="text-link">Explore capabilities <ArrowUpRight size={16} /></a>
              </div>

              <div className="proof-row">
                <div className="avatar-stack">
                  <span>AK</span>
                  <span>SM</span>
                  <span>RJ</span>
                  <span>+</span>
                </div>
                <div className="proof-copy">
                  <strong>Built for ambitious teams</strong>
                  <small>Strategy-led. Performance-minded.</small>
                </div>
              </div>
            </div>

            <div className="hero-art">
              <div className="art-glow" />
              <div className="orbit orbit-a" />
              <div className="orbit orbit-b" />

              <div className="center-card">
                <div className="card-top">
                  <span>Growth signal</span>
                  <span className="live-pill"><i /> LIVE</span>
                </div>
                <div className="signal-number">84<span>%</span></div>
                <div className="signal-label">digital momentum</div>
                <div className="mini-bars">
                  <i style={{ height: "34%" }} />
                  <i style={{ height: "48%" }} />
                  <i style={{ height: "42%" }} />
                  <i style={{ height: "65%" }} />
                  <i style={{ height: "58%" }} />
                  <i style={{ height: "78%" }} />
                  <i style={{ height: "91%" }} />
                </div>
                <div className="card-bottom"><span>Experience</span><b>+32.8%</b></div>
              </div>

              <div className="float-card one"><Target size={18} /><span><b>Clear positioning</b><small>Message people remember</small></span></div>
              <div className="float-card two"><Zap size={18} /><span><b>Faster growth</b><small>Systems built to convert</small></span></div>
            </div>
          </div>
        </section>

        <div className="marquee">
          <div>STRATEGY <span>•</span> DESIGN <span>•</span> TECHNOLOGY <span>•</span> PERFORMANCE <span>•</span> GROWTH <span>•</span> STRATEGY <span>•</span> DESIGN <span>•</span> TECHNOLOGY</div>
        </div>

        <section className="intro-section section-space">
          <div className="container intro-grid">
            <div className="section-tag">WHY XNTROVA</div>
            <div className="intro-copy">
              <h2>Good digital work looks beautiful. <span>Great digital work creates momentum.</span></h2>
              <p>We connect the creative and commercial sides of digital so your website is not just another asset. It becomes an engine for growth.</p>
              <a href="#contact" className="text-link">See what we can build together <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </section>

        <section id="capabilities" className="section-space capabilities-section">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="section-tag">CAPABILITIES</div>
                <h2>From first click to <span>lasting customer.</span></h2>
              </div>
              <p>One partner for the digital work that makes your business easier to discover, trust and choose.</p>
            </div>

            <div className="service-grid">
              {services.map(({ icon: Icon, title, text }, index) => (
                <article className="service-card" key={title}>
                  <div className="service-number">0{index + 1}</div>
                  <div className="service-icon"><Icon size={22} /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <a href="#contact">Explore <ArrowUpRight size={16} /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="results" className="section-space metrics-section">
          <div className="container metrics-wrap">
            <div className="metrics-copy">
              <div className="section-tag">BUILT AROUND OUTCOMES</div>
              <h2>Design decisions backed by <span>business thinking.</span></h2>
              <p>We do not chase vanity metrics. We focus on the signals that tell you whether your digital presence is helping the business move.</p>
              <ul>
                <li><Check size={18} /> Clear goals before execution</li>
                <li><Check size={18} /> Conversion-first experiences</li>
                <li><Check size={18} /> Measurable improvement loops</li>
              </ul>
            </div>

            <div className="metric-board">
              <div className="metric-main">
                <small>Average conversion lift</small>
                <strong>+42<span>%</span></strong>
                <div className="trend">↗ across optimized experiences</div>
              </div>
              <div className="metric-row">
                <div><small>Engagement</small><b>+68%</b></div>
                <div><small>Qualified leads</small><b>+51%</b></div>
              </div>
              <div className="chart-block">
                <div className="chart-labels"><span>Before</span><span>After</span></div>
                <div className="chart-line"><i /><i /><i /><i /><i /><i /><i /><i /></div>
              </div>
            </div>
          </div>
        </section>

        <section id="approach" className="section-space process-section">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="section-tag">OUR APPROACH</div>
                <h2>Simple process. <span>Serious intent.</span></h2>
              </div>
            </div>

            <div className="process-grid">
              {process.map(([num, title, text]) => (
                <article key={num} className="process-card">
                  <span>{num}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="quote-block">
          <div className="container quote-inner">
            <div className="quote-mark">“</div>
            <blockquote>When strategy, creativity and technology pull in the same direction, digital stops being a cost centre and starts becoming a growth advantage.</blockquote>
            <div className="quote-author">
              <div className="author-mark">XO</div>
              <span><b>Xntrova</b><small>Digital growth partner</small></span>
            </div>
          </div>
        </section>

        <section id="faq" className="section-space faq-section">
          <div className="container faq-grid">
            <div className="faq-copy">
              <div className="section-tag">QUESTIONS</div>
              <h2>Things you may want to <span>know.</span></h2>
              <p>Still have a question? Let's talk.</p>
              <a href="#contact" className="text-link">Ask our team <ArrowUpRight size={16} /></a>
            </div>

            <div className="faq-list">
              {faqs.map(([question, answer], index) => (
                <div key={question} className={open === index ? "faq-item active" : "faq-item"}>
                  <button onClick={() => setOpen(open === index ? null : index)}>
                    <span>{question}</span>
                    <ChevronDown size={18} />
                  </button>
                  {open === index && <p>{answer}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-space contact-section">
          <div className="container contact-panel">
            <div className="contact-copy">
              <div className="section-tag">LET'S BUILD</div>
              <h2>Have a challenge? <span>Let's make it an opportunity.</span></h2>
              <p>Tell us where you are today and where you want to go. We will come back with ideas, not a generic sales pitch.</p>

              <div className="contact-info">
                <div><MessageCircle size={18} /> <span><small>Start a conversation</small><b>hello@xntrova.com</b></span></div>
                <div><ShieldCheck size={18} /> <span><small>Your information</small><b>Handled with care</b></span></div>
              </div>
            </div>

            <form className="contact-form" onSubmit={submit}>
              <label>
                Your name
                <input placeholder="John Smith" required />
              </label>
              <label>
                Work email
                <input type="email" placeholder="john@company.com" required />
              </label>
              <label>
                What can we help with?
                <textarea rows="4" placeholder="Tell us a little about your project..." required />
              </label>
              <button type="submit" className="primary-btn">{sent ? "Message received ✓" : "Start the conversation"} {!sent && <ArrowUpRight size={18} />}</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <div>
            <a href="#top" className="brand-link footer-brand">
              <span className="brand-mark">X</span>
              <span>xntrova<span className="dot">.</span></span>
            </a>
            <p>Digital experiences built around ambitious business outcomes.</p>
          </div>

          <div className="footer-links">
            <div>
              <b>Explore</b>
              <a href="#capabilities">Capabilities</a>
              <a href="#approach">Approach</a>
              <a href="#results">Results</a>
            </div>
            <div>
              <b>Connect</b>
              <a href="#contact">Start a project</a>
              <a href="#faq">FAQ</a>
              <a href="#top">Back to top ↑</a>
            </div>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Xntrova. All rights reserved.</span>
          <span>Built for growth.</span>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
