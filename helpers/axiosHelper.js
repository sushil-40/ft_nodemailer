import axios from "axios";

const rootApiEp = import.meta.env.VITE_ROOT_API + "/api/v1";

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
    url: rootApiEp + "/message",
    data,
  };
  return apiProcessor(obj);
};
