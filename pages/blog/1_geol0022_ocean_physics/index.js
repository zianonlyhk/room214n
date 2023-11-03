import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import cssClasses from "./index.module.css";

import backIcon from "/img/others/back.png";
import video_cover from "/img/blog/coriolis/coriolis_example.jpg";
import infographic_img from "/img/blog/infographic_kelvin/kelvin_infographic.png";

import Latex from 'react-latex-next';
import 'katex/dist/katex.min.css';

export default function Home() {
  return (
    <div className={cssClasses.canvas}>
      <Head>
        <title>Ocean Physics and Climate Change</title>
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

          <p>
            In my undergrad 3rd year, I attended an elective course - “Ocean Physics and Climate Change”, from the neighbouring department of earth sciences. It serves me as a refresh from my other modules on fundamental physics (particle, quantum electromagnetism...). It was also motivated by my rising interest in climate mitigation, as the 6th IPCC report had just been published back then. I really enjoyed the time I spent with the lecturer: Dr Michel Tsamados and I recommend my UCL schoolmates to have a look on his course. Here I showcase two components of the assessment for people to look at :)
          </p>
          <p>---</p>
          <p>
            I made this short video explaining the Coriolis effect under a rotating reference frame. This video was made to be mathematically informal but brain friendly. I aimed to make it easy for people to understand.
          </p>
          <p>
            In the first year of my physics undergrad, Coriolis acceleration left me very little interest since it has a negligible effect on me as a person walking on the surface of the Earth. However, I was quite impressed when we change our focus to the ocean, which has a length scale as high as 1000km. Coriolis acceleration then becomes a huge factor and shows up quite often when studying the waves due to the Earth’s gravity.
          </p>
          <p>
            Below is the link to YouTube. Have fun watching!
          </p>
          <p>
            <a
              href="https://www.youtube.com/watch?v=9nahKXvVOAo&ab_channel=ZianHuang"
              target="_blank"
              rel="noreferrer">
              PRESS HERE to watch on YouTube
            </a>
          </p>
          <p>
            <Image layout="intrinsic" src={video_cover} />
          </p>
          <p>---</p>
          <p>
            I made this infographic as a standard blog page, explaining the physics of Kelvin waves in the ocean. I tried to make the infographic as self-contained as possible so I guess I don’t need to say much here.
          </p>
          <p>
            One thing though, the colour palette was inspired by “Solarized Dark”. It’s my favourite.
          </p>
          <p>
            <Image layout="intrinsic" src={infographic_img} />
          </p>
          <p>
            4TH DEC 2021
          </p>
        </div>
      </div>
    </div>
  );
}