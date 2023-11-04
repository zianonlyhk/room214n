import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import cssClasses from "./index.module.css";

import backIcon from "/img/others/back.png";
import repo_banner from "/img/works/codeRes/jettagger.png";

export default function Home() {
  return (
    <div className={cssClasses.canvas}>
      <Head>
        <title>zianonlyhk/ml_jet_tagger</title>
      </Head>

      <div className={cssClasses.textBg}>
        <div className={cssClasses.textCanvas}>
          <Link href="/works/coding">
            <Image
              width={100}
              height={50}
              layout="intrinsic"
              className={cssClasses.backIcon}
              src={backIcon}
            />
          </Link>
          <p>
          This tool was made in my summer internship project at UCL Department of Physics and Astronomy. It aims at building a machine learning algorithm to distinguish the signals of electron pair production, from the noises of background particle jets in the ATLAS experiment.
          </p>
          <p>
          Undergraduate students with limited experience on command-line interface (CLI) might find this tool particularly useful, as one only needs to edit text and run Python scripts to test their network architecture. GUI development on university computing cluster can be then achieved by using the SSH feature in modern editors (such as VSCode).
          </p>
          <p>
          I indulged myself to use some inelegant user level polymorphism: one of my teammates was using scikit-learn while the other and I were using TensorFlow. I just made a series of if statements to check input model type, accommodating the 2 scenarios. Bad practice indeed.
          </p>
          <p>
          I’ve also learnt how to write a better README.md page. Go and visit the GitHub repo page if you want to look at my inmature software development:
          </p>
          <p>
            <a
              href="https://github.com/zianonlyhk/ml_jet_tagger"
              target="_blank"
              rel="noreferrer"
            >
              PRESS HERE to go to the GitHub repo page
            </a>
          </p>
          <Image layout="intrinsic" src={repo_banner} />
          <p>31ST AUG 2022</p>
        </div>
      </div>
    </div>
  );
}
