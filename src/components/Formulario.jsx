const Formulario = ({ cliente }) => {
  return (
    <>
      <div className="mb-4">
        <label className="text-gray-700 font-bold" htmlFor="nombre">
          Nombre:
        </label>
        <input
          id="nombre"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-100 rounded-md"
          placeholder="Nombre del Cliente"
          name="nombre"
          defaultValue={cliente?.nombre}
        />
      </div>
      <div className="mb-4">
        <label className="text-gray-700 font-bold" htmlFor="empresa">
          Empresa:
        </label>
        <input
          id="empresa"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-100 rounded-md"
          placeholder="Empresa del Cliente"
          name="empresa"
          defaultValue={cliente?.empresa}
        />
      </div>

      <div className="mb-4">
        <label className="text-gray-700 font-bold" htmlFor="email">
          E-mail:
        </label>
        <input
          id="email"
          type="email"
          className="mt-2 block w-full p-3 bg-gray-100 rounded-md"
          placeholder="Email del Cliente"
          name="email"
          defaultValue={cliente?.email}
        />
      </div>

      <div className="mb-4">
        <label className="text-gray-700 font-bold" htmlFor="telefono">
          Teléfono:
        </label>
        <input
          id="telefono"
          type="tel"
          className="mt-2 block w-full p-3 bg-gray-100 rounded-md"
          placeholder="Teléfono del Cliente"
          name="telefono"
          defaultValue={cliente?.telefono}
        />
      </div>

      <div className="mb-4">
        <label className="text-gray-700 font-bold" htmlFor="notas">
          Notas:
        </label>
        <textarea
          as="textarea"
          id="notas"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-100 rounded-md h-40 align-self"
          placeholder="Notas del Cliente"
          name="notas"
          defaultValue={cliente?.notas}
        />
      </div>
    </>
  );
};

export default Formulario;
