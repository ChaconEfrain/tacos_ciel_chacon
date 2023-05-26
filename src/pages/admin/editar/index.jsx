import React, { useEffect, useState } from "react";

const Editar = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsAdmin(true);
  }, [isAdmin]);
  return <div>{isAdmin ? <p>es admin</p> : <p>NO es admin</p>}</div>;
};

export default Editar;
