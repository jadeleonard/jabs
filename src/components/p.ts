interface PProps {
    className?:string
    id?:string
    textContent?:string
    style?:string
}



const P = (props:PProps):HTMLParagraphElement =>{
    const p = document.createElement('p') as HTMLParagraphElement

    if(props.className) props.className = props.className
    if(props.id) props.id = props.id
    if(props.style) p.style.cssText = props.style
    if(props.textContent) props.textContent = props.textContent



    




    return p
}


export default P