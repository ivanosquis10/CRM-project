import { Form, useLoaderData, useActionData, redirect } from 'react-router-dom';
import { obtenerCliente, actualizarCliente } from '../data/clientes';
import Formulario from '../components/Formulario';
import Error from '../components/Error';
import BotonVolver from '../components/BotonVolver';

export async function loader({ params }) {
  const cliente = await obtenerCliente(params.clienteId);
  if (Object.values(cliente).length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'No hay resultados :(',
    });
  }
  return cliente;
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);

  // Para validar el email como un campo aparte
  const email = formData.get('email');

  // Validacion del formulario
  const errores = [];
  if (Object.values(datos).includes('')) {
    errores.push('Todos los campos son obligatorios!');
  }

  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );
  if (!regex.test(email)) {
    errores.push('El email no es válido!');
  }

  // Retornar datos si hay errores
  if (Object.keys(errores).length) {
    return errores;
  }

  // Actualizar el cliente
  await actualizarCliente(params.clienteId, datos);
  return redirect('/');
}

const Editar = () => {
  const cliente = useLoaderData();
  const errores = useActionData();

  return (
    <>
      <h1 className="text-4xl font-black text-blue-900">Editar Cliente</h1>
      <p className="mt-3">A continuación podrás editar un cliente!</p>
      <BotonVolver direction={-1} />

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-10">
        {errores?.length &&
          errores.map((error, i) => <Error key={i}>{error}</Error>)}

        <Form method="post" noValidate>
          <Formulario cliente={cliente} />

          <input
            type="submit"
            className="w-full bg-blue-800 font-bold text-lg rounded-md text-white uppercase p-3 hover:bg-blue-600 ease-in-out duration-300"
            value="Guardar cambios"
          />
        </Form>
      </div>
    </>
  );
};

export default Editar;
