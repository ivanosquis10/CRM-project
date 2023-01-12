import { useNavigate, Form, redirect } from 'react-router-dom';
import { eliminarCliente } from '../data/clientes';

export async function action({ params }) {
  await eliminarCliente(params.clienteId);
  return redirect('/');
}

const Clientes = ({ cliente }) => {
  const navigate = useNavigate();

  const { nombre, empresa, email, telefono, id } = cliente;

  return (
    <tr className="border-b">
      <td className="p-4 space-y-1">
        <p className="text-2xl text-gray-800">{nombre}</p>
        <p className="text-gray-800">{empresa}</p>
      </td>

      <td className="p-4">
        <p className="text-gray-600">
          <span className="text-gray-700 font-bold uppercase">Email: </span>{' '}
          {email}
        </p>
        <p className="text-gray-600">
          <span className="text-gray-700 font-bold uppercase">Tel: </span>{' '}
          {telefono}
        </p>
      </td>

      <td className="p-4 flex justify-around">
        <button
          type="button"
          className="text-white bg-blue-600 p-1 rounded-md font-bold"
          onClick={() => navigate(`/clientes/${id}/editar`)}
        >
          Editar
        </button>
        <Form
          method="post"
          action={`/clientes/${id}/eliminar`}
          onSubmit={(e) => {
            if (!confirm('Deseas eliminar el cliente?')) {
              e.preventDefault();
            }
          }}
        >
          <button
            type="submit"
            className="text-white bg-red-600 p-1 rounded-md font-bold"
          >
            Eliminar
          </button>
        </Form>
      </td>
    </tr>
  );
};

export default Clientes;
