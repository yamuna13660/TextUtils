import React,{useState} from 'react'

export default function Textform(props) {
  
  console.log(props)
    const handleUp=()=>
    {
      //  console.log("button was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.show("Convert to UpperCase","success")
        
    }
    const handleOn=(event)=>{
     setText(event.target.value)
    }
    const handleLo=()=>{
        let newText=text.toLowerCase();
        setText(newText);
       props.show("Convert to LowerCase","success")
    }
    const clear=()=>{
        setText("");
        props.show("Text Cleared","success")
    }
  
    const[text,setText]=useState("")
    let my={
 color:props.mode==='dark'?'white':'#042743'
    }
  return (
    <>
 <h1 class="text-center my-3" style={my} >{props.title}</h1>
  <div className="d-flex justify-content-center">
  <textarea
    className="form-control my-2"
    rows="8"
    id="box"
    style={{
      width: "100%",
      maxWidth: "600px",
      backgroundColor: props.mode === 'dark' ? 'white' : 'white',
      color: props.mode === 'dark' ? 'black' : 'black'
    }}
    value={text}
    onChange={handleOn}
    placeholder="Input Your Text ..."
  ></textarea>
</div>

<div className='text-center my-3'>
<button type="button" disabled={text.length===0}className="btn btn-primary mx-1 my-2" onClick={handleUp}>Convert to uppercase</button>

<button type="button" disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleLo}>Convert to lowercase</button>
<button type="button" disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={clear}>Clear Text</button>
</div>
  <div className="container my-2 text-center">
    <p style={my}><b>{text.split(" ").filter((ele)=>{ return ele.length!==0}).length} words and {text.length} Characters</b></p>
    <h3 style={my}>Preview</h3>
    <p style={my}>{text}</p>
  </div>
    </>
  )
}
