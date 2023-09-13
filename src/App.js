import { useEffect, useRef } from "react";
import "./App.css";
import Form from "./components/Form";
import Title from "./components/Title";

import { motion, useAnimation, useInView } from "framer-motion";
function App() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div ref={ref}>
      <section className="bg-bg h-screen bg-cover">
        <Title />
      </section>

      <Form />
    </div>
  );
}

export default App;
