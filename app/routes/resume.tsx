export default function Resume() {
    const higSchool = [
        'English',
        'isizulu',
        'Mathematics',
        'Physical Science',
        'Computer Application Technology',
        'Agricultural Science',
        'Life Orientation'];
    const unisa = [
        'Systems Analysis and Design',
        'Object Oriented Programming',
        'Business Informatics',
        'Graphical User Interface Programming',
        'Database Design (Oracle)',
        'Internet Programming (PHP)',
        'Advanced Operating System Practice (Fedora and RedHat)',
        'Interactive Programming (Android Development in Java)'
    ];
    return (
        <div id="main-content" className="single-page-content">
            <div id="primary" className="content-area">
                <div className="page-title">
                    <h1>Resume</h1>                                <div className="page-subtitle">
                        <h4> 6 Years of Experience</h4>
                    </div>
                </div>

                <div id="content" className="page-content site-content single-post" role="main">

                    <article id="post-171" className="post-171 page type-page status-publish hentry">
                        <div className="entry-content">
                            <div className="fw-page-builder-content"><section className="fw-main-row ">
                                <div className="fw-container">
                                    <div className="row">


                                        <div className=" col-xs-12 col-sm-6 ">
                                            <div id="col_inner_e5046c43b19e9d4f1d6ce16928d0899a" className="fw-col-inner" data-paddings="0px 0px 0px 0px">

                                                <div className="block-title">
                                                    <h2>Experience</h2>
                                                </div>


                                                <div id="timeline-6444857e53e51" className="timeline clearfix">
                                                    <div className="timeline-item clearfix">
                                                        <h5 className="item-period current">2022 - Current</h5>
                                                        <span className="item-company">Sovtech</span>
                                                        <h4 className="item-title">Full Stack Developer</h4>
                                                        <div className="text">
                                                            <ul style={{ listStyleType: "disc", padding: "0 0 0 20px" }}>
                                                                <li>I work as a Javascript developer, developing web applications and
                                                                Hybrid Mobile Applications.</li>  
                                                                <li>I develop and maintain large-scale web applications for various
                                                                clients.</li>
                                                                <li>I lead and mentor junior developers, providing guidance on
                                                                technical issues and best practices</li>
                                                                </ul>
                                                                <strong>Tech Stack:</strong> React, React-Native, GraphQL, TypeScript, AWS,
                                                                Docker, BitBucket, Javascript, Nodejs, HTML5, CSS
                                                             </div>
                                                    </div>
                                                    <div className="timeline-item clearfix">
                                                        <h5 className="item-period current">2019 - 2022</h5>
                                                        <span className="item-company">Flow Living</span>
                                                        <h4 className="item-title">Full Stack Developer</h4>
                                                        <div className="text">
                                                            <a href="https://flowliving.com/" style={{color:"#54ca95"}} >Flow living</a> is a property agency company that enables automated social media advertising for the real estate industry, providing high volumes of quality property leads and brand building.
                                                            <ul style={{ listStyleType: "disc", padding: "0 0 0 20px" }}>
                                                                <li>I worked as a Full Stack Software Developer</li>
                                                                <li>I maintained a renting Mobile App that was written in React-Native</li>
                                                                <li>I created an admin portal for tenants management, written in react and a little bit of TypeScript</li>
                                                                <li>I also helped with new features in the landlord CMS platform, that includes the functionality for creating organisations, agents and properties</li>
                                                            </ul>
                                                            <strong>Tech Stack:</strong> Javascript, Node.js, MongoDb, React.js, Material-UI, TypeScript and React-Native
                                                           </div>
                                                    </div>
                                                    <div className="timeline-item clearfix">
                                                        <h5 className="item-period current">2017 - 2019</h5>
                                                        <span className="item-company">Platform 5 Digital</span>
                                                        <h4 className="item-title">Full Stack Developer</h4>
                                                        <div className="text">
                                                            Praesent dignissim sollicitudin justo, sed elementum quam lacinia quis. Phasellus eleifend tristique posuere. Sed vitae dui nec magna.        </div>
                                                    </div>
                                                    <div className="timeline-item clearfix">
                                                        <h5 className="item-period ">2017 - 2017</h5>
                                                        <span className="item-company">Figtory</span>
                                                        <h4 className="item-title">Full Stack Developer</h4>
                                                        <div className="text">
                                                            Maecenas tempus faucibus rutrum. Duis eu aliquam urna. Proin vitae nulla tristique, ornare felis id, congue libero. Nam volutpat euismod quam.        </div>
                                                    </div>
                                                    <div className="timeline-item clearfix">
                                                        <h5 className="item-period ">2015 - 2017</h5>
                                                        <span className="item-company">Ntumba Charted Accountant Inc</span>
                                                        <h4 className="item-title">Junior Website Developer</h4>
                                                        <div className="text">
                                                            Duis mollis nunc quis quam viverra venenatis. Nulla nulla arcu, congue vitae nunc ac, sodales ultricies diam. Nullam justo leo, tincidunt sit amet.        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" col-xs-12 col-sm-6 ">
                                            <div id="col_inner_c963db795ac67e0d3fa13f175cb0eb93" className="fw-col-inner" data-paddings="0px 0px 0px 0px">

                                                <div className="block-title">
                                                    <h2>Education</h2>
                                                </div>
                                                <div id="timeline-6444857e53ca1" className="timeline clearfix">
                                                    <div className="timeline-item clearfix">
                                                        <h5 className="item-period ">2023 - current</h5>
                                                        <span className="item-company">University of South Africa</span>
                                                        <h4 className="item-title">Dip Information Technology</h4>
                                                        <div className="text">
                                                            Core Modules:
                                                            <ul style={{ listStyleType: "disc", padding: "0 0 0 20px" }}>
                                                                {unisa.map((modules)=>(
                                                                    <li key={modules}>{modules}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="timeline-item clearfix">
                                                        <h5 className="item-period ">2019</h5>
                                                        <span className="item-company">University of South Africa</span>
                                                        <h4 className="item-title">Introduction to Java Programming</h4>
                                                        <div className="text">
                                                            12 Months Certification in Java programming
                                                        </div>
                                                    </div>
                                                    <div className="timeline-item clearfix">
                                                        <h5 className="item-period ">2010</h5>
                                                        <span className="item-company">Kufezekile High School</span>
                                                        <h4 className="item-title">Grade 12</h4>
                                                        <div className="text">
                                                            Subjects:
                                                            <ul style={{ listStyleType: "disc", padding: "0 0 0 20px" }}>
                                                                {higSchool.map((value) => (
                                                                    <li key={value} >{value}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className=" col-xs-12 col-sm-12 ">
                                            <div id="col_inner_f72d1ecce355e50c601f1c2621706588" className="fw-col-inner" data-paddings="0px 0px 0px 0px">

                                                <div className="fw-divider-space" style={{ paddingTop: "40px" }}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className=" col-xs-12 col-sm-6 ">
                                            <div id="col_inner_796332a970e05ad435677b3cb493b49a" className="fw-col-inner" data-paddings="0px 0px 0px 0px">
                                                <div className="block-title">
                                                    <h2>Tech Stack</h2>
                                                </div>


                                                <div id="skills-6444857e54fd4" className="skills-info skills-first-style">
                                                    <div className="clearfix">
                                                        <h4>HTML / CSS</h4>

                                                    </div>

                                                    <div className="clearfix">
                                                        <h4>PHP</h4>

                                                    </div>

                                                    <div className="clearfix">
                                                        <h4>JavaScript</h4>

                                                    </div>

                                                    <div className="clearfix">
                                                        <h4>TypeScript</h4>
                                                    </div>
                                                    <div className="clearfix">
                                                        <h4>Node.js</h4>
                                                    </div>
                                                    <div className="clearfix">
                                                        <h4>Python</h4>
                                                    </div>
                                                    <div className="clearfix">
                                                        <h4>Java</h4>
                                                    </div>
                                                    <div className="clearfix">
                                                        <h4>MySQL</h4>
                                                    </div>
                                                    <div className="clearfix">
                                                        <h4>AWS</h4>
                                                    </div>
                                                    <div className="clearfix">
                                                        <h4>React-Native</h4>
                                                    </div>
                                                    <div className="clearfix">
                                                        <h4>React</h4>
                                                    </div>
                                                    <div className="clearfix">
                                                        <h4>MongoDB</h4>
                                                    </div>
                                                    <div className="clearfix">
                                                        <h4>Express</h4>
                                                    </div>
                                                </div>
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
}