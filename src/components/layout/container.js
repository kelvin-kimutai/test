import React from "react";

function Container({ children }) {
  return (
    <div className="h-screen grid place-items-center w-full sm:w-[24rem] mx-auto p-6 sm:p-0 rounded-b-xl">
      <div className="shadow-2xl rounded-xl">{children}</div>
    </div>
  );
}

export default Container;
