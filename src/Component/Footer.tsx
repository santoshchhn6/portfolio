import React from "react";

const Footer = () => {
  const footerIcons = [
    {
      icon: "github",
      url: "https://github.com/santoshchhn6",
    },
    {
      icon: "linkedin",
      url: "https://www.linkedin.com/in/santosh-chauhan-8a7b11230/",
    },
    {
      icon: "instagram",
      url: "https://www.instagram.com/art_santosh2/",
    },
    {
      icon: "youtube",
      url: "https://www.youtube.com/channel/UCbioIiwV6nMqTE_-2sQB-3g",
    },
  ];

  return (
    <div className="bg-gray-200 h-20 flex justify-center items-center gap-3 text-2xl sm:mb-0 mb-[60px]">
      {footerIcons.map((e, i) => {
        return (
          <a key={i} href={e.url}>
            <Icon type={e.icon} />
          </a>
        );
      })}
    </div>
  );
};

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
const iconStyle = "text-indigo-600 hover:text-blue-600";
const Icon = ({ type }: { type: string }) => {
  if (type === "github") return <AiFillGithub className={iconStyle} />;
  else if (type === "linkedin") return <AiFillLinkedin className={iconStyle} />;
  else if (type === "instagram")
    return <AiFillInstagram className={iconStyle} />;
  else if (type === "youtube") return <AiFillYoutube className={iconStyle} />;
  else return <span>No Icons</span>;
};

export default Footer;
