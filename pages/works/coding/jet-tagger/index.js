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
            &ldquo;This tool was made in a summer internship project at
            University College London Department of Physics and Astronomy,
            aiming at building a machine learning algorithm to efficiently
            recognise electron pair production signals from their background jet
            noises in the ATLAS experiment.
          </p>
          <p>
            Undergraduate students with limited experience on command-line
            interface (CLI) might find this tool particularly useful, as only
            editing text and running Python scripts are required. GUI
            development on university computing cluster can be then achieved by
            using the SSH feature in modern IDEs.&rdquo;
          </p>
          <p>
            The above is the &ldquo;About&rdquo; session on the GitHub repo
            README page. Saved my time and effort as I don&rsquo;t need to go
            through it again ;)
          </p>
          <p>
            This project took my software-design virginity. It was a very gentle
            touch though as the development was very self-driven and I indulged
            myself to use some inelegant polymorphism methods at user level: one
            of my teammates was using scikit-learn while the other and I were
            using TensorFlow and I just made a series of if statement checking
            for the input model type to accommodate the 2 scenarios but these 2
            only. Bad practice indeed but please let me go for my first time
            trying.
          </p>
          <p>
            I&rsquo;ve also learnt how to write a better README.md page. Go and
            visit the GitHub repo page here:
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
          <p>ZIAN 31ST AUG 2022</p>
        </div>
      </div>
    </div>
  );
}
