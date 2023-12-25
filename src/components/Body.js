import React, { useEffect } from "react";
import BreweryCard from "./BreweryCard";
import { useState } from "react";
import FilterModel from "./FilterModel";
import { Link } from "react-router-dom";
import { list } from "postcss";
import { Data } from "../utils/constants";

const Body = () => {
  const [listBreweries, setListBreweries] = useState(Data);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterCompo, setFilterCompo] = useState({
    city: false,
    state: false,
    post: false,
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://api.openbrewerydb.org/v1/breweries");
    const json = await data.json();
    setListBreweries(json);
    setFilteredData(json);
  };

  return (
    <div>
      <div className="flex flex-col items-center sm:flex-row sm:justify-center">
        <input
          className="m-4 p-4 bg-gray-500 rounded-md text-white sm:m- sm:p-4"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="p-4 m-4 rounded-lg border-solid border-slate-200 bg-slate-50 hover:scale-105 sm:m-6"
          onClick={() => {
            const filteredList = listBreweries.filter(
              (res) =>
                res.name.toLowerCase().includes(searchText.toLowerCase()) ||
                res.city.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredData(filteredList);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex justify-center">
        <FilterModel
          filterCompo={filterCompo}
          setFilterCompo={setFilterCompo}
        />
      </div>

      <div className="flex flex-wrap mt-10 justify-center min-h-screen">
        {filteredData.map((brewery) => (
          <Link to={"/brewery/" + brewery.id} key={brewery.id}>
            <BreweryCard resObj={brewery} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
