import Link from "next/link";
const { default: Image } = require("next/image");
// internal
import shape from "@assets/img/services/8/services-shape-1.png";

export default function ArchitectureServiceItem({ delay, icon, title, subtitle, project }) {
  return (
    <div
      className="services__item-8 animate-border-2 d-lg-flex align-items-start transition-3 mb-30 wow fadeInDown"
      data-wow-delay={delay}
      data-wow-duration="1s"
    >
      <span className="services-border-2"></span>
      <div className="services__shape">
        <Image className="services__shape-11" src={shape} alt="shape" />
      </div>
      <div className="services__icon-8 mr-30">
        <span>
          <Image src={icon} alt="icon" />
        </span>
      </div>
      <div className="services__content-8">
        <h3 className="services__title-8">
          <Link href="/service-details">{title}</Link>
        </h3>
        <p>{subtitle}</p>

        <div className="services__project-no">
          <span>{project} Project</span>
        </div>
      </div>
    </div>
  );
}