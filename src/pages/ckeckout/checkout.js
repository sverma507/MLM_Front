import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import Layout from '../../components/Layout';
import { useAuth } from "../../context/auth";
import { useTransactionToken } from "../../context/token";

function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const item = location.state;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user } = useAuth(); // Get the user object if needed
  const { transactionToken, fetchTransactionToken } = useTransactionToken(); // Hook to handle transaction token

  // Fetch the transaction token when the component mounts
  useEffect(() => {
    if (!transactionToken) {
      fetchTransactionToken();
    }
  }, [transactionToken, fetchTransactionToken]);

  const handleCheckout = async () => {
    if (!transactionToken) {
      toast.error("Transaction token is missing. Please try again.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/payment/create-order`,
        { packageId: item._id },
        {
          headers: {
            Authorization: `Bearer ${transactionToken}`, // Use the transaction token here
          },
        }
      );

      if (response.data.orderId) {
        window.location.href = `${process.env.REACT_APP_PAYMENT_GATEWAY_URL}?order_id=${response.data.orderId}`;
      } else {
        toast.error("Failed to initiate payment.");
      }
    } catch (error) {
      toast.error("An error occurred while processing your payment.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout title="Checkout - Rita Drinks">
      <div className="sm:w-2/5 h-[800px] mx-auto p-4 pb-16 bg-red-500 text-white">
        <div className="flex justify-between">
          <div className="cursor-pointer" onClick={() => navigate(-1)}>
            ◀ Back
          </div>
          <div className="font-bold">Checkout</div>
          <div className="font-bold w-9"></div>
        </div>
        <div className="my-4 h-screen text-red-600">
          <img className="h-[350px] w-[100%]" src={`${item.img1}`} alt={item.name} />
          <div className="w-[100%] bg-white p-4">
            <div>Product Price: Rs.{item.price}</div>
            <div>Product Code: {item.name}</div>
            <div>Terms: {item.supply} days</div>
            <div>Daily Income: Rs. {item.income}</div>
            <button
            onClick={handleCheckout}
              className="rounded-full w-4/5 bg-red-900 text-white p-3 mt-8 ml-9"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Proceed to Payment"}
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </Layout>
  );
}

export default Checkout;
