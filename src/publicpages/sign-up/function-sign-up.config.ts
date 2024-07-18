import { ButtonProps, GetButton } from '../../components/button'



const SubmitButton: ButtonProps = {
    className: 'submit-button',
    id: 'button',
    type: 'submit',
    onClick: (event: MouseEvent) => {
        window.location.href = '/sign-up';
    },
    textContent: 'Submit' // Added text content to avoid an empty button
};

const ButtonSubmit = GetButton(SubmitButton);

export {ButtonSubmit}