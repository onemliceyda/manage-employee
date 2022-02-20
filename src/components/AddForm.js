import { Form,Button} from "react-bootstrap";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { useContext, useEffect } from "react"; 
import { useState } from "react";


const AddForm = () => {

    //Birinci yöntem:tablodaki her bir form elemanı ayrı bir state olarak görmek.
    //Her birinin değişimnde state değişiyor demek.Hangi değişiklik oluyorsa o fonk üzerinde çalışırız ve değişiklik gerçekleşir.
    
    const {addEmployee}=useContext(EmployeeContext); 
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [address,setAddress]=useState("");
    const [phone,setPhone]=useState("");
    
    /*const [newEmployee,setNewEmployee]=({
        name:"",email:"",address:"",phone:""
    })*/


    
    const handleSubmit=(e=>{
        e.preventDefault();
        addEmployee(name,email,address,phone);
    })





    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={e=>setName(e.target.value)} 
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="email"
                    value={email}
                    //name="email" buna göre valueları eşitleyecek
                    //onChange={e=>onInputChange(e))} 
                    onChange={e=>setEmail(e.target.value)} 
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    as="textarea"
                    placeholder="Adress"
                    value={address}
                    onChange={e=>setAddress(e.target.value)} 
                    rows={3}
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    as="textarea"
                    placeholder="Phone"
                    value={phone}
                    onChange={e=>setPhone(e.target.value)} 
                />
            </Form.Group>

            <Button variant="success" type="submit" block >
                Add New Employee
            </Button>
        </Form>
    )
}

export default AddForm;