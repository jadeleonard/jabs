
import {application} from "../../index";
import { ValueEmail,ValuePassword,buttonSubmit } from "./function-sign-up.config";
async function RenderSignUp() {
       const signup = document.createElement('div') as  HTMLDivElement


     
   
       if(signup){
        const signuppage = document.createElement('div') as HTMLDivElement

        signuppage.appendChild(signup)
        
        const bodydiv = document.createElement('div') as HTMLDivElement
        const divSignup = document.createElement('div') as HTMLDivElement

        bodydiv.style.display = 'grid'
        bodydiv.style.gridTemplateColumns = '1fr 1fr'
        
        divSignup.style.display = 'inline-block'
        divSignup.appendChild(ValueEmail)
        divSignup.appendChild(ValuePassword)
        divSignup.appendChild(buttonSubmit)
        bodydiv.appendChild(divSignup)
        signuppage.appendChild(bodydiv)
        application.appendChild(signuppage)
        
       }
       


return signup
}













export default RenderSignUp










