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
            This research focuses on the classification of simulated jets in the
            Large Hadron Collider experiment, aiming at using a low-dimension
            imaging analysis to capture high-level nonlinear interactions. This
            work was the final assignment of the third year course
            &ldquo;PHAS0056 Practical Machine Learning for Physicist&rdquo; I
            took in BSc Physics at University College London. In this project, I
            was provided with generated jet images from my instructor Prof.
            Mario Campanelli. My task was to implement machine learning
            techniques such as convolutional neural network on the provided jet
            image set to distinguish between the 2 different jet sprays due to W
            boson decay and top quark decay.
          </p>
          <p>
            I have been recommended Google Colab by my friends for a long time
            and this assignment was the perfect time for me to have a try. I
            paid a little bit for their accelerated GPU and it performed way
            better than I expected. It was 10 times faster in training time than
            my poor GeForce 1050 Ti I run CS:GO on! I believe with more research
            on its features, I can use my local text editor (VS Code) connected
            to their cloud computing cluster. I can then use a development
            environment I am use to while enjoying a fast computing time. They
            should have got this already right?
          </p>
          <p>
            Anyway feel free to have a look on my report and Python codes on
            this very first machine learning of mine. I put them down below
            here:
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
          <Image layout="intrinsic" src={cover_page} />
          <p>ZIAN 8TH JAN 2022</p>
        </div>
      </div>
    </div>
  );
}
