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
            This is my personal website for me to put my works and drawings
            online for people to have a look. I also made a blog page to
            motivate myself to write some study blogs on maths, physics and
            programming. Wish me not being too lazy or busy so I can keep
            friends and peers updated.
          </p>
          <p>
            This website is running on the Next.js framework. The source code
            was put on GitHub then fetched and deployed on Vercel&rsquo;s
            platform, which is the recommended deployment method for Next.js
            project.
          </p>
          <p>
            The name of the page - Room 214N, was inspired by the room number I
            stayed at Connaught Hall in my first 2 years of undergraduate. In
            fact I was there in my third year as well but in a different room.
            There is another reference in the choice. Try to see if you can
            figure it out.
          </p>
          <p>
            I have been trash talking so far cuz this Readme page is actually a
            blog template for me to make updates. I can just duplicate this
            directory, make a link on the parent page, and copy my written
            content in.
          </p>
          <p>
            Someday I will add an interface in Chinese as well. I want it to
            happen but I don&rsquo;t want to do it myself :( There will be so
            much to rewrite and the amount of work will double when I am
            updating. Sorry mum ask dad or Google to translate...
          </p>
        </div>
      </div>
    </div>
  );
}
