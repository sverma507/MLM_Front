import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Spinner = ({ path = "login" }) => {
  const [count, setCount] = useState(2);
  const navigate = useNavigate();
  const location = useLocation("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevVal) => --prevVal);
    }, 1000);

    count === 0 &&
      navigate(`/${path}`, {
        state: location.pathname,
      });
    return () => clearInterval(interval);
  }, [count, navigate, location, path]);

  return (
    <>
      <div style={{ textAlign:"center",width:"20%", margin:"auto",marginTop:"100px" }}>
        {" "}
        <img
          width={"300px"}
          height={"300px"}
          src="/images/spinner-unscreen.gif"
        />
      </div>
    </>
  );
};

export default Spinner;
