import { Form, Button, Col } from "react-bootstrap";
import {useForm} from 'react-hook-form'

const AppForm = (props) => {
  const {handleFormSubmit} =props
  const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });

  const onSubmit = async data => {handleFormSubmit(data) };
  
  return (
    <Form onSubmit={handleSubmit(onSubmit)} >
      <Form.Group controlId="formGridName">
        <Form.Label>Activity Name</Form.Label>
        <Form.Control required placeholder="Enter Name"  {...register("name", { required: "This field is required" })}/>
      </Form.Group>

      <Form.Group controlId="formGridDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" placeholder="..."  {...register("description")}/>
      </Form.Group>

      <Form.Group controlId="formGridAmount">
        <Form.Label>Amount</Form.Label>
        <Form.Control type="number" placeholder="0"  {...register("amount", { required: "This field is required." })}/>
      </Form.Group>

      <Form.Group controlId="formGridDocuments">
        <Form.Label>Documents</Form.Label>
        <Form.Control id="formControlsFile" type="file" multiple label="File"  {...register("documents")}/>
      </Form.Group>

      <Button variant="primary" type="submit"  >
        Add Activity
      </Button>
    </Form>
  );
};

export default AppForm;
