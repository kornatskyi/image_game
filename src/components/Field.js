import React, { useState } from 'react'

export default function Field(props) {
    let imgClassName = "";
    let unknownClassName = "";
    
    console.log(props.isFliped);

    if(props.isFliped) {
        imgClassName = "flip-box-back";
        unknownClassName = "flip-box-front";
    } else {
        imgClassName = "flip-box-front";
        unknownClassName = "flip-box-back";
    }




    return (
        <div className="field" style={{ pointerEvents: props.pointerEvents }}>
            {
                props.imgArrayProp.map(img => (
                    <div id={img.key}  key={img.key} className="box">
                        <div className="flip-box-inner">
                            <div className={imgClassName + ""}>
                                <img className="images" src={img.value} id={img.key} key={img.key} onClick={props.func} alt="" />
                            </div>
                            <div className={unknownClassName + ""} >
                                <img className="images" src={props.unknown}/>
                            </div>
                            </div>
                        </div>


                ))
                }
                    </div>
                )

}

