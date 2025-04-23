export default function FooterNav() {
  return (
    <div className="flex md:flex-row flex-col justify-center md:gap-6 gap-3 py-10 text-blue-900 text-xl">
      {/* Columna 1 */}
      <div className="flex flex-col gap-1 text-center">
        <a href="#">Ofertas</a>
        <a href="#">Paquetes</a>
      </div>

      {/* Separador */}
      <div className="md:w-px w-[90%] bg-orange-500" />

      {/* Columna 2 */}
      <div className="flex flex-col gap-1 text-center">
        <a href="#">Destinos</a>
        <a href="#">Excursiones</a>
        <a href="#">Alojamientos</a>
        <a href="#">Carros</a>
        <a href="#">Vuelos</a>
      </div>

      {/* Separador */}
      <div className="md:w-px w-[90%] bg-orange-500" />

      {/* Columna 3 */}
      <div className="flex flex-col gap-1 text-center">
        <a href="#">Quienes somos</a>
        <a href="#">Contáctanos</a>
      </div>

      {/* Separador */}
      <div className="md:w-px w-[90%] bg-orange-500" />

      {/* Columna 4 */}
      <div className="flex flex-col gap-1 text-center">
        <a href="#">Mi Cuenta</a>
        <a href="#">Mis Viajes</a>
        <a href="#">Mi Perfil</a>
        <a href="#">Eliminar mi cuenta</a>
      </div>

      {/* Separador */}
      <div className="md:w-px w-[90%] bg-orange-500" />

      {/* Columna 5 */}
      <div className="flex flex-col gap-1 text-center">
        <a href="#">Confianza en tus compras</a>
        <a href="#">Términos y condiciones</a>
        <a href="#">Política de privacidad</a>
        <a href="#">Promociones vigentes</a>
        <a href="#">Condiciones IVA</a>
      </div>
    </div>
  );
}
