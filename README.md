### Record details about `teachers`, `branches` and `students`

#### What can this application do?

1. Add a new teacher and assign them a subject
2. Create a new branch and assign it a teacher from a list of ***available***(already existing) teachers 
3. Add a student who can be enrolled in to the ***previously created*** batches
4. Display the above information

#### How does this application work?
- The `App` component contains **local states** to hold the list of entities and various other states that can be used to create new entities. For example :
```js
  // List of entities
  let [students, setStudents] = useState([])
  
  ....

  // States for adding a new student 
  let [newStudent, setNewStudent] = useState("")
  let [studentBranch, setStudentBranch] = useState("")
```

- These states are passed to UI components that take user input and modify said state
```js
<input
    type="text"
    value={props.branchName}
    onChange={e => { props.setBranchName(e.target.value) }}
    className="form-control"
>
</input>
```

- The list of entities is then mapped on to a table
```js
function createStudentTable(data) {
    return <tr>
        <td>{data.studentName}</td>
        <td>{data.branchName}</td>
    </tr>
}

<table>
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
```

#### Demo

<img src = "https://github.com/sameerad2001/Student_Teacher_Branch/blob/master/public/img/Demo2.gif" alt = "Website Demo"/>
<img src = "https://github.com/sameerad2001/Student_Teacher_Branch/blob/master/public/img/Demo3.jpg" alt = "Website Demo"/>
<img src = "https://github.com/sameerad2001/Student_Teacher_Branch/blob/master/public/img/Demo4.jpg" alt = "Website Demo"/>

<hr>

Sameer Ahmed <br/>
Email : <sameerad2001@gmail.com> <br/>
Linkdin : <https://www.linkedin.com/in/sameer-ahmed-0b7902176/>