import React, { useState } from 'react'

export default function CreateTeacher(props) {


    return (
        <div className='col'>
            <div className='card'>

                <div className='card-body'>
                    <div className='extraMargin'>
                        <label className='form-label'>Teacher's name : </label>
                        <input type="text"
                            value={props.newTeacher}
                            onChange={e => { props.setNewTeacher(e.target.value) }}
                            className="form-control">
                        </input>
                        <br />

                        <label className='form-label'>Subject : </label>
                        <input
                            type="text"
                            value={props.subject}
                            onChange={e => { props.setSubject(e.target.value) }}
                            className="form-control"
                        >
                        </input>

                    </div>

                </div>

                <button className='btn btn-dark btn-md extraMargin' onClick={props.addTeacher}>
                    Teacher ++
                </button>
            </div>
        </div >
    )
}
