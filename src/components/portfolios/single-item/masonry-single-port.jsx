import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import ReactTooltip from "react-tooltip";
import { motion } from "framer-motion";
import Link from "next/link";

const MasonrySinglePort = ({ item }) => {
  const { id, img, title, category } = item || {};
  return (
    <React.Fragment>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="portfolio__grid-item mb-20"
        data-tip
        data-for={id}
      >
        <div className="portfolio__grid-thumb w-img fix tp-img-reveal tp-img-reveal-item">
          <Link href="/portfolio-details-list">
            <Image
              src={img}
              alt="image"
              style={{ width: "100%", height: "100%" }}
            />
          </Link>
        </div>
      </motion.div>
      <ReactTooltip id={id} type="light">
        <div className="portfolio__grid-content portfolio__hover-category">
          <h3 className="portfolio__grid-title">
            <Link href="/portfolio-details">{title}</Link>
          </h3>
          <span>
            <a href="#">{category}</a>
          </span>
        </div>
      </ReactTooltip>
    </React.Fragment>
  );
};

export default dynamic(() => Promise.resolve(MasonrySinglePort), {
  ssr: false,
});
