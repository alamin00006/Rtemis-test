import React from "react";
import "./SearchFiled.css";
const SearchFiled = () => {
  return (
    <div className="search-filed d-flex justify-content-center">
      <div className="border border-danger ">
        <ul className="d-flex main-search">
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
      </div>
    </div>
  );
};

export default SearchFiled;
