import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop(props) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return <>{props.children}</>;
}