import { CardBody, Cardtitle } from "./card.config"

let setError:string| null = null
interface CardProps{
    className:string
    id:string
    style?:string


    appenChild?:HTMLElement | HTMLElement[]

}

interface CardDescription {
    textContent:string
    className:string
    id:string
    style:string

}
interface CardTitle{
    textContent:string
    className:string
    id:string
    style:string
}

interface  CardHeader{
    textContent:string
    className:string
    id:string
    style:string
}



const GetHeader=(props:CardHeader):HTMLParagraphElement =>{
        const CardHeader = document.createElement('p') as HTMLParagraphElement

        if(CardHeader){
            CardHeader.className = props.className
            CardHeader.id = props.id
            CardHeader.textContent = props.textContent

        }
        if(props.style){
            CardHeader.style.cssText = props.style
        }

    return CardHeader
}

const GetCardDescription = (props:CardDescription):HTMLParagraphElement =>{
    const Description = document.createElement('p') as HTMLParagraphElement

        if(Description){
            Description.className = props.className
            Description.id = props.id
            Description.textContent = props.textContent

        }
        if(props.style){
            Description.style.cssText = props.style
        }

    return  Description
}
const GetCardTitle = (props:CardTitle):HTMLParagraphElement =>{
    const Cardtitle = document.createElement('p') as HTMLParagraphElement

    Cardtitle.className = props.className
    Cardtitle.id = props.id
    Cardtitle.textContent = props.textContent
    if(props.style){
        Cardtitle.style.cssText = props.style
    }
    return Cardtitle
}

const GetCardBody = (props:CardProps) :HTMLDivElement=>{
    const Card = document.createElement('div') as HTMLDivElement


            Card.className = props.className
            Card.id = props.id
            
            if(props.style){
                Card.style.cssText = props.style
            }
            if(props.appenChild){
               if(Array.isArray(props.appenChild)){
                props.appenChild.forEach(child => Card.appendChild(child))
               }else{
                Card.appendChild(props.appenChild)
               }
            }

          
            return 
            

   
}

export {CardHeader,CardTitle,CardProps,GetCardTitle,GetCardBody,GetHeader,CardDescription,GetCardDescription}