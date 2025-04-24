"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

// Mock data para cargas
const cargasMock = [
  {
    id: 1,
    origen: "Buenos Aires, CABA",
    destino: "Córdoba, Capital",
    carga: "Bebidas",
    pallets: 24,
    peso: "10.000 kg",
    fecha: "25/04/2025",
    empresa: "Coca Cola",
    observaciones: "Carga refrigerada."
  },
  {
    id: 2,
    origen: "Rosario, Santa Fe",
    destino: "Mendoza, Capital",
    carga: "Alimentos secos",
    pallets: 18,
    peso: "7.500 kg",
    fecha: "27/04/2025",
    empresa: "Arcor",
    observaciones: "Entrega urgente."
  },
  {
    id: 3,
    origen: "Bahía Blanca, Bs As",
    destino: "Neuquén, Capital",
    carga: "Materiales de construcción",
    pallets: 30,
    peso: "13.000 kg",
    fecha: "29/04/2025",
    empresa: "Holcim",
    observaciones: "Se requiere lona."
  }
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

export default function Dashboard() {
  const [cargas] = useState(cargasMock);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const [postulaciones, setPostulaciones] = useState(postulacionesMock);
  const [showModal, setShowModal] = useState(false);
  const [selectedCarga, setSelectedCarga] = useState(null);
  const [valorPropuesto, setValorPropuesto] = useState('');
  const [errorValor, setErrorValor] = useState('');

  // Cierra el menú si se hace click fuera
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Función para abrir el modal de postulación
  const handlePostularme = (carga) => {
    setSelectedCarga(carga);
    setValorPropuesto('');
    setErrorValor('');
    setShowModal(true);
  };

  // Función para enviar postulación
  const handleEnviarPostulacion = (e) => {
    e.preventDefault();
    if (!valorPropuesto || isNaN(Number(valorPropuesto)) || Number(valorPropuesto) <= 0) {
      setErrorValor('Por favor ingresa un valor válido.');
      return;
    }
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
      {/* Header tipo landing */}
      <header className="sticky top-0 z-20 bg-white/95 backdrop-blur border-b border-gray-200 shadow-sm w-full">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" className="font-extrabold text-2xl tracking-tight text-orange-500 hover:underline focus:outline-none">Starting Point</Link>
          <div className="flex items-center gap-4">
            <Link href="/" className="px-4 py-2 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow transition">Salir</Link>
          </div>
        </nav>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cargas.map((carga) => {
                // Verifica si ya está postulado a esta carga
                const yaPostulado = postulaciones.some(p => p.carga === carga.carga && p.destino === carga.destino && p.fecha === carga.fecha);
                return (
                  <div
                    key={carga.id}
                    className={`border rounded-lg p-4 flex flex-col gap-2 shadow-sm transition ${yaPostulado ? 'bg-gray-200 opacity-60' : 'bg-gray-50'}`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-800">{carga.carga}</span>
                      <span className="text-xs text-gray-500">{carga.fecha}</span>
                    </div>
                    <span className="text-sm text-gray-600">Destino: {carga.destino}</span>
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
          </div>
          {/* Mis postulaciones */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-bold mb-4 text-cyan-700">Mis postulaciones</h3>
            <ul className="divide-y">
              {postulaciones.map((p) => (
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
              {enCursoMock.map((v) => (
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
              {historialMock.map((h) => (
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
              {docsMock.map((doc, i) => (
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
