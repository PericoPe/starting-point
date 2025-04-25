'use client';

import Link from "next/link";

export default function Home() {
  return (
    <>

      <header className="sticky top-0 z-20 bg-white/95 backdrop-blur border-b border-gray-200 shadow-sm w-full">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" className="font-extrabold text-2xl tracking-tight text-orange-500 hover:underline focus:outline-none">Starting Point</Link>
          <ul className="flex gap-8 text-base font-medium text-gray-700">
            <li><a href="#caracteristicas" className="hover:text-orange-500 transition-colors">Características</a></li>
            <li><a href="#funciona" className="hover:text-orange-500 transition-colors">Cómo funciona</a></li>
            <li><a href="#testimonios" className="hover:text-orange-500 transition-colors">Testimonios</a></li>
            <li><a href="#contacto" className="hover:text-orange-500 transition-colors">Contactános</a></li>
          </ul>
        </nav>
      </header>
      <main className="min-h-screen bg-white flex flex-col">
        <section className="flex flex-col items-center justify-center text-center py-10 px-2 bg-white">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-2 tracking-tight">
            Starting Point
          </h1>
          <p className="text-base uppercase tracking-widest text-orange-500 mb-2 font-semibold">Logística simple, eficiente y colaborativa</p>
          <p className="text-md md:text-xl text-gray-600 max-w-xl mx-auto mb-4">
            Conecta cargas y camiones en segundos. Reduce kilómetros vacíos y ganá más, sin complicaciones.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-2">
            <a href="/registro-transportista" className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition text-lg shadow focus:outline-none focus:ring-2 focus:ring-orange-300">
              Soy Transportista
            </a>
            <a href="/registro-dador" className="bg-cyan-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-cyan-800 transition text-lg shadow focus:outline-none focus:ring-2 focus:ring-cyan-300">
              Soy Dador de Carga
            </a>
          </div>
        </section>

        {/* PROPUESTA DE VALOR */}
        <section id="caracteristicas" className="py-20 px-4 bg-gray-50 text-center">
  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 tracking-tight">Características principales</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
    <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-6">
      {/* Heroicon: Lightning Bolt */}
      <svg className="w-10 h-10 text-orange-400 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
      <h3 className="font-semibold text-lg text-gray-700 mb-2">Rápida conexión</h3>
      <p className="text-gray-500 text-sm">Encuentra cargas o camiones en minutos, sin llamadas ni demoras.</p>
    </div>
    <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-6">
      {/* Heroicon: Eye */}
      <svg className="w-10 h-10 text-cyan-700 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M1.5 12S5 5 12 5s10.5 7 10.5 7-3.5 7-10.5 7S1.5 12 1.5 12z" /><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" /></svg>
      <h3 className="font-semibold text-lg text-gray-700 mb-2">Transparencia total</h3>
      <p className="text-gray-500 text-sm">Seguimiento en tiempo real y documentación digital.</p>
    </div>
    <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-6">
      {/* Heroicon: Shield Check */}
      <svg className="w-10 h-10 text-orange-500 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3l8 4v5c0 5.25-3.5 10-8 12-4.5-2-8-6.75-8-12V7l8-4z" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" /></svg>
      <h3 className="font-semibold text-lg text-gray-700 mb-2">Operaciones seguras</h3>
      <p className="text-gray-500 text-sm">Usuarios verificados y reputación visible para operar con confianza.</p>
    </div>
    <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-6">
      {/* Heroicon: Device Mobile */}
      <svg className="w-10 h-10 text-cyan-700 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="16" height="20" x="4" y="2" rx="2" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01" /></svg>
      <h3 className="font-semibold text-lg text-gray-700 mb-2">100% digital</h3>
      <p className="text-gray-500 text-sm">Gestiona todo desde tu celular o PC, sin papeles ni complicaciones.</p>
    </div>
    <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-6">
      {/* Heroicon: Globe Alt */}
      <svg className="w-10 h-10 text-orange-400 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.46 6C6.2 10.94 17.8 10.94 21.54 6" /></svg>
      <h3 className="font-semibold text-lg text-gray-700 mb-2">Cobertura nacional</h3>
      <p className="text-gray-500 text-sm">Conecta con empresas y transportistas de todo el país.</p>
    </div>
    <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-6">
      {/* Heroicon: Chat Alt2 */}
      <svg className="w-10 h-10 text-cyan-700 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H7a2 2 0 01-2-2v-2" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 3H5a2 2 0 00-2 2v8a2 2 0 002 2h10l4 4V5a2 2 0 00-2-2z" /></svg>
      <h3 className="font-semibold text-lg text-gray-700 mb-2">Soporte personalizado</h3>
      <p className="text-gray-500 text-sm">Equipo de ayuda siempre disponible para resolver tus dudas.</p>
    </div>
  </div>
</section>

        {/* CÓMO FUNCIONA */}
        <section id="funciona" className="py-20 px-4 bg-white text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-cyan-800 mb-8 tracking-tight">¿Cómo funciona?</h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            <div className="flex-1 flex flex-col items-center">
              <span className="bg-orange-100 text-orange-500 rounded-full w-14 h-14 flex items-center justify-center text-2xl font-bold mb-4 shadow">1</span>
              <h4 className="font-semibold text-lg text-gray-700 mb-2">Registrate gratis</h4>
              <p className="text-gray-500 max-w-xs">Como transportista o dador de carga, sin compromiso.</p>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <span className="bg-orange-100 text-orange-500 rounded-full w-14 h-14 flex items-center justify-center text-2xl font-bold mb-4 shadow">2</span>
              <h4 className="font-semibold text-lg text-gray-700 mb-2">Publicá tu viaje o carga</h4>
              <p className="text-gray-500 max-w-xs">Subí los detalles y recibí propuestas al instante.</p>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <span className="bg-orange-100 text-orange-500 rounded-full w-14 h-14 flex items-center justify-center text-2xl font-bold mb-4 shadow">3</span>
              <h4 className="font-semibold text-lg text-gray-700 mb-2">Concretá y ganá</h4>
              <p className="text-gray-500 max-w-xs">Aceptá la mejor oferta y optimizá cada kilómetro.</p>
            </div>
          </div>
        </section>

        {/* TESTIMONIOS */}
        <section id="testimonios" className="py-12 px-2 bg-white text-center">
          <h2 className="text-xl md:text-2xl font-bold text-orange-500 mb-8">Testimonios reales</h2>
          <div className="max-w-6xl mx-auto flex flex-row flex-wrap md:flex-nowrap gap-4 justify-center items-stretch">
            {/* Testimonio 1 */}
            <div className="flex-1 min-w-[180px] max-w-xs bg-gray-50 rounded-xl shadow-md p-6 flex flex-col items-center">
              <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=facearea&facepad=2" alt="Testimonio 1" className="w-20 h-20 rounded-full object-cover mb-3 border-4 border-orange-100" />
              <p className="italic text-gray-700 mb-2">"Gracias a Starting Point, mis viajes de regreso ahora son rentables y fáciles de gestionar. ¡La recomiendo a todos mis colegas!"</p>
              <span className="font-semibold text-orange-600">Juan Pérez, Transportista</span>
            </div>
            {/* Testimonio 2 */}
            <div className="flex-1 min-w-[180px] max-w-xs bg-gray-50 rounded-xl shadow-md p-6 flex flex-col items-center">
              <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=facearea&facepad=2" alt="Testimonio 2" className="w-20 h-20 rounded-full object-cover mb-3 border-4 border-orange-100" />
              <p className="italic text-gray-700 mb-2">"Encontré transporte para mi carga en minutos y a mejor precio que nunca. El proceso es súper sencillo."</p>
              <span className="font-semibold text-cyan-700">María González, Empresaria</span>
            </div>
            {/* Testimonio 3 */}
            <div className="flex-1 min-w-[180px] max-w-xs bg-gray-50 rounded-xl shadow-md p-6 flex flex-col items-center">
              <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=facearea&facepad=2" alt="Testimonio 3" className="w-20 h-20 rounded-full object-cover mb-3 border-4 border-orange-100" />
              <p className="italic text-gray-700 mb-2">"La plataforma me ayudó a optimizar mis rutas y reducir costos. ¡Excelente servicio!"</p>
              <span className="font-semibold text-orange-600">Carlos Díaz, Fletero</span>
            </div>
            {/* Testimonio 4 */}
            <div className="flex-1 min-w-[180px] max-w-xs bg-gray-50 rounded-xl shadow-md p-6 flex flex-col items-center">
              <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=facearea&facepad=2" alt="Testimonio 4" className="w-20 h-20 rounded-full object-cover mb-3 border-4 border-orange-100" />
              <p className="italic text-gray-700 mb-2">"Nunca fue tan fácil encontrar camiones confiables para mis envíos. ¡Muy recomendable!"</p>
              <span className="font-semibold text-cyan-700">Lucía Romero, Pyme</span>
            </div>
            {/* Testimonio 5 */}
            <div className="flex-1 min-w-[180px] max-w-xs bg-gray-50 rounded-xl shadow-md p-6 flex flex-col items-center">
              <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=facearea&facepad=2" alt="Testimonio 5" className="w-20 h-20 rounded-full object-cover mb-3 border-4 border-orange-100" />
              <p className="italic text-gray-700 mb-2">"El proceso fue rápido, seguro y transparente. ¡Volveré a usarla!"</p>
              <span className="font-semibold text-orange-600">Martín López, Productor</span>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer id="contacto" className="bg-gray-900 text-white border-t-0 mt-auto py-10 px-4 text-center shadow-inner relative">
          <div className="flex flex-col items-center gap-2">
            <span className="font-extrabold text-2xl tracking-tight text-orange-400 drop-shadow">Starting Point</span>
            <p className="text-gray-300 text-sm mt-2">Empresa de soluciones logísticas digitales.<br/>Av. Siempre Viva 1234, CABA, Argentina<br/>info@startingpoint.com.ar</p>
            <div className="flex gap-4 mt-4">
              <a href="#" aria-label="Facebook" className="hover:text-blue-500 transition"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 5 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.261c-1.243 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 17 22 12z"/></svg></a>
              <a href="#" aria-label="Instagram" className="hover:text-pink-500 transition"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.25a6.25 6.25 0 1 1 0 12.5 6.25 6.25 0 0 1 0-12.5zm0 1.5a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5zm6.25 1.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-blue-400 transition"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.268h-3v-4.604c0-1.099-.021-2.513-1.532-2.513-1.535 0-1.77 1.198-1.77 2.435v4.682h-3v-9h2.881v1.233h.041c.401-.761 1.381-1.563 2.845-1.563 3.042 0 3.604 2.002 3.604 4.604v4.726z"/></svg></a>
            </div>
            <p className="text-gray-300 text-sm mt-4">{new Date().getFullYear()} Todos los derechos reservados.</p>
          </div>
          {/* Botón flotante de WhatsApp */}
          <a href="https://wa.me/5491123456789" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 flex items-center justify-center animate-bounce transition-all" style={{boxShadow:'0 4px 24px 0 rgba(0,0,0,0.15)'}} aria-label="WhatsApp">
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A12 12 0 0 0 12 0C5.373 0 0 5.373 0 12c0 2.12.555 4.186 1.6 6.06L0 24l6.22-1.57A11.96 11.96 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.82 0-3.6-.36-5.22-1.07l-.37-.16-3.69.93.99-3.6-.18-.37A9.96 9.96 0 0 1 2 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.24-1.4-.83-.74-1.39-1.65-1.56-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.41-.51.14-.18.18-.3.28-.49.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.77.33-.27.26-1.02 1-1.02 2.45 0 1.45 1.04 2.85 1.19 3.05.15.2 2.06 3.14 5.01 4.28.7.24 1.24.39 1.67.5.7.18 1.34.16 1.85.1.56-.08 1.65-.67 1.89-1.32.24-.65.24-1.21.17-1.32-.07-.11-.25-.18-.53-.32z"/></svg>
          </a>
        </footer>
      </main>
    <footer className="w-full bg-gray-100 border-t border-gray-200 py-6 mt-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-2 text-sm text-gray-600">
        <div className="flex flex-wrap gap-4 mb-2 md:mb-0">
           <Link href="/politica-privacidad" className="hover:underline hover:text-orange-500">Política de Privacidad</Link>
           <Link href="/terminos-condiciones" className="hover:underline hover:text-orange-500">Términos y Condiciones</Link>
           <Link href="/politica-cookies" className="hover:underline hover:text-orange-500">Política de Cookies</Link>
           <Link href="/contacto-legal" className="hover:underline hover:text-orange-500">Legales</Link>
           <Link href="/faq" className="hover:underline hover:text-orange-500">FAQ</Link>
        </div>
        <div className="text-xs text-gray-400">&copy; {new Date().getFullYear()} Starting Point. Todos los derechos reservados.</div>
      </div>
    </footer>
    </>
  );
}
