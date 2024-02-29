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
            <li>Living in Hong Kong</li>
            {/* <li>Did a BSc in Physics at University College London</li>
            <li>Then an MPhil in Scientific Computing at the University of Cambridge</li> */}
            <li>Received 4 years of academic training in computational physics</li>
            {/* <li>Want to join to the Hong Kong Observatory and become a meteorologist</li> */}
            </ul>
          <p>When I am not working you'll see me doing:</p>
          <ul>
            <li>drawing and painting</li>
            <li>karaoke and playing musical instrument</li>
          </ul>
          <p>
            I put my CV{" "}
            <EmbedPDF>
                <a href="https://raw.githubusercontent.com/zianonlyhk/pdf/22447cc7f13ffa05a258c67e393daaabff357076/ZHuang_CV_Feb24_v2.pdf">
                    here
                </a>
            </EmbedPDF>
            . 
          </p>
          <p>last updated, Feb 2024</p>
        </div>
      </div>
    </div>
  );
}
