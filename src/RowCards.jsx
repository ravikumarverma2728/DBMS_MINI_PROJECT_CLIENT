import React from 'react'

const RowCards = (props) => {
    return (
        <div className="row row1 ">
            <div className="col-sm-5 col-10  c1">
                <label  className="font-weight-bold"> {props.title1} </label>
				<input onChange={(event)=>{{props.set1(event.target.value)}}} type="text" value={props.value1} name="user" className="form-control inp1" autoComplete="off"/>
            </div>
            <div className="col-sm-5 col-10 mt-sm-0 mt-3 c1">
                 <label  className="font-weight-bold"> {props.title2} </label>
			     <input onChange={(event)=>{{props.set2(event.target.value)}}} type="text" value={props.value2} name="user" className="form-control inp1" autoComplete="off"/>
            </div>
        </div>
    )
}

export default RowCards;
;