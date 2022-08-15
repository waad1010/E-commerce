import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const Sidebardata = [
  {
    title: 'Categories',
    path: '/catview',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },

  {
    title: 'Items',
    path: '/itemview',
    icon: <FaIcons.FaCartPlus />
    ,
    cName: 'nav-text'
  },

  {
    title: 'Users Registered',
    path: '/userview',
    icon: <IoIcons.IoMdPeople />

    ,
    cName: 'nav-text'
  },

  {
    title: 'Orders',
    path: '/orderview',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },

  // {
  //   title: 'Messages',
  //   path: '/messages',
  //   icon: <FaIcons.FaEnvelopeOpenText />,
  //   cName: 'nav-text'
  // },

  // {
  //   title: 'Support',
  //   path: '/support',
  //   icon: <IoIcons.IoMdHelpCircle />,
  //   cName: 'nav-text'
  // }
];