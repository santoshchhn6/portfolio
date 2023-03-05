import React, { useState } from "react";
import { style } from "../style";
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import * as MaterialDesign from "react-icons/md";

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
      <h2 className={`${style.heading} text-center`}>Contacts</h2>
      <div className=" flex flex-wrap max-sm:flex-col max-sm:items-center">
        <UserInfo />
        <SendMessage handleSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

const UserInfo = () => {
  const info = [
    {
      title: "Email",
      value: "santoshchhn6.com",
      icon: "MdEmail",
    },
    {
      title: "Phone",
      value: "+91 8591267834",
      icon: "MdPhone",
    },
    {
      title: "Address",
      value: "Mumbai, India",
      icon: "MdLocationOn",
    },
  ];
  return (
    <div className="max-sm:w-[90%] flex-1 flex flex-col justify-center gap-5 my-5 ">
      {info.map((e) => (
        <CustomIcon title={e.title} icon={e.icon} value={e.value} />
      ))}
    </div>
  );
};

type IconProps = {
  title: string;
  icon: string;
  value: string;
};
const CustomIcon = ({ title, icon, value }: IconProps) => {
  const MdIcon = MaterialDesign[icon];
  return (
    <div className="flex items-center gap-2">
      <MdIcon
        size={60}
        className="text-blue-600 border-r-2 border-gray-500 pr-4 mr-3"
      />
      <div>
        <p className="font-bold text-gray-900">{title}</p>
        <p className="text-gray-800">{value}</p>
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
      className=" min-w-[300px] max-sm:w-[90%] flex-1 flex flex-col  gap-4 "
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
      <button type="submit" className={`${style.btn} m-0 w-fi`}>
        Send Message
      </button>
    </form>
  );
};

export default Contact;
