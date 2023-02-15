import Image from "next/image";
// internal
import SEO from "@components/seo";
import { HeaderFourteen, Wrapper } from "@layout/index";
import shape from "@assets/img/coming/coming-shape-1.png";
import gif_img from "@assets/img/coming/coming-image-2.gif";
import SocialLinks from "@components/social";
import Time from "@utils/time";

export default function ComingSoon() {
  return (
    <Wrapper>
      <SEO pageTitle={"Coming Soon"} />
      <HeaderFourteen />
      {/* coming soon area start */}
      <section className="coming__area coming__height d-flex align-items-center">
        <div className="coming__shape">
          <Image className="coming__shape-1" src={shape} alt="shape" />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-6">
              <div className="coming__content pt-55">
                <div
                  className="coming__countdown"
                >
                  <ul>
                    <li>
                      <span>{Time("2023-12-22 00:00:00").days}</span> Days
                    </li>
                    <li>
                      <span>{Time("2023-12-22 00:00:00").hours}</span> Hours
                    </li>
                    <li>
                      <span>{Time("2023-12-22 00:00:00").minutes}</span> Minutes
                    </li>
                    <li>
                      <span suppressHydrationWarning>{Time("2023-12-22 00:00:00").seconds}</span> Seconds
                    </li>
                  </ul>
                </div>
                <h3 className="coming__title">
                  Our website is <br /> Under Consruction
                </h3>
                <p>
                  We will be here soon with something amazing technology and
                  analytics. Subscribe to be notified.
                </p>

                <div className="coming__form">
                  <form onSubmit={e => e.preventDefault()}>
                    <div className="coming__input">
                      <input type="email" placeholder="Enter Your Email" />
                      <button type="submit" className="tp-btn">
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>

                <div className="coming__social">
                  <SocialLinks />
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="coming__thumb">
                <Image src={gif_img} alt="gif image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* coming soon area end */}
    </Wrapper>
  );
}
