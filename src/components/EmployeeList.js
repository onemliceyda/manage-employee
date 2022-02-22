import Employee from "./Employee";
import { Button, Alert } from "react-bootstrap"
import { Modal } from "react-bootstrap";
import AddForm from "./AddForm"
import { useContext, useEffect, useReducer, useState } from "react";
import { EmployeeContext } from "../contexts/EmployeeContext";
import Pagination from "./Pagination";

const EmployeeList = () => {

    const { sortedEmployees } = useContext(EmployeeContext);

    const [showAlert, setShowAlert] = useState(false);


    const [show, setShow] = useState(false);
    const [currentPage, setCurrentPage] = useState(1)
    const [employeesPerPage] = useState(5 )
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // const handleShowAlert = () => setShowAlert(true)
    const handleShowAlert = () => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 2000);

    }; //Öncelikle bize mesajı göstermesini istiyoruz.Ardından alert mesajının belirli bir süre sonunda kaybolmasını istiyoruz bu yüzden de setTimeout metodunu kullandık.

    useEffect(() => {
        handleClose();
        return () => {
            handleShowAlert(); //modalda bir değişiklik olduğunda alert mesajının gelmesini sağlar.Bu callback fonksiyonu da return oldu.
        }
    }, [sortedEmployees])


    const indexOfLastEmployee = currentPage * employeesPerPage; //Son çalışanı bulmaya yarar.
    const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
    const currentEmployees = sortedEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee)
    const totalPagesNum = Math.ceil(sortedEmployees.length / employeesPerPage)


    /*const reducer=(state,action)=>{
        switch(action.type){
            case "increment":
                return{count:state.count +1}
            case "decrement": 
            return{count: state.count-1}

            default :
            throw new Error();
        }
    }
    const initialState={count:0};
    const [state,dispatch]=useReducer(reducer,initialState)*/





    return (


        <>
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-6">
                        <h2>Manage <b>Employees</b></h2>
                    </div>
                    <div className="col-sm-6">
                        <Button onClick={handleShow} className="btn btn-success text-white" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></Button>
                    </div>
                </div>
            </div>

            <Alert show={showAlert} variant="secondary" >
                Employee List Successfully Updated!
            </Alert>



            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentEmployees.map((employee) => (
                            <tr key={employee.id}>
                                <Employee employee={employee} />
                            </tr>
                        ))
                    }
                </tbody>
            </table>


            <Pagination
                pages={totalPagesNum}
                setCurrentPage={setCurrentPage} 
                currentEmployees={currentEmployees}
                sortedEmployees={sortedEmployees}
                />
                
          {/*  Count:{state.count}
            <button onClick={()=>dispatch({type:"increment"})}> + </button>
                <button onClick={()=>dispatch({type:"decrement"})}> - </button> */}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="modal-header" closeButton >
                    <Modal.Title>
                        Add Employee
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <AddForm />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close Modal
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}


export default EmployeeList;




//.sort((a, b) => a.name.localeCompare(b.name)) ->name'e göre sıralama yaparken kullandık
//.sort((a, b) => (a.name < b.name ? -1 : 1)) 