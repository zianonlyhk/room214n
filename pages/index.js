import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import cssClasses from "./index.module.css";

// importing images
import homeBanner from "/img/home/home-banner.png";
import worksIconN from "/img/home/home-works-normal.png";
import worksIconH from "/img/home/home-works-hover.png";
import blogIconN from "/img/home/home-blog-normal.png";
import blogIconH from "/img/home/home-blog-hover.png";
import aboutIconN from "/img/home/home-about-normal.png";
import aboutIconH from "/img/home/home-about-hover.png";

export default function Home() {
  // setting up for hovering changes of icons
  const [isHoveringBlog, setIsHoveredBlog] = useState(false);
  const onMouseEnteringBlog = () => setIsHoveredBlog(true);
  const onMouseLeavingBlog = () => setIsHoveredBlog(false);
  const [isHoveringWorks, setIsHoveredWorks] = useState(false);
  const onMouseEnteringWorks = () => setIsHoveredWorks(true);
  const onMouseLeavingWorks = () => setIsHoveredWorks(false);
  const [isHoveringAbout, setIsHoveredAbout] = useState(false);
  const onMouseEnteringAbout = () => setIsHoveredAbout(true);
  const onMouseLeavingAbout = () => setIsHoveredAbout(false);

  const iconWidth = 150;
  const iconHeight = 150;

  return (
    <div className={cssClasses.canvas}>
      <Head>
        <title>Room214N | Zian Huang | 黃梓安</title>
      </Head>

      {/* home page banner */}
      <div className={cssClasses.bannerContainer}>
        <Image layout="intrinsic" src={homeBanner} />
      </div>

      {/* blog, works and about me */}
      <div className={cssClasses.itemContainer}>
        {/* blog */}
        <div>
          <Link href="/blog">
            <div
              onMouseEnter={onMouseEnteringBlog}
              onMouseLeave={onMouseLeavingBlog}
              className={cssClasses.items}
            >
              {isHoveringBlog ? (
                <Image
                  width={iconWidth}
                  height={iconHeight}
                  layout="intrinsic"
                  className={cssClasses.icon}
                  src={blogIconH}
                />
              ) : (
                <Image
                  width={iconWidth}
                  height={iconHeight}
                  layout="intrinsic"
                  className={cssClasses.icon}
                  src={blogIconN}
                />
              )}
            </div>
          </Link>
        </div>
        {/* works */}
        <div>
          <Link href="/works">
            <div
              onMouseEnter={onMouseEnteringWorks}
              onMouseLeave={onMouseLeavingWorks}
              className={cssClasses.items}
            >
              {isHoveringWorks ? (
                <Image
                  width={iconWidth}
                  height={iconHeight}
                  layout="intrinsic"
                  className={cssClasses.icon}
                  src={worksIconH}
                />
              ) : (
                <Image
                  width={iconWidth}
                  height={iconHeight}
                  layout="intrinsic"
                  className={cssClasses.icon}
                  src={worksIconN}
                />
              )}
            </div>
          </Link>
        </div>

        {/* about me */}
        <div>
          <Link href="/about">
            <div
              onMouseEnter={onMouseEnteringAbout}
              onMouseLeave={onMouseLeavingAbout}
              className={cssClasses.items}
            >
              {isHoveringAbout ? (
                <Image
                  width={iconWidth}
                  height={iconHeight}
                  layout="intrinsic"
                  className={cssClasses.icon}
                  src={aboutIconH}
                />
              ) : (
                <Image
                  width={iconWidth}
                  height={iconHeight}
                  layout="intrinsic"
                  className={cssClasses.icon}
                  src={aboutIconN}
                />
              )}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
