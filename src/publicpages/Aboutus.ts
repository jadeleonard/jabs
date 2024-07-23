import {application} from "../index";
import nav from "../components/navbar";
import Button from '../components/button'



async function RenderAbout() {


    const aboutus = document.createElement('div') as HTMLDivElement
    if(application){
        const AboutusArea = document.createElement('div')
        AboutusArea.appendChild(aboutus)


        const button1 = Button({
            textContent:'this is button 2'
        })
        AboutusArea.appendChild(button1)
        application.innerHTML = ''
        application.appendChild(nav)
        application.appendChild(AboutusArea)
    }
}

export default RenderAbout