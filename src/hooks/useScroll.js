import { useEffect, useState } from "react";

const useScroll = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) setShowScrollButton(true);
      else setShowScrollButton(false);
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behaviour: "smooth" });
  };

  return { showScrollButton, scrollToTop };
};

export default useScroll;
