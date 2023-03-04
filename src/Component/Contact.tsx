import React, { useState } from "react";
import { style } from "../style";
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const handleSendMessage = (
    e: React.FormEvent,
    data: { name: string; email: string; message: string }
  ) => {
    e.preventDefault();
    console.log("submit");
    console.log({ data });
  };
  return (
    <div id="contact" className=" section">
      <div className={`${style.heading}`}>Contacts</div>
      <div className="flex max-sm:flex-col">
        <UserInfo />
        <SendMessage handleSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

type messageProps = {
  handleSendMessage(e: React.FormEvent, data: {}): void;
};
const SendMessage = ({ handleSendMessage }: messageProps) => {
  const [inputs, setInputs] = useState({});
  const handleInputs = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <form
      className="flex flex-col items-center gap-4 "
      onSubmit={(e) => handleSendMessage(e, inputs)}
    >
      <input
        className={`${style.inp}`}
        type="text"
        name="name"
        placeholder="Name"
        onChange={(e) => handleInputs(e)}
      />
      <input
        className={`${style.inp}`}
        type="text"
        name="email"
        placeholder="Email"
        onChange={(e) => handleInputs(e)}
      />
      <textarea
        className={`${style.inp}`}
        name="message"
        placeholder="Message"
        cols={10}
        rows={5}
        onChange={(e) => handleInputs(e)}
      ></textarea>
      <button type="submit" className={`${style.btn}`}>
        Send Message
      </button>
    </form>
  );
};

const UserInfo = () => (
  <div className="flex flex-col gap-5 font-bold">
    <div className="flex items-center gap-2">
      <MdEmail size={40} />
      <span>santoshchh6@gmail.com</span>
    </div>
    <div className="flex items-center gap-2">
      <AiFillPhone size={40} />
      <span>+91 8591267834</span>
    </div>
    <div className="flex items-center gap-2">
      <FaMapMarkerAlt size={40} />
      <span>Mumbai, India</span>
    </div>
  </div>
);

export default Contact;
