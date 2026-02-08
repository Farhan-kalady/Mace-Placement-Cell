import React from "react";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const Section = ({ children, className = "", id, delay = 0 }) => {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section
      id={id}
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </section>
  );
};

export default Section;
