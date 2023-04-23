import React from "react";
import styles from "../styles/portfolio.css"; 

export const links=()=>[{rel: "stylesheet", href: styles}]
const Portfolio:React.FunctionComponent = ()=>(
    <div id="main-content" className="single-page-content">
    <div id="primary" className="content-area">
        <div className="page-title">
            <h1>Portfolio</h1>
            {/* <div className="page-subtitle">
                <h4> 6 Years of Experience</h4>
            </div> */}
        </div>
        <div id="content" className="page-content site-content single-post" role="main">
            <article id="post-171" className="post-171 page type-page status-publish hentry">
                <div className="entry-content">
                    <div className="fw-page-builder-content"><section className="fw-main-row ">
                        <div className="fw-container">
                            <div className="row">

                            </div>
                            <div className="row">
                                <div className=" col-xs-12 col-sm-12 ">
                                    <div id="col_inner_f72d1ecce355e50c601f1c2621706588" className="fw-col-inner" data-paddings="0px 0px 0px 0px">

                                        <div className="fw-divider-space" style={{ paddingTop: "40px" }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    </div>
                </div>
            </article>
        </div>
    </div>
</div>
)

export default Portfolio;