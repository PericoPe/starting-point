"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

// Mock data para cargas
const cargasMock = [
  { id: 1, origen: "Buenos Aires, CABA", destino: "Córdoba, Capital", provincia: "Córdoba", carga: "Bebidas", pallets: 24, peso: "10.000 kg", fecha: "25/04/2025", empresa: "Coca Cola", observaciones: "Carga refrigerada." },
  { id: 2, origen: "Rosario, Santa Fe", destino: "Mendoza, Capital", provincia: "Mendoza", carga: "Alimentos secos", pallets: 18, peso: "7.500 kg", fecha: "27/04/2025", empresa: "Arcor", observaciones: "Entrega urgente." },
  { id: 3, origen: "Bahía Blanca, Bs As", destino: "Neuquén, Capital", provincia: "Neuquén", carga: "Materiales de construcción", pallets: 30, peso: "13.000 kg", fecha: "29/04/2025", empresa: "Holcim", observaciones: "Se requiere lona." },
  { id: 4, origen: "Santa Fe, Santa Fe", destino: "Buenos Aires, La Plata", provincia: "Buenos Aires", carga: "Electrodomésticos", pallets: 20, peso: "9.000 kg", fecha: "30/04/2025", empresa: "Garbarino", observaciones: "Entrega en horario comercial." },
  { id: 5, origen: "Córdoba, Capital", destino: "Salta, Capital", provincia: "Salta", carga: "Alimentos congelados", pallets: 15, peso: "6.000 kg", fecha: "01/05/2025", empresa: "Nestlé", observaciones: "Requiere frío." },
  { id: 6, origen: "Mendoza, Capital", destino: "San Juan, Capital", provincia: "San Juan", carga: "Vinos", pallets: 10, peso: "4.000 kg", fecha: "02/05/2025", empresa: "Trapiche", observaciones: "Carga delicada." },
  { id: 7, origen: "La Plata, Buenos Aires", destino: "Santa Fe, Rosario", provincia: "Santa Fe", carga: "Muebles", pallets: 12, peso: "5.000 kg", fecha: "03/05/2025", empresa: "Ikea", observaciones: "Carga frágil." },
  { id: 8, origen: "Córdoba, Río Cuarto", destino: "Buenos Aires, CABA", provincia: "Buenos Aires", carga: "Textiles", pallets: 8, peso: "3.500 kg", fecha: "04/05/2025", empresa: "Zara", observaciones: "Entrega rápida." },
  { id: 9, origen: "San Miguel de Tucumán", destino: "Catamarca, Capital", provincia: "Catamarca", carga: "Cítricos", pallets: 15, peso: "6.200 kg", fecha: "05/05/2025", empresa: "San Miguel", observaciones: "Carga perecedera." },
  { id: 10, origen: "Corrientes, Capital", destino: "Formosa, Capital", provincia: "Formosa", carga: "Tabaco", pallets: 14, peso: "5.800 kg", fecha: "06/05/2025", empresa: "Nobleza Piccardo", observaciones: "Carga regulada." },
  { id: 11, origen: "Resistencia, Chaco", destino: "Posadas, Misiones", provincia: "Misiones", carga: "Papel", pallets: 16, peso: "7.000 kg", fecha: "07/05/2025", empresa: "Ledesma", observaciones: "Carga seca." },
  { id: 12, origen: "Paraná, Entre Ríos", destino: "Concordia, Entre Ríos", provincia: "Entre Ríos", carga: "Granos", pallets: 20, peso: "8.500 kg", fecha: "08/05/2025", empresa: "Cargill", observaciones: "Carga a granel." },
  { id: 13, origen: "San Luis, Capital", destino: "La Rioja, Capital", provincia: "La Rioja", carga: "Medicamentos", pallets: 6, peso: "2.000 kg", fecha: "09/05/2025", empresa: "Bayer", observaciones: "Carga con temperatura controlada." },
  { id: 14, origen: "Jujuy, San Salvador", destino: "Salta, Capital", provincia: "Salta", carga: "Azúcar", pallets: 18, peso: "7.200 kg", fecha: "10/05/2025", empresa: "Ledesma", observaciones: "Carga seca." },
  { id: 15, origen: "Mar del Plata, Buenos Aires", destino: "Bahía Blanca, Bs As", provincia: "Buenos Aires", carga: "Pescado", pallets: 10, peso: "4.500 kg", fecha: "11/05/2025", empresa: "Pesquera Sur", observaciones: "Requiere frío." },
];

// Mock data para el perfil y viajes
const perfilMock = {
  nombre: "Juan Pérez",
  reputacion: 4.7,
  viajes: 18,
  verificado: true,
  avatar: "https://ui-avatars.com/api/?name=Juan+Pérez&background=FF6600&color=fff&size=128",
};

const postulacionesMock = [
  { id: 1, carga: "Bebidas", estado: "Pendiente", destino: "Córdoba, Capital", fecha: "25/04/2025" },
  { id: 2, carga: "Alimentos secos", estado: "Aceptada", destino: "Mendoza, Capital", fecha: "27/04/2025" },
];

const enCursoMock = [
  { id: 3, carga: "Materiales de construcción", destino: "Neuquén, Capital", fecha: "29/04/2025", empresa: "Holcim" },
];

const historialMock = [
  { id: 4, carga: "Electrodomésticos", destino: "Salta", fecha: "12/03/2025", empresa: "Garbarino", calificacion: 5 },
  { id: 5, carga: "Alimentos", destino: "La Plata", fecha: "01/02/2025", empresa: "Coto", calificacion: 4.5 },
];

const docsMock = [
  { nombre: "Licencia", vence: "2025-08-10", estado: "ok" },
  { nombre: "Seguro", vence: "2025-05-01", estado: "alerta" },
];

// Provincias preferidas del transportista (simulado, normalmente viene del perfil)
const provinciasPreferidas = ["Buenos Aires", "Córdoba", "Santa Fe", "Mendoza"];

// Tipos de carga para filtros
const tiposCarga = Array.from(new Set(cargasMock.map(c => c.carga)));
const provinciasTodas = Array.from(new Set(cargasMock.map(c => c.provincia)));

// Tipos
interface Carga {
  id: number;
  origen: string;
  destino: string;
  provincia: string;
  carga: string;
  pallets: number;
  peso: string;
  fecha: string;
  empresa: string;
  observaciones: string;
}
interface Postulacion {
  id: number;
  carga: string;
  estado: string;
  destino: string;
  fecha: string;
  valor?: number;
}

export default function Dashboard() {
  const [cargas] = useState<Carga[]>(cargasMock);
  const [provFiltro, setProvFiltro] = useState('');
  const [tipoFiltro, setTipoFiltro] = useState('');
  const [scrollIndex, setScrollIndex] = useState(0);
  const cardsPorVista = 4; // Cards visibles a la vez
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [postulaciones, setPostulaciones] = useState<Postulacion[]>(postulacionesMock);
  const [showModal, setShowModal] = useState(false);
  const [selectedCarga, setSelectedCarga] = useState<Carga | null>(null);
  const [valorPropuesto, setValorPropuesto] = useState('');
  const [errorValor, setErrorValor] = useState('');

  // Cierra el menú si se hace click fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !(menuRef.current as any).contains(event.target)) {
        setShowMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Función para abrir el modal de postulación
  const handlePostularme = (carga: Carga) => {
    setSelectedCarga(carga);
    setValorPropuesto('');
    setErrorValor('');
    setShowModal(true);
  };

  // Función para enviar postulación
  const handleEnviarPostulacion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!valorPropuesto || isNaN(Number(valorPropuesto)) || Number(valorPropuesto) <= 0) {
      setErrorValor('Por favor ingresa un valor válido.');
      return;
    }
    if (!selectedCarga) return;
    setPostulaciones([
      ...postulaciones,
      {
        id: Date.now(),
        carga: selectedCarga.carga,
        destino: selectedCarga.destino,
        fecha: selectedCarga.fecha,
        estado: 'Pendiente',
        valor: Number(valorPropuesto)
      }
    ]);
    setShowModal(false);
    setSelectedCarga(null);
    setValorPropuesto('');
    setErrorValor('');
  };


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header propio del dashboard transportista */}
      <header className="w-full flex items-center justify-between px-6 py-4 bg-white shadow-sm border-b mb-6">
        <Link href="/" className="font-extrabold text-2xl tracking-tight text-orange-500 hover:underline focus:outline-none">Starting Point</Link>
        <div className="flex items-center gap-4">
          <div className="relative">
            <button
              className="focus:outline-none"
              onClick={() => setShowMenu((v: boolean) => !v)}
            >
              <img src={perfilMock.avatar} alt="Avatar" className="w-10 h-10 rounded-full border-2 border-orange-400" />
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
      <main className="max-w-7xl mx-auto py-8 px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Perfil */}
        <aside className="md:col-span-1 bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
          <img src={perfilMock.avatar} alt="Avatar" className="w-24 h-24 rounded-full mb-3 border-4 border-orange-400" />
          <h2 className="text-xl font-bold text-gray-900 mb-1">{perfilMock.nombre}</h2>
          <span className="text-sm text-gray-500 mb-1">Reputación: <b>{perfilMock.reputacion}</b> ⭐</span>
          <span className="text-sm text-gray-500 mb-2">Viajes: {perfilMock.viajes}</span>
          <span className={perfilMock.verificado ? "text-green-600 font-semibold" : "text-red-500 font-semibold"}>
            {perfilMock.verificado ? "✔ Verificado" : "No verificado"}
          </span>
        </aside>
        {/* Panel principal */}
        <section className="md:col-span-3 flex flex-col gap-6">
          {/* Oportunidades */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-bold mb-4 text-orange-600">Oportunidades disponibles</h3>
            {/* Filtros */}
            <div className="flex flex-wrap gap-4 mb-4">
              <select className="border rounded px-2 py-1" value={provFiltro} onChange={e => setProvFiltro(e.target.value)}>
                <option value="">Todas las provincias</option>
                {provinciasTodas.map((prov: string, i: number) => (
                  <option key={i} value={prov}>{prov}</option>
                ))}
              </select>
              <select className="border rounded px-2 py-1" value={tipoFiltro} onChange={e => setTipoFiltro(e.target.value)}>
                <option value="">Todos los tipos</option>
                {tiposCarga.map((tipo: string, i: number) => (
                  <option key={i} value={tipo}>{tipo}</option>
                ))}
              </select>
            </div>
            {/* Carrusel horizontal de cards */}
            <div className="relative">
              <div className="flex overflow-x-auto gap-4 pb-2 scrollbar-hide" style={{scrollBehavior:'smooth'}}>
                {cargas
                  .filter((c: Carga) => provinciasPreferidas.includes(c.provincia))
                  .filter((c: Carga) => !provFiltro || c.provincia === provFiltro)
                  .filter((c: Carga) => !tipoFiltro || c.carga === tipoFiltro)
                  .slice(scrollIndex, scrollIndex + cardsPorVista)
                  .map((carga: Carga) => {
                    const yaPostulado = postulaciones.some((p: Postulacion) => p.carga === carga.carga && p.destino === carga.destino && p.fecha === carga.fecha);
                    return (
                      <div
                        key={carga.id}
                        className={`min-w-[260px] max-w-[290px] border rounded-lg p-4 flex flex-col gap-2 shadow-sm transition ${yaPostulado ? 'bg-gray-200 opacity-60' : 'bg-gray-50'}`}
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-gray-800">{carga.carga}</span>
                          <span className="text-xs text-gray-500">{carga.fecha}</span>
                        </div>
                        <span className="text-sm text-gray-600">Origen: {carga.origen}</span>
                        <span className="text-sm text-gray-600">Destino: {carga.destino}</span>
                        <span className="text-sm text-gray-600">Provincia: {carga.provincia}</span>
                        <span className="text-sm text-gray-600">Empresa: {carga.empresa}</span>
                        <span className="text-xs text-gray-500">{carga.observaciones}</span>
                        <button
                          className={`mt-2 px-4 py-1 rounded text-sm font-semibold shadow transition ${yaPostulado ? 'bg-gray-400 cursor-not-allowed text-white' : 'bg-orange-500 hover:bg-orange-600 text-white'}`}
                          onClick={() => !yaPostulado && handlePostularme(carga)}
                          disabled={yaPostulado}
                        >
                          {yaPostulado ? 'Postulado' : 'Postularme'}
                        </button>
                      </div>
                    );
                  })}
              </div>
              {/* Botón mostrar más → */}
              <button
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded-full shadow-lg z-10"
                onClick={() => setScrollIndex(idx => Math.min(idx + cardsPorVista, cargas.filter(c => provinciasPreferidas.includes(c.provincia)).filter(c => !provFiltro || c.provincia === provFiltro).filter(c => !tipoFiltro || c.carga === tipoFiltro).length - cardsPorVista))}
                disabled={scrollIndex + cardsPorVista >= cargas.filter(c => provinciasPreferidas.includes(c.provincia)).filter(c => !provFiltro || c.provincia === provFiltro).filter(c => !tipoFiltro || c.carga === tipoFiltro).length}
                style={{display: (cargas.filter(c => provinciasPreferidas.includes(c.provincia)).filter(c => !provFiltro || c.provincia === provFiltro).filter(c => !tipoFiltro || c.carga === tipoFiltro).length > cardsPorVista) ? 'block' : 'none'}}
              >
                Mostrar más →
              </button>
              {/* Botón mostrar menos ← */}
              <button
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded-full shadow-lg z-10"
                onClick={() => setScrollIndex(idx => Math.max(idx - cardsPorVista, 0))}
                disabled={scrollIndex === 0}
                style={{display: (cargas.filter(c => provinciasPreferidas.includes(c.provincia)).filter(c => !provFiltro || c.provincia === provFiltro).filter(c => !tipoFiltro || c.carga === tipoFiltro).length > cardsPorVista) ? 'block' : 'none'}}
              >
                ←
              </button>
            </div>
          </div>
          {/* Mis postulaciones */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-bold mb-4 text-cyan-700">Mis postulaciones</h3>
            <ul className="divide-y">
              {postulaciones.map((p: Postulacion) => (
                <li key={p.id} className="py-2 flex justify-between items-center">
                  <span>{p.carga} → {p.destino}</span>
                  <span className={p.estado === "Aceptada" ? "text-green-600" : "text-orange-500"}>{p.estado}</span>
                  <span className="text-xs text-gray-400">{p.fecha}</span>
                  {p.valor && (
                    <span className="text-green-700 font-bold ml-2">${p.valor.toLocaleString()}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          {/* Viajes en curso */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-bold mb-4 text-green-700">Viajes en curso</h3>
            <ul className="divide-y">
              {enCursoMock.length === 0 && <li className="text-gray-400">No tienes viajes en curso.</li>}
              {enCursoMock.map((v: any) => (
                <li key={v.id} className="py-2 flex justify-between items-center">
                  <span>{v.carga} → {v.destino}</span>
                  <span className="text-xs text-gray-400">{v.fecha}</span>
                  <span className="text-xs text-gray-500">{v.empresa}</span>
                  <button className="ml-2 bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-xs font-semibold shadow">Finalizar</button>
                </li>
              ))}
            </ul>
          </div>
          {/* Historial de viajes */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-bold mb-4 text-gray-700">Historial de viajes</h3>
            <ul className="divide-y">
              {historialMock.map((h: any) => (
                <li key={h.id} className="py-2 flex justify-between items-center">
                  <span>{h.carga} → {h.destino}</span>
                  <span className="text-xs text-gray-400">{h.fecha}</span>
                  <span className="text-xs text-gray-500">{h.empresa}</span>
                  <span className="text-yellow-500">{h.calificacion} ⭐</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Documentación y alertas */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-bold mb-4 text-red-700">Documentación y alertas</h3>
            <ul className="divide-y">
              {docsMock.map((doc: any, i: number) => (
                <li key={i} className="py-2 flex justify-between items-center">
                  <span>{doc.nombre}</span>
                  <span className={doc.estado === "ok" ? "text-green-600" : "text-red-500 font-bold"}>{doc.estado === "ok" ? "Vigente" : "Pronto a vencer"}</span>
                  <span className="text-xs text-gray-400">Vence: {doc.vence}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      {/* Modal de postulación */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-sm w-full flex flex-col items-center relative">
            <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-700" onClick={() => setShowModal(false)}>&times;</button>
            <h2 className="text-xl font-bold text-gray-800 mb-2">Postularse a {selectedCarga?.carga}</h2>
            <p className="mb-4 text-sm text-gray-600">Destino: {selectedCarga?.destino}</p>
            <form className="w-full flex flex-col gap-3" onSubmit={handleEnviarPostulacion}>
              <label className="text-sm font-medium text-gray-700">Valor propuesto ($)</label>
              <input
                type="number"
                min="1"
                className="border border-gray-300 rounded-lg px-4 py-2"
                value={valorPropuesto}
                onChange={e => setValorPropuesto(e.target.value)}
                placeholder="Ej: 1500000"
                required
              />
              {errorValor && <span className="text-red-500 text-xs">{errorValor}</span>}
              <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold shadow mt-2">Enviar postulación</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
