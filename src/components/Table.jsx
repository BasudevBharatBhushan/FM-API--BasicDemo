import React from "react";
import styles from "./Table.module.css";

const Table = ({ data }) => {
  return (
    <div className="invtable">
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8 ">
            <div className="overflow-auto max-h-96 mt-1">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      Invoice No.
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Contact
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Total
                    </th>
                  </tr>
                </thead>
                {/* <div className="overflow-auto max-h-96 mt-1"> */}
                <tbody>
                  {data.map((invoice) => (
                    <tr
                      key={invoice.InvoiceNo}
                      className="border-b bg-white dark:border-neutral-500 dark:bg-neutral-600 "
                    >
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {invoice.InvoiceNo}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {invoice.ContactName}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {invoice.InvoiceDate}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {invoice.InvoiceStatus}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        ${invoice.Total}
                      </td>
                    </tr>
                  ))}
                </tbody>
                {/* </div> */}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
