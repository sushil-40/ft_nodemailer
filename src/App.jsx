import "./App.css";

import { postNewMessage } from "../helpers/axiosHelper";
import { useState } from "react";
function App() {
  const [formData, setFormData] = useState({
    subject: "Message from contact form",
    email: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(e);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const result = await postNewMessage(formData);
    setResponseMessage(result.message);
    setFormData({
      subject: "Message from contact form",
      message: "",
      email: "",
    });
  };
  return (
    <>
      <h3 className="text-center mt-5">Send Email!</h3>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <form
              className="p-4 border rounded shadow bg-dark "
              onSubmit={handleOnSubmit}
            >
              <div className="mb-3 ">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="your@email.com"
                  onChange={handleOnChange}
                  value={formData.email}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  name="message"
                  placeholder="Leave your message here"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleOnChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100 mt-3">
                Submit
              </button>
              {responseMessage && (
                <div className="alert alert-info mt-3" role="alert">
                  {responseMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
