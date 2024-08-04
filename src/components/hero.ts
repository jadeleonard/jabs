import {GetHero} from '../js-function/useFetch'
import { Button } from './button'
const heroMain = document.createElement('div') as HTMLDivElement




heroMain.style.textAlign = 'center'
heroMain.style.alignItems = 'center'
heroMain.style.position = 'relative'
async function HeroContent() {
    interface props{
        title:string
        description:string
    }
    const data = await GetHero()
    data.forEach((item:props) =>{
        const heroTitle = document.createElement('p') as HTMLParagraphElement
        const heroDescription = document.createElement('p') as HTMLParagraphElement
       const heroButton = Button({
            textContent:'Get Started',
            class:'py-2 px-4 bg-slate-900 text-white transition duration-500 hover:bg-slate-600 rounded hover:shadow-md',
            type:'button'
       })
        heroTitle.textContent = item.title
        
        heroTitle.style.fontSize = '60px'
        
        heroTitle.style.fontFamily = 'sans-serif'
        heroTitle.style.fontWeight = 'bold'
        heroDescription.style.fontSize = '20px'
        heroDescription.style.opacity = '90%'
        
      
        heroMain.appendChild(heroTitle)
        heroMain.appendChild(heroDescription)
        heroMain.appendChild(heroButton)
    })


    
}
HeroContent()









export default heroMain
