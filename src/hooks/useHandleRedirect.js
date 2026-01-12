import { useNavigate } from "react-router-dom";

export default function useHandleRedirect() {
  const navigate = useNavigate();

  return (page) => {
    navigate(page);
    window.scrollTo(0, 0);
  };
}
