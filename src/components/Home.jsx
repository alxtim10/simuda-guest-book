import React from "react";
import Title from './Title'
import Form from './Form'
import Modal from './Modal'
import { LazyLoadComponent } from "react-lazy-load-image-component";
import Footer from "./Footer";
import { useState } from "react";

function Home() {
  const [showModal, setShowMyModal] = useState(false);
  const [modalText, setModalText] = useState("Enjoy Persegab");
  const [modalType, setModalType] = useState(true);

  const handleModal = (text, type) => {
    setModalText(text);
    setShowMyModal(!showModal);
    setModalType(type);
  };
  return (
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
  );
}

export default Home;
