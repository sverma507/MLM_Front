import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "../Layout";
import { toast, ToastContainer } from "react-toastify";
import { useAuth } from "../../context/auth";

function BindBankCard() {
  const location = useLocation();
  const item = location.state;
  const [smsCode, setSmsCode] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [generatedSmsCode, setGeneratedSmsCode] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { sendSmsCode } = useAuth();
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSendSms = async () => {
    if (!mobileNumber) {
      toast.error("Please enter your mobile number.");
      return;
    }

    try {
      const code = await sendSmsCode(mobileNumber);
      if (code) {
        setGeneratedSmsCode(code);
        toast.success("SMS verification code sent!");
      } else {
        toast.error("Failed to retrieve SMS code.");
      }
    } catch (error) {
      toast.error("An error occurred while sending SMS code.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (smsCode !== generatedSmsCode) {
    //   toast.error("Invalid SMS verification code.");
    //   return;
    // }
      navigate('/users/user/checkout',{state:item})
    setIsSubmitting(true);
    // Assuming you have register function in useAuth context
    // await register(mobileNumber, smsCode, password, referralCode, answer);
    setIsSubmitting(false);
  };

  return (
    <Layout title="Bank Details - Rita Drinks">
      <div className="sm:w-2/5 h-screen mx-auto p-4 pb-16 bg-red-500 text-white">
        <div className="flex justify-between">
          <div className="cursor-pointer">◀ Back</div>
          <div className="font-bold">Make Payment</div>
          <div className="font-bold w-9"></div>
        </div>
        <div className="my-4 flex gap-2 justify-between text-red-600">
          <div
            className="h-28 w-[30%] rounded-lg bg-white"
            style={{
              backgroundImage: `url(${item.img1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="h-28 w-[70%] rounded-lg bg-white p-2">
            <div>Product Price: Rs.{item.price}</div>
            <div>Product Code: {item.name}</div>
            <div>Terms: {item.cycle} days</div>
            <div>Daily Income: Rs. {item.income}</div>
          </div>
        </div>
        <div className="bg-white text-black p-4 mt-4 rounded-lg">
          <div className="border-b flex justify-between items-center mt-2">
            <label className="font-bold text-left text-slate-500 text-sm w-2/5 sm:w-1/4 sm:text-right">
              Real Name:
            </label>
            <input
              type="text"
              placeholder="Demo Kumar"
              className="outline-none border-none w-3/5 sm:w-3/4"
            />
          </div>
          <div className="border-b flex justify-between items-center mt-5">
            <label className="font-bold text-left text-slate-500 text-sm w-2/5 sm:w-1/4 sm:text-right">
              Bank:
            </label>
            <input
              type="text"
              placeholder="State Bank of India"
              className="outline-none border-none w-3/5 sm:w-3/4"
            />
          </div>
          <div className="border-b flex justify-between items-center mt-5">
            <label className="font-bold text-left text-slate-500 text-sm w-2/5 sm:w-1/4 sm:text-right">
              Account:
            </label>
            <input
              type="text"
              placeholder="00000000000"
              className="outline-none border-none w-3/5 sm:w-3/4"
            />
          </div>
          <div className="border-b flex justify-between items-center mt-5">
            <label className="font-bold text-left text-slate-500 text-sm w-2/5 sm:w-1/4 sm:text-right">
              IFSC:
            </label>
            <input
              type="text"
              placeholder="IYAVB&88767"
              className="outline-none border-none w-3/5 sm:w-3/4"
            />
          </div>
          <div className="border-b flex justify-between items-center mt-5">
            <label className="font-bold text-left text-slate-500 text-sm w-2/5 sm:w-1/4 sm:text-right">
              Mobile:
            </label>
            <input
              type="text"
              placeholder="+91xxxxxxxxxx"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="outline-none border-none w-3/5 sm:w-3/4"
            />
          </div>
          <div className="border-b flex justify-between items-center mt-5">
            <label className="font-bold text-left text-slate-500 text-sm w-2/5 sm:w-1/4 sm:text-right">
              SMS Code:
            </label>
            <div className="w-3/5 sm:w-3/4 flex items-center">
              <input
                type="text"
                placeholder="Enter SMS code"
                value={smsCode}
                onChange={(e) => setSmsCode(e.target.value)}
                className="outline-none border-none w-full"
              />
              <button
                type="button"
                onClick={handleSendSms}
                className="ml-1 text-sm w-[90%] mb-3 bg-amber-950 text-white p-2 rounded"
              >
                Send Code
              </button>
            </div>
          </div>
          <div className="flex w-full justify-center">
            <button
              onClick={handleSubmit}
              className="rounded-full w-4/5 bg-red-900 text-white p-3 mt-4"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </Layout>
  );
}

export default BindBankCard;
