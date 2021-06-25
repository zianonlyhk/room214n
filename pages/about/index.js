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
            Right now an undergraduate physics student at University College
            London. Been learning some maths and computer science as
            well.&nbsp;Was based in Hong Kong before moving to London. Luckliy
            nothing really bad has happened to me so far so I&#39;m having [not
            bad] time of my life.
          </p>
          <p>Interests</p>
          <ul>
            <li>drawing and painting</li>
            <li>playing (with) musical instrument</li>
            <li>single player video gaming</li>
          </ul>
          <p>
            I put my CV{" "}
            <a
              href="https://drive.google.com/file/d/1qHKiz6XD7ZrkyRjbi2Y5BYk332_zsu2D/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
            (updated August 2021), as a link to Google Drive, hoping this casual
            personal website can help to build a more complete career profile.
          </p>
          <p>
            I don&#39;t really look like the guy above... `Probably a bit more
            good looking. And it&#39;s quite expensive to go yum cha here in
            London... :-/
          </p>
        </div>
      </div>
    </div>
  );
}
