import { useState,useEffect } from "react"

const EmployeeFunc=()=>{
    const[employeeList,setemployeelist]=useState([]);
   useEffect(()=>{
    getemployeelist()
   },[])
   const getemployeelist=()=>{
    fetch("http://restapi.adequateshop.com/api/Metadata/GetEmployees")
    .then((res)=>res.json())
    .then((data)=>{
        setemployeelist(data)
    })
    .catch((error)=>{
        setemployeelist([]);
    })
   }
    if(!employeeList){
    return(<div>No record Found</div>)
    }
        return(
            <>
            <h1 align="center">List of Employees Using FunctionComponent</h1>
            <div className="container mt3">
            <table className="table">
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>ZipCode</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employeeList.map((emp)=>
                        {
                            return(
                            <tr key={emp.Id}>
                                <td>{emp.Id}</td>
                                <td>{emp.Name}</td>
                                <td>{emp.Address}</td>
                                <td>{emp.City}</td>
                                <td>{emp.ZipCode}</td>
                            </tr>
                            )
                        })
                    }
                </tbody>

            </table>
        </div>
        </>   
        )
    }
    export default EmployeeFunc;