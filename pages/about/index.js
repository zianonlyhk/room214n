import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import cssClasses from "./index.module.css";

// importing images
import aboutBanner from "/img/about/about-banner.png";

// importing pdf
import { EmbedPDF } from "@simplepdf/react-embed-pdf";

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
          About me:
          </p>
            <ul>
            <li>living in Hong Kong</li>
            <li>did some physics at uni</li>
            </ul>
          <p>When I am not working you'll see me doing:</p>
          <ul>
            <li>drawing and painting</li>
            <li>karaoke and playing musical instrument</li>
          </ul>
          <p>last updated, Feb 2024</p>
        </div>
      </div>
    </div>
  );
}
