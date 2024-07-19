interface DivProps {
    className:string
    id:string
    style?:string
    
}




const GetDiv = (props:DivProps):HTMLDivElement =>{
        const div = document.createElement('div') as HTMLDivElement

        div.className = props.className
        div.id = props.id

        if(props.style){
            div.style.cssText = props.style

        }
        



    return div
}


export {DivProps,GetDiv}