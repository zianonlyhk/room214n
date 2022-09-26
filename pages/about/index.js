import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import cssClasses from "./index.module.css";

// importing images
import aboutBanner from "/img/about/about-banner.png";

export default function Home() {
  return (
    <div className={cssClasses.canvas}>
      <Head>
        <title>About 214N</title>
      </Head>

      {/* blog page banner */}
      <div className={cssClasses.bannerContainer}>
        <div className={cssClasses.banner}>
          <Image layout="intrinsic" src={aboutBanner} />
        </div>
      </div>

      {/* blog titles and links */}
      <div className={cssClasses.textBg}>
        <div className={cssClasses.textCanvas}>
          <p>
            A postgraduate physics student at the University of Cambridge. Did
            undergraduate at University College London, on BSc Physics. Been
            learning some maths and computer science as well. Was based in Hong
            Kong and then London and now Cambridge. Likely to go back to Hong
            Kong after education as I really want to join to the Hong Kong
            Observatory and become a meteorologist. So far nothing really bad
            has happened to me and I'm enjoying my (not bad) time.
          </p>
          <p>Interests</p>
          <ul>
            <li>drawing and painting</li>
            <li>playing (with) musical instrument</li>
            <li>gaming (single player game only sorz)</li>
          </ul>
          <p>
            I put my CV{" "}
            <a
              href="https://drive.google.com/drive/folders/1KSoziYn1tKHGtvA5Ft-br9_boDI6FGGV?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
            , as a link to Google Drive, hoping this personal website can help
            me building a more complete career profile.
          </p>
          <p>last updated, Sep 2022</p>
        </div>
      </div>
    </div>
  );
}
