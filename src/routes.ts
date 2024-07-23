// src/index.ts
import Navigo from "navigo";
import RenderHome from "./publicpages/Home";
import RenderAbout from "./publicpages/Aboutus";

import Meta from "./js-function/metaTags";


import RenderSelection from "./publicpages/selection/selection";



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
  
    .on('/selection',async() =>{
        Meta({
            title:'Selection',
            description:''
        })
        await RenderSelection();
    })

    .resolve(); // This will trigger the route matching on initial load


