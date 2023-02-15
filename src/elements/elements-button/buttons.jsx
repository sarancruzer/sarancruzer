import React from "react";
// internal
import MinimalButtons from "./minimal-buttons";
import SolidBackgroundButtons from "./solid-background-buttons";
import SolidButtons from "./solid-buttons";

const Buttons = () => {
  return (
    <>
      {/* Solid Background Buttons start */}
      <SolidBackgroundButtons />
      {/* Solid Background Buttons end */}

      {/* Solid Buttons start */}
      <SolidButtons />
      {/* Solid Buttons end */}

      {/* minimal button start */}
      <MinimalButtons />
      {/* minimal button end */}
    </>
  );
};

export default Buttons;
