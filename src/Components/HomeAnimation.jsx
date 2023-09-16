import React from "react";
import Typed from "typed.js";
import "../CSS/HCarrier.css";

const HomeAnimation = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [" Ideate", "Innovate", "Create", "Develop."],
      typeSpeed: 170,
      backSpeed: 200,
      smartBackspace: true,
      loop: true,
      loopCount: Infinity,
      startDelay: 100,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <span id="orangeForth">// </span>
      <span>Let's</span> <span ref={el} />
    </div>
  );
};
export default HomeAnimation;
