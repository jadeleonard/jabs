// src/index.ts
import Navigo from "navigo";
import  nav  from './components/navbar';
import {application} from './index'
import RenderHome from "./publicpages/Home";
import RenderAbout from "./publicpages/Aboutus";


import RenderSignUp from "./publicpages/sign-up/sign-up";

import Meta from "./js-function/metaTags";










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
    .on('/sign-up',async () =>{
        Meta({
            title:'Sign Up',
            description:''
        })
        await RenderSignUp()
    })

    .resolve(); // This will trigger the route matching on initial load


