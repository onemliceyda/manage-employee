import { Form,Button} from "react-bootstrap";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { useContext, useEffect } from "react"; 
import { useState } from "react";
import { Modal } from "react-bootstrap";


const EditForm = () => {

    //Birinci yöntem:tablodaki her bir form elemanı ayrı bir state olarak görmek.
    //Her birinin değişimnde state değişiyor demek.Hangi değişiklik oluyorsa o fonk üzerinde çalışırız ve değişiklik gerçekleşir.
    
    const {updateEmployee}=useContext(EmployeeContext); 
    
    return (
        <Form >
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Name"
                   
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="email"
                    
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    as="textarea"
                    placeholder="Adress"
                    
                    rows={3}
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    as="textarea"
                    placeholder="Phone"
                    
                />
            </Form.Group>

            <Button variant="success" type="submit" block >
                Update Employee
            </Button>
        </Form>
    )
}

export default EditForm;