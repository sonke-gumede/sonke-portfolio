import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Footer from "./layout/footer";
import Header from "./layout/header";
import Main from "./layout/main";
import styles from './styles/shared.css';
import googleFonts from './styles/google-font.css';

export function links() {
  return [
    {
      rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css",
      integrity: "sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N",
      crossOrigin: "anonymous"
    },{
      rel:"stylesheet", href:"path/to/font-awesome/css/font-awesome.min.css"
    },
    { rel: "stylesheet", href: styles },
    {rel:"stylesheet", href: googleFonts},
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap" }];
}
export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="robots" content="max-image-preview:large" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <Meta />
        <Links />
      </head>
      <body data-rsssl="1" className="page-template page-template-page-templates page-template-template-leven-page-with-sidebar page-template-page-templatestemplate-leven-page-with-sidebar-php page page-id-8 custom-background wp-embed-responsive masthead-fixed full-width singular" data-new-gr-c-s-check-loaded="14.1106.0" data-gr-ext-installed="">
        <div className="page-scroll">
          <div id="page_container" className="page-container full-width-container theme-style-light animated fadeInLeft" data-animation="fadeInLeft">
          <div className="preloader" style={{ display: "none" }}>
            <div className="preloader-animation">
                <div className="preloader-spinner">
                </div>
            </div>
        </div>
        <div className="lmpixels-scroll-to-top hidden-btn"><i className="lnr lnr-chevron-up"></i></div>
            <Header />
            <Main>
              <Outlet />
              <ScrollRestoration />
              <Scripts />
              <LiveReload />
            </Main>
            <Footer />
          </div>
        </div>
        <div id="page-ajax-loaded" className="page-portfolio-loaded animated fadeInLeft" style={{ display: "none" }}>
          <div className="preloader-portfolio">
            <div className="preloader-animation">
              <div className="preloader-spinner"></div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
