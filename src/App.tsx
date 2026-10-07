import { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  Monitor, Cpu, Wrench, Zap, Calendar, Code2,
  Mail, Instagram, MessageCircle, ChevronDown,
  Terminal, Shield, Globe, Smartphone,
  ArrowUpRight, ExternalLink, Filter,
  User, CheckCircle2, Clock, Beaker
} from 'lucide-react';

/* ─────────────────────────────────────────────
   ANIMATION VARIANTS
   ───────────────────────────────────────────── */
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }
  }
};

/* ─────────────────────────────────────────────
   ANIMATED SECTION WRAPPER (Intersection Observer)
   ───────────────────────────────────────────── */
function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

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

/* ─────────────────────────────────────────────
   NAVBAR
   ───────────────────────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-[#050505]/95 backdrop-blur-2xl border-b border-[#1f1f23]/60 shadow-lg shadow-black/20'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#3b82f6] to-[#1d4ed8] flex items-center justify-center shadow-lg shadow-[#3b82f6]/20">
              <Terminal className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-sm text-[#f3f4f6] tracking-tight">Lucas Matheus</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="text-sm text-[#d1d5db] hover:text-[#f3f4f6] transition-colors duration-200">Sobre</a>
            <a href="#especialidades" className="text-sm text-[#d1d5db] hover:text-[#f3f4f6] transition-colors duration-200">Especialidades</a>
            <a href="#projetos" className="text-sm text-[#d1d5db] hover:text-[#f3f4f6] transition-colors duration-200">Projetos</a>
            <a href="#contato" className="text-sm text-[#d1d5db] hover:text-[#f3f4f6] transition-colors duration-200">Contato</a>
          </div>
          <a
            href="https://wa.me/5511978863129"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-[#3b82f6]/10 border border-[#3b82f6]/30 rounded-lg text-[#3b82f6] text-sm font-medium hover:bg-[#3b82f6]/20 hover:border-[#3b82f6]/50 transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Contato</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ─────────────────────────────────────────────
   HERO SECTION (Contraste Corrigido)
   ───────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.025]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#3b82f6]/[0.04] rounded-full blur-[100px]" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#f59e0b]/[0.02] rounded-full blur-[80px]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Status badge */}
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0f0f10]/80 border border-[#1f1f23] mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-[#d1d5db] font-medium">Disponível para projetos</span>
          </motion.div>

          {/* Name */}
          <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4">
            <span className="gradient-text">Lucas Matheus</span>
          </motion.h1>
          <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="text-[#f3f4f6]">do Nascimento</span>
          </motion.h1>

          {/* Title — alto contraste */}
          <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-[#60a5fa] font-semibold mb-6 tracking-tight">
            Técnico de TI em Suporte & Especialista em Soluções Tecnológicas
          </motion.p>

          {/* Bio — contraste elevado para leitura confortável */}
          <motion.p variants={fadeInUp} className="max-w-3xl mx-auto text-base sm:text-lg leading-relaxed mb-10" style={{ color: '#f1f5f9' }}>
            Sou Lucas Matheus, técnico de TI em suporte e especialista em criar soluções tecnológicas práticas e eficientes.
            Unindo suporte de hardware, visão estratégica e foco em resolver problemas reais de ponta a ponta, atuo orquestrando
            ferramentas de inteligência artificial para conceber, estruturar e validar softwares utilitários, automações e PWAs
            sob medida, além de gerenciar a infraestrutura técnica e terminais interativos em eventos.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/5511978863129"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 bg-[#3b82f6] text-white rounded-xl font-medium text-sm hover:bg-[#2563eb] transition-all duration-300 hover:shadow-lg hover:shadow-[#3b82f6]/25 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </a>
            <a
              href="mailto:lucas19980112@gmail.com"
              className="group flex items-center gap-2 px-6 py-3 bg-[#0f0f10] border border-[#2a2a30] text-[#e5e7eb] rounded-xl font-medium text-sm hover:border-[#3b82f6]/50 hover:text-[#f3f4f6] transition-all duration-300 hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4" />
              E-mail
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </a>
            <a
              href="https://instagram.com/lucasmatheus.ti"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 bg-[#0f0f10] border border-[#2a2a30] text-[#e5e7eb] rounded-xl font-medium text-sm hover:border-[#3b82f6]/50 hover:text-[#f3f4f6] transition-all duration-300 hover:-translate-y-0.5"
            >
              <Instagram className="w-4 h-4" />
              Instagram
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </a>
          </motion.div>
        </motion.div>


      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SOBRE MIM (Nova Seção)
   ───────────────────────────────────────────── */
function AboutSection() {
  const highlights = [
    { icon: <Wrench className="w-4 h-4" />, text: 'Técnico de TI em Suporte' },
    { icon: <Cpu className="w-4 h-4" />, text: 'Estruturação de Bancadas' },
    { icon: <Zap className="w-4 h-4" />, text: 'Automações Inteligentes' },
    { icon: <Calendar className="w-4 h-4" />, text: 'Infraestrutura para Eventos' }
  ];

  return (
    <AnimatedSection className="py-20 sm:py-28 bg-[#0a0a0b] relative">
      {/* Subtle divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-[#1f1f23] to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Left: Label */}
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/20 text-[#3b82f6] text-xs font-medium mb-4">
              <User className="w-3 h-3" />
              SOBRE MIM
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#f3f4f6] tracking-tight">
              Quem é<br />
              <span className="text-[#60a5fa]">Lucas Matheus?</span>
            </h2>
          </motion.div>

          {/* Right: Content */}
          <motion.div variants={fadeInUp} className="lg:col-span-3 space-y-5">
            <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#e2e8f0' }}>
              Atuo como <strong style={{ color: '#f3f4f6' }} className="font-semibold">Técnico de TI em Suporte</strong>, com foco prático em montagem e manutenção de hardware, estruturação de bancadas de atendimento e gestão de infraestrutura técnica para eventos de grande porte.
            </p>
            <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#e2e8f0' }}>
              Paralelamente, desenvolvo <strong style={{ color: '#f3f4f6' }} className="font-semibold">automações e soluções tecnológicas</strong> sob medida — orquestrando IA para conceber softwares utilitários, PWAs e ferramentas internas que resolvem problemas reais de fluxo de trabalho.
            </p>
            <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#cbd5e1' }}>
              Minha abordagem é direta: entender o problema, estruturar a solução e entregar resultado. Sem promessas vazias — apenas execução técnica de ponta a ponta.
            </p>

            {/* Highlight chips */}
            <div className="flex flex-wrap gap-2 pt-2">
              {highlights.map((item, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141416] border border-[#1f1f23] text-[#d1d5db] text-xs font-medium"
                >
                  <span className="text-[#3b82f6]">{item.icon}</span>
                  {item.text}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}

/* ─────────────────────────────────────────────
   TECH STACK SECTION
   ───────────────────────────────────────────── */
function TechStackSection() {
  const techCategories = [
    {
      title: 'Frontend & UI',
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3']
    },
    {
      title: 'Backend & Database',
      items: ['Node.js', 'Python', 'Supabase', 'Firebase', 'Redis', 'PostgreSQL']
    },
    {
      title: 'Desktop & Mobile',
      items: ['Electron', 'PWA', 'WebRTC', 'Responsive Design']
    },
    {
      title: 'DevOps & Tools',
      items: ['Docker', 'Vercel', 'Git', 'VBA', 'PowerShell', 'Bash']
    }
  ];

  return (
    <AnimatedSection className="py-20 sm:py-24 bg-[#050505] relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-[#1f1f23] to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/20 text-[#f59e0b] text-xs font-medium mb-4">
            <Code2 className="w-3 h-3" />
            TECNOLOGIAS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f3f4f6] mb-4">Stack Tecnológico</h2>
          <p className="text-[#cbd5e1] max-w-2xl mx-auto" style={{ color: '#cbd5e1' }}>
            Ferramentas e tecnologias que utilizo para construir soluções eficientes e escaláveis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {techCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              variants={scaleIn}
              className="glass-card rounded-xl p-5"
            >
              <h3 className="text-sm font-semibold text-[#60a5fa] mb-4 uppercase tracking-wide">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="px-3 py-1.5 rounded-lg bg-[#0f0f10] border border-[#1f1f23] text-xs font-medium hover:border-[#3b82f6]/40 hover:text-[#60a5fa] transition-all duration-200 cursor-default"
                    style={{ color: '#e2e8f0' }}
                  >
                    {item}
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

/* ─────────────────────────────────────────────
   SPECIALTIES SECTION
   ───────────────────────────────────────────── */
function SpecialtiesSection() {
  const specialties = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'Suporte Técnico & Hardware',
      description: 'Montagem de hardware, manutenção térmica (troca de pasta térmica e limpeza preventiva), configuração de BIOS, formatação e otimização de sistemas operacionais, além de cabeamento básico e organização de cabos em bancadas e estações (sem atuação em projetos de infraestrutura de rede corporativa complexa).',
      tags: ['Hardware', 'BIOS', 'Manutenção', 'Cabeamento'],
      color: 'blue'
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Soluções & Softwares Guiados por IA',
      description: 'Concepção, arquitetura e direcionamento de aplicações web, PWAs, sistemas de quiosque touch (all-in-one) e ferramentas de automação (como scripts e gestão financeira) desenvolvidas em parceria com IA para otimizar fluxos de trabalho reais.',
      tags: ['PWA', 'Web Apps', 'Automação', 'IA'],
      color: 'yellow'
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Operação e Infraestrutura para Eventos',
      description: 'Montagem, desmontagem e operação de totens de credenciamento e terminais interativos, além da gestão completa de MediaDesk — recebimento, testes e validação de qualidade de apresentações com palestrantes, organização e envio via rede LAN local.',
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
          <p className="text-[#b0b5bf] max-w-2xl mx-auto">
            Três pilares de atuação que se complementam para entregar soluções completas e eficientes.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {specialties.map((spec, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              className="glass-card rounded-2xl p-6 sm:p-8 group"
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                spec.color === 'blue'
                  ? 'bg-[#3b82f6]/10 text-[#3b82f6] group-hover:bg-[#3b82f6]/20'
                  : 'bg-[#f59e0b]/10 text-[#f59e0b] group-hover:bg-[#f59e0b]/20'
              } transition-colors duration-300`}>
                {spec.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-[#f3f4f6] mb-3">{spec.title}</h3>

              {/* Description */}
              <p className="text-sm leading-relaxed mb-6" style={{ color: '#cbd5e1' }}>{spec.description}</p>

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

/* ─────────────────────────────────────────────
   STATUS BADGE COMPONENT
   ───────────────────────────────────────────── */
type ProjectStatus = 'prototype' | 'development' | 'internal';

function StatusBadge({ status }: { status: ProjectStatus }) {
  const config = {
    prototype: {
      icon: <CheckCircle2 className="w-3 h-3" />,
      label: 'Protótipo Funcional',
      className: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
    },
    development: {
      icon: <Clock className="w-3 h-3" />,
      label: 'Em Desenvolvimento',
      className: 'bg-amber-500/10 text-amber-400 border-amber-500/20'
    },
    internal: {
      icon: <Beaker className="w-3 h-3" />,
      label: 'Projeto Interno / Laboratório',
      className: 'bg-[#3b82f6]/10 text-[#60a5fa] border-[#3b82f6]/20'
    }
  };

  const { icon, label, className } = config[status];

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-[10px] font-semibold uppercase tracking-wider ${className}`}>
      {icon}
      {label}
    </span>
  );
}

/* ─────────────────────────────────────────────
   PROJECTS SECTION (Status Real dos Projetos)
   ───────────────────────────────────────────── */
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
      status: 'prototype' as ProjectStatus,
      highlight: true
    },
    {
      category: 'software',
      title: 'Vesper',
      version: 'PWA',
      description: 'Gestor Financeiro — PWA construída com Next.js, Supabase e Vercel, com interface responsiva e modais BottomSheet para gestão financeira prática.',
      tags: ['Next.js', 'Supabase', 'Vercel', 'PWA'],
      icon: <Smartphone className="w-5 h-5" />,
      status: 'development' as ProjectStatus,
      highlight: false,
      demoUrl: 'https://vesperfinancas.vercel.app/'
    },
    {
      category: 'software',
      title: 'CogniCode',
      version: 'Plataforma',
      description: 'Plataforma interativa de aprendizado de lógica de programação com abordagem neurodidática.',
      tags: ['Educação', 'Lógica', 'Neurodidática'],
      icon: <Globe className="w-5 h-5" />,
      status: 'development' as ProjectStatus,
      highlight: false
    },
    {
      category: 'software',
      title: 'LibertaLab',
      version: 'Plataforma',
      description: 'Plataforma aberta de educação financeira para democratizar o acesso ao conhecimento financeiro.',
      tags: ['Educação', 'Finanças', 'Open'],
      icon: <Globe className="w-5 h-5" />,
      status: 'development' as ProjectStatus,
      highlight: false
    },
    {
      category: 'software',
      title: 'Web App Interior Design',
      version: 'Tool',
      description: 'Ferramenta customizada em HTML/JavaScript com calculadora técnica e gerador de moodboard para estudantes de design de interiores.',
      tags: ['HTML', 'JavaScript', 'Design', 'Moodboard'],
      icon: <Monitor className="w-5 h-5" />,
      status: 'internal' as ProjectStatus,
      highlight: false
    },
    {
      category: 'software',
      title: 'PWA Comunicação Privada',
      version: 'PWA',
      description: 'App privativo de voz e vídeo via WebRTC e Supabase/Firebase para uso familiar sem chip.',
      tags: ['WebRTC', 'Supabase', 'Firebase', 'P2P'],
      icon: <Shield className="w-5 h-5" />,
      status: 'internal' as ProjectStatus,
      highlight: false
    },
    {
      category: 'automation',
      title: 'Automação PowerPoint VBA',
      version: 'Macro',
      description: 'Macro customizada para inserção automatizada de slides de logo de eventos entre apresentações de palestrantes.',
      tags: ['VBA', 'PowerPoint', 'Automação'],
      icon: <Zap className="w-5 h-5" />,
      status: 'internal' as ProjectStatus,
      highlight: false
    },
    {
      category: 'automation',
      title: 'Robô de Criptomoedas',
      version: 'Bot',
      description: 'Bot de trade automatizado com Python, Redis, Pandas, API da Binance e Docker para operações automatizadas.',
      tags: ['Python', 'Redis', 'Binance API', 'Docker'],
      icon: <Terminal className="w-5 h-5" />,
      status: 'development' as ProjectStatus,
      highlight: true
    },
    {
      category: 'events',
      title: '11º Simpósio Intl. Tumores Gastrointestinais',
      version: 'Evento',
      description: 'Gestão de MediaDesk, validação de arquivos e app web local em Firebase para sincronização em tempo real de slides entre notebooks da equipe técnica.',
      tags: ['MediaDesk', 'Firebase', 'LAN', 'Tempo Real'],
      icon: <Calendar className="w-5 h-5" />,
      status: 'internal' as ProjectStatus,
      highlight: true
    },
    {
      category: 'events',
      title: 'Eventos Corporativos e Congressos',
      version: 'Infra',
      description: 'Montagem de totens touch, redes LAN offline para transporte rápido de arquivos e organização de displays (ex: TJCC).',
      tags: ['Totens', 'LAN', 'Displays', 'Congressos'],
      icon: <Monitor className="w-5 h-5" />,
      status: 'internal' as ProjectStatus,
      highlight: false
    },
    {
      category: 'hardware',
      title: 'Montagem e Otimização de PCs',
      version: 'Hardware',
      description: 'Seleção de hardware, manutenção térmica preventiva com pasta de alta performance e otimização profunda de sistemas e BIOS.',
      tags: ['Montagem', 'Térmica', 'BIOS', 'Otimização'],
      icon: <Cpu className="w-5 h-5" />,
      status: 'internal' as ProjectStatus,
      highlight: false
    },
    {
      category: 'hardware',
      title: 'Organização de Bancadas e Cabeamento',
      version: 'Infra',
      description: 'Técnicas avançadas de cabeamento e organização estruturada em bancadas de atendimento e estações de trabalho.',
      tags: ['Cabeamento', 'Bancada', 'Organização'],
      icon: <Wrench className="w-5 h-5" />,
      status: 'internal' as ProjectStatus,
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
          <p className="text-[#b0b5bf] max-w-2xl mx-auto">
            Uma seleção dos principais projetos e atuações desenvolvidos. Status transparente de cada iniciativa.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeFilter === cat.id
                  ? 'bg-[#3b82f6]/15 text-[#3b82f6] border border-[#3b82f6]/30 shadow-sm shadow-[#3b82f6]/10'
                  : 'bg-[#0f0f10] text-[#9ca3af] border border-[#1f1f23] hover:border-[#2a2a30] hover:text-[#e5e7eb]'
              }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Projects grid with AnimatePresence for smooth filter transitions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${project.title}-${activeFilter}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.06, ease: [0.25, 0.4, 0.25, 1] }}
                className={`project-card glass-card rounded-2xl p-6 group relative overflow-hidden ${
                  project.highlight ? 'ring-1 ring-[#3b82f6]/15' : ''
                }`}
              >
                {/* Highlight gradient overlay */}
                {project.highlight && (
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#3b82f6]/[0.06] to-transparent pointer-events-none" />
                )}

                {/* Header: Icon + Version + Status Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    project.highlight
                      ? 'bg-[#3b82f6]/15 text-[#3b82f6]'
                      : 'bg-[#1f1f23] text-[#9ca3af] group-hover:text-[#3b82f6]'
                  } transition-colors duration-300`}>
                    {project.icon}
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-[#1f1f23]/80 text-[#6b7280] text-xs font-mono">
                    {project.version}
                  </span>
                </div>

                {/* Status Badge */}
                <div className="mb-3">
                  <StatusBadge status={project.status} />
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold mb-2 group-hover:text-[#60a5fa] transition-colors duration-300" style={{ color: '#ffffff' }}>
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#cbd5e1' }}>
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

                {/* Demo button (only if demoUrl exists) */}
                {'demoUrl' in project && project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#3b82f6]/10 border border-[#3b82f6]/30 text-[#60a5fa] text-xs font-medium hover:bg-[#3b82f6]/20 hover:border-[#3b82f6]/50 transition-all duration-300"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Ver Demo
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </AnimatedSection>
  );
}

/* ─────────────────────────────────────────────
   CONTACT SECTION
   ───────────────────────────────────────────── */
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
          <p className="text-[#b0b5bf] max-w-xl mx-auto">
            Estou disponível para novos projetos, consultorias e parcerias. Entre em contato pelo canal de sua preferência.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* WhatsApp */}
          <a
            href="https://wa.me/5511978863129"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-2xl p-6 text-center group hover:border-emerald-500/30 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500/20 transition-colors duration-300">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-semibold text-[#f3f4f6] mb-1">WhatsApp</h3>
            <p className="text-xs text-[#6b7280]">Resposta rápida</p>
          </a>

          {/* Email */}
          <a
            href="mailto:lucas19980112@gmail.com"
            className="glass-card rounded-2xl p-6 text-center group hover:border-[#3b82f6]/30 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-[#3b82f6]/10 text-[#3b82f6] flex items-center justify-center mx-auto mb-4 group-hover:bg-[#3b82f6]/20 transition-colors duration-300">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-semibold text-[#f3f4f6] mb-1">E-mail</h3>
            <p className="text-xs text-[#6b7280]">Projetos e propostas</p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://instagram.com/lucasmatheus.ti"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-2xl p-6 text-center group hover:border-[#f59e0b]/30 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f59e0b]/20 to-[#ec4899]/20 text-[#f59e0b] flex items-center justify-center mx-auto mb-4 group-hover:from-[#f59e0b]/30 group-hover:to-[#ec4899]/30 transition-all duration-300">
              <Instagram className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-semibold text-[#f3f4f6] mb-1">Instagram</h3>
            <p className="text-xs text-[#6b7280]">@lucasmatheus.ti</p>
          </a>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

/* ─────────────────────────────────────────────
   FOOTER
   ───────────────────────────────────────────── */
function Footer() {
  return (
    <footer id="contato" className="border-t border-[#1f1f23]/60 bg-[#0a0a0b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#3b82f6] to-[#1d4ed8] flex items-center justify-center shadow-lg shadow-[#3b82f6]/10">
              <Terminal className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#f3f4f6]">Lucas Matheus do Nascimento</p>
              <p className="text-xs text-[#6b7280]">Técnico de TI & Especialista em Soluções Tecnológicas</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a href="mailto:lucas19980112@gmail.com" className="text-[#6b7280] hover:text-[#3b82f6] transition-colors duration-200">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://instagram.com/lucasmatheus.ti" target="_blank" rel="noopener noreferrer" className="text-[#6b7280] hover:text-[#f59e0b] transition-colors duration-200">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://wa.me/5511978863129" target="_blank" rel="noopener noreferrer" className="text-[#6b7280] hover:text-emerald-400 transition-colors duration-200">
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

/* ─────────────────────────────────────────────
   SCROLL PROGRESS INDICATOR
   ───────────────────────────────────────────── */
function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalHeight) * 100;
      setProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-[#3b82f6] via-[#60a5fa] to-[#3b82f6] transition-all duration-150 ease-out shadow-sm shadow-[#3b82f6]/50"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────
   BACK TO TOP BUTTON
   ───────────────────────────────────────────── */
function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      className={`fixed bottom-6 right-6 z-50 w-11 h-11 rounded-xl bg-[#0f0f10] border border-[#1f1f23] flex items-center justify-center text-[#3b82f6] hover:bg-[#141416] hover:border-[#3b82f6]/40 transition-all duration-300 shadow-lg shadow-black/30 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  );
}

/* ─────────────────────────────────────────────
   MAIN APP
   ───────────────────────────────────────────── */
export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#f3f4f6] font-sans">
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <SpecialtiesSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </div>
  );
}
