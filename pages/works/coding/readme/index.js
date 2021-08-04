import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import cssClasses from "./index.module.css";

import backIcon from "/img/others/back.png";

export default function Home() {
  return (
    <div className={cssClasses.canvas}>
      <Head>
        <title>Coding Readme</title>
      </Head>

      <div className={cssClasses.textBg}>
        <div className={cssClasses.textCanvas}>
          <Link href="/works/coding">
            <Image
              width={100}
              height={50}
              layout="intrinsic"
              className={cssClasses.backIcon}
              src={backIcon}
            />
          </Link>

          <p>
            I will use this page to showcase my coding works, including some
            image processing and scientific computing projects, though I believe
            it will remain a bit empty for a while until I spend time to
            organise everything well.&nbsp;
          </p>
          <p>
            But it is way easier for me to put on my drawings and paintings in
            the neighbour session. Have a look if it is a bit lonely in this
            coding session.
          </p>
        </div>
      </div>
    </div>
  );
}
