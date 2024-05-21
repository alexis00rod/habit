import { useEffect, useRef, useState } from "react";

export const useInput = () => {
  const [focus, setFocus] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleFocusInput = (e: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
        setFocus(false);
      }
    };

    document.addEventListener("mousedown", handleFocusInput);

    return () => {
      document.removeEventListener("mousedown", handleFocusInput);
    };
  }, [setFocus]);

  return { focus, setFocus, inputRef };
};
