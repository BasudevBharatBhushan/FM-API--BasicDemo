const axios = require("axios");

function formatDate(InputDate) {
  const mm = String(InputDate.getMonth() + 1).padStart(2, "0"); // January is 0!
  const dd = String(InputDate.getDate()).padStart(2, "0");
  const yyyy = InputDate.getFullYear();
  return `${mm}-${dd}-${yyyy}`;
}

export const getLastnDaysInvoices_data = async (days, token) => {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - days);

  const formattedDate = formatDate(currentDate);

  const apiUrl = "https://dataapi-o2iw.onrender.com/api/dataApi";

  const headers = {
    "Content-Type": "application/json",
    Authorization: "Basic RGV2ZWxvcGVyOmFkbWluYml6",
  };

  const requestData = {
    fmServer: "208.85.249.144",
    method: "findRecord",
    methodBody: {
      database: "KIB__Web",
      layout: "InvoiceData",
      dataformats: 0,
      query: [
        {
          InvoiceDate: `> ${formattedDate}`,
        },
      ],
    },
    session: {
      token: token || "",
      required: false,
    },
  };

  console.log(requestData);

  try {
    const response = await axios.post(apiUrl, requestData, { headers });
    console.log("FM-DataAPI Session Token - ", response.data.session);

    return {
      props: {
        data: response.data.records,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw {
      statusCode: error.response?.status || 500, // Use the status code from the response, or 500 as default
      message: "Error fetching data. Please try again later.",
      error: error.message || "Unknown Error",
      detail: error.name || "Unknown",
    };
  }
};

export const getHighestSumInvoice_data = async (token) => {
  const apiUrl = "https://dataapi-o2iw.onrender.com/api/dataApi";

  const headers = {
    "Content-Type": "application/json",
    Authorization: "Basic RGV2ZWxvcGVyOmFkbWluYml6",
  };

  const requestData = {
    fmServer: "208.85.249.144",
    method: "findRecord",
    methodBody: {
      database: "KIB__Web",
      layout: "InvoiceData",
      limit: 10,
      dataformats: 0,
      query: [
        {
          Total: `*`,
        },
      ],
      sort: [{ fieldName: "Total", sortOrder: "descend" }],
    },
    session: {
      token: token || "",
      required: false,
    },
  };

  console.log(requestData);

  try {
    const response = await axios.post(apiUrl, requestData, { headers });
    console.log("FM-DataAPI Session Token - ", response.data.session);

    return {
      props: {
        data: response.data.records,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw {
      statusCode: error.response?.status || 500, // Use the status code from the response, or 500 as default
      message: "Error fetching data. Please try again later.",
      error: error.message || "Unknown Error",
      detail: error.name || "Unknown",
    };
  }
};

export const getLowestSumInvoice_data = async (token) => {
  const apiUrl = "https://dataapi-o2iw.onrender.com/api/dataApi";

  const headers = {
    "Content-Type": "application/json",
    Authorization: "Basic RGV2ZWxvcGVyOmFkbWluYml6",
  };

  const requestData = {
    fmServer: "208.85.249.144",
    method: "findRecord",
    methodBody: {
      database: "KIB__Web",
      layout: "InvoiceData",
      limit: 10,
      dataformats: 0,
      query: [
        {
          Total: `*`,
        },
      ],
      sort: [{ fieldName: "Total", sortOrder: "ascend" }],
    },
    session: {
      token: token || "",
      required: false,
    },
  };

  console.log(requestData);

  try {
    const response = await axios.post(apiUrl, requestData, { headers });
    console.log("FM-DataAPI Session Token - ", response.data.session);

    return {
      props: {
        data: response.data.records,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw {
      statusCode: error.response?.status || 500, // Use the status code from the response, or 500 as default
      message: "Error fetching data. Please try again later.",
      error: error.message || "Unknown Error",
      detail: error.name || "Unknown",
    };
  }
};

export const getCustomDateInvoice_data = async (startDate, endDate, token) => {
  const apiUrl = "https://dataapi-o2iw.onrender.com/api/dataApi";

  startDate = new Date(startDate);
  endDate = new Date(endDate);

  const FormattedStartDate = formatDate(startDate);
  const FormattedEndDate = formatDate(endDate);

  const headers = {
    "Content-Type": "application/json",
    Authorization: "Basic RGV2ZWxvcGVyOmFkbWluYml6",
  };

  const requestData = {
    fmServer: "208.85.249.144",
    method: "findRecord",
    methodBody: {
      database: "KIB__Web",
      layout: "InvoiceData",
      dataformats: 0,
      query: [
        {
          InvoiceDate: `${FormattedStartDate}...${FormattedEndDate}`,
        },
      ],
      // sort: [{ fieldName: "Total", sortOrder: "ascend" }],
    },
    session: {
      token: token || "",
      required: false,
    },
  };

  console.log(requestData);
  try {
    const response = await axios.post(apiUrl, requestData, { headers });
    console.log("FM-DataAPI Session Token - ", response.data.session);

    return {
      props: {
        data: response.data.records,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw {
      statusCode: error.response?.status || 500, // Use the status code from the response, or 500 as default
      message: "Error fetching data. Please try again later.",
      error: error.message || "Unknown Error",
      detail: error.name || "Unknown",
    };
  }
};

export const getCustomSumInvoice_data = async (min, max, token) => {
  const apiUrl = "https://dataapi-o2iw.onrender.com/api/dataApi";

  const headers = {
    "Content-Type": "application/json",
    Authorization: "Basic RGV2ZWxvcGVyOmFkbWluYml6",
  };

  const requestData = {
    fmServer: "208.85.249.144",
    method: "findRecord",
    methodBody: {
      database: "KIB__Web",
      layout: "InvoiceData",
      dataformats: 0,
      query: [
        {
          Total: `${min}...${max}`,
        },
      ],
      // sort: [{ fieldName: "Total", sortOrder: "ascend" }],
    },
    session: {
      token: token || "",
      required: false,
    },
  };
  console.log(requestData);
  try {
    const response = await axios.post(apiUrl, requestData, { headers });
    console.log("FM-DataAPI Session Token - ", response.data.session);

    return {
      props: {
        data: response.data.records,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw {
      statusCode: error.response?.status || 500, // Use the status code from the response, or 500 as default
      message: "Error fetching data. Please try again later.",
      error: error.message || "Unknown Error",
      detail: error.name || "Unknown",
    };
  }
};

export const getFilterInvoice_data = async (
  ContactName,
  InvoiceStatus,
  FromDate,
  ToDate,
  token
) => {
  const apiUrl = "https://dataapi-o2iw.onrender.com/api/dataApi";

  const headers = {
    "Content-Type": "application/json",
    Authorization: "Basic RGV2ZWxvcGVyOmFkbWluYml6",
  };

  FromDate = FromDate ? formatDate(new Date(FromDate)) : null;
  ToDate = ToDate ? formatDate(new Date(ToDate)) : null;
  const QueryDate = FromDate && ToDate ? `${FromDate}...${ToDate}` : "*";

  console.log(QueryDate);

  const requestData = {
    fmServer: "208.85.249.144",
    method: "findRecord",
    methodBody: {
      database: "KIB__Web",
      layout: "InvoiceData",
      dataformats: 0,
      query: [
        {
          InvoiceDate: QueryDate,
          ContactName: ContactName,
          InvoiceStatus: InvoiceStatus,
        },
      ],
      // sort: [{ fieldName: "Total", sortOrder: "ascend" }],
    },
    session: {
      token: token || "",
      required: false,
    },
  };

  console.log(requestData);

  try {
    const response = await axios.post(apiUrl, requestData, { headers });
    console.log("FM-DataAPI Session Token - ", response.data.session);

    return {
      props: {
        data: response.data.records,
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
