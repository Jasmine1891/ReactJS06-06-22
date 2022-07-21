import React, { Component } from 'react'

 class EmployeeClass extends Component {
    constructor(props){
        super(props);
        this.state={employeeList:[],
        isApiError:false}
    }
    componentDidMount()
    {
        fetch(" http://restapi.adequateshop.com/api/Metadata/GetEmployees")
        .then((res)=>res.json())
        .then((data)=>{
        console.log(data);
        this.setState({employeeList:data})
        })
        .catch((error)=>{
        this.setState({isApiError:true})
        });
    }
  render() {
        var employees=this.state.employeeList;
        if(employees && employees.length>0)
        return(
            <>
            <h1 align="center">List of Employees Using ClassComponent</h1>
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
                        employees.map((emp)=>
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
      else return(<div>No record found</div>)
  }
}
export default EmployeeClass;