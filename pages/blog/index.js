import React, { useState } from "react";
import cssClasses from "./index.module.css";
// Next.js optimised modules
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
// for page navigation purpopse
import ReactPaginate from "react-paginate";

// importing images
import blogBanner from "/img/blog/blog-banner.png";

export default function Home() {
  // #################################################
  // entries
  const blog_entries = [
    {
      title: "Cities Partnerships Programme with Stockholm",
      href_link: "/blog/enviro",
      date: "15/07/2022",
    },
    {
      title: "Separating jet images using CNN",
      href_link: "/blog/jet_tagging",
      date: "09/01/2022",
    },
    {
      title: "Gamma spectroscopy using HPGe detector",
      href_link: "/blog/hpge_formal_report",
      date: "03/01/2022",
    },
    {
      title: "Kelvin waves infographic",
      href_link: "/blog/kelvin_wave_infographic",
      date: "04/12/2021",
    },
    {
      title: "Coriolis force YouTube video",
      href_link: "/blog/coriolis_force",
      date: "03/11/2021",
    },
  ];
  // #################################################

  // declarations for page navigation
  const [page, setPage] = useState(0);
  const [which_blog, setBlog] = useState(blog_entries);
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
        <title>Blog 214N</title>
      </Head>

      {/* blog page banner */}
      <div className={cssClasses.bannerContainer}>
        <div className={cssClasses.banner}>
          <Image layout="intrinsic" src={blogBanner} />
        </div>
      </div>

      {/* page navigator */}
      <div className={cssClasses.blogCanvas}>
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

      {/* blog titles and links */}
      <div className={cssClasses.blogCanvas}>
        <div className={cssClasses.blogTitleContainer}>
          <div className={cssClasses.blogTitle}>
            <Link href="/blog/readme">- Readme</Link>
            dd/mm/yyyy
          </div>
        </div>
      </div>
    </div>
  );
}
