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
            This lab report was produced as the final assignment for the
            practical module &ldquo;PHAS0051 Experimental Physics&rdquo; in my
            third year of BSc Physics at University College London. It is about
            the study of using high purity germanium detector (HPGe) to perform
            gamma spectroscopy. I chose this module because of the amount of
            computing involved in the data analysis of raw detector output. This
            involved the calibration of the detector and other statistical
            operations.
          </p>
          <p>
            In addition to playing with the lab-in-stock radioactive samples
            (Co-60, Bi-207 etc.), we also had a chance to work on the spectra of
            multiple soil samples from Norway, before and after the Chernobyl
            incident. It sounds really exciting but plot twist - our instructor
            just threw the data on us and didn&rsquo;t tell us the details of
            the measurement efficiency of the detector he used so we cannot
            obtain the percentage of Chernobyl radioactive traces :(
          </p>
          <p>
            I put the report here for everyone to access it. There is a
            potential risk that this report could be misused by my younger peers
            when they are writing their own reports. I am aware of that so I
            decided to keep the Python data analysis scripts private.
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
          <Image layout="intrinsic" src={cover_page} />
          <p>ZIAN 3RD JAN 2022</p>
        </div>
      </div>
    </div>
  );
}
