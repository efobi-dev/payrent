"use client";

import Typed from "typed.js";
import { useRef, useEffect } from "react";

export const TypedText = () => {
  const el = useRef(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    const options = {
      strings: [" Own", " Rent", " Lease", " Invest"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
      smart: true,
    };
    typed.current = new Typed(el.current, options);

    return () => {
      typed.current?.destroy();
    };
  }, []);

  return (
    <h2
      ref={el}
      className="inline bg-gradient-to-r from-[#c4170b]  to-[#be710b] bg-clip-text text-transparent"
    ></h2>
  );
};
