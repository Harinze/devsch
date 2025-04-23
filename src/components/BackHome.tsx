import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BackHome = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-6 bg-gray-100 ">
      <button
        onClick={() => navigate('/')}
        className="flex items-center gap-2 text-sm sm:text-base font-semibold text-gray-700 hover:text-yellow-500 transition"
      >
        <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        <span>Back to Home</span>
      </button>
    </div>
  );
};

export default BackHome;
