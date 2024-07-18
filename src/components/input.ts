

interface InputProps {
    className: string;
    id: string;
    type?: 'text' | 'password' | 'radio' | 'number' | 'email' | 'date' | 'time' | 'file' | 'search' | 'color' | 'checkbox' | 'hidden';
    onChange?: (event:Event) => void
    placeholder:string
    textContent:string
    value:string
    innerText:String

}

const Input = document.createElement('input') as HTMLInputElement

const GetInput = (props:InputProps) =>{
        Input.className = props.className
        Input.id = props.id
        Input.placeholder = props.placeholder

    if(props.type){
        Input.type = props.type || 'text'
    }
    if(props.onChange){
        Input.onclick = (event:Event) => {
            if(props.onChange){
                props.onChange(event)
            }
        }
    }
        Input.textContent = props.textContent
        Input.value = props.value
        Input.innerText = props.innerText
}


export{InputProps,GetInput}