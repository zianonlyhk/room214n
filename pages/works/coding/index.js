import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import cssClasses from "./index.module.css";
import backIcon from "/img/others/back.png";

// importing images
import codingBanner from "/img/works/works-banner.png";

export default function Home() {
  return (
    <div className={cssClasses.canvas}>
      <Head>
        <title>Coding 214N</title>
      </Head>
      {/* blog page banner */}
      <div className={cssClasses.bannerContainer}>
        <div className={cssClasses.banner}>
          <Image layout="intrinsic" src={codingBanner} />
        </div>
      </div>

      {/* blog titles and links */}
      <div className={cssClasses.blogCanvas}>
        <Link href="/works">
          <Image
            width={100}
            height={50}
            layout="intrinsic"
            className={cssClasses.backIcon}
            src={backIcon}
          />
        </Link>
        <div className={cssClasses.blogTitleContainer}>
          <div className={cssClasses.blogTitle}>
            <Link href="/works/coding/snake-filter">- Snake Filter</Link>
            08/09/2021
          </div>
        </div>
      </div>
      <div className={cssClasses.blogCanvas}>
        <div className={cssClasses.blogTitleContainer}>
          <div className={cssClasses.blogTitle}>
            <Link href="/works/coding/readme">- Readme</Link>
            dd/mm/yyyy
          </div>
        </div>
      </div>
    </div>
  );
}
