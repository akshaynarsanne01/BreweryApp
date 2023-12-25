// ErrorPage.js
import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong.</h1>
      <p className="text-lg text-gray-600 mb-8">
        The page you are looking for is {error.statusText}.
      </p>
      <p className="text-lg text-gray-600 mb-8">
        {error.status} : {error.statusText}
      </p>
    </div>
  );
};

export default ErrorPage;
