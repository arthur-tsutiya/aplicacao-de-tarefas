import './TextInput.css';

export default function TextInput({name, className, expanded, value, onChange, ...rest}) {
    let classes = "text-input";
    if (className) {
        classes = classes + " " + className;
    }

    return (
        <input className={classes} name={name} type="text" value={value} onChange={(e) => onChange(e.target.value)}
         tabIndex={expanded ? 0 : -1} {...rest}/>
    );
}