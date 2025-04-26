"use client";

import React, { useState } from "react";
import "../styles/FilterSidebar.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";

const filters = [
  "Ideal For",
  "Occasion",
  "Work",
  "Fabric",
  "Segment",
  "Suitable For",
  "Raw Materials",
  "Pattern",
];

const FilterSidebar = ({ isSidebarVisible }) => {
  if (!isSidebarVisible) {
    return null;
  }

  const [openFilter, setOpenFilter] = useState(null);

  const handleToggle = (filterName) => {
    if (openFilter === filterName) {
      setOpenFilter(null);
    } else {
      setOpenFilter(filterName);
    }
  };

  return (
    <div className="filter-sidebar">
      <div className="customizable-checkbox">
        <input type="checkbox" />
        <h4>CUSTOMIZABLE</h4>
      </div>

      {filters.map((filter) => (
        <div key={filter} className="filter-category">
          <div className="filter-header" onClick={() => handleToggle(filter)}>
            {filter.toUpperCase()}
            <span className="arrow">
              {openFilter === filter ? (
                <RiArrowDropUpLine />
              ) : (
                <RiArrowDropDownLine />
              )}
            </span>
          </div>
          {openFilter === filter && (
            <div className="filter-options">
              <div className="single-option">
                <input type="checkbox" />
                <div>Men</div>
              </div>
              <div className="single-option">
                <input type="checkbox" />
                <div>Women</div>
              </div>
              <div className="single-option">
                <input type="checkbox" />
                <div>Baby & Kids</div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FilterSidebar;
