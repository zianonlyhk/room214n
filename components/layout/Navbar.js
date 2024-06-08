import Link from "next/link";
import Image from "next/image";
import cssClasses from "./Navbar.module.css";

import homeIcon from "/img/navbar-footer/home.png";
import blogIcon from "/img/navbar-footer/blog.png";
import worksIcon from "/img/navbar-footer/works.png";
import aboutIcon from "/img/navbar-footer/about.png";

export default function Navbar() {
  return (
    <nav className={cssClasses.nav}>
      <div>
        <Link href="/">
          <Image
              width={75}
              height={75}
            layout="intrinsic"
            className={cssClasses.icon}
            src={homeIcon}
          />
        </Link>
      </div>
      <ul  className={cssClasses.threeItems}>
        <li>
          <Link href="/blog">
            <Image
              width={75}
              height={75}
              layout="intrinsic"
              className={cssClasses.icon}
              src={blogIcon}
            />
          </Link>
        </li>
        <li>
          <Link href="/works">
            <Image
              width={75}
              height={75}
              layout="intrinsic"
              className={cssClasses.icon}
              src={worksIcon}
            />
          </Link>
        </li>
        <li>
          <Link href="/about">
            <Image
              width={75}
              height={75}
              layout="intrinsic"
              className={cssClasses.icon}
              src={aboutIcon}
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
