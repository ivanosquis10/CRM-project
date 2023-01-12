import { useRouteError, useNavigate } from 'react-router-dom';
import BotonVolver from '../components/BotonVolver';

const ErrorPage = () => {
  const navigate = useNavigate();

  const error = useRouteError();
  return (
    <div className="space-y-8">
      <BotonVolver direction={'/'} />
      <h2 className="text-center text-6xl font-bold text-blue-700 mt-20">
        CRM - CLIENTES
      </h2>
      <p className="text-center uppercase text-red-700 font-bold text-3xl">
        Hubo un error!!
      </p>
      <p className="text-center">{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
