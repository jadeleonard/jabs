

interface ImageProps {
    src:string
    id:string
    width:number
    height:number
    className:string
    alt:string

}

const GetImage = (props:ImageProps) =>{
    const img = document.createElement('img') as HTMLImageElement

    if(img){
        img.src = props.src
        img.id = props.id
        img.width = props.width
        img.height = props.height
        img.className = props.className
        img.alt = props.alt

    }
    return img
}


export {ImageProps,GetImage}