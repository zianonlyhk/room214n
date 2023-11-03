import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import cssClasses from "./index.module.css";

import backIcon from "/img/others/back.png";
import cover_page_jet from "/img/blog/selected_projects/formal_report_cover.jpg";
import cover_page_hpge from "/img/blog/selected_projects/cover_page.jpg";
import cover_page_enviro from "/img/blog/selected_projects/enviro.png";

import Latex from 'react-latex-next';
import 'katex/dist/katex.min.css';

// importing pdf
import { EmbedPDF } from "@simplepdf/react-embed-pdf";

export default function Home() {
  return (
    <div className={cssClasses.canvas}>
      <Head>
        <title>Selected undergrad projects</title>
      </Head>

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
            As suggested in the title, I am showing some of my project reports which I produced in the 3rd year of my BSc Physics at UCL. One may easily agree that these reports are not of very high quality, actually so do I. My motivation is to keep the records that show my progression in writing academic English. I will appreciate these footprints left when I later compare my writings then to the following past works:
          </p>
          <p>---</p>
          <p>
            This lab report was produced as the final assignment of the practical module “PHAS0051 Experimental Physics”. It is about the study of using a high purity germanium detector (HPGe) to perform gamma spectroscopy. I chose this module to improve my skills in analyzing a large amount data, which in this case refers to the raw detector output. The experiment also involved detector calibration and the use of various statistical tools in discrete error analysis.
          </p>
          <p>
            In addition to playing with the lab-in-stock radioactive samples (Co-60, Bi-207 etc.), we also had a chance to work on the spectra of multiple Norwegian soil samples, before and after the Chernobyl incident. It sounds really exciting but there was a plot twist - our instructor just threw the data on us without giving the detector measurement efficiency he used. We thus couldn’t obtain the percentage of any Chernobyl radioactive traces :(
          </p>
          <p>
            I am putting the report here for people to read. In the case if any of my younger peers is reading, just treat it as a reference. I didn’t get a very good grade with this so you have been warned.
          </p>
          <p>
            <a
              href="https://drive.google.com/file/d/1tQHW1gCpuQpXoJ9qQfKnOpPihAhZQgR9/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              PRESS HERE to go to the Google Drive download page
            </a>
          </p>
          <p>
            <Image layout="intrinsic" src={cover_page_hpge} />
          </p>
          <p>---</p>
          <p>
            The second research focuses on the classification of simulated jets in the Large Hadron Collider experiment at ATLAS. It aims at using a low-dimension imaging recognition technique to capture a series of high-level nonlinear interactions between colliding particles. This work was the final assignment of another course “PHAS0056 Practical Machine Learning for Physicist”. In this project, I was provided with a set of generated jet images from my instructor Prof. Mario Campanelli. My task was to implement some machine learning techniques, such as convolutional neural network on the provided jet image set, to distinguish between the jet sprays due two particle decay events: the W boson decay and the top quark decay.
          </p>
          <p>
            Back then, I had been recommended Google Colab by my friends for a long time and this assignment was the perfect time for me to go for a try. I paid a little bit for their GPU acceleration and the performance was way better than I expected. It was 10 times faster in network training than my poor little GeForce 1050 Ti. I believe with more research on its features, I can have my local text editor (VS Code) being connected to their cloud cluster. This provides me a development environment that I am more used to, while enjoying a much fast computing time. They should have got this already right?
          </p>
          <p>
            Feel free to have a look on the <EmbedPDF>
                <a href="https://raw.githubusercontent.com/zianonlyhk/pdf/c7a694dba501f3cfb7e9257cf5a45c330a852a07/Zian-Huang-PHAS0056-finalReport.pdf">
                    report
                </a>
            </EmbedPDF> and the Python codes of my very first machine learning project. Down below here:
          </p>
          <a
              href="https://drive.google.com/drive/folders/17w4MT4VB_KXlOWj7UtmlqwxO2LHXSq7w?usp=sharing"
              target="_blank"
              rel="noreferrer"
          >
            PRESS HERE to see the Python notebook on my drive
          </a>
          <p>
            <Image layout="intrinsic" src={cover_page_jet} />
          </p>
          <p>---</p>
          <p>
            The last report was produced in a small group project I did in the early summer of 2022, supervised by Professor Paul Bartlett. The project was under the UCL-managed Cities Partnerships Programme with Stockholm and we had a few chats with two other students from Stockholm University.
          </p>
          <p>
            The objective was to development a prototype that can measure the air quality in urban areas and feed the measured data back to the cloud. Unfortunately, due to the lack of time, a physical device could not be made but only its software. In the end, our team did measure some pollutant data of a living room and upload it to the cloud. We did face additional challenges in deploying this prototype, such as securing internet connection in the open street area. Due to the global chip shortage at that time, it was not possible to implement in massive scale even if we were successfully. We then decided to stop proceeding further and hope our Swedish friends can have some promising progress :-/
          </p>
          <p>
            This was my first time utilizing my freshly-learnt Linux knowledge in a practical project. It truly was a nice addition to my self-taught Linux that year. Finally, my thanks to Zarin! We actually knew each other before this project, through my training assistant part-time job at UCL ISD. Very nice teammate!
            She holds a lot of credits in our final report <EmbedPDF>
                <a href="https://raw.githubusercontent.com/zianonlyhk/pdf/c7a694dba501f3cfb7e9257cf5a45c330a852a07/citiesPartnership_formalReport.pdf">
                    here
                </a>
            </EmbedPDF>.
          </p>
          <p>
            <Image layout="intrinsic" src={cover_page_enviro} />
          </p>
          <p>
            15TH JUL 2021
          </p>
        </div>
      </div>
    </div>
  );
}