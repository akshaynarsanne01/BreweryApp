import React from "react";

const BreweryCard = (props) => {
  const {
    name,
    address_1,
    city,
    website_url,
    street,
    state,
    postal_code,
    phone,
    country,
  } = props.resObj;
  return (
    <div className="border w-72 bg-gradient-to-r from-neutral-200 to-slate-100 m-4 h-64 rounded-lg shadow-lg hover:cursor-pointer hover:scale-110 transition 100ms">
      <img className="w-full p-1 rounded-lg" />
      <div className="m-8">
        <h1 className="mt-2 mb-1 h-7 text-xl overflow-hidden">{name}</h1>
        <div className="flex justify-content space">
          <span className="ml-1 text-lg">{address_1}</span>
        </div>
        <h3>{city + "," + state}</h3>
        <h3>{country}</h3>
      </div>
    </div>
  );
};

export default BreweryCard;
