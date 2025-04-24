export default function FAQ() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-2xl font-bold mb-6">Preguntas Frecuentes (FAQ)</h1>
      <h2 className="text-lg font-semibold mt-6 mb-2">Para transportistas</h2>
      <ul className="list-disc ml-6 mb-6">
        <li><b>¿Cómo me registro como transportista?</b><br />Desde la landing, haz click en "Soy Transportista" y completa el formulario con tus datos personales, documentación del vehículo y datos bancarios.</li>
        <li><b>¿Puedo registrar más de un camión o unidad?</b><br />Sí, puedes agregar y gestionar varias unidades desde tu perfil en la sección "Gestionar unidades".</li>
        <li><b>¿Qué requisitos debe cumplir mi vehículo?</b><br />Debes contar con toda la documentación vigente (seguro, VTV, cédula verde/azul, etc.) y cumplir con las normativas de transporte.</li>
        <li><b>¿Cómo encuentro cargas disponibles?</b><br />En tu dashboard verás las oportunidades de cargas publicadas. Puedes postularte a las que se ajusten a tu perfil y disponibilidad.</li>
        <li><b>¿Cómo se realiza el pago de los viajes?</b><br />El pago se transfiere a tu CBU/Alias una vez que el viaje es completado y validado por el dador de carga.</li>
        <li><b>¿Cómo se califica a los dadores de carga?</b><br />Al finalizar cada viaje, puedes dejar una valoración y comentario sobre el dador de carga. Esto ayuda a mejorar la comunidad.</li>
        <li><b>¿Qué hago si tengo un problema con un viaje o un dador?</b><br />Puedes reportar incidencias desde la plataforma. Nuestro equipo de soporte intermediará si es necesario.</li>
        <li><b>¿Puedo eliminar mi cuenta?</b><br />Sí, puedes solicitar la eliminación de tu cuenta y datos asociados desde la sección de configuración.</li>
      </ul>
      <h2 className="text-lg font-semibold mt-6 mb-2">Para dadores de carga</h2>
      <ul className="list-disc ml-6 mb-6">
        <li><b>¿Cómo publico una carga?</b><br />Regístrate como dador de carga y utiliza el formulario para detallar tu envío, incluyendo origen, destino, tipo de carga y requisitos especiales.</li>
        <li><b>¿Cómo selecciono un transportista?</b><br />Recibirás postulaciones de transportistas. Puedes ver su reputación, verificaciones y elegir el que mejor se adapte a tus necesidades.</li>
        <li><b>¿Qué seguridad tengo sobre los transportistas?</b><br />Todos los transportistas pasan por un proceso de verificación documental y cuentan con un sistema de reputación visible.</li>
        <li><b>¿Cómo se realiza el pago?</b><br />El pago se gestiona a través de la plataforma y se libera al transportista una vez confirmado el cumplimiento del viaje.</li>
        <li><b>¿Puedo cancelar una carga publicada?</b><br />Sí, puedes cancelar una carga antes de que haya sido aceptada por un transportista.</li>
        <li><b>¿Qué hago si tengo un reclamo o inconveniente?</b><br />Puedes comunicarte con soporte o utilizar la sección de incidencias para que te ayudemos a resolverlo.</li>
        <li><b>¿Puedo editar o eliminar mi cuenta?</b><br />Sí, puedes modificar tus datos o solicitar la eliminación de tu cuenta desde la configuración.</li>
      </ul>
      <h2 className="text-lg font-semibold mt-6 mb-2">Sobre la plataforma</h2>
      <ul className="list-disc ml-6 mb-6">
        <li><b>¿Tiene costo usar Starting Point?</b><br />El registro es gratuito. Pueden aplicarse comisiones por transacción, que se informarán antes de confirmar cada operación.</li>
        <li><b>¿Cómo protege Starting Point mis datos?</b><br />Aplicamos medidas de seguridad y cumplimos con normativas de privacidad. Consulta la sección de Política de Privacidad para más detalles.</li>
        <li><b>¿Puedo usar la plataforma desde el celular?</b><br />Sí, la plataforma es completamente responsiva y puede usarse desde cualquier dispositivo.</li>
      </ul>
      <h2 className="text-lg font-semibold mt-6 mb-2">¿Aún tienes dudas?</h2>
      <p>Escríbenos a <a href="mailto:soporte@startingpoint.com" className="text-orange-600 underline">soporte@startingpoint.com</a> y te responderemos a la brevedad.</p>
    </div>
  );
}
