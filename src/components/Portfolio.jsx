import React from "react";
import { portfolio } from "../Constants";
import Masonry from 'react-masonry-css'

const Portfolio = () => {

    const breakpointColumnsObj = {
        default: 3,
        1100: 3,
        900: 2,
        500: 1
      };
    return (
        <div className="portfolio-container">
            <h1 className="section-head__text">My Portfolio</h1>
            <div className="portfolio-grid">
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                    {portfolio.map((port, index) => (
                        <div className="portfolio-card" key={index}>
                            <div className="port-img__container">
                                <img src={port.img} alt="img" />
                            </div>
                            <div className="port-tags__container">
                                {port.tags.map((tag) => (
                                    <div>{tag}</div>
                                ))}
                            </div>
                        </div>
                    ))}
                </Masonry>
            </div>
        </div>
    )
}

export default Portfolio