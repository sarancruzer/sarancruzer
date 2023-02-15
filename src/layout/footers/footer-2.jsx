// external
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// internal
import SocialLinks from '../../components/social';
import FooterBottom from './component/footer-bottom';
import logo from '../../../public/assets/img/logo/logo.svg'
import FooterWidget from './component/footer-widget';
import { blog_data } from '../../data';

// widget data
const footer_widget = [
  {
    widget_num: 'footer__widget-4', col: '4-2', title: 'Quick Link',
    lists: [
      { link: '/', title: 'Home' }, { link: '/about', title: 'About' },
      { link: '/services', title: 'Services' }, { link: '/portfolio', title: 'Portfolio' },
      { link: '/blog-grid', title: 'News' }, { link: '/team', title: 'Our Team' },
      { link: '/contact', title: 'Contact' },
    ]
  },
  {
    widget_num: 'footer__widget-4', col: '4-3', title: 'Service Areas',
    lists: [
      { link: '/services-3', title: 'Family law' }, { link: '/services-3', title: 'Corporate law' },
      { link: '/services-3', title: 'Bank and Financial' }, { link: '/services-3', title: 'Real Estate law' },
      { link: '/services-3', title: 'Criminal law' }, { link: '/services-3', title: 'Juvenile Crimes' },
      { link: '/services-3', title: 'Industry Law' },
    ]
  },
]

// footer blog 
const footer_blogs = blog_data.slice(0,2);


const FooterTwo = () => {
  return (
    <>
      <footer>
        <div className="footer__area" data-bg-color="footer-bg-green">
          <div className="footer__top footer__top-4">
            <div className="container">
              <div className="row">
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="footer__widget footer__widget-4 mb-50 footer-col-4-1">
                    <div className="footer__logo">
                      <Link href="/">
                        <Image src={logo} alt="logo" />
                      </Link>
                    </div>
                    <div className="footer__widget-content">
                      <div className="footer__info">
                        <p>How you use the city or town name is up to you. All results may be freely used in any work.</p>
                        <div className="footer__social-4">
                          <h5>Follow :</h5>
                          <SocialLinks />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {footer_widget.map((item, i) => (
                  <div key={i} className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <FooterWidget item={item} />
                  </div>
                ))}

                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="footer__widget footer__widget-4 mb-50 footer-col-4-4">
                    <h3 className="footer__widget-title">Trending Post</h3>

                    <div className="footer__widget-content">
                      <div className="footer__blog">
                        {footer_blogs.map((blog,i) => (
                        <div key={i} className="footer__blog-item-2">
                          <div className="footer__blog-content-2">
                            <div className="footer__blog-tag">
                              <a href="#">{blog.tag}</a>
                            </div>
                            <h3 className="footer__blog-title-4">
                              <Link href="/blog-details">{blog.title}</Link>
                            </h3>
                            <div className="footer__blog-meta-4">
                              <span>{blog.date}</span>
                            </div>
                          </div>
                        </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__bottom-4">
            <div className="container">
              <FooterBottom inner="inner-4" copyright='copyright-4' link='link-4' />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterTwo;