import {application} from "../index";
import nav from "../components/navbar";




async function RenderAbout() {


    const aboutus = document.createElement('div') as HTMLDivElement
    if(application){
        const AboutusArea = document.createElement('div')
        AboutusArea.appendChild(aboutus)

        application.innerHTML = ''
        application.appendChild(nav)
        application.appendChild(AboutusArea)
    }
}

export default RenderAbout