import React, { useState } from 'react'

export default function CreateBranch(props) {

    function createOptions(data, index) {
        return <option value={data.teacherName} key={index}> {data.teacherName} </option>
    }

    function callAddBranch() {
        if (props.teachers.length === 0)
            return;

        if (props.teacherInCharge === " " || props.teacherInCharge === "" || !props.teacherInCharge)
            props.setTeacherInCharge(props.teachers[0].teacherName)

        props.addBranch()
    }

    return (
        <div className='col'>
            <div className='card'>

                <div className='card-body'>
                    <div className='extraMargin'>

                        <label className='form-label'>Branch name : </label>
                        <input
                            type="text"
                            value={props.branchName}
                            onChange={e => { props.setBranchName(e.target.value) }}
                            className="form-control"
                        >
                        </input>
                        <br />

                        <label className='form-label' >Available teachers : </label>
                        <select
                            value={props.teacherInCharge}
                            onChange={e => { props.setTeacherInCharge(e.target.value) }}
                            className='form-select' >

                            {props.teachers.map(createOptions)}
                        </select>
                    </div>

                </div>

                <button className='btn btn-dark btn-md extraMargin' onClick={callAddBranch} >
                    Branch ++
                </button>
            </div>
        </div>
    )
}
