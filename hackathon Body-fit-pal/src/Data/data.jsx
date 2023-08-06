import React from 'react';
import { AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock } from 'react-icons/ai';
import { FiPieChart,  } from 'react-icons/fi';
import {  BiHomeAlt2} from 'react-icons/bi';
import { IoMdContacts } from 'react-icons/io';
import {MdOutlineFoodBank} from 'react-icons/md'
import {CgGym} from 'react-icons/cg'
import {FaWeight} from 'react-icons/fa'
import { GiNightSleep } from 'react-icons/gi';


//links for the sidebar
export const links = [
    {
        title: 'Dashboard',
        links: [
            {
                name: 'Home',
                icon: <BiHomeAlt2 />,
            },
        ],
    },

    {
        title: 'Pages',
        links: [
            {
                name: 'Nutrition',
                icon: <MdOutlineFoodBank />,
            },
            {
                name: 'Calendar',
                icon: <IoMdContacts />,
            },
            {
                name: 'Workouts',
                icon: <CgGym />,
            },
        ],
    },
    {
        title: 'Apps',
        links: [
            {
                name: 'calendar',
                icon: <AiOutlineCalendar />,
            },
            {
                name: 'Sleep Monitor',
                icon: <GiNightSleep />,
            },
            {
                name: 'Bmi Calculator',
                icon: <FaWeight/>,
            },
            {
                name: 'Food Shopping list',
                icon: <AiOutlineShoppingCart/>,
            },


        ],
    },
    {
        title: 'Charts',
        links: [
            {
                name: 'line',
                icon: <AiOutlineStock />,
            },
            {
                name: 'area',
                icon: <AiOutlineAreaChart />,
            },
            {
                name: 'pie',
                icon: <FiPieChart />,
            },
        ],
    },
];
