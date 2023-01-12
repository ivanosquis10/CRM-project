import { useLoaderData } from 'react-router-dom';
import { obtenerClientes } from '../data/clientes';
import Clientes from '../components/Clientes';

export function loader() {
  const clientes = obtenerClientes();
  return clientes;
}

const Index = () => {
  // function loader, funciona como un useEffect pero es distinto. Va a ser una forma de agregarle state a la aplicacion, consultando una API, etc, todo esto por react router dom. La forma de sacar la informacion es a traves de "useLoaderData"

  const clientes = useLoaderData();
  // console.log(datos)
  return (
    <>
      <h1 className="text-4xl font-black text-blue-900">Clientes</h1>
      <p className="mt-3 font-bold text-blue-800">Administra tus clientes</p>

      {clientes.length ? (
        <table className="w-full bg-white shadow mt-5 table-auto">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-2">Clientes</th>
              <th className="p-2">Contacto</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>

          <tbody>
            {clientes.map((cliente) => (
              <Clientes cliente={cliente} key={cliente.id} />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center mt-10 text-white font-black bg-blue-800 p-2">
          No hay clientes aún
        </p>
      )}
    </>
  );
};

export default Index;
