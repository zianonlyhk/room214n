import Image from "next/image";
import cssClasses from "./Footer.module.css";

import linkedinIcon from "/img/navbar-footer/linkedin.png";
import githubIcon from "/img/navbar-footer/github.png";
import dekhanyumcha from "/img/navbar-footer/dekhanyumcha.png";

export default function Navbar() {
  return (
    <footer className={cssClasses.footer}>
      <ul className={cssClasses.gitAndLinked}>
        <li>
          <a
            href="https://www.linkedin.com/in/zian-huang/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              width={75}
              height={75}
              layout="intrinsic"
              className={cssClasses.icon}
              src={linkedinIcon}
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/zianonlyhk"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              width={75}
              height={75}
              layout="intrinsic"
              className={cssClasses.icon}
              src={githubIcon}
            />
          </a>
        </li>
      </ul>
      <Image
        height={75}
        width={280}
        layout="fixed"
        className={cssClasses.icon}
        src={dekhanyumcha}
      />
    </footer>
  );
}
