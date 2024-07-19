import {ButtonProps,GetButton} from "./button";

const ButtonDefault = {
    "button.style.padding":"10px 14px",
    "button.style.border-radius":"5px",
    "button.style.transition":"0.5s",
    "button.style.background":"black",
    "button.style.color":"white",
    "button.style.fontFamily":"sans-serif"
}


const CreateButtonDefault :ButtonProps = {
    className:'buttonDefault',
    id: 'buttonDefault',
    onClick: (event:MouseEvent) =>{
        document.addEventListener('mouseenter',() =>{

        })
    },
    textContent: 'Button Default',
    style: `${ButtonDefault}`
}