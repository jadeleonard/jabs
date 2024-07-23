
import {application} from "../../index";
import Button from '../../components/button'
async function RenderSignUp() {
       const signup = document.createElement('div') as  HTMLDivElement



       if(signup){
        const signuppage = document.createElement('div') as HTMLDivElement

        
        
        const bodydiv = document.createElement('div') as HTMLDivElement
        

        bodydiv.style.display = 'grid'
        bodydiv.style.gridTemplateColumns = '1fr 1fr'
        


        
        application.appendChild(signuppage)
       }



}













export default RenderSignUp










