import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Title from "./components/Title";
import Modal from "./components/Modal";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import Footer from "./components/Footer";

function App() {
  const [showModal, setShowMyModal] = useState(false);
  const [modalText, setModalText] = useState("Enjoy Persegab");
  const [modalType, setModalType] = useState(true);

  const handleModal = (text, type) => {
    setModalText(text);
    setShowMyModal(!showModal);
    setModalType(type);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <LazyLoadComponent>
        <section className="bg-bg h-screen bg-cover">
          <Title />
        </section>

        <section>
          <Form handleModal={handleModal} />
          <Modal
            text={modalText}
            visible={showModal}
            modalType={modalType}
            setShowMyModal={setShowMyModal}
          />
        </section>
        <section>
          <Footer />
        </section>
      </LazyLoadComponent>
    </div>
  );
}

export default App;
