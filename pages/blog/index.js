import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import cssClasses from "./index.module.css";

// importing images
import blogBanner from "/img/blog/blog-banner.png";

export default function Home() {
  return (
    <div className={cssClasses.canvas}>
      <Head>
        <title>Blog 214N</title>
      </Head>

      {/* blog page banner */}
      <div className={cssClasses.bannerContainer}>
        <div className={cssClasses.banner}>
          <Image layout="intrinsic" src={blogBanner} />
        </div>
      </div>

      {/* blog titles and links */}
      <div className={cssClasses.blogCanvas}>

        <div className={cssClasses.blogTitleContainer}>
            <div className={cssClasses.blogTitle}>
              <Link href="/blog/kelvin_wave_infographic">Kelvin waves infographic</Link>
              04/12/2021
            </div>
          </div>

        <div className={cssClasses.blogTitleContainer}>
          <div className={cssClasses.blogTitle}>
            <Link href="/blog/coriolis_force">Coriolis force YouTube video</Link>
            03/11/2021
          </div>
        </div>

      </div>

      {/* blog titles and links */}
      <div className={cssClasses.blogCanvas}>
        <div className={cssClasses.blogTitleContainer}>
          <div className={cssClasses.blogTitle}>
            <Link href="/blog/readme">Readme</Link>
            dd/mm/yyyy
          </div>
        </div>
      </div>

    </div>
  );
}
