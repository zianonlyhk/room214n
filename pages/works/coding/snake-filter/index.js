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
            I started to look into creative coding during the summer I was at
            home in Hong Kong during COVID lock down, to explore new medium of
            arts other than the traditional methods that I am used to before. I
            also used it as a good way for me to get more used to Python and
            potentially learn some new algorithms in generative arts. The main
            Python packages I used was PyCairo, a canvas drawing tool, and PIL,
            an image reading package. I got quite surprised I could not simply
            use pip to install PyCairo but brew on mac.
          </p>
          <Image
            layout="intrinsic"
            className={cssClasses.backIcon}
            src={snake}
          />
          <p>
            In the few months playing with PyCairo, my favourite one is this one
            I called &ldquo;snake filter&rdquo;. The code first reads my input
            image and resize it down to a reasonable resolution. Then I fetch an
            array of the grey scale pixels with black being 0 and white being
            255. After that I group them into 3 equal parts indicating the 3
            different colours. The preparation stage is then done and I now have
            an array containing information of the position of each pixel and
            its corresponding colour group.
          </p>
          <p>
            To release &ldquo;snakes&rdquo;, I first chose a random unoccupied
            coordinate on the resized image. I then looked for if it has
            neighbour being in the same colour group. If yes, choose a random
            neighbour with the same colour, move to that coordinate and mark the
            last coordinate occupied. It was looped until there is no
            same-colour neighbour and the local loop is broken. This process was
            repeated until all of the coordinates on the canvas had been
            occupied.
          </p>
          <p>
            This simple filter was inspired by the game &ldquo;snake&rdquo; on
            my dad&rsquo;s old Nokia phone. Links to GitHub:&nbsp;
            <a
              href="https://github.com/zianonlyhk/creative-python/tree/master/snake"
              target="_blank"
              rel="noreferrer"
            >snake@zianonlyhk</a>
          </p>
          <p>ZIAN 8TH SEP 2021</p>
        </div>
      </div>
    </div>
  );
}
