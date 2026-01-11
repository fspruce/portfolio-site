import { useLocalStorage } from "usehooks-ts";
import { useEffect } from "react";

export function useCurrentTheme() {
  const [currentTheme, setCurrentTheme] = useLocalStorage("theme", "default");
  useEffect(() => {
    if (currentTheme) {
      document.documentElement.setAttribute("data-theme", currentTheme);
    }
  }, [currentTheme]);
  return [currentTheme, setCurrentTheme];
}

export function useGetCurrentTheme() {
  return useCurrentTheme()[0];
}

export function useSetCurrentTheme() {
  return useCurrentTheme()[1];
}
