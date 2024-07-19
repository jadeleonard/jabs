
import {application} from "../../index";







async function RenderSignUp() {
    const signup = document.createElement('div') as HTMLDivElement;
    const section = document.createElement('section')


    const signUpBody = document.createElement('div') as HTMLDivElement
    const signUpdiv1= document.createElement('div') as HTMLDivElement
    const signUpdiv2 = document.createElement('div') as HTMLDivElement








    signup.className = 'sign-up'
    section.className = 'section-sign-up'
    signUpBody.className = 'sign-up-body'
    signUpdiv1.className = 'signUpdiv1'
    signUpdiv2.className = 'signUpdiv2'
    signup.appendChild(section)
    section.append(signUpBody)
    signUpBody.appendChild(signUpdiv1)
    signUpBody.appendChild(signUpdiv2)

}





