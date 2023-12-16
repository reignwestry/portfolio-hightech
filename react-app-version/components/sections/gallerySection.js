import React, { Component } from "react";

import styles from "./../../styles/index.module.scss";
import ShowcaseBackgroundImg from "./../../imgs/backgrounds/showcaseBackgroundImg.png";

import ProjectBox from "./../../components/projectBox";
import Link from "next/link";
import dumbyImg from "./../../imgs/showcase/dumby-img.jpg";
import GalleryProjectBox from './../galleryProjectBox';

// import './../../data/projectDataArray';

//project array object
// const projects = [

//     {
//         name: "ACME Photography",
//         image: './../../projects/01-ACME-Photography/thumbnail.png',
//         type: "website",
//         tech: "HTML, CSS, JS",
//         link: "/project/path",
//         github: "/github/path"
//     },
//     {
//         name: "App Theme",
//         image: './../../projects/02-Mobile-First-AppTheme/thumbnail.png',
//         type: "website",
//         tech: "HTML, CSS",
//         link: '../../projects/02-Mobile-First-AppTheme/index.html',
//         github: '/project/path'
//     },
//     {
//         name: "Bootstrap Design",
//         image: './../../projects/03-Portfolio-Bootstrap-Design/thumb.png',
//         type: "website",
//         tech: "HTML, CSS",
//         link: "D:/.PROJECTS/....PortfolioHighTech/pages/projects/",
//         github: "/github/path"
//     },
//     {
//         name: "ACME",
//         image: './../../projects/04-ACME-HTML5_Responsive_Layout_Website/thumbnail.png',
//         type: "website",
//         tech: "PHP, HTML5, CSS3",
//         link: "./../../projects/04-ACME-HTML5_Responsive_Layout_Website/index.html",
//         github: "/github/path"
//     },
//     {
//         name: 'DayCare',
//         image: './../../projects/05-DayCare/thumbnail.png',
//         type: "website",
//         tech: 'PHP, MySQL, HTML, CSS',
//         link: './../../projects/05-DayCare/index.html',
//         github: "/github/path"
//     },
//     {
//         name: 'Massage By Tia',
//         image: './../../projects/06-MassageByTia/thumbnail.png',
//         type: "website",
//         tech: 'HTML, CSS',
//         link: './../../projects/06-MassageByTia/index.html',
//         github: "/github/path"
//     },
//     {
//         name: 'FUDI',
//         image: './../../projects/07-FUDI/thumbnail.png',
//         type: "website",
//         tech: 'HTML, CSS',
//         link: './../../projects/07-FUDI/index.html',
//         github: "/github/path"
//     },
//     {
//         name: 'Gamma Photo App',
//         image: './../../projects/08-Gamma_Photo_App_Sales_Website/thumbnail.png',
//         type: "website",
//         tech: 'HTML, CSS',
//         link: './../../projects/08-Gamma_Photo_App_Sales_Website/index.html',
//         github: "/github/path"
//     },
//     {
//         name: 'Girl Scout Form',
//         image: './../../projects/09-GirlScoutForm/thumbnail.png',
//         type: "website",
//         tech: 'HTML, CSS, JS',
//         link: './../../projects/09-GirlScoutForm/index.html',
//         github: "/github/path"
//     },
//     {
//         name: 'Tip Calculator',
//         image: './../../projects/09-GirlScoutForm/thumbnail.png',
//         type: "website",
//         tech: 'HTML, CSS, JS',
//         link: './../../projects/09-GirlScoutForm/index.html',
//         github: "/github/path"
//     }

// ]

// console.log(project01.name);
export default class GallerySection extends Component {


  render() {
    return (
      <div
        className={styles.gallerySection}
        style={{
          backgroundImage: `url(${ShowcaseBackgroundImg.src})`,
        }}
      >
        <div className={styles.galleryRow}>
          <div className="projectContainer">
            <GalleryProjectBox />
          </div>
          <div className="projectContainer">
            <ProjectBox />
          </div>
          <div className="projectContainer">
            <ProjectBox />
          </div>
          <div className="projectContainer">
            <ProjectBox />
          </div>
          <div className="projectContainer">
            <ProjectBox />
          </div>
        </div>
      </div>
    );
  }
}
