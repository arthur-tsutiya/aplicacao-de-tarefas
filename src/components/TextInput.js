import { useState } from 'react';
import './TextInput.css';

export default function TextInput({name}) {
    const [text, setText] = useState("");

    return (
        <input className="text-input" name={name} type="text" value={text} onChange={e => setText(e.target.value)}/>
    );
}