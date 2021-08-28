import { useEffect } from "react";
import { useLocation } from "react-router";

export type UseRefreshHook = () => void;

/**
 * Scrolls the user to the top of the screen on navigation.
 */
export const useScrollToTopOnNav: UseRefreshHook = (): undefined => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return;
};