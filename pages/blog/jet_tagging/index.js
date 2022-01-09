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
            This is the final assignment of PHAS0056 Practical Machine Learning
            for Physicists. The project is basically about separating preprossed
            images showing collimated sprays of hadronic decays (jet). At the
            time of writing I have just finished it. It was REALLY tiring to
            finish 2 formal reports in 2 weeks so I guess I will get myself a
            short holiday.
          </p>
          <p>
            I think I will just leave it like this. As usual the links to work
            are downstairs. I will definitely come back to this page when I am
            free, to say more details about the assignment. Well, or one can
            refer to the formal report I guess...
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
          {/* add contents between */}
        </div>
      </div>
    </div>
  );
}
