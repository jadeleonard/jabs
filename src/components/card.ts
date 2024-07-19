
let setError:string| null = null
interface CardProps{
    className:string
    id:string
    appendChild: 'CardTitle' | 'CardHeader' | HTMLElement

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


            return Card
}

export {CardHeader,CardTitle,CardProps,GetCardTitle,GetCardBody,GetHeader}