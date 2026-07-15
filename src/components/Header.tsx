"use client";

import Link from "next/link";
import { doctor } from "@/data/doctor";
import { useState } from "react";
import { FaBars, FaTimes, FaWhatsapp, FaPhone } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-lg border-b border-border">
      {/* Top Bar - Credentials & Urgent Contact */}
      <div className="bg-primary text-primary-foreground text-[11px] py-2.5 hidden lg:block tracking-wide">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex gap-4 items-center font-light">
            <span>
              Céd. Prof: <strong className="font-medium text-white">{doctor.cedula}</strong> <span className="text-emerald-400 font-semibold text-[9px] uppercase tracking-wider">(IPN)</span>
            </span>
            <span className="text-slate-600">|</span>
            <span>
              Céd. Esp: <strong className="font-medium text-white">{doctor.cedulaEspecialidad}</strong> <span className="text-emerald-400 font-semibold text-[9px] uppercase tracking-wider">(UNAM)</span>
            </span>
            <span className="text-slate-600">|</span>
            <span>
              CMCG: <strong className="font-medium text-white">C24026124</strong> <span className="text-emerald-400 font-semibold text-[9px] uppercase tracking-wider">(Certificado)</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href={`tel:${doctor.phone}`} className="flex items-center gap-2 text-slate-300 hover:text-white transition-all font-medium">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse-slow"></span>
              Urgencias: <strong className="text-white font-bold tracking-wider">{doctor.phone}</strong>
            </a>
          </div>
        </div>
      </div>
      
      {/* Main Nav */}
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo with text design */}
        <Link href="/" className="flex items-center gap-3 select-none">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center font-black text-white text-base shadow-md">
            DH
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-base lg:text-lg font-extrabold tracking-tight text-slate-900 leading-none">
              {doctor.title} {doctor.name}
            </span>
            <span className="text-[9px] font-bold text-emerald-600 uppercase tracking-widest mt-1">
              {doctor.specialistTitle}
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-widest font-bold text-primary/80">
          <Link href="/" className="hover:text-accent transition-all duration-300">Inicio</Link>
          <Link href="/enfermedades" className="hover:text-accent transition-all duration-300">Enfermedades</Link>
          <Link href="/servicios" className="hover:text-accent transition-all duration-300">Servicios</Link>
          <Link href="/sintomas" className="hover:text-accent transition-all duration-300">Síntomas</Link>
          <Link href="/contacto" className="hover:text-accent transition-all duration-300">Contacto</Link>
        </nav>

        {/* Action Button */}
        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="hidden lg:flex items-center gap-2 bg-primary hover:bg-accent text-white px-6 py-3 text-xs uppercase tracking-widest font-bold transition-all duration-300 border border-primary hover:border-accent">
          <FaWhatsapp size={14} /> Agendar Consulta
        </a>

        {/* Mobile Toggle */}
        <button aria-label="Menu" className="lg:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-border p-6 flex flex-col gap-4 text-sm uppercase tracking-widest font-bold text-primary shadow-2xl absolute w-full left-0 animate-fade-in">
          <Link href="/" onClick={() => setIsOpen(false)} className="py-3 border-b border-stone-100">Inicio</Link>
          <Link href="/enfermedades" onClick={() => setIsOpen(false)} className="py-3 border-b border-stone-100">Enfermedades</Link>
          <Link href="/servicios" onClick={() => setIsOpen(false)} className="py-3 border-b border-stone-100">Servicios</Link>
          <Link href="/sintomas" onClick={() => setIsOpen(false)} className="py-3 border-b border-stone-100">Síntomas</Link>
          <Link href="/contacto" onClick={() => setIsOpen(false)} className="py-3 border-b border-stone-100">Contacto</Link>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-4 flex items-center justify-center gap-2 bg-primary text-white py-4 text-xs font-bold uppercase tracking-widest">
            <FaWhatsapp size={16} /> Agendar Consulta
          </a>
        </div>
      )}
    </header>
  );
}
