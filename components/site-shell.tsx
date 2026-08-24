'use client'

import { ArrowRight, Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Logo({ home = false }: { home?: boolean }) {
  return <a href={home ? '#top' : '/'} className="flex items-center gap-3 font-semibold tracking-tight"><span className="room-mark" aria-hidden="true">“_</span><span className="font-serif text-xl">simiu</span></a>
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6 lg:px-8"><Logo /><nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex"><a href="/about" className="transition hover:text-foreground">About</a><a href="/services" className="transition hover:text-foreground">Services</a><a href="/contact" className="transition hover:text-foreground">Contact</a></nav><a href="/#waitlist" className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:brightness-110 md:block">Join early access <ArrowRight className="ml-1 inline size-4" /></a><button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="rounded-lg p-2 md:hidden">{open ? <X /> : <Menu />}</button>{open && <nav className="absolute left-0 right-0 top-20 z-10 flex flex-col gap-4 border-b border-border bg-background px-5 pb-5 text-sm md:hidden"><a href="/about" onClick={() => setOpen(false)}>About</a><a href="/services" onClick={() => setOpen(false)}>Services</a><a href="/contact" onClick={() => setOpen(false)}>Contact</a><a href="/#waitlist" onClick={() => setOpen(false)} className="text-primary">Join early access →</a></nav>}</header>
}

export function SiteFooter() {
  return <footer className="mx-auto flex max-w-6xl flex-col gap-5 border-t border-border px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8"><Logo /><p>© 2026 Simiu. Made with a little AI, reviewed by humans.</p><div className="flex gap-5"><a href="/about" className="hover:text-foreground">About</a><a href="/contact" className="hover:text-foreground">Contact</a></div></footer>
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen overflow-hidden bg-background text-foreground"><SiteHeader /><main>{children}</main><SiteFooter /></div>
}

export function WaitlistBanner({ title, copy }: { title: string; copy: string }) {
  return <section className="mx-5 mb-20 overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12 lg:mx-auto lg:max-w-6xl"><h2 className="mx-auto max-w-2xl font-serif text-4xl tracking-tight sm:text-5xl">{title}</h2><p className="mx-auto mt-4 max-w-lg text-primary-foreground/75">{copy}</p><a href="/#waitlist" className="mt-8 inline-flex items-center rounded-xl bg-background px-5 py-3.5 text-sm font-semibold text-foreground transition hover:bg-background/80">Join early access <ArrowRight className="ml-2 size-4" /></a></section>
}
