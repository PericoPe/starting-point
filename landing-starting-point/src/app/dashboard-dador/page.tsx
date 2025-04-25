"use client";
import Link from "next/link";
import { useState } from "react";

interface Oferta {
  transportista: string;
  valor: number;
}
interface Carga {
  id: number;
  origen: string;
  destino: string;
  fecha: string;
  carga: string;
  observaciones: string;
  ofertas: Oferta[];
}

export default function DashboardDador() {
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("¡Gracias por tu feedback!");
    setShowFeedback(false);
    setFeedbackText("");
  };

  const [showMenu, setShowMenu] = useState(false);
  // Mock de transportistas
  const transportistasMock = [
    {
      nombre: "Transporte Sur",
      avatar: "https://ui-avatars.com/api/?name=Transporte+Sur&background=FF6600&color=fff&size=128",
      reputacion: 4.8,
    },
    {
      nombre: "Logística Norte",
      avatar: "https://ui-avatars.com/api/?name=Logistica+Norte&background=0077B6&color=fff&size=128",
      reputacion: 4.5,
    },
    {
      nombre: "Rápido Cargo",
      avatar: "https://ui-avatars.com/api/?name=Rapido+Cargo&background=00B686&color=fff&size=128",
      reputacion: 4.2,
    },
    {
      nombre: "Flete Express",
      avatar: "https://ui-avatars.com/api/?name=Flete+Express&background=FFD166&color=333&size=128",
      reputacion: 4.9,
    },
    {
      nombre: "TransAndes",
      avatar: "https://ui-avatars.com/api/?name=TransAndes&background=EF476F&color=fff&size=128",
      reputacion: 4.6,
    },
  ];

  // Mock de cargas con ofertas
  const cargasEjemplo: Carga[] = [
    {
      id: 1,
      origen: "Buenos Aires, CABA",
      destino: "Córdoba, Capital",
      fecha: "2025-04-30",
      carga: "Bebidas",
      observaciones: "Carga refrigerada."
      ,
      ofertas: [
        { transportista: transportistasMock[0].nombre, valor: 1500000 },
        { transportista: transportistasMock[1].nombre, valor: 1450000 },
        { transportista: transportistasMock[2].nombre, valor: 1525000 },
        { transportista: transportistasMock[3].nombre, valor: 1490000 },
      ]
    },
    {
      id: 2,
      origen: "Rosario, Santa Fe",
      destino: "Mendoza, Capital",
      fecha: "2025-05-02",
      carga: "Granos",
      observaciones: "Carga a granel, silo bolsa.",
      ofertas: [
        { transportista: transportistasMock[4].nombre, valor: 2100000 },
        { transportista: transportistasMock[0].nombre, valor: 2080000 },
        { transportista: transportistasMock[2].nombre, valor: 2150000 },
        { transportista: transportistasMock[1].nombre, valor: 2050000 },
      ]
    },
    {
      id: 3,
      origen: "Mar del Plata",
      destino: "Bahía Blanca",
      fecha: "2025-04-28",
      carga: "Pescado fresco",
      observaciones: "Entrega urgente.",
      ofertas: [
        { transportista: transportistasMock[3].nombre, valor: 850000 },
        { transportista: transportistasMock[2].nombre, valor: 820000 },
        { transportista: transportistasMock[0].nombre, valor: 870000 },
        { transportista: transportistasMock[4].nombre, valor: 900000 },
        { transportista: transportistasMock[1].nombre, valor: 830000 },
      ]
    },
    {
      id: 4,
      origen: "Tucumán",
      destino: "Salta",
      fecha: "2025-05-04",
      carga: "Azúcar",
      observaciones: "Carga paletizada, retiro a coordinar.",
      ofertas: [
        { transportista: transportistasMock[1].nombre, valor: 1200000 },
        { transportista: transportistasMock[4].nombre, valor: 1225000 },
        { transportista: transportistasMock[0].nombre, valor: 1190000 },
        { transportista: transportistasMock[2].nombre, valor: 1210000 },
      ]
    },
    {
      id: 5,
      origen: "La Plata",
      destino: "Neuquén",
      fecha: "2025-05-10",
      carga: "Materiales de construcción",
      observaciones: "Carga pesada, descarga con autoelevador.",
      ofertas: [
        { transportista: transportistasMock[2].nombre, valor: 1850000 },
        { transportista: transportistasMock[0].nombre, valor: 1820000 },
        { transportista: transportistasMock[3].nombre, valor: 1880000 },
        { transportista: transportistasMock[1].nombre, valor: 1800000 },
      ]
    }
  ];

  const [cargas, setCargas] = useState<Carga[]>(cargasEjemplo);
  const [form, setForm] = useState({
    origen: '',
    destino: '',
    fecha: '',
    carga: '',
    observaciones: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [selectedCarga, setSelectedCarga] = useState<Carga | null>(null);

  // Simulación: al crear una carga, algunas reciben ofertas mock
  const ofertasMock: Oferta[] = [
    { transportista: "Transporte Sur", valor: 1500000 },
    { transportista: "Logística Norte", valor: 1450000 },
    { transportista: "Rápido Cargo", valor: 1525000 }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    if (!form.origen || !form.destino || !form.fecha || !form.carga) {
      setError('Por favor completa todos los campos obligatorios.');
      setLoading(false);
      return;
    }
    // Simula que 50% de las cargas reciben ofertas
    const recibeOfertas = Math.random() > 0.5;
    setCargas([
      {
        ...form,
        id: Date.now(),
        ofertas: recibeOfertas ? ofertasMock.slice(0, Math.floor(Math.random() * ofertasMock.length) + 1) : []
      },
      ...cargas
    ]);
    setLoading(false);
    setSuccess('Carga publicada con éxito.');
    setForm({ origen: '', destino: '', fecha: '', carga: '', observaciones: '' });
    setTimeout(() => setSuccess(''), 2000);
  };

  const handleVerOfertas = (carga: Carga) => {
    setSelectedCarga(carga);
  };

  const handleCerrarOfertas = () => setSelectedCarga(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header propio dashboard dador */}
      <header className="w-full flex items-center justify-between px-6 py-4 bg-white shadow-sm border-b mb-6">
        <Link href="/" className="font-extrabold text-2xl tracking-tight text-orange-500 hover:underline focus:outline-none">Starting Point</Link>
        <div className="flex items-center gap-4">
          <div className="relative">
            <button
              className="focus:outline-none"
              onClick={() => setShowMenu((v: boolean) => !v)}
            >
              <img src="https://ui-avatars.com/api/?name=Dador+Demo&background=FF6600&color=fff&size=96" alt="Avatar" className="w-10 h-10 rounded-full border-2 border-orange-400" />
            </button>
            {showMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-20 flex flex-col animate-fade-in">
                <button className="px-4 py-3 text-left hover:bg-gray-50 w-full" onClick={() => { setShowMenu(false); alert('Configurar perfil (demo)'); }}>Configurar perfil</button>
                <button className="px-4 py-3 text-left hover:bg-gray-50 w-full" onClick={() => { setShowMenu(false); alert('Cerrar sesión (demo)'); }}>Cerrar sesión</button>
              </div>
            )}
          </div>
          <button
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg font-semibold shadow border border-gray-300"
            onClick={() => { alert('Salir (demo)'); }}
          >
            Salir
          </button>
        </div>
      </header>
      <main className="max-w-5xl mx-auto py-8 px-4 flex flex-col gap-8">
        {/* FORMULARIO CREAR CARGA */}
        <section className="bg-white rounded-xl shadow-md p-6 mb-2">
          <h2 className="text-xl font-bold text-orange-600 mb-4">Crear nueva carga</h2>
          <form className="flex flex-col md:flex-row md:items-end gap-4" onSubmit={handleSubmit}>
            <input className="border border-gray-300 rounded-lg px-4 py-2 flex-1" type="text" name="origen" placeholder="Origen" value={form.origen} onChange={handleChange} required />
            <input className="border border-gray-300 rounded-lg px-4 py-2 flex-1" type="text" name="destino" placeholder="Destino" value={form.destino} onChange={handleChange} required />
            <input className="border border-gray-300 rounded-lg px-4 py-2 flex-1" type="date" name="fecha" value={form.fecha} onChange={handleChange} required />
            <input className="border border-gray-300 rounded-lg px-4 py-2 flex-1" type="text" name="carga" placeholder="Tipo de carga" value={form.carga} onChange={handleChange} required />
            <textarea className="border border-gray-300 rounded-lg px-4 py-2 flex-1" name="observaciones" placeholder="Observaciones (opcional)" value={form.observaciones} onChange={handleChange} rows={1} />
            <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold shadow min-w-[120px]" disabled={loading}>
              {loading ? "Publicando..." : "Crear carga"}
            </button>
          </form>
          {error && <span className="text-red-500 text-xs mt-2 block">{error}</span>}
          {success && <span className="text-green-600 text-xs mt-2 block">{success}</span>}
        </section>
        {/* GRILLA DE CARGAS + PANEL OFERTAS */}
        <section className="flex flex-col md:flex-row gap-6">
          {/* Cards de cargas */}
          <div className="flex-1">
            <h2 className="text-lg font-bold mb-3 text-gray-900">Mis cargas publicadas</h2>
            {cargas.length === 0 ? (
              <div className="text-gray-400 text-center py-8">No publicaste cargas aún.</div>
            ) : (
              <ul className="flex flex-col gap-4">
                {cargas.map((carga) => (
                  <li key={carga.id} className={`rounded-lg border p-4 flex flex-col md:flex-row md:items-center gap-2 shadow-sm transition ${carga.ofertas.length > 0 ? 'bg-green-50 border-green-300' : 'bg-gray-50 border-gray-200'}`}>
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-2 items-center">
                        <span className="font-semibold text-gray-800">{carga.origen} → {carga.destino}</span>
                        <span className="text-xs text-gray-500">{carga.fecha}</span>
                        <span className="text-sm text-gray-600">{carga.carga}</span>
                      </div>
                      {carga.observaciones && <span className="block text-xs text-gray-400 mt-1">{carga.observaciones}</span>}
                    </div>
                    <div className="flex flex-col gap-2 items-end">
                      <button
                        className={`px-4 py-1 rounded text-sm font-semibold shadow transition ${carga.ofertas.length > 0 ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-gray-300 text-gray-700 cursor-not-allowed'}`}
                        onClick={() => carga.ofertas.length > 0 && handleVerOfertas(carga)}
                        disabled={carga.ofertas.length === 0}
                      >
                        Ver ofertas
                      </button>
                      <span className="text-xs text-gray-500">{carga.ofertas.length} oferta{carga.ofertas.length !== 1 ? 's' : ''}</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {/* Panel de ofertas (desktop) */}
          <div className="w-full md:w-[340px] md:sticky md:top-28 bg-white rounded-xl shadow-md p-4 h-fit min-h-[180px] mt-6 md:mt-0">
            <h3 className="font-bold text-gray-900 mb-2 text-lg flex items-center gap-2">
              Ofertas recibidas
              {selectedCarga && <button className="ml-auto text-xs text-orange-500 underline" onClick={handleCerrarOfertas}>Cerrar</button>}
            </h3>
            {!selectedCarga ? (
              <div className="text-gray-400 text-center">Seleccioná una carga con ofertas para ver el detalle.</div>
            ) : (
              <ul className="divide-y">
                {selectedCarga.ofertas.map((oferta, i) => (
                  <li key={i} className="py-2 flex flex-col gap-1">
                    {/* Avatar y perfil del transportista */}
                    <div className="flex items-center gap-2">
                      <img
                        src={
                          transportistasMock.find(t => t.nombre === oferta.transportista)?.avatar ||
                          "https://ui-avatars.com/api/?name=Transportista&background=888&color=fff&size=128"
                        }
                        alt={oferta.transportista}
                        className="w-8 h-8 rounded-full border shadow"
                      />
                      <span className="font-semibold text-green-700">{oferta.transportista}</span>
                      <span className="ml-1 text-xs text-yellow-500 flex items-center">
                        ★ {transportistasMock.find(t => t.nombre === oferta.transportista)?.reputacion ?? 4.0}
                      </span>
                    </div>
                    <span className="text-gray-700">${oferta.valor.toLocaleString()}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </main>
    {/* Floating Feedback Button */}
    <button
      className="fixed bottom-6 right-6 z-50 bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
      style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.15)' }}
      onClick={() => setShowFeedback(true)}
      aria-label="Reportar un problema o sugerencia"
    >
      <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h6m-6 4h10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z" />
      </svg>
      Reportar un problema
    </button>
    {/* Feedback Modal */}
    {showFeedback && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-sm w-full flex flex-col items-center relative">
          <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl" onClick={() => setShowFeedback(false)}>&times;</button>
          <h2 className="text-xl font-bold text-gray-800 mb-3">Reportar un problema o sugerencia</h2>
          <form className="w-full flex flex-col gap-3" onSubmit={handleFeedbackSubmit}>
            <textarea
              className="border border-gray-300 rounded-lg px-4 py-2 min-h-[80px] resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Describe el problema o sugerencia..."
              value={feedbackText}
              onChange={e => setFeedbackText(e.target.value)}
              required
            />
            <div className="flex gap-2 justify-end mt-2">
              <button type="button" className="px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300 font-semibold" onClick={() => setShowFeedback(false)}>Cancelar</button>
              <button type="submit" className="px-4 py-2 rounded bg-orange-500 text-white font-semibold hover:bg-orange-600">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    )}
  </div>
  );
}
