import { Form, FormGroup } from "react-bootstrap";
import { Button } from "bootstrap";



const AddForm = () => {
    return (
        <Form>
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
                Add New Employee
            </Button>
        </Form>
    )
}

export default AddForm;