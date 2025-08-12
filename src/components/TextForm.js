import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked" + text);
            let newText = text.toUpperCase();
            setText(newText);
            props.showAlert("Converted to Upper Case", "success");
    }

    const handleLowClick = () =>{
        // console.log("Uppercase was clicked" + text);
            let newText = text.toLowerCase();
            setText(newText);
            props.showAlert("Converted to Lower Case", "success");
    }

    const handleCopyToClipboard = () =>{
            navigator.clipboard.writeText(text)
            .then(()=>{
                alert("Text copied to clipboard!");
            })
            .catch(err=>{
                alert("Failed to copy text: " + err);
            })
            props.showAlert("Copied to clipboard", "success");
    }

    const handleClearClick = () =>{
            let newText = '';
            setText(newText);
            props.showAlert("Text clear", "success");
    }

    const handleOnChange = (event) =>{
        // console.log("On change");
        setText(event.target.value);
    }
    
    const [text, setText] = useState('');
    // setText("Enter your text here");
    return (
        <>
        <div className='container' style={{color: props.Mode === 'dark'?'white':'#042743'}} >
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.Mode === 'dark'?'grey':'white', color: props.Mode === 'dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleCopyToClipboard}>Copy To Clipboard</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
            
            </div>
        </div>
        <div className="container" my-3 style={{color: props.Mode === 'dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words, {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Mintues read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter some text to preview here"}</p>
        </div>
        </>
    );
}
