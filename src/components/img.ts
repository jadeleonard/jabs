

interface ImageProps {
    src?:string
    id?:string
    width?:number
    height?:number
    className?:string
    alt?:string
    style?:string

}

const Image = (props:ImageProps) =>{
    const img = document.createElement('img') as HTMLImageElement
    if(props.src) img.src = props.src
    if(props.id) img.id = props.id
    if(props.width) img.width = props.width
    if(props.height) img.height = props.height
    if(props.alt) img.alt = props.alt
    if(props.className) img.className = props.className
    if(props.style){
        img.style.cssText = props.style
    }
    return img
}

export default Image