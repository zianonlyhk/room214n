import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import cssClasses from "./index.module.css";

import backIcon from "/img/others/back.png";
import cover_page from "/img/blog/enviro/enviro.png";

export default function Home() {
  return (
    <div className={cssClasses.canvas}>
      {/* go back and change the name of the link and path!!! */}
      {/* update title here!!! */}
      <Head>
        <title>Cities Partnership Programme</title>
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

          <p>
            This report was produced in a small summer group project I did in
            the early summer of 2022, with Professor Paul Bartlett at UCL
            Department of Physics and Astronomy as our supervisor. The project
            was under the UCL-managed Cities Partnerships Programme with
            Stockholm and we had a few chats and exchange with 2 students from
            Stockholm University.
          </p>
          <p>
            The objective was to development a prototype that can measure the
            air quality in urban city and feed the measured data to the cloud.
            Unfortunately, due to the lack in time, a physical device could not
            be made but only to the software level. In the end, out team did
            measure some living room data and upload it to the cloud but we
            faced additional challenges such as internet access in the street.
            Due to the global chip shortage at the time of the project, it was
            not possible to deploy in massive scale even if we succeed, so we
            then decided to stop proceeding further as there will not be a short
            time significance.
          </p>
          <p>
            This was my first time utilising my fresh Linux knowledge in a
            practical project. It truly is a nice experience and additional
            progress to my self-taught introduction to Linux in spring 2022.
            Finally, special thanks to Zarin! We have actually worked together
            before this project in my IT training assistant part-time job at UCL
            ISD. 10/10 as a teammate!
          </p>

          <p>
            <a
              href="https://drive.google.com/file/d/1wRrkKOU5PFqp0XLahkAGKNyd7fgHEESb/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              PRESS HERE to go to the Google Drive download page
            </a>
          </p>
          <Image layout="intrinsic" src={cover_page} />
          <p>ZIAN 15TH Jul 2022</p>
        </div>
      </div>
    </div>
  );
}
