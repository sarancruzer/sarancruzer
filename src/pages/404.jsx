// external
import Link from "next/link";
// internal
import { FooterSix, Header, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import { ArrowRightFive, ErrorSvg } from "@svg/index";

export default function ErrorPage() {
  return (
    <Wrapper>
      <SEO pageTitle={"Error Page"} />
      <Header top_bar={false} header_solid={true} commonOffCanvas={true} />
      {/* error area start */}
      <section className="error__area error__bg pb-110">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <div className="error__wrapper p-relative z-index-1 text-center">
                <h3 className="error__text">404</h3>
                <div className="error__thumb mb-35">
                  <ErrorSvg />
                </div>
                <div className="error__content">
                  <h3 className="error__title">Oops! Page not found</h3>
                  <p>
                    Whoops, this is embarassing. Looks like the page you were
                    looking for was not found.
                  </p>
                  <Link href="/" className="tp-btn">
                    Back to Home
                    <ArrowRightFive />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* error area end */}
      <FooterSix style_2={true} />
    </Wrapper>
  );
}
