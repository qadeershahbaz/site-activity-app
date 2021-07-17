import * as yup from "yup";
import moment from "moment";

yup.addMethod(yup.string, "validEntryDate", function (prevEntryDate,errorMessage) {
  return this.test(`test-entry-date`, errorMessage, function (value) {
    const { path, createError } = this;

    return (
      validateEntryDate(value,prevEntryDate) || createError({ path, message: errorMessage })
    );
  });
});

const validateEntryDate = (value,prevEntryDate) => {
  return moment(value).isSameOrAfter(prevEntryDate);
};

export const schema = (params) => {
    const {prevEntryDate}=params
  return yup.object().shape({
    entryDate: yup
      .string()
      .validEntryDate(prevEntryDate,
        "Please provide date greater than equal to previous record date"
      ),
    amountReceived: yup.string().required(),
    previousBalance: yup.string().required(),
    totalAmount: yup.string().required(),
    amountPaid: yup.string().required(),
    balance: yup.string().required(),
    amountPaidTo: yup.string().required(),
  });
};
