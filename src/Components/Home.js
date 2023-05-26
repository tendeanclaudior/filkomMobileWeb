import React, { useState } from "react";
import Pages1 from "../Pages/Pages1";
import Pages2 from "../Pages/Pages2";
import Pages3 from "../Pages/Pages3";
import Pages4 from "../Pages/Pages4";
import Buttom from "./Buttom";
import Modal from "./Modal";

const Home = () => {
  const [modalOn, setModalOn] = useState(true);
  const [choice, setChoice] = useState(false);

  return (
    <>
      <Pages1 id={"Home"} />
      <Pages2 id={"Date"} />
      <Pages3 id={"Gallery"} />
      <Pages4 id={"Thanks"} />
      <Buttom
        href1={"#Home"}
        href2={"#Date"}
        href3={"#Gallery"}
        href4={"#Thanks"}
      />
      {modalOn && <Modal setModalOn={setModalOn} setChoice={setChoice} />}
    </>
  );
};

export default Home;
