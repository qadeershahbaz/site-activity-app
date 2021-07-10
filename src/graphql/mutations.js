/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createActivity = /* GraphQL */ `
  mutation CreateActivity(
    $input: CreateActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    createActivity(input: $input, condition: $condition) {
      id
      name
      description
      userID
      userName
      amount
      document
      hasDocument
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateActivity = /* GraphQL */ `
  mutation UpdateActivity(
    $input: UpdateActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    updateActivity(input: $input, condition: $condition) {
      id
      name
      description
      userID
      userName
      amount
      document
      hasDocument
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteActivity = /* GraphQL */ `
  mutation DeleteActivity(
    $input: DeleteActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    deleteActivity(input: $input, condition: $condition) {
      id
      name
      description
      userID
      userName
      amount
      document
      hasDocument
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createPartners = /* GraphQL */ `
  mutation CreatePartners(
    $input: CreatePartnersInput!
    $condition: ModelPartnersConditionInput
  ) {
    createPartners(input: $input, condition: $condition) {
      id
      name
      group
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updatePartners = /* GraphQL */ `
  mutation UpdatePartners(
    $input: UpdatePartnersInput!
    $condition: ModelPartnersConditionInput
  ) {
    updatePartners(input: $input, condition: $condition) {
      id
      name
      group
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deletePartners = /* GraphQL */ `
  mutation DeletePartners(
    $input: DeletePartnersInput!
    $condition: ModelPartnersConditionInput
  ) {
    deletePartners(input: $input, condition: $condition) {
      id
      name
      group
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createPartnerRecords = /* GraphQL */ `
  mutation CreatePartnerRecords(
    $input: CreatePartnerRecordsInput!
    $condition: ModelPartnerRecordsConditionInput
  ) {
    createPartnerRecords(input: $input, condition: $condition) {
      id
      entryDate
      amountReceived
      previousBalance
      totalAmount
      AmountPaid
      AmountPaidTo
      Balance
      Remarks
      partnerId
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updatePartnerRecords = /* GraphQL */ `
  mutation UpdatePartnerRecords(
    $input: UpdatePartnerRecordsInput!
    $condition: ModelPartnerRecordsConditionInput
  ) {
    updatePartnerRecords(input: $input, condition: $condition) {
      id
      entryDate
      amountReceived
      previousBalance
      totalAmount
      AmountPaid
      AmountPaidTo
      Balance
      Remarks
      partnerId
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deletePartnerRecords = /* GraphQL */ `
  mutation DeletePartnerRecords(
    $input: DeletePartnerRecordsInput!
    $condition: ModelPartnerRecordsConditionInput
  ) {
    deletePartnerRecords(input: $input, condition: $condition) {
      id
      entryDate
      amountReceived
      previousBalance
      totalAmount
      AmountPaid
      AmountPaidTo
      Balance
      Remarks
      partnerId
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
