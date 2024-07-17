// src/index.ts
import Navigo from "navigo";
import  nav  from './components/navbar';
import {application} from './index'
import RenderHome from "./publicpages/Home";
import RenderAbout from "./publicpages/Aboutus";


import Meta from "./js-function/metaTags";

import Contact from './publicpages/Contact'
// Check if the element exists before appending









const router = new Navigo('/');

router
    .on('/', async () => {
        Meta({
            title:"Jabs",
            description:"Official Website",

        })
        await RenderHome()
    })
    .on('/about-us', async () => {
        Meta({
            title:'About Us',
            description:''
        })
        await RenderAbout();
    })

    .resolve(); // This will trigger the route matching on initial load


