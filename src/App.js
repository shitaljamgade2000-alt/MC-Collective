import { useState } from 'react';
import './App.css';

const navItems = ['Home', 'Services', 'Testimonials', 'Contact'];

const services = [
  {
    title: 'FF&E & OS&E Procurement',
    description:
      'From specification review to sourcing and purchasing, ensuring every item meets project requirements.',
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Supplier Sourcing',
    description:
      'Identify and coordinate with suitable suppliers and manufacturers based on quality, specification and project needs.',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Quotation Analysis & Negotiation',
    description:
      'Evaluate commercial offers, confirm value, and negotiate pricing without compromising project standards.',
    image:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Logistics & Delivery Coordination',
    description:
      'Align shipping schedules, import coordination and on-time delivery with site readiness and project milestones.',
    image:
      'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Site Coordination & Quality Control',
    description:
      'Monitor progress, preserve technical integrity and keep installation aligned with specification and quality expectations.',
    image:
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Snagging & Handover',
    description:
      'Close out final defects, coordinate handover documentation and support a smooth transition to operations.',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const getHref = (item) => {
    if (item === 'Home') return '#home';
    if (item === 'Services') return '#services';
    if (item === 'Testimonials') return '#testimonials';
    return '#contact-form';
  };

  return (
    <div className="min-h-screen bg-[#0d0d0b] text-stone-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0d0d0b]/70 backdrop-blur-md transition-all duration-300">
        <nav className="mx-auto max-w-7xl px-5 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a href="#home" className="flex items-center gap-3" aria-label="M&C Collective homepage">
              <div className="brand-mark flex h-11 w-11 items-center justify-center rounded-full border border-[#d6c4a3] bg-white/5 text-xs font-semibold tracking-[0.28em] text-[#e7d7b3]">
                M&C
              </div>
              <div className="leading-none">
                <div className="font-serif text-lg tracking-[0.28em] text-stone-100">M&C</div>
                <div className="mt-1 text-[10px] font-medium tracking-[0.52em] text-stone-300">COLLECTIVE</div>
              </div>
            </a>

            <div className="hidden items-center gap-8 text-sm text-stone-200 md:flex">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={getHref(item)}
                  className="transition-colors duration-200 hover:text-[#e7d7b3]"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="hidden items-center md:flex">
              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 rounded-full border border-[#d6c4a3]/80 bg-[#d6c4a3] px-5 py-2.5 text-sm font-medium text-[#141311] transition duration-200 hover:bg-[#e7d7b3]"
              >
                Let&apos;s Work Together <span aria-hidden="true">→</span>
              </a>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 md:hidden"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
            >
              <span className="space-y-1.5">
                <span className="block h-0.5 w-4 bg-stone-100" />
                <span className="block h-0.5 w-4 bg-stone-100" />
                <span className="block h-0.5 w-4 bg-stone-100" />
              </span>
            </button>
          </div>

          {menuOpen && (
            <div className="mt-4 rounded-2xl border border-white/10 bg-[#11110f] p-4 md:hidden">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={getHref(item)}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-xl px-3 py-2 text-sm text-stone-200 transition hover:bg-white/5 hover:text-[#e7d7b3]"
                  >
                    {item}
                  </a>
                ))}
                <a
                  href="#contact-form"
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-[#d6c4a3]/80 bg-[#d6c4a3] px-4 py-2.5 text-sm font-medium text-[#141311]"
                >
                  Let&apos;s Work Together <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main>
        <section id="home" className="relative isolate overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0b]/90 via-[#0d0d0b]/75 to-[#0d0d0b]/40" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pb-24 lg:pt-24">
            <div className="max-w-2xl">
              <p className="mb-6 inline-flex rounded-full border border-[#d6c4a3]/30 bg-white/5 px-3 py-1 text-[11px] font-medium tracking-[0.35em] text-[#e7d7b3] uppercase">
                HOSPITALITY PROCUREMENT · UAE & GCC
              </p>
              <h1 className="max-w-xl font-serif text-5xl leading-[0.98] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                Procurement that protects your vision, timeline &amp; budget.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-stone-200">
                M&amp;C Collective helps hotels, developers and fit-out contractors source, procure and deliver FF&amp;E and OS&amp;E — from specification to handover.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full bg-[#d6c4a3] px-6 py-3.5 text-sm font-medium text-[#141311] transition duration-200 hover:bg-[#e7d7b3]"
                >
                  Explore Our Services <span className="ml-2">→</span>
                </a>
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-medium text-white transition duration-200 hover:border-[#d6c4a3]/60 hover:text-[#e7d7b3]"
                >
                  Let&apos;s Work Together
                </a>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-10 text-left">
                <div>
                  <div className="text-3xl font-semibold text-white">10+ Years</div>
                  <div className="mt-1 text-sm text-stone-300">Hospitality furnishing experience</div>
                </div>
                <div>
                  <div className="text-3xl font-semibold text-white">UAE &amp; GCC</div>
                  <div className="mt-1 text-sm text-stone-300">Regional expertise</div>
                </div>
              </div>
            </div>

            <div className="relative lg:pl-6">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-stone-900 shadow-soft">
                <img
                  src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80"
                  alt="Luxury hospitality interior"
                  className="h-[620px] w-full object-cover"
                />
              </div>

              <div className="absolute -bottom-6 left-6 max-w-[260px] rounded-2xl border border-[#d6c4a3]/30 bg-[#11110f]/80 p-4 text-stone-100 shadow-soft backdrop-blur-sm">
                <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-2">
                  <span className="text-[11px] font-medium tracking-[0.24em] text-[#e7d7b3] uppercase">Experience</span>
                  <span className="text-sm text-stone-300">Since 2026</span>
                </div>
                <div className="mt-3 text-2xl font-semibold text-white">10+ Years</div>
                <p className="mt-1 text-sm leading-6 text-stone-300">Hospitality furnishing across the UAE and GCC.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
          <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
            <div className="relative h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#11110f] lg:h-[460px]">
              <img
                src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80"
                alt="Luxury hotel interior and furniture"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0b]/80 via-[#0d0d0b]/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center justify-between rounded-2xl border border-[#d6c4a3]/30 bg-[#11110f]/75 p-4 backdrop-blur-sm">
                  <div>
                    <p className="text-[10px] font-medium tracking-[0.24em] text-[#e7d7b3] uppercase">Trusted by</p>
                    <p className="mt-2 text-2xl font-semibold text-white">Hospitality teams</p>
                  </div>
                  <div className="rounded-full border border-[#d6c4a3]/40 bg-[#d6c4a3]/10 px-3 py-1 text-sm text-[#e7d7b3]">
                    UAE & GCC
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center rounded-[2rem] border border-white/10 bg-[#12120f] p-8 sm:p-10">
              <p className="text-sm font-medium tracking-[0.28em] text-[#d6c4a3] uppercase">Procurement support</p>
              <h2 className="mt-4 font-serif text-4xl tracking-[-0.04em] text-white sm:text-5xl">
                From Specification to Handover
              </h2>
              <p className="mt-5 text-lg leading-8 text-stone-300">
                End-to-end procurement support for hospitality projects across the UAE and GCC.
              </p>
            </div>
          </div>

          <div className="mb-10 mt-24 flex flex-col items-center gap-4 text-center">
            <div className="max-w-3xl">
              <p className="text-sm font-medium tracking-[0.28em] text-[#d6c4a3] uppercase">Our services</p>
              <h2 className="mt-3 font-serif text-3xl tracking-[-0.04em] text-white sm:text-4xl">
                Every detail, thoughtfully managed.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-stone-300">
              From first supplier conversations to final handover, we keep your procurement moving.
            </p>
          </div>

          <div className="grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#12120f] transition duration-300 hover:-translate-y-1 hover:border-[#d6c4a3]/50 hover:bg-[#171714]"
              >
                <div className="relative h-52 shrink-0 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0b]/70 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-5 rounded-full border border-[#d6c4a3]/40 bg-[#11110f]/75 px-3 py-1 text-xs font-medium tracking-[0.2em] text-[#e7d7b3] backdrop-blur-sm">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="min-h-[3.5rem] text-xl font-semibold leading-7 text-white sm:text-2xl">
                      {service.title}
                    </h3>
                    <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#d6c4a3]/40 bg-[#d6c4a3]/10 text-[#e7d7b3] transition group-hover:bg-[#d6c4a3] group-hover:text-[#141311]">
                      →
                    </span>
                  </div>
                  <p className="mt-4 flex-1 text-base leading-7 text-stone-300">{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="testimonials" className="bg-[#11110f] py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div className="flex flex-col justify-center rounded-[2rem] border border-[#d6c4a3]/25 bg-[#191815] p-8 sm:p-10">
              <p className="text-sm font-medium tracking-[0.28em] text-[#d6c4a3] uppercase">Testimonial preview</p>
              <span className="mt-8 font-serif text-6xl leading-none text-[#d6c4a3]" aria-hidden="true">“</span>
              <blockquote className="mt-3 font-serif text-3xl leading-snug tracking-[-0.03em] text-white sm:text-4xl">
                Procurement should protect the vision and make every detail easier to deliver.
              </blockquote>
              <p className="mt-8 border-t border-white/10 pt-5 text-sm leading-6 text-stone-400">
                Replace this sample with an approved client testimonial before publishing.
              </p>
            </div>

            <div id="contact-form" className="rounded-[2rem] border border-white/10 bg-[#12120f] p-8 sm:p-10">
              <p className="text-sm font-medium tracking-[0.28em] text-[#d6c4a3] uppercase">Contact</p>
              <h2 className="mt-4 font-serif text-4xl tracking-[-0.04em] text-white sm:text-5xl">Let&apos;s talk about your project.</h2>
              <p className="mt-4 text-base leading-7 text-stone-300">
                Tell us a little about what you&apos;re planning. Submitting opens a draft email in your email app.
              </p>

              <form
                className="mt-8 space-y-5"
                onSubmit={(event) => {
                  event.preventDefault();
                  const formData = new FormData(event.currentTarget);
                  const name = formData.get('name');
                  const email = formData.get('email');
                  const project = formData.get('project');
                  const subject = encodeURIComponent(`Project enquiry from ${name}`);
                  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nProject details:\n${project}`);
                  window.location.href = `mailto:hello@mccollective.ae?subject=${subject}&body=${body}`;
                }}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm text-stone-200">
                    Name
                    <input
                      required
                      name="name"
                      autoComplete="name"
                      className="mt-2 w-full rounded-xl border border-white/15 bg-[#0d0d0b] px-4 py-3 text-base text-white outline-none transition placeholder:text-stone-500 focus:border-[#d6c4a3]"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="block text-sm text-stone-200">
                    Email
                    <input
                      required
                      type="email"
                      name="email"
                      autoComplete="email"
                      className="mt-2 w-full rounded-xl border border-white/15 bg-[#0d0d0b] px-4 py-3 text-base text-white outline-none transition placeholder:text-stone-500 focus:border-[#d6c4a3]"
                      placeholder="you@company.com"
                    />
                  </label>
                </div>
                <label className="block text-sm text-stone-200">
                  Project details
                  <textarea
                    required
                    name="project"
                    rows="4"
                    className="mt-2 w-full resize-y rounded-xl border border-white/15 bg-[#0d0d0b] px-4 py-3 text-base text-white outline-none transition placeholder:text-stone-500 focus:border-[#d6c4a3]"
                    placeholder="Project type, location, timeline or support needed"
                  />
                </label>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d6c4a3] px-6 py-3.5 text-sm font-medium text-[#141311] transition hover:bg-[#e7d7b3]"
                >
                  Prepare Email <span aria-hidden="true">→</span>
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer" className="border-t border-[#d6c4a3]/20 bg-[#0b0b09]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#12120f] via-[#11110f] to-[#0b0b09] p-8 sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
              <div>
                <div className="flex items-center gap-3">
                  <div className="brand-mark flex h-11 w-11 items-center justify-center rounded-full border border-[#d6c4a3] bg-white/5 text-xs font-semibold tracking-[0.28em] text-[#e7d7b3]">
                    M&C
                  </div>
                  <div className="leading-none">
                    <div className="font-serif text-lg tracking-[0.28em] text-stone-100">M&C</div>
                    <div className="mt-1 text-[10px] font-medium tracking-[0.52em] text-stone-300">COLLECTIVE</div>
                  </div>
                </div>
                <p className="mt-6 max-w-md text-base leading-7 text-stone-300">
                  Hospitality procurement consultancy supporting the UAE and GCC with specification-led sourcing, strategic buying and smooth project delivery.
                </p>
              </div>

              <div>
                <p className="text-sm font-medium tracking-[0.28em] text-[#d6c4a3] uppercase">Industry</p>
                <ul className="mt-6 space-y-3 text-stone-200">
                  <li>Hotels</li>
                  <li>Developers</li>
                  <li>Design Consultants</li>
                  <li>Fit-Out Contractors</li>
                </ul>
              </div>

              <div>
                <p className="text-sm font-medium tracking-[0.28em] text-[#d6c4a3] uppercase">Contact</p>
                <div className="mt-6 space-y-3 text-stone-200">
                  <p>United Arab Emirates · Hybrid</p>
                  <p>Hospitality procurement consultancy</p>
                  <a href="#contact-form" className="inline-block text-[#e7d7b3] transition hover:text-white">
                    hello@mccollective.ae
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-stone-400">© 2026 M&amp;C Collective. All rights reserved.</p>
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d6c4a3]/70 bg-[#d6c4a3] px-5 py-2.5 text-sm font-medium text-[#141311] transition hover:bg-[#e7d7b3]"
              >
                Request a Consultation <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
