import React, { useState } from 'react'

export default function TextForm(props) {
    const buttonup = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        if(text!==""){
        props.showAlert("Converted to UpperCase Successfully","success");
        }
    }


    const handleChange = (evt) => {

        setText(evt.target.value)
    }
    const buttonlw = () => {
        let newtext = text.toLowerCase()
        setText(newtext);
        if(text!==""){
        props.showAlert("Converted to LowerCase Successfully","success");
        }
    }
    const buttoncl = () => {
        let newtext = ""
        setText(newtext);
        setData1("");
        setData2("");
        if(text!==""){
            props.showAlert("Cleared Successfully","success")
            }
    }
    const [data1, setData1] = useState(null)
   
    const getfdata = (val1) => {
        setData1(val1.target.value);
      

    }
    const [data2, setData2] = useState(null)
    
    const getrdata = (val2) => {
        setData2(val2.target.value);
       
    }
    const buttonrp = () => {
       
        let newtext = text.replaceAll(data1, data2);
        setText(newtext);
        
        if(text!==""){
        props.showAlert("Replaced Successfully","success");
        }
    }
    const [text, setText] = useState("");
    
    let words=0;
    if(text!==""){
        words=text.split(/\s+\S+/).length;
    }
    const buttoncopy=()=>{
        var text=document.getElementById("mybox")
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        if(text!==""){
        props.showAlert("Copied Successfully","success")
        }
    }
    const buttonspace=()=>{
        let newtext=text.split(/[" "]+/)
        setText(newtext.join(" "))
        if(text!==""){
        props.showAlert("Removed Extra Spaces Successfully","success")
        }
    }
    return (
        <>
    <div className='container my-2'>
            <h2>{props.heading}</h2>
            </div>
            <div className="conatiner">

                <textarea
                    className={`form-control bg-${props.mode==="light"?"white":"black"} text-${props.mode==="light"?"black":"white"}`}
                    id="mybox"
                    rows={8}
                    defaultValue={""}
                    value={text}
                    onChange={handleChange}
                />
            </div>


            <button className="upbutton mx-2 my-2 btn btn-primary" onClick={buttonup}>CONVERT TO UPPERCASE</button>


            <button className="lwbutton mx-2 my-2 btn btn-primary" onClick={buttonlw}>CONVERT TO LOWERCASE</button>

            <button className="clbutton mx-2 my-2 btn btn-primary" onClick={buttoncl}>CLEAR</button>
            <button className="clbutton mx-2 my-2 btn btn-primary" onClick={buttonspace}>REMOVE EXTRA SPACES</button>
            <button className="clbutton mx-2 my-2 btn btn-primary" onClick={buttoncopy}>COPY</button>
            
            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p>{words} words {text.split(".").length - 1} sentences  {text.length} characters</p>
                <p>Read Time={0.008 * words} minutes</p>
                <label className='inputs mx-2'>
                    Find: <input type='text' value={data1}  onChange={getfdata} />
                </label >
                <label className='inputs mx-2' >
                    Replace with: <input type='text'value={data2} onChange={getrdata} />
                </label>
                <button className="rpbutton mx-2 my-2 btn btn-primary" onClick={buttonrp} >REPLACE</button>
                <h2>Preview</h2>
                <p>{text===""?"Enter Something To Preveiw":text}</p>

            </div>

        </>

    )
}
