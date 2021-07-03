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
      subActivities {
        id
        name
        description
        amount
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
      subActivities {
        id
        name
        description
        amount
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
      subActivities {
        id
        name
        description
        amount
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createSubActivity = /* GraphQL */ `
  mutation CreateSubActivity(
    $input: CreateSubActivityInput!
    $condition: ModelSubActivityConditionInput
  ) {
    createSubActivity(input: $input, condition: $condition) {
      id
      name
      description
      amount
      createdAt
      updatedAt
    }
  }
`;
export const updateSubActivity = /* GraphQL */ `
  mutation UpdateSubActivity(
    $input: UpdateSubActivityInput!
    $condition: ModelSubActivityConditionInput
  ) {
    updateSubActivity(input: $input, condition: $condition) {
      id
      name
      description
      amount
      createdAt
      updatedAt
    }
  }
`;
export const deleteSubActivity = /* GraphQL */ `
  mutation DeleteSubActivity(
    $input: DeleteSubActivityInput!
    $condition: ModelSubActivityConditionInput
  ) {
    deleteSubActivity(input: $input, condition: $condition) {
      id
      name
      description
      amount
      createdAt
      updatedAt
    }
  }
`;
