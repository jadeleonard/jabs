interface InputProps {
    type?: 
      | "text"
      | "password"
      | "email"
      | "number"
      | "date"
      | "time"
      | "datetime-local"
      | "month"
      | "week"
      | "range"
      | "tel"
      | "url"
      | "file"
      | "hidden"
      | "search"
      | "submit"
      | "reset";
    name?: string;
    value?: string | number;
    id?: string;
    class?: string;
    style?: string;
    title?: string;
    disabled?: boolean;
    readonly?: boolean;
    placeholder?: string;
    maxlength?: number;
    minlength?: number;
    size?: number;
    autocomplete?: "on" | "off";
    required?: boolean;
    pattern?: string;
    min?: number | string; // e.g., "2022-01-01" for date, "0" for number
    max?: number | string; // e.g., "2100-12-31" for date, "120" for number
    step?: number; // e.g., 1 for number, "1" for date/time steps
    accept?: string; // e.g., "image/*" for file input
    form?: string;
    formaction?: string;
    formenctype?: "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain";
    formmethod?: "get" | "post";
    formnovalidate?: boolean;
    formtarget?: "_self" | "_blank" | "_parent" | "_top" | string;
    autofocus?: boolean;
    multiple?: boolean;
    capture?: "user" | "environment";
  }
  
  const Input = (props: InputProps): HTMLInputElement => {
    const input = document.createElement('input') as HTMLInputElement;
  
    if (props.type) input.type = props.type;
    if (props.name) input.name = props.name;
    if (props.value !== undefined) input.value = String(props.value); // Ensure value is a string
    if (props.id) input.id = props.id;
    if (props.class) input.className = props.class;
    if (props.style) input.style.cssText = props.style;
    if (props.title) input.title = props.title;
    if (props.disabled) input.disabled = props.disabled;
    if (props.readonly) input.readOnly = props.readonly;
    if (props.placeholder) input.placeholder = props.placeholder;
    if (props.maxlength) input.maxLength = props.maxlength;
    if (props.minlength) input.minLength = props.minlength;
    if (props.size) input.size = props.size;
    if (props.autocomplete) input.autocomplete = props.autocomplete;
    if (props.required) input.required = props.required;
    if (props.pattern) input.pattern = props.pattern;
    if (props.min !== undefined) input.min = String(props.min); // Ensure min is a string
    if (props.max !== undefined) input.max = String(props.max); // Ensure max is a string
    if (props.step !==undefined ) input.step = String(props.step)
    if (props.accept) input.accept = props.accept;
    if (props.form) input.setAttribute('form', props.form); // Set form attribute
    if (props.formaction) input.setAttribute('formaction', props.formaction);
    if (props.formenctype) input.setAttribute('formenctype', props.formenctype);
    if (props.formmethod) input.setAttribute('formmethod', props.formmethod);
    if (props.formnovalidate) input.setAttribute('formnovalidate', props.formnovalidate.toString());
    if (props.formtarget) input.setAttribute('formtarget', props.formtarget);
    if (props.autofocus) input.autofocus = props.autofocus;
    if (props.multiple) input.multiple = props.multiple;
    if (props.capture) input.capture = props.capture;
  
    return input;
  };
  


  export default Input