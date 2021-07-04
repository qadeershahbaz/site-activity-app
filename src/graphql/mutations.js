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
      document {
        id
        name
        secret
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      subActivities {
        id
        name
        description
        amount
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
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
      document {
        id
        name
        secret
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      subActivities {
        id
        name
        description
        amount
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
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
      document {
        id
        name
        secret
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      subActivities {
        id
        name
        description
        amount
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createDocument = /* GraphQL */ `
  mutation CreateDocument(
    $input: CreateDocumentInput!
    $condition: ModelDocumentConditionInput
  ) {
    createDocument(input: $input, condition: $condition) {
      id
      name
      secret
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateDocument = /* GraphQL */ `
  mutation UpdateDocument(
    $input: UpdateDocumentInput!
    $condition: ModelDocumentConditionInput
  ) {
    updateDocument(input: $input, condition: $condition) {
      id
      name
      secret
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteDocument = /* GraphQL */ `
  mutation DeleteDocument(
    $input: DeleteDocumentInput!
    $condition: ModelDocumentConditionInput
  ) {
    deleteDocument(input: $input, condition: $condition) {
      id
      name
      secret
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
