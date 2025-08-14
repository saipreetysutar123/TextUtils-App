import React, { useState } from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    let myStyle = {
        color: props.Mode === 'dark'?'white':'#042743',
        backgroundColor: props.Mode === 'dark'?'rgb(36 74 104)':'white',
    }
    
    // const [btnText, setBtnText] = useState("Enable Dark Mode")

    // const toggleStyle = ()=>{
    //     if(myStyle.color === 'black'){
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'
    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    //     else{
    //        setMyStyle({
    //         color: 'black',
    //         backgroundColor: 'white'
    //        })
    //        setBtnText("Enable Dark Mode") 
    //     }
    // }

    return (
        <div className="container" >
            <h1 className="my-3" style={{color: props.Mode === 'dark'?'white':'#042743'}}>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" style={myStyle} data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                           Quick Text Transformation 
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" style={myStyle} data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p>Instantly convert text to uppercase, lowercase, capitalized case, or remove extra spaces.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                           Smart Analysis 
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p>Count words, characters, and estimate reading time with real-time results.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                         Simple & Responsive
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                           <p>Clean, fast, and mobile-friendly design for easy text editing anywhere.</p> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-3">
            {/* <button onClick={toggleStyle} type="button" className="btn btn-primary">{btnText}</button> */}
            </div>
        </div>
    )
}
