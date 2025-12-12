import { useState } from 'react';
import './TextInput.css';

export default function TextInput({name, className}) {
    const [text, setText] = useState("");

    let classes = "text-input";
    if (className) {
        classes = classes + " " + className;
    }

    return (
        <input className={classes} name={name} type="text" value={text} onChange={e => setText(e.target.value)}/>
    );
}