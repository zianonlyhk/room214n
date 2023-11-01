import React, { useState } from "react";
import cssClasses from "./index.module.css";
// Next.js optimised modules
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
// for page navigation purpopse
import ReactPaginate from "react-paginate";

// importing images
import vaBanner from "/img/works/works-banner.png";
import backIcon from "/img/others/back.png";
// importing drawings
import fountainPen from "/img/works/vaRes/fountainpen.JPG";
import drPepper from "/img/works/vaRes/drpepper.JPG";
import polyMe from "/img/works/vaRes/polyme.jpg";
import printing from "/img/works/vaRes/printing.JPG";
import quick_s from "/img/works/vaRes/quick_s.JPG";
import red_tote_bag from "/img/works/vaRes/red_tote_bag.JPG";
import spaghetti from "/img/works/vaRes/spaghetti.JPG";
import threeEyes from "/img/works/vaRes/threeEyes.jpg";
import comingsoon from "/img/works/vaRes/comingsoon.png";

// for image modal feature
import ModalV from "/components/ModalV.js";
import ModalH from "/components/ModalH.js";

export default function Home() {
  // entries
  const art_entries = [
    { src1: fountainPen, src2: drPepper, src3: polyMe, src4: printing, src5: quick_s, src6: red_tote_bag},
    { src1: spaghetti, src2: threeEyes, src3: comingsoon, src4: comingsoon, src5: comingsoon, src6: comingsoon },
  ];
  // declarations for page navigation
  const [page, setPage] = useState(0);
  const [which_blog, setBlog] = useState(art_entries);
  const blogPerPage = 1;
  const numberOfBlogsVistited = page * blogPerPage;
  const totalPages = Math.ceil(which_blog.length / blogPerPage);
  const changePage = ({ selected }) => {
    setPage(selected);
  };

  const displayBlogs = which_blog
    .slice(numberOfBlogsVistited, numberOfBlogsVistited + blogPerPage)
    .map((indi_blog) => {
      return (
        <div className={cssClasses.vaTitleContainer}>
          <div className={cssClasses.previewIcon}>
            <Image
              layout="intrinsic"
              src={indi_blog.src1}
              onClick={() => {
                setShowModalFuncArr[page * 6](true);
              }}
            />
          </div>
          <div className={cssClasses.previewIcon}>
            <Image
              layout="intrinsic"
              src={indi_blog.src2}
              onClick={() => {
                setShowModalFuncArr[page * 6 + 1](true);
              }}
            />
          </div>
          <div className={cssClasses.previewIcon}>
            <Image
              layout="intrinsic"
              src={indi_blog.src3}
              onClick={() => {
                setShowModalFuncArr[page * 6 + 2](true);
              }}
            />
          </div>
          <div className={cssClasses.previewIcon}>
            <Image
              layout="intrinsic"
              src={indi_blog.src4}
              onClick={() => {
                setShowModalFuncArr[page * 6 + 3](true);
              }}
            />
          </div>
          <div className={cssClasses.previewIcon}>
            <Image
              layout="intrinsic"
              src={indi_blog.src5}
              onClick={() => {
                setShowModalFuncArr[page * 6 + 4](true);
              }}
            />
          </div>
          <div className={cssClasses.previewIcon}>
            <Image
              layout="intrinsic"
              src={indi_blog.src6}
              onClick={() => {
                setShowModalFuncArr[page * 6 + 5](true);
              }}
            />
          </div>
        </div>
      );
    });

  // old modal codes
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [showModal5, setShowModal5] = useState(false);
  const [showModal6, setShowModal6] = useState(false);
  const [showModal7, setShowModal7] = useState(false);
  const [showModal8, setShowModal8] = useState(false);
  const [showModal9, setShowModal9] = useState(false);
  const [showModal10, setShowModal10] = useState(false);
  const [showModal11, setShowModal11] = useState(false);
  const [showModal12, setShowModal12] = useState(false);
  const setShowModalFuncArr = [
    setShowModal1,
    setShowModal2,
    setShowModal3,
    setShowModal4,
    setShowModal5,
    setShowModal6,
    setShowModal7,
    setShowModal8,
    setShowModal9,
    setShowModal10,
    setShowModal11,
    setShowModal12,
  ];

  return (
    <div className={cssClasses.canvas}>
      <Head>
        <title>Arts 214N</title>
      </Head>
      {/* blog page banner */}
      <div className={cssClasses.bannerContainer}>
        <div className={cssClasses.banner}>
          <Image layout="intrinsic" src={vaBanner} />
        </div>
      </div>

      {/* blog titles and links */}
      <div className={cssClasses.vaCanvas}>
        <Link href="/works">
          <Image
            width={100}
            height={50}
            layout="intrinsic"
            className={cssClasses.backIcon}
            src={backIcon}
          />
        </Link>

        <div>
          {displayBlogs}
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={totalPages}
            onPageChange={changePage}
            breakLabel={"..."}
            containerClassName={cssClasses.navigationButtons}
            previousLinkClassName={cssClasses.previousButton}
            nextLinkClassName={cssClasses.nextButton}
            disabledClassName={cssClasses.navigationDisabled}
            activeClassName={cssClasses.navigationActive}
          />
        </div>

        <ModalH onClose={() => setShowModal1(false)} show={showModal1}>
          <Image layout="intrinsic" src={fountainPen} />
        </ModalH>
        <ModalH onClose={() => setShowModal2(false)} show={showModal2}>
          <Image layout="intrinsic" src={drPepper} />
        </ModalH>
        <ModalV onClose={() => setShowModal3(false)} show={showModal3}>
          <Image layout="intrinsic" src={polyMe} />
        </ModalV>
        <ModalH onClose={() => setShowModal4(false)} show={showModal4}>
          <Image layout="intrinsic" src={printing} />
        </ModalH>
        <ModalH onClose={() => setShowModal5(false)} show={showModal5}>
          <Image layout="intrinsic" src={quick_s} />
        </ModalH>
        <ModalV onClose={() => setShowModal6(false)} show={showModal6}>
          <Image layout="intrinsic" src={red_tote_bag} />
        </ModalV>
        <ModalH onClose={() => setShowModal7(false)} show={showModal7}>
          <Image layout="intrinsic" src={spaghetti} />
        </ModalH>
        <ModalH onClose={() => setShowModal8(false)} show={showModal8}>
          <Image layout="intrinsic" src={threeEyes} />
        </ModalH>
        <ModalH onClose={() => setShowModal9(false)} show={showModal9}>
          <Image layout="intrinsic" src={comingsoon} />
        </ModalH>
        <ModalV onClose={() => setShowModal10(false)} show={showModal10}>
          <Image layout="intrinsic" src={comingsoon} />
        </ModalV>
        <ModalV onClose={() => setShowModal11(false)} show={showModal11}>
          <Image layout="intrinsic" src={comingsoon} />
        </ModalV>
        <ModalV onClose={() => setShowModal12(false)} show={showModal12}>
          <Image layout="intrinsic" src={comingsoon} />
        </ModalV>
      </div>
    </div>
  );
}
