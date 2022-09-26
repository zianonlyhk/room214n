import React, { useState } from "react";
import cssClasses from "./index.module.css";
// Next.js optimised modules
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
// for page navigation purpopse
import ReactPaginate from "react-paginate";

// importing images
import codingBanner from "/img/works/works-banner.png";
import backIcon from "/img/others/back.png";

export default function Home() {
  // entries
  const coding_blog_entries = [
    {
      title: "ml_jet_tagger",
      href_link: "/works/coding/jet-tagger",
      date: "31/08/2022",
    },
    {
      title: "Snake Filter",
      href_link: "/works/coding/snake-filter",
      date: "08/09/2021",
    },
  ];
  // declarations for page navigation
  const [page, setPage] = useState(0);
  const [which_blog, setBlog] = useState(coding_blog_entries);
  const blogPerPage = 10;
  const numberOfBlogsVistited = page * blogPerPage;
  const totalPages = Math.ceil(which_blog.length / blogPerPage);
  const changePage = ({ selected }) => {
    setPage(selected);
  };
  const displayBlogs = which_blog
    .slice(numberOfBlogsVistited, numberOfBlogsVistited + blogPerPage)
    .map((indi_blog) => {
      return (
        <div className={cssClasses.blogTitleContainer}>
          <div className={cssClasses.blogTitle}>
            <Link href={indi_blog.href_link}>
              <a>- {indi_blog.title}</a>
            </Link>
            {indi_blog.date}
          </div>
        </div>
      );
    });

  return (
    <div className={cssClasses.canvas}>
      <Head>
        <title>Coding 214N</title>
      </Head>
      {/* blog page banner */}
      <div className={cssClasses.bannerContainer}>
        <div className={cssClasses.banner}>
          <Image layout="intrinsic" src={codingBanner} />
        </div>
      </div>

      {/* blog titles and links */}
      <div className={cssClasses.blogCanvas}>
        <Link href="/works">
          <Image
            width={100}
            height={50}
            layout="intrinsic"
            className={cssClasses.backIcon}
            src={backIcon}
          />
        </Link>

        {/* page navigator */}
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
      </div>
      <div className={cssClasses.blogCanvas}>
        <div className={cssClasses.blogTitleContainer}>
          <div className={cssClasses.blogTitle}>
            <Link href="/works/coding/readme">- Readme</Link>
            dd/mm/yyyy
          </div>
        </div>
      </div>
    </div>
  );
}
