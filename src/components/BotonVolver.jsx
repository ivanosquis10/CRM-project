import { useNavigate } from 'react-router-dom';

const BotonVolver = ({ direction }) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-end">
      <button
        className="bg-blue-800 font-bold text-white uppercase px-2 py-1 rounded-md"
        onClick={() => navigate(direction)}
      >
        Volver
      </button>
    </div>
  );
};

export default BotonVolver;
