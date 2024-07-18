// src/components/button.ts

export interface ButtonProps {
    className: string;
    id: string;
    type?: 'submit' | 'reset' | 'button';
    onClick?: (event: MouseEvent) => void; // Specify MouseEvent with HTMLButtonElement
    textContent: string;
}

export const GetButton = (props: ButtonProps): HTMLButtonElement => {
    const Button = document.createElement('button') as HTMLButtonElement;

    Button.className = props.className;
    Button.id = props.id;
    Button.textContent = props.textContent;
    Button.type = props.type || 'button'; // Default to 'button' if no type is specified

    if (props.onClick) {
        Button.onclick = (event: MouseEvent) => {
            if (props.onClick) {
                props.onClick(event);
            }
        };
    }

    return Button;
}
