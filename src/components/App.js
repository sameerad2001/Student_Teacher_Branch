import React, { useState } from "react"

import CreateStudent from "./CreateStudent";
import CreateTeacher from "./CreateTeacher";
import CreateBranch from "./CreateBranch";
import Footer from "./Footer";

function App() {

  // Data/ States
  let [students, setStudents] = useState([])
  let [teachers, setTeachers] = useState([])
  let [branches, setBranches] = useState([])

  // New entry states
  let [newStudent, setNewStudent] = useState("");
  let [newTeacher, setNewTeacher] = useState("");
  let [subject, setSubject] = useState("");
  let [branchName, setBranchName] = useState("");
  let [teacherInCharge, setTeacherInCharge] = useState("");
  let [studentBranch, setStudentBranch] = useState("")

  function addStudent() {

    if (newStudent === "" || studentBranch === "")
      return;

    setStudents(prev => {
      return [...prev,
      {
        studentName: [newStudent],
        branchName: [studentBranch]
      }
      ]
    })

    setNewStudent("")
  }

  function addTeacher() {

    if (newTeacher === "" || subject === "")
      return;

    setTeachers(prev => {
      return [...prev,
      {
        teacherName: [newTeacher],
        subject: [subject]
      }
      ]
    })

    setNewTeacher("")
    setSubject("")
  }

  function addBranch() {

    if (teacherInCharge === "" || branchName === "")
      return;

    setBranches(prev => {
      return [...prev,
      {
        branchName: [branchName],
        teacherInCharge: [teacherInCharge]
      }
      ]
    })

    setBranchName("")
    setTeacherInCharge("")
  }

  // Display the data
  function createStudentTable(data) {
    return <tr>
      <td>{data.studentName}</td>
      <td>{data.branchName}</td>
    </tr>
  }

  function createTeacherTable(data) {
    return <tr>
      <td>{data.teacherName}</td>
      <td>{data.subject}</td>
    </tr>
  }

  function createBranchTable(data) {
    return <tr>
      <td>{data.branchName}</td>
      <td>{data.teacherInCharge}</td>
    </tr>
  }

  return (
    <div>
      <div className="container-fluid">

        <h1 className="bigHead"> Teacher {'>'} Batch {'>'} Student </h1>

        <div>

          <div className="row">
            <CreateTeacher newTeacher={newTeacher} setNewTeacher={setNewTeacher} subject={subject} setSubject={setSubject}
              addTeacher={addTeacher}
            />

            <CreateBranch branchName={branchName} setBranchName={setBranchName} teachers={teachers} teacherInCharge={teacherInCharge}
              setTeacherInCharge={setTeacherInCharge} addBranch={addBranch}
            />

            <CreateStudent newStudent={newStudent} setNewStudent={setNewStudent} branches={branches}
              studentBranch={studentBranch} setStudentBranch={setStudentBranch} addStudent={addStudent} />

          </div>

          <div className="row">

            {/* Display the teachers */}
            <div className='col'>
              <div className='card align-items-center'>
                <table className="table table-hover">
                  <thead>
                    <tr className="table-dark">
                      <td>Teacher Names</td>
                      <td>Subject</td>
                    </tr>

                  </thead>

                  <tbody>
                    {teachers.map(createTeacherTable)}
                  </tbody>
                </table>

              </div>
            </div>

            {/* Display the branch */}
            <div className='col'>
              <div className='card align-items-center'>
                <table className="table table-hover">
                  <thead>
                    <tr className="table-dark">
                      <td>Branch Names</td>
                      <td>Teacher in-charge</td>
                    </tr>

                  </thead>

                  <tbody>
                    {branches.map(createBranchTable)}
                  </tbody>
                </table>

              </div>
            </div>


            {/* Display the students */}
            <div className='col'>
              <div className='card align-items-center'>
                <table className="table table-hover">
                  <thead>
                    <tr className="table-dark">
                      <td>Student Names</td>
                      <td>Branch</td>
                    </tr>
                  </thead>

                  <tbody>
                    {students.map(createStudentTable)}
                  </tbody>
                </table>

              </div>
            </div>

          </div>

        </div>
      </div>
      <Footer />
    </div >
  );
}

export default App;
