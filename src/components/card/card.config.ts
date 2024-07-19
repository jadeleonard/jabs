import  {CardHeader,CardTitle,CardProps,GetCardTitle,GetCardBody,GetHeader,CardDescription,GetCardDescription} from './card'


const CardBody :CardProps ={


    className:'CardBody',
    id:'CardBody',
    style:'width:100%;border-radius:5px;position:relative',
    appenChild:[]

}   

const CardTitleProps :Omit<CardTitle, 'textContent'>={
    className:'CardTitle',
    id:'CardTitle',
    style:'font-size:medium;font-family:sans-serif;font-weight:bold;opacity:90%;',

    
}


const Cardtitle = (textContent:any):HTMLElement =>{
    const t = document.createElement('p') as HTMLParagraphElement

    t.className = CardTitleProps.className
    t.id = CardTitleProps.id
    t.style.cssText = CardTitleProps.style
    t.textContent = textContent
    
    return t
}
export {CardBody,CardTitleProps,Cardtitle}