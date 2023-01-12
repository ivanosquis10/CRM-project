import { useNavigate, Form, useActionData, redirect } from 'react-router-dom';
import { agregarCliente } from '../data/clientes';
import Error from '../components/Error';
import Formulario from '../components/Formulario';
import BotonVolver from '../components/BotonVolver';

export async function action({ request }) {
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

  // En caso que no haya errores, se agrega
  await agregarCliente(datos);
  return redirect('/');
}

const NuevoCliente = () => {
  const errores = useActionData();
  // este es un hook que permite colocarle direccion a botones, en este caso, para volver al inicio
  const navigate = useNavigate();

  return (
    <>
      <h1 className="text-4xl font-black text-blue-900">Nuevo Cliente</h1>
      <p className="mt-3 font-bold text-blue-800">
        Llena todos los campos para agregar un nuevo cliente
      </p>

      <BotonVolver direction={-1} />

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-10">
        {errores?.length &&
          errores.map((error, i) => <Error key={i}>{error}</Error>)}

        <Form method="post" noValidate>
          <Formulario />

          <input
            type="submit"
            className="w-full bg-blue-800 font-bold text-lg rounded-md text-white uppercase p-3 hover:bg-blue-600 ease-in-out duration-300"
            value="Registrar cliente"
          />
        </Form>
      </div>
    </>
  );
};

export default NuevoCliente;
