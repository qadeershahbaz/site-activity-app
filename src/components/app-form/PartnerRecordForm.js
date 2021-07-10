import { Form, Button } from "react-bootstrap";
import {useForm} from 'react-hook-form'
import {DatePicker} from 'antd-mobile';
import { useState } from "react";
import moment from "moment";

const PartnerRecordForm = (props) => {
  const {handleFormSubmit} =props
  const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });
  const [date,setDate]=useState()
  console.log(date)
  

  const onSubmit = async data => {handleFormSubmit(data) };
  
  return (
    <Form onSubmit={handleSubmit(onSubmit)} >
      <Form.Group controlId="formGridDate">
        <Form.Label>Date</Form.Label>
        <DatePicker
        mode="date"
         value={date}
         onChange={(date)=>setDate(date)}
        >
         
        <Form.Control required placeholder="YYYY-MM-DD" value={date&&moment(date).format('YYYY-MM-DD')} />
        </DatePicker>
      </Form.Group>

      <Form.Group controlId="formGridAmountReceived">
        <Form.Label>Amount Received</Form.Label>
        <Form.Control as="number" placeholder="0"  {...register("amountReceived")}/>
      </Form.Group>

      <Form.Group controlId="formGridPreviousBalance">
        <Form.Label>Previous Balance</Form.Label>
        <Form.Control type="number" placeholder="0"  {...register("previousBalance", { required: "This field is required." })}/>
      </Form.Group>

      <Form.Group controlId="formGridTotalAmount">
        <Form.Label>Total Amount</Form.Label>
        <Form.Control type="number" placeholder="0"  {...register("totalAmount", { required: "This field is required." })}/>
      </Form.Group>

      <Form.Group controlId="formGridAmountPaid">
        <Form.Label>Amount Paid</Form.Label>
        <Form.Control type="number" placeholder="0"  {...register("amountPaid", { required: "This field is required." })}/>
      </Form.Group>

      <Form.Group controlId="formGridAmountPaidTo">
        <Form.Label>Amount Paid To</Form.Label>
        <Form.Control  placeholder="0"  {...register("amountPaidTo", { required: "This field is required." })}/>
      </Form.Group>

      <Form.Group controlId="formGridBalance">
        <Form.Label>Balance</Form.Label>
        <Form.Control type="number" placeholder="0"  {...register("balance", { required: "This field is required." })}/>
      </Form.Group>

      <Button variant="primary" type="submit"  >
        Add Record
      </Button>
    </Form>
  );
};

export default PartnerRecordForm;
