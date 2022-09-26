import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import cssClasses from "./index.module.css";

import backIcon from "/img/others/back.png";
import infographic_img from "/img/blog/infographic_kelvin/kelvin_infographic.png";

export default function Home() {
  return (
    <div className={cssClasses.canvas}>
      {/* go back and change the name of the link and path!!! */}
      {/* update title here!!! */}
      <Head>
        <title>Kelvin waves infographic</title>
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
            I made this infographic in a standard blog page style, explaining
            the physics of Kelvin waves observed in the Earth ocean. Similar to
            the Coriolis acceleration YouTube video, this is also part of the
            assessment of the course &ldquo;GEOL0022 Ocean Physics and Climate
            Change&rdquo;, instructed by Dr Michel Tsamados at UCL Department of
            Earth Sciences. I got 9.0/10 for this assignment - Michel the most
            generous lecturer at UCL! Everything is relatively self-contained in
            the infographic so I guess I don&rsquo;t need to say much here.
          </p>
          <p>
            One thing though, the colour palette used was inspired by
            &ldquo;Solarized Dark&rdquo;. It&rsquo;s my favourite.
          </p>
          <p>
            <Image layout="intrinsic" src={infographic_img} />
          </p>
          <p>ZIAN 4th DEC 2021</p>
        </div>
      </div>
    </div>
  );
}
