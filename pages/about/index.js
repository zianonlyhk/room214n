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
            <li>Live in Hong Kong</li>
            <li>Did a BSc in Physics at University College London</li>
            <li>Then an MPhil in Scientific Computing at the University of Cambridge</li>
            <li>Want to join to the Hong Kong Observatory and become a meteorologist</li>
            </ul>
          <p>When I am slacking you'll see me doing:</p>
          <ul>
            <li>drawing and painting</li>
            <li>karaoke and playing musical instrument</li>
            <li>a bit of console gaming</li>
          </ul>
          <p>
            I put my CV{" "}
            <EmbedPDF>
                <a href="https://raw.githubusercontent.com/zianonlyhk/pdf/2ee9030bf94c5e9ff4391d4944b640dffa2052e7/ZHuang_CV_Nov23.pdf">
                    here
                </a>
            </EmbedPDF>
            . Hope this very informal personal website can help me to build a more complete career profile.
          </p>
          <p>last updated, Nov 2023</p>
        </div>
      </div>
    </div>
  );
}
