import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import cssClasses from "./index.module.css";

import backIcon from "/img/others/back.png";
import snake from "/img/works/codeRes/snake-fliter.png";

export default function Home() {
  return (
    <div className={cssClasses.canvas}>
      <Head>
        <title>Snake Filter</title>
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
            I started looking into creative coding during the summer I was at home in Hong Kong under COVID lockdown. I explored a new medium of arts distinctive to the traditional methods I was used to. I also used it as a chance to improve my proficiency in Python, and potentially learn some algorithms in computer science. The main Python packages I used was PyCairo, a canvas drawing tool, and PIL, an image reading package. I got quite surprised I could not simply pip install PyCairo but required the brew command on my Mac.
          </p>
          <p>  
            <Image
            layout="intrinsic"
            className={cssClasses.backIcon}
            src={snake}
          />
          </p>
          <p>
          In the few months playing with PyCairo, my personal favourite is the following “snake filter”. The code first reads my input image and resize it down to a reasonable resolution. Then I fetch an array of the grey scale pixels with black being 0 and white being 255. After that I group them into 3 equal parts indicating the 3 different colours. The preparation stage is done and I now have an array containing the position of each pixel and its corresponding colour group.
          </p>
          <p>
          To release “snakes”, I first chose a random unoccupied coordinate on the resized image. I then decide if it has any neighbouring cell in the same colour group. If yes, choose a random neighbour with the same colour, move to that coordinate and mark the former coordinate being occupied. It is looped until there is no same-colour neighbourhood and the local loop is then broken. This process is repeated until all of the coordinates on the canvas has been occupied.
          </p>
          <p>
          This simple filter was inspired by the game “snake” on my dad’s old Nokia phone. Links to the GitHub repo: <a
              href="https://github.com/zianonlyhk/creative-python/tree/master/snake"
              target="_blank"
              rel="noreferrer"
            >snake@zianonlyhk</a>
          </p>
          <p>8TH SEP 2021</p>
        </div>
      </div>
    </div>
  );
}
