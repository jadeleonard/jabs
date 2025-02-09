import { GetNavbar } from "../js-function/useFetch";

import Image from '../components/img'

const nav = document.createElement('nav')
const ul = document.createElement('ul')
const div = document.createElement('div')



nav.className = 'nav'
nav.id = 'nav'
nav.style.display = 'flex'
nav.style.alignItems = 'center'
nav.style.margin = 'auto'
nav.style.justifyContent = 'space-between'







const logo = Image({
    src:'',
    width:125,
    height:40,

})
const navbarFunction = async () =>{
    const navbarProps = await GetNavbar()
    interface props{
        name:string
        url:string
    }

    navbarProps.forEach((item:props) =>{
        const a = document.createElement('a') as HTMLAnchorElement
        const li = document.createElement('li') as HTMLLIElement

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

div.appendChild(logo)

div.className = 'logoBody'

div.style.margin = 'auto'

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





