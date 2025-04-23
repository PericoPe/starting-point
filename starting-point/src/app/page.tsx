'use client';
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-20 bg-white/95 backdrop-blur border-b border-gray-200 shadow-sm w-full">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <span className="font-extrabold text-2xl tracking-tight text-orange-500">Starting Point</span>
          <ul className="flex gap-8 text-base font-medium text-gray-700">
            <li><a href="#caracteristicas" className="hover:text-orange-500 transition-colors">Características</a></li>
            <li><a href="#funciona" className="hover:text-orange-500 transition-colors">Cómo funciona</a></li>
            <li><a href="#testimonios" className="hover:text-orange-500 transition-colors">Testimonios</a></li>
            <li><a href="#contacto" className="hover:text-orange-500 transition-colors">Contactános</a></li>
          </ul>
        </nav>
      </header>
      <main className="min-h-screen bg-white flex flex-col">
        {/* HERO */}
        <section className="flex flex-col items-center justify-center text-center py-16 px-4 bg-white">
          <div className="mb-8">
            <Image src="/globe.svg" alt="Logística inteligente" width={96} height={96} className="mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Starting Point
            </h1>
            <p className="text-base uppercase tracking-widest text-orange-500 mb-4 font-semibold">Logística simple, eficiente y colaborativa</p>
            <p className="text-lg md:text-2xl text-gray-600 max-w-xl mx-auto mb-8">
              Conecta cargas y camiones en segundos. Reduce kilómetros vacíos y ganá más, sin complicaciones.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#registro-transportista" className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition text-lg shadow focus:outline-none focus:ring-2 focus:ring-orange-300">
              Soy Transportista
            </a>
            <a href="#registro-dador" className="bg-cyan-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-cyan-800 transition text-lg shadow focus:outline-none focus:ring-2 focus:ring-cyan-300">
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
        <section id="testimonios" className="py-20 px-4 bg-white">
  <h2 className="text-3xl md:text-4xl font-extrabold text-orange-500 mb-12 text-center tracking-tight">Testimonios reales</h2>
  <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
    <div className="bg-gray-50 rounded-2xl shadow-xl p-8 flex flex-col items-center max-w-xs w-full border border-orange-100">
      <Image src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=256&q=80" alt="Juan Pérez, Transportista" width={96} height={96} className="rounded-full mb-4 object-cover border-4 border-orange-100 shadow" />
      <p className="italic text-gray-700 mb-2 text-center text-lg">"Gracias a Starting Point, mis viajes de regreso ahora son rentables y fáciles de gestionar. ¡La recomiendo a todos mis colegas!"</p>
      <span className="font-semibold text-orange-600">Juan Pérez, Transportista</span>
    </div>
    <div className="bg-gray-50 rounded-2xl shadow-xl p-8 flex flex-col items-center max-w-xs w-full border border-cyan-100">
      <Image src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=256&q=80" alt="María González, Empresaria" width={96} height={96} className="rounded-full mb-4 object-cover border-4 border-cyan-100 shadow" />
      <p className="italic text-gray-700 mb-2 text-center text-lg">"Encontré transporte para mi carga en minutos y a mejor precio que nunca. El proceso es súper sencillo."</p>
      <span className="font-semibold text-cyan-700">María González, Empresaria</span>
    </div>
    <div className="bg-gray-50 rounded-2xl shadow-xl p-8 flex flex-col items-center max-w-xs w-full border border-gray-200">
      <Image src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=256&q=80" alt="Carlos López, Transportista" width={96} height={96} className="rounded-full mb-4 object-cover border-4 border-gray-200 shadow" />
      <p className="italic text-gray-700 mb-2 text-center text-lg">"La plataforma es clara y me ayudó a conseguir nuevos clientes en el regreso. Excelente soporte."</p>
      <span className="font-semibold text-cyan-800">Carlos López, Transportista</span>
    </div>
  </div>
</section>

        {/* FOOTER */}
        <footer id="contacto" className="bg-gray-900 text-white border-t-0 mt-auto py-10 px-4 text-center shadow-inner">
          <div className="flex flex-col items-center gap-2">
            <span className="font-extrabold text-2xl tracking-tight text-orange-400 drop-shadow">Starting Point</span>
            <div className="flex gap-4 mt-2">
              <a href="#" className="text-gray-400 hover:text-blue-600 transition">Sobre Nosotros</a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition">Contacto</a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition">Términos</a>
            </div>
            <p className="text-gray-300 text-sm mt-4">{new Date().getFullYear()} Todos los derechos reservados.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
