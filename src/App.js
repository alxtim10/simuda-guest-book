import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Title from "./components/Title";
import Modal from "./components/Modal";

function App() {

  const [showModal, setShowMyModal] = useState(false);
  const [modalText, setModalText] = useState("");

  const handleModal = (text) => {
    setModalText(text);
    setShowMyModal(!showModal);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <section className="bg-bg h-screen bg-cover">
        <Title />
      </section>

      <Form handleModal={handleModal}/>
      <Modal text={modalText} visible={showModal} setShowMyModal={setShowMyModal}/>
    </div>
  );
}

export default App;
