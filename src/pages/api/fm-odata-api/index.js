const https = require("https");
const axios = require("axios");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

function formatDate(InputDate) {
  const mm = String(InputDate.getMonth() + 1).padStart(2, "0"); // January is 0!
  const dd = String(InputDate.getDate()).padStart(2, "0");
  const yyyy = InputDate.getFullYear();
  return `${mm}-${dd}-${yyyy}`;
}

export const getLastnDaysInvoices_odata = async (days) => {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - days);

  const formattedDate = formatDate(currentDate);
  const url = `https://fm-odata-server.onrender.com/api/odataApi/kibiz.smtech.cloud/KIB__Web/InvoiceData?$filter=InvoiceDate ge '${formattedDate}'`;
  console.log(url);
  const headers = {
    Authorization: `Basic RGV2ZWxvcGVyOmFkbWluYml6`,
  };

  try {
    const response = await axios.get(url, { headers, httpsAgent });

    console.log(response.data);
    const data = response.data;

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw {
      statusCode: error.response?.status || 500,
      message: "Error fetching data. Please try again later.",
      error: error.message || "Unknown Error",
      detail: error.name || "Unknown",
    };
  }
};

export const getHighestSumInvoice_odata = async () => {
  const headers = {
    Authorization: `Basic RGV2ZWxvcGVyOmFkbWluYml6`,
  };

  const url = `https://fm-odata-server.onrender.com/api/odataApi/kibiz.smtech.cloud/KIB__Web/InvoiceData?$orderby=Total desc&$top=10`;
  console.log(url);
  try {
    const response = await axios.get(url, { headers, httpsAgent });

    console.log(response.data);
    const data = response.data;

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw {
      statusCode: error.response?.status || 500,
      message: "Error fetching data. Please try again later.",
      error: error.message || "Unknown Error",
      detail: error.name || "Unknown",
    };
  }
};
export const getLowestSumInvoice_odata = async () => {
  const headers = {
    Authorization: `Basic RGV2ZWxvcGVyOmFkbWluYml6`,
  };

  const url = `https://fm-odata-server.onrender.com/api/odataApi/kibiz.smtech.cloud/KIB__Web/InvoiceData?$orderby=Total asc&$top=10`;
  console.log(url);

  try {
    const response = await axios.get(url, { headers, httpsAgent });

    console.log(response.data);
    const data = response.data;

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw {
      statusCode: error.response?.status || 500,
      message: "Error fetching data. Please try again later.",
      error: error.message || "Unknown Error",
      detail: error.name || "Unknown",
    };
  }
};

export const getCustomeDateInvoice_odata = async (startDate, endDate) => {
  const headers = {
    Authorization: `Basic RGV2ZWxvcGVyOmFkbWluYml6`,
  };

  startDate = new Date(startDate);
  endDate = new Date(endDate);

  const FormattedStartDate = formatDate(startDate);
  const FormattedEndDate = formatDate(endDate);

  const url = `https://fm-odata-server.onrender.com/api/odataApi/kibiz.smtech.cloud/KIB__Web/InvoiceData?$filter=InvoiceDate ge '${FormattedStartDate}' and InvoiceDate le '${FormattedEndDate}'`;
  console.log(url);
  try {
    const response = await axios.get(url, { headers, httpsAgent });

    console.log(response.data);
    const data = response.data;

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw {
      statusCode: error.response?.status || 500,
      message: "Error fetching data. Please try again later.",
      error: error.message || "Unknown Error",
      detail: error.name || "Unknown",
    };
  }
};

export const getCustomSumInvoice_odata = async (min, max) => {
  const headers = {
    Authorization: `Basic RGV2ZWxvcGVyOmFkbWluYml6`,
  };

  const url = `https://fm-odata-server.onrender.com/api/odataApi/kibiz.smtech.cloud/KIB__Web/InvoiceData?$filter=Total ge ${min} and Total le ${max}`;
  console.log(url);
  try {
    const response = await axios.get(url, { headers, httpsAgent });
    console.log(response.data);
    const data = response.data;

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw {
      statusCode: error.response?.status || 500,
      message: "Error fetching data. Please try again later.",
      error: error.message || "Unknown Error",
      detail: error.name || "Unknown",
    };
  }
};

export const getFilterInvoice_odata = async (
  ContactName,
  InvoiceStatus,
  FromDate,
  ToDate
) => {
  const headers = {
    Authorization: `Basic RGV2ZWxvcGVyOmFkbWluYml6`,
  };

  let filterParams = []; // Array to store filter parameters

  // Add filter parameters based on provided values
  if (ContactName) {
    filterParams.push(`ContactName eq '${ContactName}'`);
  }
  if (InvoiceStatus) {
    filterParams.push(`InvoiceStatus eq '${InvoiceStatus}'`);
  }
  if (FromDate && ToDate) {
    FromDate = new Date(FromDate);
    ToDate = new Date(ToDate);
    const FormattedFromDate = formatDate(FromDate);
    const FormattedToDate = formatDate(ToDate);
    filterParams.push(
      `InvoiceDate ge '${FormattedFromDate}' and InvoiceDate le '${FormattedToDate}'`
    );
  }

  // Construct the URL with filter parameters
  const url = `https://fm-odata-server.onrender.com/api/odataApi/kibiz.smtech.cloud/KIB__Web/InvoiceData?$filter=${filterParams.join(
    " and "
  )}`;

  console.log(url);

  try {
    const response = await axios.get(url, { headers, httpsAgent });
    console.log(response.data);
    const data = response.data;

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw {
      statusCode: error.response?.status || 500,
      message: "Error fetching data. Please try again later.",
      error: error.message || "Unknown Error",
      detail: error.name || "Unknown",
    };
  }
};
