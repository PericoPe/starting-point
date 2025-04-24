"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegistroDador() {
  const router = useRouter();
  type FormState = {
    empresa: string;
    cuit: string;
    iib: string;
    email: string;
    telefono: string;
    direccion: string;
    provincia: string;
    localidad: string;
    tipoEmpresa: string;

    responsable: string;
    logo?: File;
    constanciaCuit?: File;
  };
  const [form, setForm] = useState<FormState>({
    empresa: '',
    cuit: '',
    iib: '',
    email: '',
    telefono: '',
    direccion: '',
    provincia: '',
    localidad: '',
    tipoEmpresa: '',

    responsable: '',
    logo: undefined,
    constanciaCuit: undefined,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    // Validación de campos
    if (!form.empresa || !form.cuit || !form.iib || !form.email || !form.telefono || !form.direccion || !form.provincia || !form.localidad || !form.tipoEmpresa || !form.responsable) {
      setError('Por favor completa todos los campos obligatorios.');
      setLoading(false);
      return;
    }
    // Aquí iría lógica real de registro
    setTimeout(() => {
      setLoading(false);
      router.push('/dashboard-dador');
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white rounded-xl shadow-md p-8 max-w-lg w-full flex flex-col items-center">
        <h1 className="text-2xl font-extrabold text-gray-900 mb-4 text-center">Registro de Empresa - Dador de Carga</h1>
        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-4">
            <input className="border border-gray-300 rounded-lg px-4 py-2 flex-1" type="text" name="empresa" placeholder="Razón social de la empresa" value={form.empresa} onChange={handleChange} required />
            <input className="border border-gray-300 rounded-lg px-4 py-2 flex-1" type="text" name="cuit" placeholder="CUIT" value={form.cuit} onChange={handleChange} required />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <input className="border border-gray-300 rounded-lg px-4 py-2 flex-1" type="text" name="iib" placeholder="Ingresos Brutos (II.BB.)" value={form.iib} onChange={handleChange} required />
            <input className="border border-gray-300 rounded-lg px-4 py-2 flex-1" type="email" name="email" placeholder="Email de contacto" value={form.email} onChange={handleChange} required />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <input className="border border-gray-300 rounded-lg px-4 py-2 flex-1" type="text" name="telefono" placeholder="Teléfono de contacto" value={form.telefono} onChange={handleChange} required />
            <input className="border border-gray-300 rounded-lg px-4 py-2 flex-1" type="text" name="direccion" placeholder="Dirección fiscal" value={form.direccion} onChange={handleChange} required />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <input className="border border-gray-300 rounded-lg px-4 py-2 flex-1" type="text" name="provincia" placeholder="Provincia" value={form.provincia} onChange={handleChange} required />
            <input className="border border-gray-300 rounded-lg px-4 py-2 flex-1" type="text" name="localidad" placeholder="Localidad" value={form.localidad} onChange={handleChange} required />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <input className="border border-gray-300 rounded-lg px-4 py-2 flex-1" type="text" name="responsable" placeholder="Nombre y apellido del responsable de contacto" value={form.responsable} onChange={handleChange} required />
            <input className="border border-gray-300 rounded-lg px-4 py-2 flex-1" type="text" name="tipoEmpresa" placeholder="Tipo de empresa (Productor, Distribuidor, etc.)" value={form.tipoEmpresa} onChange={handleChange} required />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <input className="border border-gray-300 rounded-lg px-4 py-2 flex-1" type="url" name="web" placeholder="Sitio web (opcional)" value={form.web} onChange={handleChange} />
            <input className="border border-gray-300 rounded-lg px-4 py-2 flex-1" type="file" name="logo" accept="image/*" onChange={e => setForm({ ...form, logo: e.target.files?.[0] })} />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <input className="border border-gray-300 rounded-lg px-4 py-2 flex-1" type="file" name="constanciaCuit" accept="application/pdf,image/*" onChange={e => setForm({ ...form, constanciaCuit: e.target.files?.[0] })} />
          </div>
          {error && <span className="text-red-500 text-xs">{error}</span>}
          <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold shadow mt-2" disabled={loading}>
            {loading ? "Procesando..." : "Siguiente"}
          </button>
        </form>
      </div>
    </div>
  );
}
