import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import cssClasses from "./index.module.css";

import backIcon from "/img/others/back.png";
import video_cover from "/img/blog/coriolis/coriolis_example.jpg";

export default function Home() {
  return (
    <div className={cssClasses.canvas}>
      {/* go back and change the name of the link and path!!! */}
      {/* update title here!!! */}
      <Head>
        <title>Coriolis force YouTube video</title>
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
            I made this short video explaining the physics of Coriolis effect,
            observed in rotating fluid system. This video was made in a
            mathematically unformal but visually and intuitively pleasing
            fashion for being easy to understand.
          </p>
          <p>
            This video was part of the assessed coursework of GEOL0022 Ocean
            Physics and Climate Change, instructed by Dr Michel Tsamados at UCL
            Department of Earth Sciences. I got nice positive feedback from
            Michel that I got 9.5/10 for this assignment. Wowed me :)
          </p>
          <p>
            In my first year physics degree, Coriolis acceleration got me very
            little interest since it has neglectable effect on me as a
            carbon-based mammal walking on the surface of the Earth. However, I
            was quite impressed when we change the scope to the ocean, which for
            some of the system will have a scale of 1000km, Coriolis becomes a
            huge factor to considered and it shows up quite often in the later
            parts of the course discussing Earth gravitational waves.
          </p>
          <p>
            LOL I have talked too much. Here is the link to the YouTube video:
            Have fun watching!
          </p>
          <p>
            <a
              href="https://www.youtube.com/watch?v=9nahKXvVOAo&ab_channel=ZianHuang"
              target="_blank"
              rel="noreferrer"
            >
              PRESS HERE to go to the YouTube page
            </a>
          </p>
          <p>
          <Image
            layout="intrinsic"
            className={cssClasses.backIcon}
            src={video_cover}
          />
          </p>
          {/* add contents between */}
        </div>
      </div>
    </div>
  );
}
