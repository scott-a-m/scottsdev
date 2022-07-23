import React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { BiEnvelope } from "react-icons/bi";

const social = [
  {
    id: 1,
    text: "Github",
    url: "https://github.com/scott-a-m/",
    icon: <FaGithub />,
  },
  {
    id: 2,
    text: "Twitter",
    url: "https://twitter.com/scotts_dev",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    text: "Email",
    url: "mailto:scott_a_mitchell@163.com",
    icon: <BiEnvelope />,
  },
];

export { social };
