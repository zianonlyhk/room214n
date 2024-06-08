import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import cssClasses from "./index.module.css";

import backIcon from "/img/others/back.png";

import catz_art from "/img/blog/cam_grad/catz_art.jpg";
import cav_1 from "/img/blog/cam_grad/cav_1.jpg";
import cav_2 from "/img/blog/cam_grad/cav_2.jpg";
import miss_flight from "/img/blog/cam_grad/miss_flight.jpg";
import mphil_cohort from "/img/blog/cam_grad/mphil_cohort.JPG";
import uni_brass_1 from "/img/blog/cam_grad/uni_brass_1.jpg";
import uni_brass_2 from "/img/blog/cam_grad/uni_brass_2.jpg";

export default function Home() {
  return (
    <div className={cssClasses.canvas}>

      <Head>
        <title>Memories in Cambridge</title>
      </Head>

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

          <p>I am writing this blog page at my home in Hong Kong, and I wish to make a late announcement: I have graduated with a distinction from my MPhil in Scientific Computing at the University of Cambridge. To make another distinction from my last graduation blog, I am skipping an exclamation mark here. It better reflects my current state of calm after all of the hard work last year.</p>

          <p>I met a group of bright scientists - my fellow fluid simulating peers:</p>
          <Image layout="intrinsic" src={mphil_cohort} />

          <p>I took 2 pictures at the same spot walking back home from Cavendish:</p>
          <div style={{display: "flex"}}>
          <Image layout="intrinsic" src={cav_1} />
          <Image layout="intrinsic" src={cav_2} />
          </div>

          <p>I met a group of brass musicians - and we travelled to UoWarwick for a band competition:</p>
          <Image layout="intrinsic" src={uni_brass_1} />
          <Image layout="intrinsic" src={uni_brass_2} />

          <p>My drawing was accepted for a small little art exhibition at my college - Catz:</p>
          <Image layout="intrinsic" src={catz_art} />

          <p>I missed my flight on a trip with my childhood friend - was snowing on the previous day and Stansted Airport was packed...</p>
          <Image layout="intrinsic" src={miss_flight} />

          <p>I have experienced and grown a bit. I have had some fun. I wish to honour my last year of being a student in a foreign land. Starting from now, I am on my own to see what my home city is challenging me with.</p>

          <p>17TH JAN 2024</p>
        </div>
      </div>
    </div>
  );
}
