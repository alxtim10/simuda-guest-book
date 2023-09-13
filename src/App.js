import { useEffect, useRef } from "react";
import "./App.css";
import Form from "./components/Form";
import Title from "./components/Title";

import { useAnimation, useInView } from "framer-motion";
function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <section className="bg-bg h-screen bg-cover">
        <Title />
      </section>

      <Form />
    </div>
  );
}

export default App;
