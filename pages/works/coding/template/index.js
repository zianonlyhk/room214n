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
        <title>About 214N</title>
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
            As the title suggest, this is just a blog template for me to
            make updates. I can just make a copy of this directory, make a link
            on the parent page, and start to write my blog.
          </p>
          <p>
            Alternatively I can use content management tools like Sanity.js and
            that will be one of my future plan to increase my productivity
            updating this website.
          </p>
          <p>
            Sorry for letting you down thinking of reading something in this
            page. Go back and there will be more interesting items. I hope so lol.
          </p>
        </div>
      </div>
    </div>
  );
}
