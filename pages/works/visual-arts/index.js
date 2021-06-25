import React, { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import cssClasses from "./index.module.css";
import Modal from "/components/Modal.js";

// importing images
import vaBanner from "/img/works/works-banner.png";
import fountainPen from "/img/works/vaRes/fountainpen.JPG";
import drPepper from "/img/works/vaRes/drpepper.JPG";
import polyMe from "/img/works/vaRes/polyme.jpg";

export default function Home() {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [showModal5, setShowModal5] = useState(false);
  const [showModal6, setShowModal6] = useState(false);
  const [showModal7, setShowModal7] = useState(false);
  const [showModal8, setShowModal8] = useState(false);

  return (
    <div className={cssClasses.canvas}>
      <Head>
        <title>Arts 214N</title>
      </Head>
      {/* blog page banner */}
      <div className={cssClasses.bannerContainer}>
        <div className={cssClasses.banner}>
          <Image layout="intrinsic" src={vaBanner} />
        </div>
      </div>

      {/* blog titles and links */}
      <div className={cssClasses.vaCanvas}>
        <div className={cssClasses.vaTitleContainer}>
          <div className={cssClasses.previewIcon}>
            <Image
              layout="intrinsic"
              src={fountainPen}
              onClick={() => {
                setShowModal1(true);
              }}
            />
          </div>
          <div className={cssClasses.previewIcon}>
            <Image
              layout="intrinsic"
              src={drPepper}
              onClick={() => {
                setShowModal2(true);
              }}
            />
          </div>
          <div className={cssClasses.previewIcon}>
            <Image
              layout="intrinsic"
              src={polyMe}
              onClick={() => {
                setShowModal3(true);
              }}
            />
          </div>
        </div>
        <Modal onClose={() => setShowModal1(false)} show={showModal1}>
          <Image layout="intrinsic" src={fountainPen} />
        </Modal>
        <Modal onClose={() => setShowModal2(false)} show={showModal2}>
          <Image layout="intrinsic" src={drPepper} />
        </Modal>
        <Modal onClose={() => setShowModal3(false)} show={showModal3}>
          <Image layout="intrinsic" src={polyMe} />
        </Modal>
        {/* <Modal onClose={() => setShowModal4(false)} show={showModal4}>
          <Image layout="intrinsic" src={addHere} />
        </Modal>
        <Modal onClose={() => setShowModal5(false)} show={showModal5}>
          <Image layout="intrinsic" src={addHere} />
        </Modal>
        <Modal onClose={() => setShowModal6(false)} show={showModal6}>
          <Image layout="intrinsic" src={addHere} />
        </Modal>
        <Modal onClose={() => setShowModal7(false)} show={showModal7}>
          <Image layout="intrinsic" src={addHere} />
        </Modal>
        <Modal onClose={() => setShowModal8(false)} show={showModal8}>
          <Image layout="intrinsic" src={addHere} />
        </Modal> */}
      </div>
    </div>
  );
}
