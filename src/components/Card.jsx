import React from "react";
import Eye from "@/assets/eye.png";
import Image from "next/image";

const buttonTrigger = () => {
  console.log("button clicked");
};

const card = ({
  heading = "FM Data API",
  viewInvoicesFunction = buttonTrigger,
  viewHighestSumInvoiceFunction = buttonTrigger,
  viewLowestSumInvoiceFunction = buttonTrigger,
  viewCustomDateInvoiceFunction = buttonTrigger,
  viewCustomSumInvoiceFunction = buttonTrigger,
  viewfilterInvoiceFunction = buttonTrigger,
  showTokenField = false,
  onInputChange,
}) => {
  return (
    <div className="bg-gray-200 p-4">
      <p className="text-3xl font-bold mb-2">{heading}</p>
      <div className="flex flex-col gap-2 mb-4">
        <div className="border rounded-lg p-2">
          {showTokenField && (
            <div className="flex justify-start gap-3 items-center mb-4">
              <p className="text-xs font-semibold">Session Token</p>
              <input
                className="text-center placeholder-gray-400 grow text-sm border-b-2 border-gray-400 focus:outline-none"
                type="text"
                name="token"
                placeholder="sessionToken"
                onChange={onInputChange}
              />
            </div>
          )}

          <div className="flex items-end gap-2">
            <button
              className="bg-gray-700 text-white text-xs py-1 px-3 rounded-md focus:outline-none focus:shadow-outline font-semibold"
              onClick={viewInvoicesFunction}
            >
              View Invoices
            </button>

            <input
              type="number"
              name="ViewInvoices_Days"
              className="placeholder-gray-400 text-sm border-b-2 border-gray-400 focus:outline-none bg-gray-200 py-1 px-2"
              placeholder="Last 10 days"
              onChange={onInputChange}
            />
            <button
              className="bg-gray-700 text-white text-xs py-1 px-3 rounded-md focus:outline-none focus:shadow-outline font-semibold"
              onClick={viewHighestSumInvoiceFunction}
            >
              View Highest Sum Invoice
            </button>
            <button
              className="bg-gray-700 text-white text-xs py-1 px-3 rounded-md focus:outline-none focus:shadow-outline font-semibold"
              onClick={viewLowestSumInvoiceFunction}
            >
              View Lowest Sum Invoice
            </button>
          </div>
        </div>

        <div className="border rounded-lg p-2">
          <div className="flex items-center gap-2">
            <button
              className="bg-gray-700 text-white text-xs py-1 px-3 rounded-md focus:outline-none focus:shadow-outline font-semibold"
              onClick={viewCustomDateInvoiceFunction}
            >
              View custom date Invoice
            </button>
            <p className=" text-gray-700 text-xs font-semibold">From</p>
            <input
              name="ViewCustomDateInvoice_From"
              type="date"
              className="placeholder-gray-400 text-sm border-b-2 border-gray-400 focus:outline-none bg-gray-200 py-1 px-2"
              placeholder="From Date"
              onChange={onInputChange}
            />
            <p className=" text-gray-700 text-xs font-semibold">To</p>
            <input
              name="ViewCustomDateInvoice_To"
              type="date"
              className="placeholder-gray-400 text-sm border-b-2 border-gray-400 focus:outline-none bg-gray-200 py-1 px-2"
              placeholder="To Date"
              onChange={onInputChange}
            />
          </div>
        </div>
        <div className="border rounded-lg p-2">
          <div className="flex items-center gap-2">
            <button
              className="bg-gray-700 text-white text-xs py-1 px-3 rounded-md focus:outline-none focus:shadow-outline font-semibold"
              onClick={viewCustomSumInvoiceFunction}
            >
              View Custom Sum Invoice
            </button>
            <p className=" text-gray-700 text-xs font-semibold">Greater than</p>
            <input
              name="ViewCustomSumInvoice_GreaterThan"
              type="text"
              className="placeholder-gray-400 text-sm border-b-2 border-gray-400 focus:outline-none bg-gray-200 py-1 px-2"
              placeholder="From"
              onChange={onInputChange}
            />
            <p className=" text-gray-700 text-xs font-semibold">Less than</p>
            <input
              name="ViewCustomSumInvoice_LessThan"
              type="text"
              className="placeholder-gray-400 text-sm border-b-2 border-gray-400 focus:outline-none bg-gray-200 py-1 px-2"
              placeholder="To"
              onChange={onInputChange}
            />
          </div>
        </div>
        <div className="border rounded-lg p-2">
          <div className="flex items-center gap-2">
            <button
              className="bg-gray-700 text-white text-xs py-1 px-3 rounded-md focus:outline-none focus:shadow-outline font-semibold"
              onClick={viewfilterInvoiceFunction}
            >
              Filter Invoice
            </button>
            <input
              name="FilterInvoice_Name"
              type="text"
              className="placeholder-gray-400 text-sm border-b-2 border-gray-400 focus:outline-none bg-gray-200 py-1 px-2"
              placeholder="Name"
              onChange={onInputChange}
            />
            <input
              name="FilterInvoice_Status"
              type="text"
              className="placeholder-gray-400 text-sm border-b-2 border-gray-400 focus:outline-none bg-gray-200 py-1 px-2"
              placeholder="Open/Close"
              onChange={onInputChange}
            />
            <p className=" text-gray-700 text-xs font-semibold">From</p>
            <input
              name="FilterInvoice_FromDate"
              type="date"
              className="placeholder-gray-400 text-sm border-b-2 border-gray-400 focus:outline-none bg-gray-200 py-1 px-2"
              placeholder="From Date"
              onChange={onInputChange}
            />
            <p className=" text-gray-700 text-xs font-semibold">To</p>
            <input
              name="FilterInvoice_ToDate"
              type="date"
              className="placeholder-gray-400 text-sm border-b-2 border-gray-400 focus:outline-none bg-gray-200 py-1 px-2"
              placeholder="To Date"
              onChange={onInputChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default card;
