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
            As I am writing at his moment, I have just finished proof reading my
            formal report as part of the PHAS0051 Experimental Physics course. I
            have to move on to the next assignment on separating jets images
            using CNN. I am uploading this report, containing much of my hard
            work, as a sample of work for any potential reference.
          </p>
          <p>Good luck to me on my next assignment... 2022 tough start...</p>
          <p>
            By the way, after finishing all of the assignment in January, I am
            planning to update this website. I am planning to add a native pdf
            reading function so I dont need to put download link everytime and
            people will feel more comfortable browsing. I will probably make
            some changes on the modals in the Arts section as well.
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
          {/* add contents between */}
        </div>
      </div>
    </div>
  );
}
