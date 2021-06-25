import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import cssClasses from "./index.module.css";

// importing images
import worksBanner from "/img/works/works-banner.png";
import codingIconN from "/img/works/coding-normal.png";
import codingIconH from "/img/works/coding-hover.png";
import vaIconN from "/img/works/va-normal.png";
import vaIconH from "/img/works/va-hover.png";

export default function Home() {
  // setting up for hovering changes of icons
  const [isHoveringCoding, setIsHoveredCoding] = useState(false);
  const onMouseEnteringCoding = () => setIsHoveredCoding(true);
  const onMouseLeavingCoding = () => setIsHoveredCoding(false);
  const [isHoveringVA, setIsHoveredVA] = useState(false);
  const onMouseEnteringVA = () => setIsHoveredVA(true);
  const onMouseLeavingVA = () => setIsHoveredVA(false);

  const iconWidth = 150;
  const iconHeight = 150;

  return (
    <div className={cssClasses.canvas}>
      <Head>
        <title>Works 214N</title>
      </Head>
      {/* works page banner */}
      <div className={cssClasses.bannerContainer}>
        <div className={cssClasses.banner}>
          <Image layout="intrinsic" src={worksBanner} />
        </div>
      </div>

      {/* coding and va */}
      <div className={cssClasses.itemContainer}>
        {/* coding */}
        <div>
          <Link href="/works/coding">
            <div
              onMouseEnter={onMouseEnteringCoding}
              onMouseLeave={onMouseLeavingCoding}
              className={cssClasses.items}
            >
              {isHoveringCoding ? (
                <Image
                  width={iconWidth}
                  height={iconHeight}
                  layout="intrinsic"
                  className={cssClasses.icon}
                  src={codingIconH}
                />
              ) : (
                <Image
                  width={iconWidth}
                  height={iconHeight}
                  layout="intrinsic"
                  className={cssClasses.icon}
                  src={codingIconN}
                />
              )}
            </div>
          </Link>
        </div>
        {/* va */}
        <div>
          <Link href="/works/visual-arts">
            <div
              onMouseEnter={onMouseEnteringVA}
              onMouseLeave={onMouseLeavingVA}
              className={cssClasses.items}
            >
              {isHoveringVA ? (
                <Image
                  width={iconWidth}
                  height={iconHeight}
                  layout="intrinsic"
                  className={cssClasses.icon}
                  src={vaIconH}
                />
              ) : (
                <Image
                  width={iconWidth}
                  height={iconHeight}
                  layout="intrinsic"
                  className={cssClasses.icon}
                  src={vaIconN}
                />
              )}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
