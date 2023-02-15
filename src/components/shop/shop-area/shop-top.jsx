import React from "react";
// internal
import {DotsThree, Lists} from "@svg/index";
import NiceSelect from "@ui/NiceSelect";

export function ShowingResult() {
  return (
    <div className="shop__result">
      <p>Showing 1–12 of 16 results</p>
    </div>
  );
}

export function ShopShortTab() {
  return (
    <div className="shop__sort-item">
      <div className="shop__sort-tab tp-tab">
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              className="nav-link active"
              id="nav-grid-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-grid"
              type="button"
              role="tab"
              aria-controls="nav-grid"
              aria-selected="true"
              tabIndex='-1'
            >
              <DotsThree/>
            </button>
            <button
              className="nav-link"
              id="nav-list-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-list"
              type="button"
              role="tab"
              aria-controls="nav-list"
              aria-selected="false"
              tabIndex='-1'
            >
              <Lists/>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export function ShopShortSelect() {
  const selectHandler = e => {}
  return (
    <div className="shop__sort-item">
      <div className="shop__sort-select">
      <NiceSelect
          options={[
            { value: "Sort by latest", text: "Sort by latest" },
            { value: "Sort by best selling", text: "Sort by best selling" },
            { value: "Sort by top week", text: "Sort by top week" },
          ]}
          defaultCurrent={0}
          onChange={selectHandler}
          name="Sort by latest"
        />
      </div>
    </div>
  );
}
