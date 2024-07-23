import nav from '../components/navbar'
import {application} from "../index";
import heroMain from "../components/hero";


async function RenderHome() {
    if (application) {
        application.innerHTML = ''
        // Clear previous content
        const HomepageArea = document.createElement('div'); // Create a content area


        const App =    await new Promise<HTMLDivElement>((resolve) =>{
            setTimeout(() =>{
                resolve(HomepageArea)
            },1000)
        })


        // Clear and append new content


        application.appendChild(HomepageArea); // Append the content area with new content
        HomepageArea.appendChild(nav)
        HomepageArea.appendChild(heroMain)
        
        application.appendChild(App)
    }
}




export default RenderHome