import { useState } from 'react';
import Axios from 'axios' ;
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import RowCards from './RowCards';


function App() {

  const [First_Name, setFirst_Name] = useState("");
  const [Middle_Name, setMiddle_Name] = useState("");
  const [Last_Name, setLast_Name] = useState("");
  const [Email, setEmail] = useState("");
  const [PRN_No, setPRN_No] = useState("");
  const [Department, setDepartment] = useState("");
  const [Division, setDivision] = useState("");
  const [TE_Roll_No, setTE_Roll_No] = useState();
  const [Elective_II_First_Preference, setElective_II_First_Preference] = useState("");
  const [Elective_II_Second_Preference, setElective_II_Second_Preference] = useState("");
  const [Elective_II_Third_Preference, setElective_II_Third_Preference] = useState("");
  const [Elective_II_Fourth_Preference, setElective_II_Fourth_Preference] = useState("");

  const [studentInfo,setStudentInfo] = useState([]);

const [show, setShow] = useState(false);


 
  const addStudent = ()=>{
    Axios.post('http://localhost:3001/create',{
      First_Name: First_Name,
      Middle_Name: Middle_Name,
      Last_Name: Last_Name,
      Email: Email,
      PRN_No: PRN_No,
      Department: Department,
      Division: Division,
      TE_Roll_No: TE_Roll_No,
      Elective_II_First_Preference: Elective_II_First_Preference,
      Elective_II_Second_Preference: Elective_II_Second_Preference,
      Elective_II_Third_Preference: Elective_II_Third_Preference,
      Elective_II_Fourth_Preference: Elective_II_Fourth_Preference
    }).then((res)=>{
      console.log(res);
      setStudentInfo([...studentInfo,{
        First_Name: First_Name,
        Middle_Name: Middle_Name,
        Last_Name: Last_Name,
        Email: Email,
        PRN_No: PRN_No,
        Department: Department,
        Division: Division,
        TE_Roll_No: TE_Roll_No,
        Elective_II_First_Preference: Elective_II_First_Preference,
        Elective_II_Second_Preference: Elective_II_Second_Preference,
        Elective_II_Third_Preference: Elective_II_Third_Preference,
        Elective_II_Fourth_Preference: Elective_II_Fourth_Preference
      }])
    });
     setFirst_Name("");
     setMiddle_Name("");
     setLast_Name("");
     setEmail("");
     setPRN_No("");
     setDepartment("");
     setDivision("");
     setTE_Roll_No("");
     setElective_II_First_Preference("");
     setElective_II_Second_Preference("");
     setElective_II_Third_Preference("");
     setElective_II_Fourth_Preference("");
  };

  const getInfo = ()=>{
    Axios.get('http://localhost:3001/info',{
      
    }).then((response)=>{
      setStudentInfo(response.data);
      console.log(response);
    })
  };

  return (
    <div className="App">
      <div className="heading-wrapper">
        <div className="heading ">
            Student Elective Subject Management system
        </div>
      </div>
        <div className="row row1 ">
            <div className="col-sm-5 col-10 mt-sm-0 mt-3  c1">
               <label  className="font-weight-bold"> First_Name: </label>
				    	 <input onChange={(event)=>{setFirst_Name(event.target.value)}} type="text" value={First_Name} name="user" className="form-control inp1" autoComplete="off"/>
            </div>
            <div className="col-sm-5 col-10 mt-sm-0 mt-3 c1">
            <label  className="font-weight-bold"> Middle_Name: </label>
				    	 <input onChange={(event)=>{setMiddle_Name(event.target.value)}} type="text" value={Middle_Name} name="user" className="form-control inp1" autoComplete="off"/>
            </div>
        </div>
        <RowCards title1="Last_Name:" title2="Email:" set1={setLast_Name} set2={setEmail} value1={Last_Name} value2={Email}/>
        <RowCards title1="PRN_No.:" title2="Department:" set1={setPRN_No} set2={setDepartment} value1={PRN_No} value2={Department}/>
        <RowCards title1="Division:" title2="TE_Roll_No.:" set1={setDivision} set2={setTE_Roll_No} value1={Division} value2={TE_Roll_No}/>
        <RowCards title1="Elective_II (First_Preference):" title2="Elective_II (Second_Preference):" set1={setElective_II_First_Preference} set2={setElective_II_Second_Preference} value1={Elective_II_First_Preference} value2={Elective_II_Second_Preference}/>
        <div className="row row1 ">
            <div className="col-sm-5 col-10 c1">
               <label  className="font-weight-bold">Elective_II (Third_Preference):  </label>
				    	 <input onChange={(event)=>{setElective_II_Third_Preference(event.target.value)}} type="text" value={Elective_II_Third_Preference}  name="user" className="form-control inp1" autoComplete="off"/>
            </div>
            <div className="col-sm-5 col-10  c1">
            <label  className="font-weight-bold"> Elective_II (Fourth_Preference):  </label>
				    	 <input onChange={(event)=>{setElective_II_Fourth_Preference(event.target.value)}} type="text" value={Elective_II_Fourth_Preference}  name="user" className="form-control inp1" autoComplete="off"/>
            </div>
        </div> 
        <div className="button-div">
            <button className="btn1" onClick={addStudent}>  Submit  </button>
            <button className="btn2" onClick={()=>{
              getInfo();
              setShow(true);
            }}>  Get_Info  </button>
        </div>
        <div className="td">
            {show?<table>
              <thead>
                  <tr>
                      <th scope="col">PRN_No</th>
                      <th scope="col">TE_Roll_No</th>
                      <th scope="col">First_Preference</th>
                      <th scope="col">Second_Preference</th>
                      <th scope="col">Third_Preference</th>
                      <th scope="col">Fourth_Preference</th>
                  </tr>
              </thead>
              <tbody>
                  {studentInfo.map((val,key)=>{
                    return <tr>
                              <td data-label="PRN_No">{val.PRN_No}</td>
                              <td data-label="TE_Roll_No">{val.TE_Roll_No}</td>
                              <td data-label="First_Preference">{val.Elective_II_First_Preference}</td>
                              <td data-label="Second_Preference">{val.Elective_II_Second_Preference}</td>
                              <td data-label="Third_Preference">{val.Elective_II_Third_Preference}</td>
                              <td data-label="Fourth_Preference">{val.Elective_II_Fourth_Preference}</td>
                          </tr>  
                  })}
              </tbody>
          </table>:null}  
        </div>
    </div>
  );
}

export default App;
