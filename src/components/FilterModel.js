import React, { useState } from "react";

const FilterModel = ({ filterCompo, setFilterCompo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const filterModel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Button to open the modal */}
      <button
        onClick={openModal}
        className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-500 focus:outline-none focus:ring focus:border-blue-300"
      >
        Filter
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-auto bg-gray-500 bg-opacity-75">
          <div className="modal-content mx-auto my-10 p-6 bg-white w-64 shadow-lg rounded-lg">
            <p className="text-center text-lg font-semibold mb-4">Filter</p>
            <p className="text-center">
              Filter the Breweries by City , State , PostalCode
            </p>
            <div className="flex flex-col ">
              <span className="m-4">
                <input
                  type="checkbox"
                  className="w-4 h-4 bg-slate-300 rounded-lg focus:bg-red-200"
                />
                <label className="w-4 h-4 m-4 p-2 bg-slate-300 rounded-lg">
                  City
                </label>
              </span>
              <span className="m-4">
                <input
                  type="checkbox"
                  className="w-4 h-4 bg-slate-300 rounded-lg"
                />
                <label className="w-4 h-4 m-4 p-2 bg-slate-300 rounded-lg">
                  State
                </label>
              </span>
              <span className="m-4">
                <input
                  type="checkbox"
                  className="w-4 h-4 bg-slate-300 rounded-lg"
                />
                <label className="w-4 h-4 m-4 p-2 bg-slate-300 rounded-lg">
                  Postal
                </label>
              </span>

              {/* <button className="w-1/2 m-2 bg-slate-300 rounded-lg">
                State
              </button>
              <button className="w-1/2 m-2 bg-slate-300 rounded-lg">
                Postal
              </button> */}
            </div>
            <div className="flex justify-around">
              <button
                onClick={closeModal}
                className="mt-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 focus:outline-none focus:ring focus:border-blue-300"
              >
                Close
              </button>
              <button
                onClick={filterModel}
                className="mt-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 focus:outline-none focus:ring focus:border-blue-300"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterModel;
