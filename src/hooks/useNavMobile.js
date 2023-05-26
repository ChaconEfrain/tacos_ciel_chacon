import { useState } from "react";

const useNavMobile = () => {
  const [showNavMobile, setShowNavMobile] = useState(false);

  const handleNavMobile = () => setShowNavMobile(!showNavMobile);

  return { showNavMobile, handleNavMobile };
};

export default useNavMobile;
