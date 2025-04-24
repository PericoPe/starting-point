export default function PoliticaPrivacidad() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-2xl font-bold mb-4">Política de Privacidad</h1>
      <p className="mb-4">En Starting Point nos comprometemos a proteger la privacidad y los datos personales de nuestros usuarios, tanto transportistas como dadores de carga. A continuación, te informamos cómo recopilamos, usamos y protegemos tu información.</p>
      <h2 className="text-lg font-semibold mt-6 mb-2">1. Información que recopilamos</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Datos de registro: nombre, apellido, DNI, CUIT/CUIL, email, teléfono, dirección, información fiscal.</li>
        <li>Datos de operación: información sobre cargas, viajes, vehículos, preferencias de entrega, documentación.</li>
        <li>Datos de pago: información bancaria (CBU, alias, banco).</li>
        <li>Datos técnicos: dirección IP, tipo de dispositivo, sistema operativo, navegador, cookies y datos de uso.</li>
      </ul>
      <h2 className="text-lg font-semibold mt-6 mb-2">2. Uso de la información</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Gestionar el registro y la autenticación de usuarios.</li>
        <li>Facilitar la conexión entre transportistas y dadores de carga.</li>
        <li>Procesar pagos y transferencias.</li>
        <li>Mejorar la seguridad y la experiencia de usuario en la plataforma.</li>
        <li>Enviar notificaciones relevantes sobre la operativa y novedades.</li>
        <li>Cumplir con obligaciones legales y regulatorias.</li>
      </ul>
      <h2 className="text-lg font-semibold mt-6 mb-2">3. Compartir información</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Solo compartimos datos con terceros cuando es necesario para la operativa (por ejemplo, procesadores de pago) o por requerimiento legal.</li>
        <li>No vendemos ni cedemos tus datos a terceros para fines comerciales.</li>
      </ul>
      <h2 className="text-lg font-semibold mt-6 mb-2">4. Seguridad de los datos</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Implementamos medidas técnicas y organizativas para proteger tu información contra accesos no autorizados, pérdida o alteración.</li>
      </ul>
      <h2 className="text-lg font-semibold mt-6 mb-2">5. Derechos de los usuarios</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Puedes acceder, rectificar o eliminar tus datos personales en cualquier momento desde tu perfil o contactándonos.</li>
        <li>Puedes solicitar la eliminación de tu cuenta y datos asociados.</li>
      </ul>
      <h2 className="text-lg font-semibold mt-6 mb-2">6. Cambios en la política</h2>
      <p className="mb-4">Nos reservamos el derecho de modificar esta política. Notificaremos los cambios relevantes a través de la plataforma.</p>
      <h2 className="text-lg font-semibold mt-6 mb-2">7. Contacto</h2>
      <p>Si tienes dudas sobre esta política, puedes escribirnos a <a href="mailto:legal@startingpoint.com" className="text-orange-600 underline">legal@startingpoint.com</a>.</p>
    </div>
  );
}
