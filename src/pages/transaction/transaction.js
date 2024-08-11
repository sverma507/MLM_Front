import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import Layout from '../../components/Layout'
import { useAuth } from "../../context/auth";
import { useTransactionToken } from "../../context/token"; // Import the TransactionTokenContext

function TransactionCompleted() {
  const location = useLocation();
  const navigate = useNavigate();
  const { token: authToken } = useAuth(); // Auth token
  const { transactionToken, fetchTransactionToken } = useTransactionToken(); // Transaction token
  const [transactionStatus, setTransactionStatus] = useState(null);

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        // Fetch the transaction token if not available
        if (!transactionToken) {
          await fetchTransactionToken();
        }

        const { transaction_id, pg_reference_no, packageId } =
          location.state || {};

        // Ensure both tokens are present before making the request
        if (!authToken || !transactionToken) {
          throw new Error('Missing tokens');
        }

        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/payment/verify-payment`,
          { transaction_id, pg_reference_no, packageId },
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
              'Transaction-Token': transactionToken, // Include transaction token
            },
          }
        );

        setTransactionStatus(response.data.message);
      } catch (error) {
        toast.error("An error occurred while verifying payment.");
        console.error("Error verifying payment:", error);
      }
    };

    verifyPayment();
  }, [location.state, authToken, transactionToken, fetchTransactionToken]);

  return (
    <Layout title="Transaction Completed - Rita Drinks">
      <div className="sm:w-2/5 h-screen mx-auto p-4 pb-16 bg-red-500 text-white">
        <div className="flex justify-between">
          <div className="cursor-pointer" onClick={() => navigate(-1)}>
            ◀ Back
          </div>
          <div className="font-bold">Transaction Status</div>
          <div className="font-bold w-9"></div>
        </div>
        <div className="my-4 flex flex-col justify-center items-center text-white">
          {transactionStatus ? (
            <div className="text-xl font-bold">{transactionStatus}</div>
          ) : (
            <div className="text-xl font-bold">Verifying payment...</div>
          )}
        </div>
      </div>
      <ToastContainer />
    </Layout>
  );
}

export default TransactionCompleted;
