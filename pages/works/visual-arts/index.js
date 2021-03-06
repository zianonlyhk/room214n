import React, { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import cssClasses from "./index.module.css";
import ModalV from "/components/ModalV.js";
import ModalH from "/components/ModalH.js";
import backIcon from "/img/others/back.png";

// importing images
import vaBanner from "/img/works/works-banner.png";
import fountainPen from "/img/works/vaRes/fountainpen.JPG";
import drPepper from "/img/works/vaRes/drpepper.JPG";
import polyMe from "/img/works/vaRes/polyme.jpg";

export default function Home() {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
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
        <Link href="/works">
          <Image
            width={100}
            height={50}
            layout="intrinsic"
            className={cssClasses.backIcon}
            src={backIcon}
          />
        </Link>
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
        <ModalH onClose={() => setShowModal1(false)} show={showModal1}>
          <Image layout="intrinsic" src={fountainPen} />
        </ModalH>
        <ModalH onClose={() => setShowModal2(false)} show={showModal2}>
          <Image layout="intrinsic" src={drPepper} />
        </ModalH>
        <ModalV onClose={() => setShowModal3(false)} show={showModal3}>
          <Image layout="responsive" src={polyMe} />
        </ModalV>
      </div>
    </div>
  );
}
