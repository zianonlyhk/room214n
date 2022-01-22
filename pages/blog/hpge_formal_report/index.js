import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import cssClasses from "./index.module.css";

import backIcon from "/img/others/back.png";
import cover_page from "/img/blog/hpge/cover_page.jpg";

export default function Home() {
  return (
    <div className={cssClasses.canvas}>
      {/* go back and change the name of the link and path!!! */}
      {/* update title here!!! */}
      <Head>
        <title>Gamma spectroscopy using HPGe detector</title>
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
            This lab report was produced for the practical module
            &ldquo;Experimental Physics&rdquo; in my third year of physics
            undergrad at UCL. It was about the study of high purity germanium
            detector (HPGe) and gamma spectroscopy. However, the reason I chose
            this module was the amount of computing involved in the data
            analysis of the raw output from the detector, involving calibration
            and other statistical operations.
          </p>
          <p>
            As a bonus to playing with the radioactive samples (Co-60, Bi-207
            etc.) in the lab, we also have a chance to work on the spectra of a
            set of soil samples from Norway, before and after the Chernobyl
            incident. It sounds really exciting but the truth is out instructor
            just threw the data on my face and didn&rsquo;t tell us the details
            of the measurement efficiency of the detector he used so we cannot
            obtain the percentage of Chernobyl radioactive traces. :(
          </p>
          <p>
            I put the report here for everyone to access it. Humm, I quite like
            the cover page I made for it.
          </p>
          <p>
            <a
              href="https://drive.google.com/file/d/1tQHW1gCpuQpXoJ9qQfKnOpPihAhZQgR9/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              PRESS HERE to go to the Google Drive download page
            </a>
          </p>
          <Image
            layout="intrinsic"
            className={cssClasses.backIcon}
            src={cover_page}
          />
          <p>ZIAN 3RD JAN 2022</p>
        </div>
      </div>
    </div>
  );
}
