import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Monitor, Cpu, Wrench, Zap, Calendar, Code2,
  Mail, Linkedin, MessageCircle, ChevronDown,
  Terminal, Shield, Globe, Smartphone,
  ArrowUpRight, ExternalLink, Filter
} from 'lucide-react';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } }
};

// Section wrapper with intersection observer
function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.section>
  );
}

// Navigation
function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#050505]/90 backdrop-blur-xl border-b border-[#1f1f23]/60' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#3b82f6] to-[#1d4ed8] flex items-center justify-center">
              <Terminal className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-sm text-[#f3f4f6]">Lucas Matheus</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#especialidades" className="text-sm text-[#9ca3af] hover:text-[#f3f4f6] transition-colors">Especialidades</a>
            <a href="#projetos" className="text-sm text-[#9ca3af] hover:text-[#f3f4f6] transition-colors">Projetos</a>
            <a href="#contato" className="text-sm text-[#9ca3af] hover:text-[#f3f4f6] transition-colors">Contato</a>
          </div>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-[#3b82f6]/10 border border-[#3b82f6]/30 rounded-lg text-[#3b82f6] text-sm font-medium hover:bg-[#3b82f6]/20 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Contato</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />
      
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3b82f6]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#f59e0b]/3 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Status badge */}
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0f0f10] border border-[#1f1f23] mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-[#9ca3af] font-medium">Disponível para projetos</span>
          </motion.div>

          {/* Name */}
          <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4">
            <span className="gradient-text">Lucas Matheus</span>
          </motion.h1>
          <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="text-[#f3f4f6]">do Nascimento</span>
          </motion.h1>

          {/* Title */}
          <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-[#3b82f6] font-medium mb-6">
            Técnico de TI em Suporte & Especialista em Soluções Tecnológicas
          </motion.p>

          {/* Bio */}
          <motion.p variants={fadeInUp} className="max-w-3xl mx-auto text-[#9ca3af] text-base sm:text-lg leading-relaxed mb-10">
            Sou Lucas Matheus, técnico de TI em suporte e especialista em criar soluções tecnológicas práticas e eficientes. 
            Unindo suporte de hardware, visão estratégica e foco em resolver problemas reais de ponta a ponta, atuo orquestrando 
            ferramentas de inteligência artificial para conceber, estruturar e validar softwares utilitários, automações e PWAs 
            sob medida, além de gerenciar a infraestrutura técnica e terminais interativos em eventos.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 bg-[#3b82f6] text-white rounded-xl font-medium text-sm hover:bg-[#2563eb] transition-all hover:shadow-lg hover:shadow-[#3b82f6]/20"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="mailto:lucas@email.com"
              className="group flex items-center gap-2 px-6 py-3 bg-[#0f0f10] border border-[#1f1f23] text-[#f3f4f6] rounded-xl font-medium text-sm hover:border-[#3b82f6]/50 transition-all"
            >
              <Mail className="w-4 h-4" />
              E-mail
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="https://linkedin.com/in/lucasmatheus"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 bg-[#0f0f10] border border-[#1f1f23] text-[#f3f4f6] rounded-xl font-medium text-sm hover:border-[#3b82f6]/50 transition-all"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#especialidades" className="flex flex-col items-center gap-2 text-[#6b7280] hover:text-[#9ca3af] transition-colors">
            <span className="text-xs">Explorar</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// Specialties Section
function SpecialtiesSection() {
  const specialties = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'Suporte Técnico & Hardware',
      description: 'Montagem de hardware, manutenção térmica (troca de pasta térmica e limpeza preventiva), configuração de BIOS, formatação e otimização de sistemas operacionais, além de cabeamento básico e organização de cabos em bancadas e estações.',
      tags: ['Hardware', 'BIOS', 'Manutenção', 'Cabeamento'],
      color: 'blue'
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Soluções & Softwares Guiados por IA',
      description: 'Concepção, arquitetura e direcionamento de aplicações web, PWAs, sistemas de quiosque touch (all-in-one) e ferramentas de automação desenvolvidas em parceria com IA para otimizar fluxos de trabalho reais.',
      tags: ['PWA', 'Web Apps', 'Automação', 'IA'],
      color: 'yellow'
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Operação e Infraestrutura para Eventos',
      description: 'Montagem, desmontagem e operação de totens de credenciamento e terminais interativos, além da gestão completa de MediaDesk — recebimento, testes e validação de qualidade de apresentações com palestrantes.',
      tags: ['Eventos', 'MediaDesk', 'Totens', 'LAN'],
      color: 'blue'
    }
  ];

  return (
    <AnimatedSection className="section-gradient py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/20 text-[#3b82f6] text-xs font-medium mb-4">
            <Zap className="w-3 h-3" />
            COMPETÊNCIAS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f3f4f6] mb-4">Minhas Especialidades</h2>
          <p className="text-[#9ca3af] max-w-2xl mx-auto">
            Três pilares de atuação que se complementam para entregar soluções completas e eficientes.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {specialties.map((spec, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              className="glass-card rounded-2xl p-6 sm:p-8 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                spec.color === 'blue' 
                  ? 'bg-[#3b82f6]/10 text-[#3b82f6] group-hover:bg-[#3b82f6]/20' 
                  : 'bg-[#f59e0b]/10 text-[#f59e0b] group-hover:bg-[#f59e0b]/20'
              } transition-colors`}>
                {spec.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-[#f3f4f6] mb-3">{spec.title}</h3>

              {/* Description */}
              <p className="text-[#9ca3af] text-sm leading-relaxed mb-6">{spec.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {spec.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-md bg-[#1f1f23]/60 text-[#9ca3af] text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

// Projects Section
function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'Todos', icon: <Filter className="w-3.5 h-3.5" /> },
    { id: 'software', label: 'Softwares & Ferramentas', icon: <Code2 className="w-3.5 h-3.5" /> },
    { id: 'automation', label: 'Automações', icon: <Zap className="w-3.5 h-3.5" /> },
    { id: 'events', label: 'Eventos', icon: <Calendar className="w-3.5 h-3.5" /> },
    { id: 'hardware', label: 'Hardware & Suporte', icon: <Wrench className="w-3.5 h-3.5" /> }
  ];

  const projects = [
    {
      category: 'software',
      title: 'Kiosk Master Player',
      version: 'v2.7',
      description: 'Aplicativo desktop em Electron operando em modo quiosque restrito para computadores All-in-One touch (sem teclado ou mouse externos), com segurança offline baseada em TOTP 2FA.',
      tags: ['Electron', 'TOTP 2FA', 'Kiosk', 'Offline'],
      icon: <Monitor className="w-5 h-5" />,
      highlight: true
    },
    {
      category: 'software',
      title: 'Vesper',
      version: 'PWA',
      description: 'Gestor Financeiro — PWA construída com Next.js, Supabase e Vercel, com interface responsiva e modais BottomSheet para gestão financeira prática.',
      tags: ['Next.js', 'Supabase', 'Vercel', 'PWA'],
      icon: <Smartphone className="w-5 h-5" />,
      highlight: false
    },
    {
      category: 'software',
      title: 'CogniCode',
      version: 'Plataforma',
      description: 'Plataforma interativa de aprendizado de lógica de programação com abordagem neurodidática.',
      tags: ['Educação', 'Lógica', 'Neurodidática'],
      icon: <Globe className="w-5 h-5" />,
      highlight: false
    },
    {
      category: 'software',
      title: 'LibertaLab',
      version: 'Plataforma',
      description: 'Plataforma aberta de educação financeira para democratizar o acesso ao conhecimento financeiro.',
      tags: ['Educação', 'Finanças', 'Open'],
      icon: <Globe className="w-5 h-5" />,
      highlight: false
    },
    {
      category: 'software',
      title: 'Web App Interior Design',
      version: 'Tool',
      description: 'Ferramenta customizada em HTML/JavaScript com calculadora técnica e gerador de moodboard para estudantes de design de interiores.',
      tags: ['HTML', 'JavaScript', 'Design', 'Moodboard'],
      icon: <Monitor className="w-5 h-5" />,
      highlight: false
    },
    {
      category: 'software',
      title: 'PWA Comunicação Privada',
      version: 'PWA',
      description: 'App privativo de voz e vídeo via WebRTC e Supabase/Firebase para uso familiar sem chip.',
      tags: ['WebRTC', 'Supabase', 'Firebase', 'P2P'],
      icon: <Shield className="w-5 h-5" />,
      highlight: false
    },
    {
      category: 'automation',
      title: 'Automação PowerPoint VBA',
      version: 'Macro',
      description: 'Macro customizada para inserção automatizada de slides de logo de eventos entre apresentações de palestrantes.',
      tags: ['VBA', 'PowerPoint', 'Automação'],
      icon: <Zap className="w-5 h-5" />,
      highlight: false
    },
    {
      category: 'automation',
      title: 'Robô de Criptomoedas',
      version: 'Bot',
      description: 'Bot de trade automatizado com Python, Redis, Pandas, API da Binance e Docker para operações automatizadas.',
      tags: ['Python', 'Redis', 'Binance API', 'Docker'],
      icon: <Terminal className="w-5 h-5" />,
      highlight: true
    },
    {
      category: 'events',
      title: '11º Simpósio Intl. Tumores Gastrointestinais',
      version: 'Evento',
      description: 'Gestão de MediaDesk, validação de arquivos e app web local em Firebase para sincronização em tempo real de slides entre notebooks da equipe técnica.',
      tags: ['MediaDesk', 'Firebase', 'LAN', 'Tempo Real'],
      icon: <Calendar className="w-5 h-5" />,
      highlight: true
    },
    {
      category: 'events',
      title: 'Eventos Corporativos e Congressos',
      version: 'Infra',
      description: 'Montagem de totens touch, redes LAN offline para transporte rápido de arquivos e organização de displays (ex: TJCC).',
      tags: ['Totens', 'LAN', 'Displays', 'Congressos'],
      icon: <Monitor className="w-5 h-5" />,
      highlight: false
    },
    {
      category: 'hardware',
      title: 'Montagem e Otimização de PCs',
      version: 'Hardware',
      description: 'Seleção de hardware, manutenção térmica preventiva com pasta de alta performance e otimização profunda de sistemas e BIOS.',
      tags: ['Montagem', 'Térmica', 'BIOS', 'Otimização'],
      icon: <Cpu className="w-5 h-5" />,
      highlight: false
    },
    {
      category: 'hardware',
      title: 'Organização de Bancadas e Cabeamento',
      version: 'Infra',
      description: 'Técnicas avançadas de cabeamento e organização estruturada em bancadas de atendimento e estações de trabalho.',
      tags: ['Cabeamento', 'Bancada', 'Organização'],
      icon: <Wrench className="w-5 h-5" />,
      highlight: false
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <AnimatedSection className="py-24 sm:py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/20 text-[#f59e0b] text-xs font-medium mb-4">
            <Terminal className="w-3 h-3" />
            PORTFÓLIO
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f3f4f6] mb-4">Projetos & Atuações</h2>
          <p className="text-[#9ca3af] max-w-2xl mx-auto">
            Uma seleção dos principais projetos e atuações desenvolvidos ao longo da carreira.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeFilter === cat.id
                  ? 'bg-[#3b82f6]/15 text-[#3b82f6] border border-[#3b82f6]/30'
                  : 'bg-[#0f0f10] text-[#9ca3af] border border-[#1f1f23] hover:border-[#2a2a30] hover:text-[#f3f4f6]'
              }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={`${project.title}-${index}`}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={`glass-card rounded-2xl p-6 transition-all duration-300 group relative overflow-hidden ${
                project.highlight ? 'ring-1 ring-[#3b82f6]/20' : ''
              }`}
            >
              {/* Highlight indicator */}
              {project.highlight && (
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#3b82f6]/10 to-transparent" />
              )}

              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  project.highlight 
                    ? 'bg-[#3b82f6]/15 text-[#3b82f6]' 
                    : 'bg-[#1f1f23] text-[#9ca3af] group-hover:text-[#3b82f6]'
                } transition-colors`}>
                  {project.icon}
                </div>
                <span className="px-2 py-0.5 rounded-md bg-[#1f1f23]/80 text-[#6b7280] text-xs font-mono">
                  {project.version}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-[#f3f4f6] mb-2 group-hover:text-[#3b82f6] transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-[#9ca3af] text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded bg-[#0f0f10] border border-[#1f1f23] text-[#6b7280] text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover link indicator */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="w-4 h-4 text-[#3b82f6]" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

// Contact Section
function ContactSection() {
  return (
    <AnimatedSection className="py-24 sm:py-32 section-gradient">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-4">
            <MessageCircle className="w-3 h-3" />
            CONTATO
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f3f4f6] mb-4">Vamos trabalhar juntos?</h2>
          <p className="text-[#9ca3af] max-w-xl mx-auto">
            Estou disponível para novos projetos, consultorias e parcerias. Entre em contato pelo canal de sua preferência.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* WhatsApp */}
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-2xl p-6 text-center group hover:border-emerald-500/30 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500/20 transition-colors">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-semibold text-[#f3f4f6] mb-1">WhatsApp</h3>
            <p className="text-xs text-[#6b7280]">Resposta rápida</p>
          </a>

          {/* Email */}
          <a
            href="mailto:lucas@email.com"
            className="glass-card rounded-2xl p-6 text-center group hover:border-[#3b82f6]/30 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-[#3b82f6]/10 text-[#3b82f6] flex items-center justify-center mx-auto mb-4 group-hover:bg-[#3b82f6]/20 transition-colors">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-semibold text-[#f3f4f6] mb-1">E-mail</h3>
            <p className="text-xs text-[#6b7280]">Projetos e propostas</p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/lucasmatheus"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-2xl p-6 text-center group hover:border-[#3b82f6]/30 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-[#3b82f6]/10 text-[#3b82f6] flex items-center justify-center mx-auto mb-4 group-hover:bg-[#3b82f6]/20 transition-colors">
              <Linkedin className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-semibold text-[#f3f4f6] mb-1">LinkedIn</h3>
            <p className="text-xs text-[#6b7280]">Networking profissional</p>
          </a>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

// Footer
function Footer() {
  return (
    <footer id="contato" className="border-t border-[#1f1f23]/60 bg-[#0a0a0b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#3b82f6] to-[#1d4ed8] flex items-center justify-center">
              <Terminal className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#f3f4f6]">Lucas Matheus do Nascimento</p>
              <p className="text-xs text-[#6b7280]">Técnico de TI & Especialista em Soluções Tecnológicas</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a href="mailto:lucas@email.com" className="text-[#6b7280] hover:text-[#3b82f6] transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/lucasmatheus" target="_blank" rel="noopener noreferrer" className="text-[#6b7280] hover:text-[#3b82f6] transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" className="text-[#6b7280] hover:text-emerald-400 transition-colors">
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-[#1f1f23]/40 text-center">
          <p className="text-xs text-[#6b7280]">
            © {new Date().getFullYear()} Lucas Matheus do Nascimento. Todos os direitos reservados.
          </p>
          <p className="text-xs text-[#4b5563] mt-1">
            Desenvolvido com dedicação e precisão técnica.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Main App
export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#f3f4f6] font-sans">
      <Navbar />
      <HeroSection />
      <SpecialtiesSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
