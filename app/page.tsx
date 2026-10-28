'use client'

import { useState } from 'react'
import {
  ArrowRight,
  Check,
  ChevronRight,
  Cloud,
  Database,
  Gauge,
  Globe2,
  Layers3,
  LockKeyhole,
  Menu,
  Network,
  Server,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react'

const projects = [
  {
    number: '01',
    title: 'Cloud File Vault',
    description: 'A secure file sharing concept with cloud storage, access rules, and simple team collaboration.',
    tags: ['Cloud Storage', 'IAM', 'React'],
    icon: Database,
    color: 'from-sky-400 to-blue-600',
  },
  {
    number: '02',
    title: 'Campus Connect',
    description: 'A responsive student portal designed to serve announcements and resources from anywhere.',
    tags: ['Web App', 'Scalable', 'Azure'],
    icon: Globe2,
    color: 'from-blue-500 to-indigo-700',
  },
  {
    number: '03',
    title: 'Cloud Monitor',
    description: 'A dashboard idea for understanding service health, response time, and basic cloud usage.',
    tags: ['Monitoring', 'APIs', 'Dashboard'],
    icon: Gauge,
    color: 'from-indigo-500 to-violet-700',
  },
]

const benefits = [
  ['Flexible', 'Resources can grow or shrink with demand.'],
  ['Accessible', 'Services are available from any connected device.'],
  ['Cost-aware', 'Pay for the resources you actually use.'],
  ['Collaborative', 'Teams can build and share from one place.'],
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-950">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8" aria-label="Main navigation">
          <a href="#home" className="flex items-center gap-2.5 font-semibold tracking-tight" onClick={closeMenu}>
            <span className="flex size-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20"><Cloud aria-hidden="true" /></span>
            <span className="text-lg">Cloud<span className="text-blue-600">Space</span></span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a className="transition-colors hover:text-blue-600" href="#about">Overview</a>
            <a className="transition-colors hover:text-blue-600" href="#architecture">Architecture</a>
            <a className="transition-colors hover:text-blue-600" href="#projects">Projects</a>
            <a className="transition-colors hover:text-blue-600" href="#security">Security</a>
          </div>
          <a href="#contact" className="hidden rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 md:inline-flex">Let&apos;s connect <ArrowRight className="ml-2 size-4" /></a>
          <button className="rounded-lg p-2 md:hidden" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X /> : <Menu />}</button>
        </nav>
        {menuOpen && <div className="border-t border-slate-100 bg-white px-5 py-4 md:hidden"><div className="flex flex-col gap-4 text-sm font-medium"><a href="#about" onClick={closeMenu}>Overview</a><a href="#architecture" onClick={closeMenu}>Architecture</a><a href="#projects" onClick={closeMenu}>Projects</a><a href="#security" onClick={closeMenu}>Security</a><a href="#contact" onClick={closeMenu} className="text-blue-600">Let&apos;s connect →</a></div></div>}
      </header>

      <section id="home" className="relative isolate px-5 pb-20 pt-36 lg:px-8 lg:pb-28 lg:pt-48">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_15%,rgba(147,197,253,0.45),transparent_34%),linear-gradient(180deg,#eff6ff_0%,#ffffff_66%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.04fr_.96fr] lg:gap-12">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/75 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-700 shadow-sm"><Sparkles className="size-3.5" /> Cloud Computing FT-III</div>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.04] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl">Designing a future that lives in the <span className="text-blue-600">cloud.</span></h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">Hi, I&apos;m a student exploring how cloud platforms make applications more available, secure, and ready to scale. Welcome to my assignment portfolio.</p>
            <div className="mt-9 flex flex-wrap items-center gap-4"><a href="#projects" className="inline-flex items-center rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-600/20 transition-all hover:-translate-y-0.5 hover:bg-blue-700">Explore my work <ArrowRight className="ml-2 size-4" /></a><a href="#about" className="inline-flex items-center rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-colors hover:border-blue-300 hover:text-blue-600">Learn the basics</a></div>
            <div className="mt-12 flex items-center gap-8 border-t border-slate-200 pt-6 text-sm text-slate-500"><div><span className="block text-2xl font-semibold text-slate-950">03</span>Concept projects</div><div><span className="block text-2xl font-semibold text-slate-950">FT-III</span>Course assignment</div></div>
          </div>
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="absolute -inset-8 rounded-[3rem] bg-blue-400/15 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/80 bg-slate-950 p-4 shadow-2xl shadow-blue-950/20 sm:p-6">
              <div className="mb-5 flex items-center justify-between"><div className="flex gap-1.5"><span className="size-2.5 rounded-full bg-red-400" /><span className="size-2.5 rounded-full bg-amber-300" /><span className="size-2.5 rounded-full bg-emerald-400" /></div><span className="font-mono text-[10px] tracking-[0.2em] text-slate-500">CLOUDSPACE / LAB</span></div>
              <div className="rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 p-6 sm:p-8"><div className="flex items-start justify-between"><div><p className="text-sm font-medium text-blue-100">Infrastructure map</p><p className="mt-1 text-2xl font-semibold text-white">Connected by design.</p></div><div className="flex size-11 items-center justify-center rounded-xl bg-white/15 text-white"><Network /></div></div><div className="relative mt-10 h-44"><div className="absolute left-[17%] top-[16%] h-px w-[64%] rotate-[18deg] bg-white/30" /><div className="absolute left-[17%] top-[56%] h-px w-[64%] -rotate-[15deg] bg-white/30" /><div className="absolute left-[46%] top-[20%] h-[62%] w-px bg-white/25" />{[['left-[5%] top-[38%]','User'],['left-[40%] top-0','App'],['right-[3%] top-[29%]','Data'],['right-[3%] bottom-0','Secure']].map(([position, label], i) => <div key={label} className={`absolute ${position} flex flex-col items-center gap-2`}><div className={`flex size-12 items-center justify-center rounded-2xl border border-white/20 bg-white/15 text-white shadow-lg ${i === 0 ? 'ring-4 ring-blue-400/20' : ''}`}>{i === 0 ? <Globe2 className="size-5" /> : i === 1 ? <Server className="size-5" /> : i === 2 ? <Database className="size-5" /> : <LockKeyhole className="size-5" />}</div><span className="text-[10px] font-medium text-blue-100">{label}</span></div>)}</div></div>
              <div className="mt-4 flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 text-xs"><span className="text-slate-400">System status</span><span className="flex items-center gap-2 font-medium text-emerald-400"><span className="size-1.5 rounded-full bg-emerald-400" /> All systems conceptual</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-24 border-y border-slate-100 bg-white px-5 py-20 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-24"><div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">01 / The big idea</p><h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Cloud, in simple terms.</h2></div><div><p className="max-w-2xl text-lg leading-8 text-slate-600">Cloud computing means using computing resources—like servers, storage, databases, and software—over the internet instead of owning all the physical hardware yourself.</p><div className="mt-10 grid gap-5 sm:grid-cols-2">{benefits.map(([title, text]) => <div key={title} className="rounded-2xl bg-slate-50 p-5"><div className="mb-4 flex size-9 items-center justify-center rounded-lg bg-blue-100 text-blue-600"><Check className="size-4" /></div><h3 className="font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{text}</p></div>)}</div></div></div></div></section>

      <section id="architecture" className="scroll-mt-24 bg-slate-950 px-5 py-20 text-white lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">02 / How it works</p><h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">A simple cloud architecture.</h2></div><p className="max-w-sm text-sm leading-6 text-slate-400">A typical web application connects people to a frontend, services, and data through a reliable cloud network.</p></div><div className="grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] md:grid-cols-4">{[['01','Client','Your browser or phone sends a request.','Globe2'],['02','Application','Cloud services process the request.','Layers3'],['03','Data','Information is stored and retrieved safely.','Database'],['04','Protection','Identity and security controls guard access.','ShieldCheck']].map(([num, title, text, iconName], i) => { const Icon = { Globe2, Layers3, Database, ShieldCheck }[iconName as 'Globe2' | 'Layers3' | 'Database' | 'ShieldCheck']; return <div key={title} className={`relative p-7 ${i < 3 ? 'border-b border-white/10 md:border-b-0 md:border-r' : ''}`}><div className="mb-14 flex items-center justify-between"><span className="font-mono text-xs text-blue-400">{num}</span><Icon className="size-5 text-slate-400" /></div><h3 className="text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{text}</p></div>})}</div></div></section>

      <section id="projects" className="scroll-mt-24 bg-slate-50 px-5 py-20 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">03 / Selected work</p><h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Ideas built for the cloud.</h2></div><p className="max-w-sm text-sm leading-6 text-slate-500">Three small concepts that helped me connect cloud theory with real product thinking.</p></div><div className="grid gap-6 lg:grid-cols-3">{projects.map((project) => { const Icon = project.icon; return <article key={project.title} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"><div className={`relative h-48 overflow-hidden bg-gradient-to-br ${project.color} p-6`}><span className="font-mono text-xs text-white/60">{project.number}</span><div className="absolute -bottom-6 -right-3 text-white/15 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"><Icon size={170} strokeWidth={1} /></div><div className="absolute bottom-6 left-6 flex size-11 items-center justify-center rounded-xl border border-white/20 bg-white/15 text-white backdrop-blur-sm"><Icon className="size-5" /></div></div><div className="p-6"><h3 className="text-xl font-semibold">{project.title}</h3><p className="mt-3 min-h-14 text-sm leading-6 text-slate-500">{project.description}</p><div className="mt-6 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">{tag}</span>)}</div><a href="#contact" className="mt-7 inline-flex items-center text-sm font-semibold text-blue-600">View concept <ChevronRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" /></a></div></article>})}</div></div></section>

      <section id="security" className="scroll-mt-24 px-5 py-20 lg:px-8 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.82fr_1.18fr] lg:items-center"><div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">04 / Think securely</p><h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Security is part of the design.</h2><p className="mt-6 max-w-lg leading-7 text-slate-600">Cloud platforms provide powerful tools, but safe applications still need careful decisions from the people who build them.</p></div><div className="grid gap-4 sm:grid-cols-2">{[['Identity first','Use strong sign-in rules and give each user only the access they need.'],['Protect data','Encrypt information while it moves and while it is stored.'],['Stay updated','Patch software, monitor activity, and review unusual behavior.'],['Plan recovery','Keep backups and know how a service can be restored.']].map(([title, text]) => <div key={title} className="flex gap-4 rounded-2xl border border-slate-200 p-5"><div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600"><ShieldCheck className="size-4" /></div><div><h3 className="font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{text}</p></div></div>)}</div></div></section>

      <footer id="contact" className="scroll-mt-24 bg-blue-600 px-5 pb-8 pt-16 text-white lg:px-8"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-10 border-b border-white/20 pb-12 md:flex-row md:items-end"><div><div className="flex items-center gap-2.5 font-semibold tracking-tight"><span className="flex size-9 items-center justify-center rounded-xl bg-white text-blue-600"><Cloud /></span><span className="text-lg">CloudSpace</span></div><h2 className="mt-7 max-w-md text-3xl font-semibold tracking-tight sm:text-4xl">Thanks for visiting my cloud journey.</h2></div><div className="max-w-xs text-sm leading-6 text-blue-100"><p>This frontend-only portfolio was created for the Cloud Computing FT-III assignment.</p><div className="mt-5 flex gap-3"><a aria-label="Portfolio home" href="#home" className="rounded-full border border-white/20 px-3 py-2 text-xs font-semibold transition-colors hover:bg-white/10">Home</a><a aria-label="Projects" href="#projects" className="rounded-full border border-white/20 px-3 py-2 text-xs font-semibold transition-colors hover:bg-white/10">Work</a></div></div></div><div className="flex flex-col justify-between gap-4 pt-6 text-xs text-blue-100 sm:flex-row"><span>© 2025 CloudSpace. Student portfolio.</span><span>Built with Next.js + Tailwind CSS</span></div></div></footer>
    </main>
  )
}
