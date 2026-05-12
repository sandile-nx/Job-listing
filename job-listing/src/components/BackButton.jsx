import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="mb-6 flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black"
    >
      ← Back
    </button>
  );
}

export default BackButton;