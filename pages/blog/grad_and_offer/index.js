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
      {/* go back and change the name of the link and path!!! */}
      {/* update title here!!! */}
      <Head>
        <title>My Graduation and Offer</title>
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
            <span>Breaking news</span>
            <span>
              , I have graduated from my BSc Physics course at University
              College London{" "}
            </span>
            <span>with first-class honours,</span>
            <span>
              {" "}
              and received an offer to continue my study at the University of
              Cambridge on MPhil Scientific Computing! In this blog page I will
              first{" "}
            </span>
            <span>briefly </span>
            <span>
              reflect on my past 3 years at UCL, describe what I will be doing
              in the coming year in Cambridge and share my career plan in mind
              for my{" "}
            </span>
            <span>future </span>
            <span>years.</span>
          </p>
          <p>
            <span>T</span>
            <span>
              hroughout my time at UCL physics, what I have learnt can be
              broadly categorised into 2: academic{" "}
            </span>
            <span>knowledge</span>
            <span> and my development as a</span>
            <span>n</span>
            <span> instance of our society/community. </span>
            <span>
              Sounds serious but might just be my not-so-good presentation.
            </span>
          </p>
          <p>
            <span>T</span>
            <span>he word &lsquo;physics&rsquo; </span>
            <span>now </span>
            <span>carries </span>
            <span>different</span>
            <span> content to me as compared </span>
            <span>to</span>
            <span> </span>
            <span>my high school self</span>
            <span>. </span>
            <span>I am confident to say that I hate </span>
            <span>my love for</span>
            <span> physics I </span>
            <span>had</span>
            <span> when I was 18 </span>
            <b>&ndash;</b>
            <span> </span>
            <span>as a romantic fascination of &lsquo;cool concept</span>
            <span>s&rsquo;</span>
            <span> like quantum mechanics and nuclear fusion. </span>
            <span>After</span>
            <span>
              {" "}
              my 3 years learning the models describing different classical and
              relatively modern concepts,{" "}
            </span>
            <span>I see physics as a translation </span>
            <span>from</span>
            <span> observation</span>
            <span>s</span>
            <span> to abstract mathematic</span>
            <span>al descriptions</span>
            <span> of physical phenomenon. </span>
            <span>In simple words, physics is </span>
            <span>about building a</span>
            <span> mathematical model that we use to </span>
            <span>record</span>
            <span> what happened </span>
            <span>numerically and algebraically </span>
            <span>
              so we can use it as a reference to say what might happen{" "}
            </span>
            <span>when we are facing a similar setting in the future</span>
            <span>. </span>
            <span>
              I really hope this is the essence of science so I can still tell
              people I am a scientist{" "}
            </span>
            <span>but not engineer, though </span>
            <span>I believe some</span>
            <span>day I will eventually become </span>
            <span>one</span>
            <span>.</span>
          </p>
          <p>
            <span>
              The other most important thing I have learnt these years is how to
              manage my relation with people around me. An equivalent question
              will be: How to recognise and speak someone&rsquo;s language and
              follow one&rsquo;s code.{" "}
            </span>
            <span>
              Coming to the UK marks as my second time moving to a completely
              stranger land, after Hong Kong in 2011. This time, not only did I
              need to adapt to using English as the main language, I also had to
              study this local culture, which is not even on the same continent
              to my home culture.{" "}
            </span>
            <span>
              I felt the most progress in my second year in Connaught, when
              there was a strict COVID lockdown in England and Connaught Hall
              people had to be locked together like being in a prison.{" "}
            </span>
            <span>
              Extremely unique time that I first experienced social fatigue and
              eventually slowly faded away in the later half on that year.
              Still, good experience and I really felt like I improved my
              English by so much that year.
            </span>
          </p>
          <Image layout="intrinsic" src={meucl} />
          <Image layout="intrinsic" src={uclaward} />

          <p>
            <span>S</span>
            <span>o now I am writing this blog </span>
            <span>in my college library. </span>
            <span>
              This year I have set my focus on computational fluid dynamics with
              all of my modules being the related mathematical methods and high
              performance computing techniques.{" "}
            </span>
            <span>
              Will be a very tough winter term but manageable due to my growing
              mind/
            </span>
            <span>commitment</span>
            <span>
              {" "}
              to return to Hong Kong. I will spend the majority of my spare time
              this year to prepare my application to the role &ndash; Scientific
              Officer at the Hong Kong Observatory.{" "}
            </span>
            <span>After long, </span>
            <span>
              I have come up to a conclusion that the best fitted career for me
              is to go back home and be a government meteorologist.
            </span>
          </p>
          <Image layout="intrinsic" src={camoffer} />

          {/* add contents between */}

          <p>ZIAN 29TH Sep 2022</p>
        </div>
      </div>
    </div>
  );
}
