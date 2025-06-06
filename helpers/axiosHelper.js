import axios from "axios";
const rootApiEp = "http://localhost:8000/api/v1/message";

const apiProcessor = async ({ method, url, data }) => {
  try {
    const response = await axios({
      method,
      url,
      data,
    });
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error?.response?.data?.error || error.message,
    };
  }
};

// Post message
export const postNewMessage = (data) => {
  const obj = {
    method: "post",
    url: rootApiEp + "/",
    data,
  };
  return apiProcessor(obj);
};
