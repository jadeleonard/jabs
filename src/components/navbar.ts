import {div,img,ul} from "../js-function/elements";
import { GetNavbar } from "../js-function/useFetch";


const nav = document.createElement('nav')

nav.className = 'nav'
nav.id = 'nav'
nav.style.display = 'flex'
nav.style.alignItems = 'center'
nav.style.margin = 'auto'
nav.style.justifyContent = 'space-between'

const navbarFunction = async () =>{
    const navbarProps = await GetNavbar()
    interface props{
        name:string
        url:string
    }
    navbarProps.forEach((item:props) =>{
        const li = document.createElement('li') as HTMLLIElement
        const a = document.createElement('a') as HTMLAnchorElement
        a.href  = item.url
        a.innerText = item.name
        li.className = 'navbar-list-links'
        li.style.listStyleType = 'none'
        a.style.textDecoration = 'none'
        a.style.color = 'black'
        a.style.padding = '10px 14px'
        a.style.transition ='0.5s'
        a.style.fontFamily = 'sans-serif'
        a.addEventListener('mouseout' ,() =>{
            a.style.color = 'black'
            a.style.padding = '10px 14px'
            a.style.transition = '0.5s'
            a.style.background = 'white'

        })
        a.addEventListener('mouseenter',() =>{
            a.style.color = 'white'
            a.style.background = 'black'
            a.style.borderRadius = '5px'
        })

        a.className = 'a'
        li.appendChild(a)
        ul.appendChild(li)
    })

}
navbarFunction()

div.appendChild(img)

div.className = 'logoBody'
img.className = 'logo'
div.style.margin = 'auto'
img.width = 125
img.height = 40
div.style.display = ''
ul.className = 'navbar-orderList'
ul.style.display = 'inline-flex'
ul.style.gap = '10px'
ul.style.padding = '10px 14px'
ul.style.fontSize = '400'
ul.style.margin = 'auto'

nav.appendChild(div)
nav.appendChild(ul)

export default nav





