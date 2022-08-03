import React, { Component } from 'react';

import styles from './../../styles/index.module.scss';
import ShowcaseBackgroundImg from './../../imgs/backgrounds/showcaseBackgroundImg.png';

import ProjectBox from './../../components/projectBox';
import Link from 'next/link';

// import './../../data/projectDataArray';

//project array object

import dumbyImg from './../../imgs/showcase/dumby-img.jpg';

const projects = [
    {
        name: "Project Name",
        image: dumbyImg.src,
        type: "website", 
        tech: "HTML, CSS, JS",
        link: "/project/path",
        github: "/github/path"
    },
    {
        name: "ACME Photography",
        image: './../../projects/01-ACME-Photography/thumbnail.png',
        type: "website", 
        tech: "HTML, CSS, JS",
        link: "/project/path",
        github: "/github/path"
    }
]

// console.log(project01.name);
export default class GallerySection extends Component {

    constructor(props) {
        super(props);
        
        const project = {
            name: "Project Name",
            image: dumbyImg.src,
            type: "website",
            tech: "HTML, CSS, JavaScript, etc",
            link: "/project/path",
            github: "github link"
        }


    }
    
    render() {
        return (
            <div className={styles.showcaseSection} style={{
                backgroundImage: `url(${ShowcaseBackgroundImg.src})`
            }}>
                
                <div className={styles.showcaseGallery}>
                    <div className={styles.row}>
                        
                        {/* {
                            projects.map((projects) => {
                                return (
                                    <ProjectBox key={projects} props={this.props.projects} />
                              ); 
                            })
                        } */}
                        
                        {/* <ProjectBox /> */}
                        
                    </div>
                </div>
                
            </div>
        );
    }


}