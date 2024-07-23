interface ButtonProps {
  autofocus?: boolean;
  disabled?: boolean;

  formaction?: string;
  formenctype?: "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain";
  formmethod?: "get" | "post";
  formnovalidate?: boolean;
  formtarget?: "_self" | "_blank" | "_parent" | "_top" | string;
  name?: string;
  type?: "button" | "submit" | "reset";
  value?: string;
  class?: string;
  id?: string;
  style?: string;
  title?: string;
  textContent:string
  data?: { [key: string]: string };
}

const Button = (props: ButtonProps) :HTMLButtonElement=> {
  const button = document.createElement('button') as HTMLButtonElement;

  if (props.class) button.className = props.class;
  if (props.id) button.id = props.id;
  if (props.name) button.name = props.name;
  if (props.title) button.title = props.title;
 
  if(props.textContent) button.textContent = props.textContent
  if (props.formnovalidate) button.formNoValidate = props.formnovalidate;
  if (props.formaction) button.formAction = props.formaction;
  if (props.formtarget) button.formTarget = props.formtarget;
  if (props.style) button.style.cssText = props.style;
  if (props.autofocus) button.autofocus = props.autofocus;
  if (props.disabled) button.disabled = props.disabled;
  if (props.type) button.type = props.type;
  if (props.value) button.value = props.value;
  

  return button
};



export default Button