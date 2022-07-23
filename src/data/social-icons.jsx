import React from "react";
import { FaGithub, FaTwitter, FaFreeCodeCamp } from "react-icons/fa";
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
    text: "freeCodeCamp",
    url: "https://www.freecodecamp.org/scott-a-m",
    icon: <FaFreeCodeCamp />,
  },
  {
    id: 4,
    text: "Email",
    url: "mailto:scott_a_mitchell@163.com",
    icon: <BiEnvelope />,
  },
 
];

export { social };
