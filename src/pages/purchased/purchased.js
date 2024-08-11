import React, { useState, useEffect } from "react";
import axios from "axios";

const PurchasedPackages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await axios.get("/api/v1/user/packages");
        setPackages(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPackages();
  }, []);

  return (
    <div>
      <h2>Purchased Packages</h2>
      <ul>
        {packages.map((pkg) => (
          <li key={pkg._id}>
            {pkg.name} - {pkg.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PurchasedPackages;
