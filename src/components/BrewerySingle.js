import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SingleBrewery } from "../utils/constants";

const BrewerySingle = () => {
  const { id } = useParams();
  const [singleObj, setSingleObj] = useState([]);
  useEffect(() => {
    fetchSingle();
  }, []);

  const fetchSingle = async () => {
    const data = await fetch(SingleBrewery + id);
    const json = await data.json();
    setSingleObj(json);
  };
  return (
    <div className="flex justify-center items-center h-[480]">
      <div className="m-4 p-4 w-1/2 text-lg text-center border-2 border-solid border-black">
        <h1>Name : {singleObj.name}</h1>
        <h3>Brewery Type : {singleObj.brewery_type}</h3>
        <p>Address : {singleObj.address_1 + singleObj.city} </p>
        <p>Country : {singleObj.country}</p>
        <h2>Contact : {singleObj.phone}</h2>
        <a
          className="w-12 m-2 rounded-lg bg-slate-100"
          href={singleObj.website_url}
        >
          Website
        </a>
      </div>
    </div>
  );
};

export default BrewerySingle;
