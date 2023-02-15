import React from "react";
// internal
import {
    PortfolioSerIconOne,
    PortfolioSerIconThree,
    PortfolioSerIconTwo,
} from "@svg/index";
import SinglePersonalPortSerItem from "./single-service/single-personal-port-ser-item";

export const per_port_service_data = [

    {
        icon: <PortfolioSerIconThree />,
        project: 7,
        title: "Web Application",
    },
    {
        icon: <PortfolioSerIconOne />,
        project: 5,
        title: "Website design",
    },
    {
        icon: <PortfolioSerIconTwo />,
        project: 2,
        title: "Mobile App ",
    }
];

const PortfolioService = ({ style_2 = false, element_style = false }) => {
    return (
        <>
            <section
                className={`services__area pb-${style_2 ? "110" : element_style ? "90" : "120"
                    } ${element_style ? "pt-110" : ""}`}
            >
                <div className="container">
                    {element_style && (
                        <div className="row">
                            <div className="col-xxl-12">
                                <div className="tp-section-wrapper-3 mb-60 text-center">
                                    <span className="tp-section-subtitle-3">
                                        Minimal &amp; Clean Design
                                    </span>
                                    <h3 className="tp-section-title-3">Gradient Overlay</h3>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="row">
                        {per_port_service_data.map((item, i) => (
                            <div key={i} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                <SinglePersonalPortSerItem style_2={style_2} item={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default PortfolioService;
