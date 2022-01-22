import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import cssClasses from "./index.module.css";

import backIcon from "/img/others/back.png";
import cover_page from "/img/blog/jet_tagging/formal_report_cover.jpg";

export default function Home() {
  return (
    <div className={cssClasses.canvas}>
      {/* go back and change the name of the link and path!!! */}
      {/* update title here!!! */}
      <Head>
        <title>Separating jet images using CNN</title>
      </Head>
      {/* update title here!!! */}

      <div className={cssClasses.textBg}>
        <div className={cssClasses.textCanvas}>
          <Link href="/blog">
            <Image
              width={100}
              height={50}
              layout="intrinsic"
              className={cssClasses.backIcon}
              src={backIcon}
            />
          </Link>

          {/* add contents between */}
          <p>
            This research on the classification of collimated particles (jets)
            observed in Large Hadron Collider experiment, using a low-dimension
            imaging analysis, is the final assignment of the third year course
            &ldquo;Practical Machine Learning for Physicist&rdquo; I took in my
            undergraduate degree at University College London. In this project,
            I was provided with generated jet images from my instructor Prof.
            Mario Campanelli. My task was to implement machine vision techniques
            such as convolutional neural network on the provided jet image set
            to separate the jet sprays due to W boson decay and top quark decay.
          </p>
          <p>
            I have been recommended by friends about Google Colab for a long
            time and this assignment sounds like the perfect time to give it a
            try. I paid a little bit for their accelerated GPU and gosh it was
            10 times faster than my poor GeForce 1050 Ti I ran CS:GO on. I have
            to say I am a loyal customer now before I can afford those GeForce
            30X0 cards. We really need some computing devices dedicated for
            Bitcoin mining so normal uni students like us can have a bit more
            fun on Steam after their labreport. :0)
          </p>
          <p>
            Anyway feel free to have a look on my report and Python codes on
            this very first machine learning of mine. I put them below here:
          </p>
          <p>
            <a
              href="https://drive.google.com/file/d/1dNm98EAdOOmy2KJY0Nu2NdjDtK2ES0EH/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              PRESS HERE to go to the formal report Google Drive link
            </a>
          </p>
          <p>
            <a
              href="https://drive.google.com/drive/folders/17w4MT4VB_KXlOWj7UtmlqwxO2LHXSq7w?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              PRESS HERE to go to the Python notebook Google Drive link
            </a>
          </p>
          <Image
            layout="intrinsic"
            className={cssClasses.backIcon}
            src={cover_page}
          />
          <p>ZIAN 8TH JAN 2022</p>
        </div>
      </div>
    </div>
  );
}
