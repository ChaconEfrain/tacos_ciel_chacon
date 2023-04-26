import React from "react";

const Container = ({ children, id }) => {
  return (
    <section id={id} className="max-w-7xl mx-auto mt-24 px-3">
      {children}
    </section>
  );
};

export default Container;
