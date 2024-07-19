import { ButtonProps, GetButton } from '../../components/button/button'



const SubmitButton: ButtonProps = {
    className: 'submit-button',
    id: 'button',
    type: 'submit',
    onClick: (event: MouseEvent) => {
        document.addEventListener('focus',() =>{

        })
    },
    textContent: 'Submit',
    style:''
};

const ButtonSubmit = GetButton(SubmitButton);

export {ButtonSubmit}