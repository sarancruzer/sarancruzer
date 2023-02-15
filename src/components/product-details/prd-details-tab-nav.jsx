import React, { useEffect, useRef } from "react";

const PrdDetailsTabNav = () => {
  const activeRef = useRef(null)
  const marker = useRef(null);
  // handleActive
  const handleActive = (e) => {
    if (e.target.classList.contains('active')) {
      marker.current.style.left = e.target.offsetLeft + "px";
      marker.current.style.width = e.target.offsetWidth + "px";
    }
  }
  useEffect(() => {
    if(activeRef.current?.classList.contains('active')){
      marker.current.style.left = activeRef.current.offsetLeft +'px';
      marker.current.style.width = activeRef.current.offsetWidth +'px';
    }
  }, []);

  // nav item
function NavItem({ active = false, id, title,linkRef }) {
  return (
    <button
      ref={linkRef}
      className={`nav-link ${active ? "active" : ""}`}
      id={`nav-${id}-tab`}
      data-bs-toggle="tab"
      data-bs-target={`#nav-${id}`}
      type="button"
      role="tab"
      aria-controls={`nav-${id}`}
      aria-selected={active ? "true" : "false"}
      tabIndex="-1"
      onClick={e => handleActive(e)}
    >
      {title}
    </button>
  );
}
  return (
    <nav>
      <div
        className="product__details-tab-nav-inner nav tp-tab-menu d-flex flex-sm-nowrap flex-wrap"
        id="nav-tab-info"
        role="tablist"
      >
        <NavItem active={true} linkRef={activeRef} id="desc" title="Description" />
        <NavItem id="additional" title="Additional information" />
        <NavItem id="review" title={`Reviews (02)`} />
        <span
          id="marker"
          ref={marker}
          className="tp-tab-line d-none d-sm-inline-block"
        ></span>
      </div>
    </nav>
  );
};

export default PrdDetailsTabNav;
