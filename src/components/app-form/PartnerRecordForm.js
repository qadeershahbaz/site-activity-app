import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { DatePicker } from "antd-mobile";
import { useEffect } from "react";
import moment from "moment";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../containers/partners/add-partner-records/partner-form-validation";
import ErrorField from "../error-field/ErrorFiled.component";

const PartnerRecordForm = (props) => {
  const {
    handleFormSubmit,
    previousRecord: { previousBalance, entryDate: prevEntryDate },
  } = props;
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema({ prevEntryDate })),
  });

  const amountReceived = watch("amountReceived");
  const amountPaid = watch("amountPaid");

  const onSubmit = async (data) => {
    handleFormSubmit(data);
  };

  useEffect(() => {
    setValue("previousBalance", previousBalance);
  }, [previousBalance]);

  useEffect(() => {
    setValue(
      "totalAmount",
      parseFloat(amountReceived) + parseFloat(getValues("previousBalance"))
    );
  }, [amountReceived]);

  useEffect(() => {
    setValue(
      "balance",
      parseFloat(getValues("totalAmount")) - parseFloat(amountPaid)
    );
  }, [amountPaid]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="formGridDate">
        <Form.Label>Date</Form.Label>
        <DatePicker
          mode="date"
          onChange={(entryDate) =>
            setValue("entryDate", moment(entryDate).format("YYYY-MM-DD"))
          }
        >
          <Form.Control
            required
            placeholder="YYYY-MM-DD"
            {...register("entryDate")}
          />
        </DatePicker>
        <ErrorField message={errors.entryDate?.message} />
      </Form.Group>

      <Form.Group controlId="formGridAmountReceived">
        <Form.Label>Amount Received</Form.Label>
        <Form.Control
          required
          type="number"
          placeholder="0"
          {...register("amountReceived")}
        />
      </Form.Group>

      <Form.Group controlId="formGridPreviousBalance">
        <Form.Label>Previous Balance</Form.Label>
        <Form.Control
          required
          readOnly
          type="number"
          placeholder="0"
          {...register("previousBalance")}
        />
      </Form.Group>

      <Form.Group controlId="formGridTotalAmount">
        <Form.Label>Total Amount</Form.Label>
        <Form.Control
          required
          type="number"
          placeholder="Amount Received + Previous Balance"
          {...register("totalAmount")}
        />
      </Form.Group>

      <Form.Group controlId="formGridAmountPaid">
        <Form.Label>Amount Paid</Form.Label>
        <Form.Control
          required
          type="number"
          placeholder="0"
          {...register("amountPaid")}
        />
      </Form.Group>

      <Form.Group controlId="formGridBalance">
        <Form.Label>Balance</Form.Label>
        <Form.Control
          required
          readOnly
          type="number"
          placeholder="0"
          {...register("balance")}
        />

        <Form.Group controlId="formGridAmountPaidTo">
          <Form.Label>Amount Paid To</Form.Label>
          <Form.Control
            required
            placeholder="..."
            {...register("amountPaidTo")}
          />
        </Form.Group>
      </Form.Group>

      <Button variant="primary" type="submit">
        Add Record
      </Button>
    </Form>
  );
};

export default PartnerRecordForm;
