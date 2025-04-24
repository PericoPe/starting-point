"use client";
import Link from "next/link";
import { useState } from "react";

export default function DashboardDador() {
  const [cargas, setCargas] = useState([]);
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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    // Validación simple
    if (!form.origen || !form.destino || !form.fecha || !form.carga) {
      setError('Por favor completa todos los campos obligatorios.');
      setLoading(false);
      return;
    }
    setCargas([
      ...cargas,
      {
        ...form,
        id: Date.now(),
        ofertas: [] // Aquí se guardarán las ofertas recibidas
      }
    ]);
    setLoading(false);
    setSuccess('Carga publicada con éxito.');
    setForm({ origen: '', destino: '', fecha: '', carga: '', observaciones: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-20 bg-white/95 backdrop-blur border-b border-gray-200 shadow-sm w-full">
        <nav className="max-w-4xl mx-auto flex items-center justify-between px-6 py-4">
          <span className="font-extrabold text-2xl tracking-tight text-orange-500">Starting Point</span>
          <Link href="/" className="px-4 py-2 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow transition">Salir</Link>
        </nav>
      </header>
      <main className="max-w-4xl mx-auto py-8 px-4 flex flex-col gap-8">
        {/* Resumen */}
        <section className="flex flex-col md:flex-row gap-4 mb-2">
          <div className="flex-1 bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <span className="text-3xl font-bold text-orange-500">{cargas.length}</span>
            <span className="text-gray-700">Cargas publicadas</span>
          </div>
          <div className="flex-1 bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <span className="text-3xl font-bold text-cyan-700">{cargas.reduce((acc, c) => acc + (c.ofertas?.length || 0), 0)}</span>
            <span className="text-gray-700">Ofertas recibidas</span>
          </div>
        </section>
        {/* Cargas con ofertas */}
        <section className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>Con ofertas</span>
            <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">{cargas.filter(c => c.ofertas && c.ofertas.length > 0).length}</span>
          </h2>
          {cargas.filter(c => c.ofertas && c.ofertas.length > 0).length === 0 ? (
            <p className="text-gray-400">Ninguna de tus cargas recibió ofertas aún.</p>
          ) : (
            <ul className="w-full grid md:grid-cols-2 gap-4">
              {cargas.filter(c => c.ofertas && c.ofertas.length > 0).map((carga, idx) => (
                <li key={carga.id || idx} className="border rounded-lg p-4 flex flex-col bg-green-50">
                  <span className="font-semibold text-gray-700">{carga.origen} → {carga.destino}</span>
                  <span className="text-xs text-gray-500">{carga.fecha}</span>
                  <span className="text-sm text-gray-600">{carga.carga}</span>
                  {carga.observaciones && <span className="text-xs text-gray-400">{carga.observaciones}</span>}
                  <div className="mt-2">
                    <span className="text-xs text-gray-700 font-semibold">Ofertas recibidas:</span>
                    <ul className="mt-1">
                      {carga.ofertas.map((oferta, i) => (
                        <li key={i} className="text-xs text-green-700">{oferta.transportista}: ${oferta.valor.toLocaleString()}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
        {/* Cargas sin ofertas */}
        <section className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>Sin ofertas</span>
            <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">{cargas.filter(c => !c.ofertas || c.ofertas.length === 0).length}</span>
          </h2>
          {cargas.filter(c => !c.ofertas || c.ofertas.length === 0).length === 0 ? (
            <p className="text-gray-400">Todas tus cargas recibieron ofertas.</p>
          ) : (
            <ul className="w-full grid md:grid-cols-2 gap-4">
              {cargas.filter(c => !c.ofertas || c.ofertas.length === 0).map((carga, idx) => (
                <li key={carga.id || idx} className="border rounded-lg p-4 flex flex-col bg-gray-50">
                  <span className="font-semibold text-gray-700">{carga.origen} → {carga.destino}</span>
                  <span className="text-xs text-gray-500">{carga.fecha}</span>
                  <span className="text-sm text-gray-600">{carga.carga}</span>
                  {carga.observaciones && <span className="text-xs text-gray-400">{carga.observaciones}</span>}
                  <span className="text-xs text-gray-400 mt-2">Sin ofertas aún</span>
                </li>
              ))}
            </ul>
          )}
        </section>
        {/* Tips para mejores resultados */}
        <section className="bg-cyan-50 rounded-xl shadow-md p-6 flex flex-col items-center mb-4">
          <h2 className="text-lg font-bold text-cyan-700 mb-2">Tips para mejores resultados</h2>
          <ul className="list-disc text-sm text-cyan-900 pl-4">
            <li>Publica tus cargas con anticipación para recibir más ofertas.</li>
            <li>Incluye observaciones claras sobre horarios, requisitos y condiciones.</li>
            <li>Revisa periódicamente las ofertas y responde rápido para asegurar la mejor opción.</li>
          </ul>
        </section>
        {/* Publicar nueva carga */}
        <section className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Publicar nueva carga</h2>
          <form className="w-full max-w-md flex flex-col gap-4" onSubmit={handleSubmit}>
            <input className="border border-gray-300 rounded-lg px-4 py-2" type="text" name="origen" placeholder="Origen" value={form.origen} onChange={handleChange} required />
            <input className="border border-gray-300 rounded-lg px-4 py-2" type="text" name="destino" placeholder="Destino" value={form.destino} onChange={handleChange} required />
            <input className="border border-gray-300 rounded-lg px-4 py-2" type="date" name="fecha" placeholder="Fecha" value={form.fecha} onChange={handleChange} required />
            <input className="border border-gray-300 rounded-lg px-4 py-2" type="text" name="carga" placeholder="Tipo de carga" value={form.carga} onChange={handleChange} required />
            <textarea className="border border-gray-300 rounded-lg px-4 py-2" name="observaciones" placeholder="Observaciones (opcional)" value={form.observaciones} onChange={handleChange} />
            {error && <span className="text-red-500 text-xs">{error}</span>}
            {success && <span className="text-green-600 text-xs">{success}</span>}
            <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold shadow mt-2" disabled={loading}>
              {loading ? "Publicando..." : "Publicar carga"}
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
