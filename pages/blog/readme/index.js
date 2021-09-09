import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import cssClasses from "./index.module.css";

import backIcon from "/img/others/back.png";

export default function Home() {
  return (
    <div className={cssClasses.canvas}>
      {/* go back and change the name of the link and path!!! */}
      {/* update title here!!! */}
      <Head>
        <title>Blog Readme</title>
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
            This is my personal website for me to put my works and drawings
            online for people to access. I also made a blog session to motivate
            myself to write some study blogs on maths, physics and programming.
            I do feel like I can understand the topics way better and get new
            insights when I am trying to reproduce new concepts I learnt. Wish
            me not being too lazy or busy so I can keep friends and peers
            updated.
          </p>
          <p>
            This website is running on Next.js framework. The source code was
            put on GitHub then fetched and deployed by Vercel, which is the
            recommended deployment method for Next.js project.
          </p>
          <p>
            The name of the page - Room 214N, was inspired by the room number I
            stayed in Connaught Hall, a student accommodation in London, in my
            first 2 years of undergrad. In fact I would be there in my third
            year as well. There are a few other references in the choice so try
            to see if you can figure out.
          </p>
          <p>
            I have been trash talking so far cuz this blog page is actually a
            blog template page for me to make updates. I can just duplicate this
            directory, make a link on the parent page, and start to write my
            blog. Alternatively, I can use content management tools like
            Sanity.js and that will be one of my future plans to increase my
            productivity updating this website.
          </p>
          <p>
            Humm if I really have the feeling, I will add an interface in
            Chinese as well. Who knows - if I will start my career back home.
          </p>
          {/* add contents between */}
        </div>
      </div>
    </div>
  );
}
