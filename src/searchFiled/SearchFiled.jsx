import React from "react";
import "./SearchFiled.css";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
const SearchFiled = () => {
  return (
    <div className="container search-filed d-flex justify-content-center">
      <div style={{ border: "1px solid #00bbb4" }}>
        <ul className="d-flex main-search mt-5">
          <li>
            <a href="...">Daily</a>
          </li>
          <li>
            <a href="...">Monthly</a>
          </li>
          <li>
            <a href="...">Yearly</a>
          </li>
        </ul>
        <ul className="d-flex title-search">
          <li>
            <a href="...">All</a>
          </li>
          <li>
            <a href="...">Hotel</a>
          </li>
          <li>
            <a href="...">Apartment</a>
          </li>
          <li>
            <a href="...">House</a>
          </li>
          <li>
            <a href="...">Flat</a>
          </li>
          <li>
            <a href="...">Rooms</a>
          </li>
          <li>
            <a href="...">Others</a>
          </li>
        </ul>
        <div className="input-filed-area">
          <input type="text" style={{ width: "100%", height: "40px" }} />
          <div className="location-icon ">
            <MdOutlineLocationOn
              style={{ color: "#00bbb4", width: "20px", height: "20px" }}
            />
          </div>
          <div className="left-date">
            <input type="date" />
          </div>
          <div className="right-date">
            <input type="date" />
          </div>
          <div class="vl"></div>
          <div className="arrow-icon">
            <BsArrowRight />
          </div>
        </div>
        {/* Rent Styled Searching */}
        <ul className="d-flex styled-search-1 mt-3">
          <li>
            <a href="...">All</a>
          </li>
          <li>
            <a href="...">Studio</a>
          </li>
          <li>
            <a href="...">1BR</a>
          </li>
          <li>
            <a href="...">2BR</a>
          </li>
          <li>
            <a href="...">3BR</a>
          </li>
        </ul>
        <div className="d-flex justify-content-between align-items-center">
          <ul className="d-flex styled-search-1 mt-3">
            <li>
              <a href="...">All</a>
            </li>
            <li>
              <a href="...">Full Furnished</a>
            </li>
            <li>
              <a href="...">Unfurnished</a>
            </li>
          </ul>
          <div>
            <button
              style={{
                backgroundColor: "#00bbb4",
                border: "none",
                color: "white",
                padding: "5px 10px",
                borderRadius: "5px",
              }}
            >
              Find Accomodation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFiled;
