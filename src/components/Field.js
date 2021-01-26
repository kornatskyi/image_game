import React, { useState } from 'react'

export default function Field(props) {

   

    return (
        <div className="field" style={{pointerEvents:props.pointerEvents}}>
            {
                props.imgArrayProp.map(img => (
                    <img src={img.value} id={img.key} key={img.key} onClick={props.func} alt="" />
                ))
            }
        </div>
    )
}

{/* <img src={props.imgArrayProp[0].value} id={props.imgArrayProp[0].key} onClick={props.func} alt="" /> 
<img src={props.imgArrayProp[1].value} id={props.imgArrayProp[1].key} onClick={props.func} alt="" />
<img src={props.imgArrayProp[2].value} id={props.imgArrayProp[2].key} onClick={props.func} alt="" />
<img src={props.imgArrayProp[3].value} id={props.imgArrayProp[3].key} onClick={props.func} alt="" />
<img src={props.imgArrayProp[4].value} id={props.imgArrayProp[4].key} onClick={props.func} alt="" />
<img src={props.imgArrayProp[5].value} id={props.imgArrayProp[5].key} onClick={props.func} alt="" />
<img src={props.imgArrayProp[6].value} id={props.imgArrayProp[6].key} onClick={props.func} alt="" />
<img src={props.imgArrayProp[7].value} id={props.imgArrayProp[7].key} onClick={props.func} alt="" />
<img src={props.imgArrayProp[8].value} id={props.imgArrayProp[8].key} onClick={props.func} alt="" />
<img src={props.imgArrayProp[9].value} id={props.imgArrayProp[9].key} onClick={props.func} alt="" />
<img src={props.imgArrayProp[10].value} id={props.imgArrayProp[10].key} onClick={props.func} alt="" />
<img src={props.imgArrayProp[11].value} id={props.imgArrayProp[11].key} onClick={props.func} alt="" />
<img src={props.imgArrayProp[12].value} id={props.imgArrayProp[12].key} onClick={props.func} alt="" />
<img src={props.imgArrayProp[13].value} id={props.imgArrayProp[13].key} onClick={props.func} alt="" />
<img src={props.imgArrayProp[14].value} id={props.imgArrayProp[14].key} onClick={props.func} alt="" />
<img src={props.imgArrayProp[15].value} id={props.imgArrayProp[15].key} onClick={props.func} alt="" />  */}