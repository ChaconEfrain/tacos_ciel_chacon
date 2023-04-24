import React from "react";

const Container = ({ children }) => {
  return (
    <section className="max-w-[80rem] mx-auto mt-24 px-3">{children}</section>
  );
};

export default Container;
