import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import cssClasses from "./index.module.css";

import backIcon from "/img/others/back.png";

import Latex from 'react-latex-next';
import 'katex/dist/katex.min.css';

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
          This is a very informal personal website for me to share my works and drawings for people to have a look. There is also a blog page for me to record my study progress and my life in general.
          </p>
          <p>
          This website is running on the Next.js framework. The source code repo is public on GitHub to be fetched and deployed by Vercel.
          </p>
          <p>
          The name of this page - Room 214N, was inspired by my Connaught Hall room number during the first 2 years of my undergraduate study. In fact I was there in my third year as well but a different room. Try to see if you can figure out why there is an “N” at the end.
          </p>
          <p>
          Some day I will add an interface in Chinese as well. Some day...
          </p>
          <p>
          Nov 2023 update: I can now type <Latex>$\LaTeX$</Latex> in my blog. I am happy :)
          </p>
        </div>
      </div>
    </div>
  );
}
