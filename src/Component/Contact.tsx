import React, { useState } from "react";
import { style } from "../style";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

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
    <div id="contact" className=" section max-sm:p-3 max-sm:mb-3">
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
    },
    {
      title: "Phone",
      value: "+91 8591267834",
    },
    {
      title: "Address",
      value: "Mumbai, India",
    },
  ];
  return (
    <div className=" max-sm:w-[100%] flex-1 flex flex-col  gap-5 ">
      {info.map((e, i) => (
        <CustomIcon key={i} title={e.title} value={e.value} />
      ))}
    </div>
  );
};

type IconProps = {
  title: string;
  value: string;
};
const CustomIcon = ({ title, value }: IconProps) => {
  return (
    <div className="flex items-center gap-2">
      <Icon type={title} />
      <div>
        <p className="font-bold text-gray-900">{title}</p>
        <p className="text-gray-800">{value}</p>
      </div>
    </div>
  );
};

const iconStyle = "text-blue-600 text-6xl border-r-2 border-gray-500 pr-4 mr-3";
const Icon = ({ type }: { type: string }) => {
  if (type === "Email") return <MdEmail className={iconStyle} />;
  else if (type === "Phone") return <MdPhone className={iconStyle} />;
  else if (type === "Address") return <MdLocationOn className={iconStyle} />;
  else return <span>No Icons</span>;
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
      className=" min-w-[300px] max-sm:w-[100%] flex-1 flex flex-col  gap-4 "
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
      <button type="submit" className={`${style.btn} w-[200px]`}>
        Send Message
      </button>
    </form>
  );
};

export default Contact;
