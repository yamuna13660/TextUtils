import React,{useState} from 'react'

export default function About() {
    const [my,setStyle]=useState( {
        color:'white',
        backgroundColor:'#0a3c5c',
        border:'1px solid white'
    })
    const [btnText,setBtnText]=useState('Disable Dark Mode')
  const toggleButton=()=>{
    if(my.color ==='white'){
    setStyle({
         color:'#0a3c5c',
        backgroundColor:'white',
        border:'1px solid #0a3c5c'
    })
    setBtnText('Disable Light Mode')
}else
{
     setStyle({
         color:'white',
        backgroundColor:'#0a3c5c',
        border:'1px solid white'
    })
        setBtnText('Disable Dark Mode');
}
  }
  return (
    <>
    <div className='container' style={my}>
        <h1>About Us</h1>
    <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button"  style={my} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analyze Your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       Textutils gives you a way to analyze your text quickly and efficiently.Be it word count,character count.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={my}  data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
     Textutils is completely free to use. There are no hidden charges or subscription fees. Whether you are a student, a teacher, or a professional, you can use our tool
      anytime without any cost.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={my} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       <strong>Browser Compatible</strong> 
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        This application is compatible with all modern web browsers including Chrome, Firefox, Safari, Edge, and Opera. No installation is needed – just open
         your browser and start using the tool.
      </div>
    </div>
  </div>
</div>
<button type="button" onClick={toggleButton}className="btn btn-primary my-2">{btnText}</button>
    </div>
    </>
  )
}
