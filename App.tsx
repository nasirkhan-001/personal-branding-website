import { useState, useEffect } from 'react';
import {
  Building2,
  Calendar,
  ChevronDown,
  MapPin,
  Award,
  TrendingUp,
  Database,
  BarChart3,
  Globe,
  ExternalLink,
  Mail,
  Linkedin,
  Github,
  Send,
  Sparkles,
  Layers,
  CheckCircle2,
  Menu,
  X,
  FileSearch,
  PieChart,
  Users,
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 40);

      const sections = ['about', 'portfolio', 'insights', 'services', 'contact'];
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitSuccess(true);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitSuccess(false), 3000);
  };

  const credentials = [
    { label: 'Professional Affiliation', value: 'ACCA Member', icon: Award },
    { label: 'Professional Qualification', value: 'Associate Chartered Certified Accountant (ACCA)', icon: Award },
    { label: 'Regions', value: 'Asia, Middle East & North Africa, Europe', icon: Globe },
    { label: 'Years Experience', value: '6+', icon: Calendar },
  ];

  const trackRecord = [
    { label: 'Client Revenue Audited', value: 'PKR 1B+', icon: BarChart3 },
    { label: 'AUM Reviewed', value: 'USD 6B+', icon: TrendingUp },
    { label: 'Fund NAV Audited', value: '€250-500M', icon: PieChart },
    { label: 'Audit Engagements', value: '20+', icon: FileSearch },
    { label: 'Regions', value: 'Asia, Middle-East, Europe', icon: MapPin },
  ];

  const insights = [
    {
      title: 'Why Audit Still Needs Human Judgment in the Age of AI-Powered Machine Learning',
      description:
        'Audit quality often suffers under deadline pressure, not from lack of effort, but from time constraints on manual procedures. Data science and machine learning won\u2019t replace auditor judgment, but they can absorb the routine work that pressure compromises.',
      icon: Award,
    },
    {
      title: 'Auditing Alternative Investment Funds: What\u2019s Different from Corporate Audits',
      description:
        'Fund audits run on a different rhythm than corporate audits, shaped by NAV cycles, valuation judgment, and regulatory frameworks like CSSF oversight. A practical look at what sets fund audit apart.',
      icon: PieChart,
    },
    {
      title: 'Lessons from Cross-Border Audits: Asia to Europe',
      description:
        'Three jurisdictions, three regulatory cultures. Reflections on what changes and what stays constant moving from industrial audits in Pakistan to fund audits in Luxembourg.',
      icon: Globe,
    },
    {
      title: 'Closing Audit Efficiency Gap with Machine Learning',
      description:
        'Audit quality often suffers under deadline pressure, not from lack of effort, but from time constraints on manual procedures. Data science and ML can meaningfully close that gap by absorbing the routine work that pressure compromises.',
      icon: TrendingUp,
    },
    {
      title: 'Can ML Give Boards a Data Edge in Valuation?',
      description:
        'Valuation of assets, investments, and companies is consistently central to board discussions. Exploring how ML can capture market inefficiencies in near real-time. Currently in development as part of my Data Science and ML coursework with DLH Luxembourg.',
      icon: Database,
    },
  ];

  const expertise = [
    {
      title: 'Alternative Investment Funds Audit',
      description:
        'End to end Audits of real estate and private equity funds, both CSSF-regulated and unregulated structures, including NAV review and valuation support.',
      icon: PieChart,
    },
    {
      title: 'Industrial & Commercial Audit',
      description:
        'Statutory audits of industrial and commercial companies, including listed and large private corporation, in application of IFRS and local company laws.',
      icon: Building2,
    },
    {
      title: 'Real Estate & Asset Management',
      description:
        'Specialized audit experience with real estate developers and leading asset managers in Middle-East with focus on IFRS Consolidation reviews and cross-border regulated fund structures.',
      icon: Layers,
    },
    {
      title: 'Audit Coordination & Management',
      description:
        'Frameworks for managing multi-jurisdictional audits across Asia, the Middle East and North Africa, and Europe, including documentation standards and team workflows.',
      tags: ['Project Management', 'Audit Methodology', "Team Management"],
      status: 'Completed',
      icon: Globe,
    },
  ];

  const services = [
    {
      title: 'Financial Reporting Advisory',
      description:
        'Expert guidance on IFRS implementation, complex accounting judgments, and financial reporting optimisation.',
      features: [
        'Valuation review & advisory',
        'Management Reporting',
        'Consolidation support',
        'First-time IFRS adoption',
      ],
      icon: BarChart3,
    },
    {
      title: 'Audit Analytics & Automation',
      description:
        'Bridging traditional audit methodology with data science capabilities to enhance audit quality and efficiency.',
      features: [
        'Anomaly detection frameworks',
        'Process automation concepts',
        'Data-driven sampling',
        'Risk assessment modelling',
      ],
      icon: Database,
    },
    {
      title: 'Training & Knowledge Centre',
      description:
        'Building audit team capabilities through technical training on application of Data Science and Machine learning.',
      features: [
        'IFRS in application of Machine Learning',
        'Audit Methodology Optimization',
        'Regulatory and Market updates',
        'Audit documentation best practices',
      ],
      icon: Users,
    },
  ];

  const projects = [
    {
      title: 'ML- Powered Audit Analytics',
      description:
        'Developing machine learning models for audit procedure optimisation, automated anomaly detection, and risk scoring in financial statement audits.',
      tags: ['Python', 'Machine Learning', 'Risk Assessment', 'Audit Methodology'],
      status: 'In Development',
      icon: TrendingUp,
    },
    {
      title: 'Data-Driven Analysis and Valuation',
      description:
        'Building ML models that combine publicly available market data with company-specific information for financial forecasting, projections, and Level III fair value measurements, bringing rigour and scalability to complex financial models.',
      tags: ['Python', 'Financial Modelling', 'Machine Learning', 'Business Valuation'],
      status: 'In Development',
      icon: BarChart3,
    },
    {
      title: 'IFRS 9 ECL Automation',
      description:
        'Data-driven expected credit loss calculation models to replace manual spreadsheet processes with auditable, reproducible pipelines.',
      tags: ['Python', 'Statistical Modelling', 'IFRS'],
      status: 'In Development',
      icon: Database,
    },
    {
      title: 'Financial Statement Parser',
      description:
        'NLP pipeline that extracts structured data from PDF financial statements for benchmarking and disclosure checks.',
      tags: ['SQL', 'Databases', 'IFRS'],
      status: 'In Development',
      icon: Database,
    },
  ];
  
  const inputClass =
    'w-full px-4 py-3 bg-cream-200 border border-cream-300 rounded-xl text-bark-900 placeholder-bark-400 focus:outline-none focus:border-terra-400 focus:ring-1 focus:ring-terra-400 transition-colors';

  return (
    <div className="min-h-screen bg-cream-100">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          navScrolled ? 'bg-cream-50/95 backdrop-blur-sm border-b border-cream-300 shadow-sm' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <button
              onClick={() => scrollToSection('about')}
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <img
                src="/profile-photo.jpg"
                alt="Nasir Khan"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-cream-300"
              />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['About', 'Portfolio', 'Insights', 'Services', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium tracking-wide transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'text-terra-500'
                      : 'text-bark-600 hover:text-bark-900'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-bark-700 hover:text-bark-900"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-cream-50/95 backdrop-blur border-t border-cream-300">
            <div className="px-4 py-4 space-y-1">
              {['About', 'Portfolio', 'Insights', 'Services', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-3 text-bark-700 hover:text-bark-900 hover:bg-cream-200 rounded-lg transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* About Section */}
      <section
        id="about"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Subtle warm background texture */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-[480px] h-[480px] bg-terra-200/30 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-1/4 left-1/4 w-[360px] h-[360px] bg-cream-300/60 rounded-full blur-3xl animate-float"
            style={{ animationDelay: '3s' }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          {/* Hero */}
          <div className="text-center mb-20">
            <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.1s' }}>
              <span className="inline-flex items-center gap-2 px-5 py-2 bg-cream-200 border border-cream-300 rounded-full text-sm text-terra-600 font-medium mb-10 tracking-wide">
                <Sparkles size={14} className="text-terra-500" />
                Auditor transforming as Data Scientist
              </span>
            </div>

            <h1
              className="font-serif text-6xl sm:text-7xl md:text-8xl font-bold mb-4 animate-slide-up opacity-0 leading-tight"
              style={{ animationDelay: '0.15s' }}
            >
              <span className="text-bark-900">Nasir </span>
              <span className="gradient-text">Khan.</span>
            </h1>

            <p
              className="font-serif text-xl md:text-2xl text-bark-500 italic max-w-3xl mx-auto mb-10 animate-slide-up opacity-0 leading-relaxed"
              style={{ animationDelay: '0.25s' }}
            >
              Auditor by profession, turning number into insigths,
              and ambitious to transform Audit and Finance with a data-driven approach. 
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up opacity-0"
              style={{ animationDelay: '0.35s' }}
            >
              <button
                onClick={() => scrollToSection('portfolio')}
                className="px-8 py-4 bg-bark-900 hover:bg-bark-800 text-cream-50 font-semibold rounded-xl transition-all transform hover:scale-105"
              >
                Explore My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border border-bark-300 hover:border-bark-500 text-bark-700 hover:text-bark-900 font-semibold rounded-xl transition-all hover:bg-cream-200"
              >
                Start a Conversation
              </button>
            </div>
          </div>

          {/* Credentials Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {credentials.map((cred, index) => (
              <div
                key={index}
                className="warm-card p-6 text-center hover:border-terra-300 transition-all hover:shadow-md"
              >
                <cred.icon className="w-8 h-8 text-terra-500 mx-auto mb-3" />
                <div className="text-xl font-bold text-bark-900 mb-1 font-serif">{cred.value}</div>
                <div className="text-xs text-bark-500 font-medium tracking-wide uppercase">
                  {cred.label}
                </div>
              </div>
            ))}
          </div>

          {/* Track Record */}
          <div className="warm-card bg-bark-900 border-bark-900 p-8 md:p-10 mb-24">
            <h3 className="text-center text-xs font-semibold text-cream-400 uppercase tracking-wide mb-6">
              Track Record
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {trackRecord.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-6 h-6 text-terra-400 mx-auto mb-2" />
                  <div className="text-lg md:text-xl font-bold text-cream-50 mb-1 font-serif">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-cream-400 font-medium tracking-wide uppercase leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bio */}
          <div className="max-w-4xl mx-auto mb-24">
            <div className="warm-card p-8 md:p-12">
              <h2 className="font-serif text-3xl font-bold text-bark-900 mb-6">
                The Journey So Far
              </h2>
              <div className="space-y-6 text-bark-600 leading-relaxed text-lg">
                <p>
                  What started in telecom engineering, turned into deep interest in numbers and
                  data, and I've never looked back. Qaulifying ACCA and becoming an ACCA member in 2019 opened
                  doors to professinoal practice with leading audit brands across regions, and each with its own
                  regulatory landscape and professional culture.
                </p>
                <p>
                  From industrial and commercial audits in Pakistan, through the Big 4 network in
                  the Middle East and North Africa, to leading alternative fund audits in Luxembourg's
                  competitive financial sector, each move has added depth. Real estate
                  development, real estate and private equity funds, asset management platforms, and cross-border
                  structures. The complexity kept growing, and so did the learning.
                </p>
                <p>
                  Over six years in, I'm now adding another dimension. Data science and machine
                  learning aren't replacing the judgment built over years of audit work; they're
                  amplifying it. The goal isn't to automate the thinking out of audit. It's to
                  automate the routine so the thinking goes deeper.
                </p>
              </div>
            </div>
          </div>

          {/* Expertise */}
          <div>
            <div className="text-center mb-12">
              <h2 className="section-title">
                Portfolio and <span className="gradient-text">Expertise</span>
              </h2>
              <p className="text-bark-500">
                Built across six years of practice in three continents
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {expertise.map((area, index) => (
                <div
                  key={index}
                  className="warm-card p-6 hover:border-terra-300 hover:shadow-md transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-terra-100 flex items-center justify-center flex-shrink-0 group-hover:bg-terra-200 transition-colors">
                      <area.icon className="w-6 h-6 text-terra-500" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-bark-900 mb-2 group-hover:text-terra-600 transition-colors">
                        {area.title}
                      </h3>
                      <p className="text-bark-500 text-sm leading-relaxed">{area.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll hint */}
          <div className="mt-20 flex justify-center">
            <button onClick={() => scrollToSection('portfolio')} className="animate-bounce">
              <ChevronDown size={28} className="text-bark-400" />
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 md:py-32 bg-cream-200/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Transformation  <span className="gradient-text"> Initiatives</span>
            </h2>
            <p className="section-subtitle">
              Things I am building with Data and Machines Learning 
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="warm-card bg-cream-50 p-6 hover:border-terra-300 hover:shadow-md transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-terra-100 flex items-center justify-center group-hover:bg-terra-200 transition-colors">
                    <project.icon className="w-6 h-6 text-terra-500" />
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'In Development'
                        ? 'bg-terra-100 text-terra-600'
                        : 'bg-cream-300 text-bark-600'
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-bark-900 mb-3 group-hover:text-terra-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-bark-500 text-sm mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIndex) => (
                    <span
                      key={tIndex}
                      className="px-3 py-1 bg-cream-200 border border-cream-300 rounded-lg text-xs text-bark-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://github.com/nasirkhan-001"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 warm-card bg-cream-50 px-6 py-4 hover:border-terra-300 hover:shadow-md transition-all group"
            >
              <Github className="w-5 h-5 text-bark-400 group-hover:text-bark-700 transition-colors" />
              <span className="text-bark-600 group-hover:text-bark-900 transition-colors text-sm">
                More projects on GitHub as they develop
              </span>
              <ExternalLink size={14} className="text-bark-400" />
            </a>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section id="insights" className="py-24 md:py-32 bg-cream-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Latest <span className="gradient-text">Thinking</span>
            </h2>
            <p className="section-subtitle">
              Perspectives at the intersection of audit, finance, and data science
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insights.map((insight, index) => (
              <div
                key={index}
                className="warm-card bg-cream-50 p-6 hover:border-terra-300 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-terra-100 flex items-center justify-center mb-4 group-hover:bg-terra-200 transition-colors">
                  <insight.icon className="w-6 h-6 text-terra-500" />
                </div>
                <h3 className="text-base font-bold text-bark-900 mb-3 group-hover:text-terra-600 transition-colors leading-snug">
                  {insight.title}
                </h3>
                <p className="text-bark-500 text-sm leading-relaxed">{insight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-32 bg-cream-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Services &<span className="gradient-text"> Collaboration</span>
            </h2>
            <p className="section-subtitle">
              How I can add value to your team, and transformation projects that you ungoes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="warm-card p-8 hover:border-terra-300 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-xl bg-bark-900 flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-7 h-7 text-cream-100" />
                  </div>
                  <h3 className="text-lg font-bold text-bark-900 group-hover:text-terra-600 transition-colors">
                    {service.title}
                  </h3>
                </div>

                <p className="text-bark-500 text-sm mb-5 leading-relaxed">{service.description}</p>

                <ul className="space-y-2.5">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3 text-bark-600 text-sm">
                      <div className="w-1.5 h-1.5 bg-terra-500 rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="mt-16 warm-card bg-bark-900 border-bark-900 p-8 md:p-12 text-center">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-cream-100 mb-4">
              Looking for something specific?
            </h3>
            <p className="text-cream-400 max-w-2xl mx-auto mb-8">
              Every engagement is different. Whether you need audit support, reporting advisory, or
              want to explore how data analytics can enhance your finance function, let's discuss
              what you need.
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-cream-100 hover:bg-cream-200 text-bark-900 font-semibold rounded-xl transition-all transform hover:scale-105"
            >
              Start a Conversation
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 bg-cream-200/50">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="section-subtitle">
              Opportunities, collaborations, or questions about audit transformation and data
              analytics, all welcome.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-5">
              <div className="warm-card bg-cream-50 p-6">
                <h3 className="text-base font-semibold text-bark-900 mb-4">Get in Touch</h3>
                <div className="space-y-3">
                  <a
                    href="mailto:nasirkhan9372@gmail.com"
                    className="flex items-center gap-4 p-3 bg-cream-100 rounded-xl hover:bg-cream-200 transition-colors group"
                  >
                    <Mail className="w-5 h-5 text-terra-500" />
                    <span className="text-bark-600 group-hover:text-bark-900 transition-colors text-sm">
                      nasirkhan9372@gmail.com
                    </span>
                  </a>
                  <a
                    href="http://www.linkedin.com/in/nasirkhan001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 bg-cream-100 rounded-xl hover:bg-cream-200 transition-colors group"
                  >
                    <Linkedin className="w-5 h-5 text-terra-500" />
                    <span className="text-bark-600 group-hover:text-bark-900 transition-colors text-sm">
                      LinkedIn Profile
                    </span>
                  </a>
                  <a
                    href="https://github.com/nasirkhan-001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 bg-cream-100 rounded-xl hover:bg-cream-200 transition-colors group"
                  >
                    <Github className="w-5 h-5 text-bark-500" />
                    <span className="text-bark-600 group-hover:text-bark-900 transition-colors text-sm">
                      GitHub Projects
                    </span>
                  </a>
                </div>
              </div>

              <div className="warm-card bg-cream-50 p-6">
                <h3 className="text-base font-semibold text-bark-900 mb-4">Location</h3>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-terra-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-bark-700 font-medium">Luxembourg</p>
                    <p className="text-sm text-bark-500 mt-1">
                      Available for remote collaboration across time zones
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 warm-card bg-cream-50 p-6 md:p-8">
              <h3 className="text-base font-semibold text-bark-900 mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-bark-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className={inputClass}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-bark-700 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className={inputClass}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-bark-700 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className={inputClass}
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-bark-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell me about opportunities, collaborations, or just say hi..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-bark-900 hover:bg-bark-800 disabled:bg-bark-400 text-cream-50 font-semibold rounded-xl transition-all transform hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-cream-400 border-t-cream-50 rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>

                {submitSuccess && (
                  <div className="flex items-center gap-3 p-4 bg-terra-100 border border-terra-200 rounded-xl text-terra-700 animate-scale-in">
                    <CheckCircle2 size={20} />
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-cream-300 bg-cream-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-bark-400 text-sm">
              Built at the intersection of audit rigour and data analytics
            </p>
            <p className="text-bark-300 text-sm">© 2026 Nasir Khan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
