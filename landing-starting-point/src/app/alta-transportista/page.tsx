"use client";
// Eliminada la importación de next-auth/react
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { useState } from "react";
import { supabase } from '../../supabaseClient';

export default function AltaTransportista() {
  // Eliminada la obtención de sesión de usuario
  const router = useRouter();
  const [form, setForm] = useState({
    nombre: '', dni: '', telefono: '', email: '', domicilio: '', licencia: '', vtoLicencia: '',
    marca: '', modelo: '', anio: '', patente: '', patenteChasis: '', tipoCamion: '', tipoCarga: '', capacidad: '', numChasis: '', numMotor: '', seguro: '', poliza: '', vtoSeguro: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    // TODO: guardar en Supabase (tabla transportistas y camiones)
    try {
      // Ejemplo: await supabase.from('transportistas').insert([{...form}]);
      setLoading(false);
      router.push('/bienvenida-transportista');
    } catch (err) {
      setError('Error al guardar los datos. Intenta nuevamente.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="bg-white rounded-xl shadow-md p-8 max-w-2xl w-full flex flex-col items-center">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4 text-center">Completa tu registro</h1>
        <p className="text-gray-600 mb-6 text-center">
          Ya te autenticamos con Google. Ahora necesitamos algunos datos para completar tu perfil de transportista.
        </p>
        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
          <h2 className="text-xl font-bold text-gray-800 mb-2 mt-2">Datos personales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="border border-gray-300 rounded-lg px-4 py-2" type="text" name="nombre" placeholder="Nombre completo" value={form.nombre} onChange={handleChange} required />
            <input className="border border-gray-300 rounded-lg px-4 py-2" type="text" name="dni" placeholder="DNI / CUIT" value={form.dni} onChange={handleChange} required />
            <input className="border border-gray-300 rounded-lg px-4 py-2" type="text" name="telefono" placeholder="Teléfono" value={form.telefono} onChange={handleChange} required />
            <input className="border border-gray-300 rounded-lg px-4 py-2" type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
            <input className="border border-gray-300 rounded-lg px-4 py-2" type="text" name="domicilio" placeholder="Domicilio" value={form.domicilio} onChange={handleChange} required />
            <input className="border border-gray-300 rounded-lg px-4 py-2" type="text" name="licencia" placeholder="Licencia de conducir" value={form.licencia} onChange={handleChange} required />
            <input className="border border-gray-300 rounded-lg px-4 py-2" type="date" name="vtoLicencia" placeholder="Vencimiento de licencia" value={form.vtoLicencia} onChange={handleChange} required />
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-2 mt-4">Datos del camión</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="border border-gray-300 rounded-lg px-4 py-2" type="text" name="marca" placeholder="Marca" value={form.marca} onChange={handleChange} required />
            <input className="border border-gray-300 rounded-lg px-4 py-2" type="text" name="modelo" placeholder="Modelo" value={form.modelo} onChange={handleChange} required />
            <input className="border border-gray-300 rounded-lg px-4 py-2" type="number" name="anio" placeholder="Año" value={form.anio} onChange={handleChange} required min="1900" max="2100" />
            <input className="border border-gray-300 rounded-lg px-4 py-2" type="text" name="patente" placeholder="Patente" value={form.patente} onChange={handleChange} required />
            <input className="border border-gray-300 rounded-lg px-4 py-2" type="text" name="patenteChasis" placeholder="Patente chasis" value={form.patenteChasis} onChange={handleChange} required />
            <input className="border border-gray-300 rounded-lg px-4 py-2" type="text" name="tipoCamion" placeholder="Tipo de camión (chasis, acoplado, etc.)" value={form.tipoCamion} onChange={handleChange} required />
            <input className="border border-gray-300 rounded-lg px-4 py-2" type="text" name="tipoCarga" placeholder="Tipo de carga (opcional)" value={form.tipoCarga} onChange={handleChange} />
            <input className="border border-gray-300 rounded-lg px-4 py-2" type="number" name="capacidad" placeholder="Capacidad (toneladas)" value={form.capacidad} onChange={handleChange} required min="1" />
            <input className="border border-gray-300 rounded-lg px-4 py-2" type="text" name="numChasis" placeholder="N° de chasis" value={form.numChasis} onChange={handleChange} required />
            <input className="border border-gray-300 rounded-lg px-4 py-2" type="text" name="numMotor" placeholder="N° de motor" value={form.numMotor} onChange={handleChange} required />
            <input className="border border-gray-300 rounded-lg px-4 py-2" type="text" name="seguro" placeholder="Compañía de seguro" value={form.seguro} onChange={handleChange} required />
            <input className="border border-gray-300 rounded-lg px-4 py-2" type="text" name="poliza" placeholder="N° de póliza" value={form.poliza} onChange={handleChange} required />
            <input className="border border-gray-300 rounded-lg px-4 py-2" type="date" name="vtoSeguro" placeholder="Vencimiento del seguro" value={form.vtoSeguro} onChange={handleChange} required />
          </div>
          {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-3 rounded-lg font-semibold text-lg shadow focus:outline-none focus:ring-2 focus:ring-orange-300 mt-2"
            disabled={loading}
          >
            {loading ? "Guardando..." : "Guardar datos"}
          </button>
        </form>
        <p className="text-xs text-gray-400 mt-4 text-center">Tus datos serán protegidos y solo usados para la plataforma.</p>
      </div>
    </div>
  );
}
