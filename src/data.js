import React from 'react';
import { BsFacebook,BsTwitter ,BsLinkedin,BsInstagram} from "react-icons/bs";

export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: '/about',
    text: 'about',
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
  },
  {
    id: 4,
    url: '/contact',
    text: 'contact',
  },
  {
    id: 5,
    url: '/profile',
    text: 'profile',
  },
];

export const social = [
  {
    id: 1,
    url: '#',
    icon: <BsFacebook />,
  },
  {
    id: 2,
    url: '#',
    icon: <BsTwitter />,
  },
  {
    id: 3,
    url: '#',
    icon: <BsLinkedin />,
  },
  {
    id: 4,
    url: '#',
    icon: <BsInstagram />,
  },
];
