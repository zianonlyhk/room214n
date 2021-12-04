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
            assessment of GEOL0022 Ocean Physics and Climate Change, instructed
            by Dr Michel Tsamados at UCL Department of Earth Sciences.
            Everything is in the infographic so I guess I don’t need to say much
            here?
          </p>
          <p>
            One thing though, the colour palette used was inspired by “Solarized
            Dark”, a code text highlighter I used in my VS Code environment and
            in my terminal. Yeah it’s my favourite.
          </p>
          <p>
          <Image
            layout="intrinsic"
            className={cssClasses.backIcon}
            src={infographic_img}
          />
          </p>
          {/* add contents between */}
        </div>
      </div>
    </div>
  );
}
