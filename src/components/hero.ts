import {GetHero} from '../js-function/useFetch'
import {CardBody} from '../components/card/card.config'
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
        const heroButton = document.createElement('button') as HTMLButtonElement
        heroTitle.textContent = item.title
        heroDescription.textContent = item.description
        heroButton.textContent = 'Get Started'
        heroTitle.style.fontSize = '60px'
        heroButton.style.padding = '10px 14px'
        heroButton.style.cursor = 'pointer'
        heroTitle.style.fontFamily = 'sans-serif'
        heroTitle.style.fontWeight = 'bold'
        heroDescription.style.fontSize = '20px'
        heroDescription.style.opacity = '90%'
        heroButton.style.background = 'black'
        heroButton.style.color = 'white'
        heroButton.style.transition = '0.5s'
        heroButton.style.borderRadius = '5px'
        heroButton.style.border = 'none'
        heroButton.addEventListener('mouseenter',() =>{
            heroButton.style.background = 'gray'


        })
        heroButton.addEventListener('mouseout',() =>{
            heroButton.style.background = 'black'


        })
        heroMain.appendChild(heroTitle)
        heroMain.appendChild(heroDescription)
        heroMain.appendChild(heroButton)
    })


    
}
HeroContent()









export default heroMain
