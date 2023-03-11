import React from "react";

import * as AntIcons from "react-icons/ai";

const iconStyle = "text-indigo-600 hover:text-blue-600";

const Footer = () => {
  const footerIcons = [
    {
      icon: "AiFillGithub",
      url: "https://github.com/santoshchhn6",
    },
    {
      icon: "AiFillLinkedin",
      url: "https://www.linkedin.com/in/santosh-chauhan-8a7b11230/",
    },
    {
      icon: "AiFillInstagram",
      url: "https://www.instagram.com/art_santosh2/",
    },
    {
      icon: "AiFillYoutube",
      url: "https://www.youtube.com/channel/UCbioIiwV6nMqTE_-2sQB-3g",
    },
  ];

  return (
    <div className="bg-gray-200 h-20 flex justify-center items-center gap-3 text-2xl mb-[60px]">
      {footerIcons.map((e, i) => {
        const AiIcon = AntIcons[e.icon];
        return (
          <a key={i} href={e.url}>
            <AiIcon className={`${iconStyle}`} />
          </a>
        );
      })}
    </div>
  );
};

export default Footer;
