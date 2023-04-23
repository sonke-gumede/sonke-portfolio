import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    <div id="main-content" className="single-page-content">
      <div id="primary" className="content-area">
        <div id="content" className="page-content site-content single-post" role="main">
          <article id="post-8" className="post-8 page type-page status-publish hentry">
            <div className="entry-content">
              <div className="fw-page-builder-content"><section className="fw-main-row ">
                <div className="fw-container">
                  <div className="row">
                    <div className=" col-xs-12 col-sm-12 ">
                      <div id="col_inner_8904f96905fdfdd3a9daf998286c3f83" className="fw-col-inner" data-paddings="0px 0px 0px 0px">
                        <div id="home_content_111e4c729e81560ba288e46d8e0d933f" className="home-content">
                          <div className="row flex-v-align flex-direction-reverse">
                            <div className="col-sm-12 col-md-6 col-lg-6">
                              <div className="home-photo">
                                <div className="hp-inner transition" style={{ backgroundPosition: "calc(50% + -3.54167px) calc(50% + -2.28488px)" }}></div>
                              </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6">
                              <div className="home-text">
                                <h1>Nhlonipho Sonke Gumede</h1>
                                <p>
                                  Hi there, I'm Sonke, a self taught software developer with passion in all things Technology,
                                  I find pleassure in solving complex challenges even if it means staying up all night with nothing but coffee and Chillhop music.

                                </p>
                                <strong>Fun facts:</strong> Sometimes I'm more productive when I'm a little bit fatigued, I have no idea how is that even possible. 
                                <div className="home-buttons">
                                  <a href="#" target="_blank" id="" className="btn btn-primary">Download CV</a>
                                </div>
                              </div>
                            </div>
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
  );
}
