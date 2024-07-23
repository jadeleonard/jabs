
import {application} from "../../index";
import Button from '../../components/button'
async function RenderSignUp() {
       const signup = document.createElement('div') as  HTMLDivElement



       if(signup){
        const signuppage = document.createElement('div') as HTMLDivElement

        
        const button = Button({
                textContent:'Button'
        })
        signuppage.appendChild(button)
        application.appendChild(signuppage)
       }



}













export default RenderSignUp










