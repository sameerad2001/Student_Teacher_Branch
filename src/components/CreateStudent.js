import React, { useState } from 'react'

export default function CreateStudent(props) {

    function createOptions(data, index) {
        return <option value={data.branchName} key={index}> {data.branchName} </option>
    }

    function callAddStudent() {

        if (props.branches.length === 0)
            return;

        if (props.studentBranch === " " || !props.studentBranch)
            props.setStudentBranch(props.branches[0].branchName)

        props.addStudent()
    }

    return (
        <div className='col'>
            <div className='card'>
                <div className='card-body'>

                    <div className='extraMargin'>

                        <label className='form-label'>Student's name : </label>
                        <input type="text"
                            value={props.newStudent}
                            onChange={e => { props.setNewStudent(e.target.value) }}
                            className="form-control">
                        </input>
                        <br />

                        <label className='form-label'>Available branches : </label>
                        <select
                            value={props.studentBranch}
                            onChange={e => { props.setStudentBranch(e.target.value) }}
                            className='form-select' >

                            {props.branches.map(createOptions)}

                        </select>

                    </div>

                </div>

                <button className='btn btn-dark btn-md extraMargin' onClick={callAddStudent}>
                    Student ++
                </button>
            </div>
        </div>
    )
}
