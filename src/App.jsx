import "./App.css";
import ToDo from "./component/ToDo";
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
      <div className="container form-container d-flex justify-content-center align-items-center mt-5 ">
        <form className="node-mailer md-8 w-50" onSubmit={handleOnSubmit}>
          <div className="mb-3">
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
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="message-label">
              Message
            </label>
            <textarea
              className="form-control"
              name="message"
              placeholder="Leave a comment here"
              id="message"
              rows={4}
              value={formData.message}
              onChange={handleOnChange}
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
    </>
  );
}

export default App;
