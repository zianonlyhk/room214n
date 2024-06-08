import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import cssClasses from "./index.module.css";

import backIcon from "/img/others/back.png";

import camoffer from "/img/blog/grad_and_offer/camoffer.png";
import uclaward from "/img/blog/grad_and_offer/uclaward.png";
import meucl from "/img/blog/grad_and_offer/me&ucl.jpg";

export default function Home() {
  return (
    <div className={cssClasses.canvas}>

      <Head>
        <title>My Bachelor Graduation</title>
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
            News to share on my blog: I have graduated from my BSc in Physics at University College London with first-class honours, and received an offer to continue my study at the University of Cambridge for an MPhil in Scientific Computing! In this blog page I will first briefly reflect on my past 3 years at UCL, describe what I will be doing in the coming year and share my career plan in mind.
          </p>
          <p>
            Throughout my time at UCL, what I have learnt can be broadly categorised into two: academic training and my personal development as an instance of our society/community. Sounds DEEP but might just be another not-so-good presentation of mine.
          </p>
          <p>
            The word “physics” now carries a different content to me in comparison to my high school self. I am confident to say that I hate the immature love for physics I had when I was 18 – as a romantic fascination of “cool concepts” like quantum mechanics and nuclear fusion. After my 3 years learning the mathematical models describing different classical and modern systems, I now see physics as a mere translation from observations to abstract mathematical descriptions. In simple words, physics is about building a model to record what has happened, so we can use it as a reference to say what might happen under a similar setting in the future. I really hope this is the essence of science so I can still define myself a scientist but not engineer, though I believe someday I will eventually become one.
          </p>
          <p>
            The other most important thing I have learnt these years is how to manage my relation with people around me. An equivalent question will be: How to recognise and speak someone’s language and follow one’s code. Coming to the UK marks my second time moving to a completely stranger land, after Hong Kong in 2011. This time, not only did I need to adapt to using English as the main language, I also had to study the local culture, which is not even on the same continent to my home city. I felt the most progress in my second year at Connaught, when there was a strict COVID lockdown in England and people in the hall had to be all locked together. Extremely unique time that I first experienced social fatigue and eventually slowly faded away in the later half on that year. Still, good experience and I really felt like I improved my English a lot that year.
          </p>
          <Image layout="intrinsic" src={meucl} />
          <Image layout="intrinsic" src={uclaward} />
          <p>
          So now I am writing this blog in my college library. This year I am setting my focus on computational fluid dynamics, with all of my modules being the the relevant mathematical methods and high performance computing techniques. Will be a very tough winter term but manageable due to my growing commitment returning to Hong Kong. I will spend the majority of my spare time this year to prepare for my application to the role of Scientific Officer at the Hong Kong Observatory. I have come up with a conclusion that the best fitted career for me is to go back home and become a government meteorologist.
          </p>
          <Image layout="intrinsic" src={camoffer} />

          <p>29TH SEP 2022</p>
        </div>
      </div>
    </div>
  );
}
