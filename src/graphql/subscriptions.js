/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateActivity = /* GraphQL */ `
  subscription OnCreateActivity {
    onCreateActivity {
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
export const onUpdateActivity = /* GraphQL */ `
  subscription OnUpdateActivity {
    onUpdateActivity {
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
export const onDeleteActivity = /* GraphQL */ `
  subscription OnDeleteActivity {
    onDeleteActivity {
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
export const onCreateSubActivity = /* GraphQL */ `
  subscription OnCreateSubActivity {
    onCreateSubActivity {
      id
      name
      description
      amount
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSubActivity = /* GraphQL */ `
  subscription OnUpdateSubActivity {
    onUpdateSubActivity {
      id
      name
      description
      amount
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSubActivity = /* GraphQL */ `
  subscription OnDeleteSubActivity {
    onDeleteSubActivity {
      id
      name
      description
      amount
      createdAt
      updatedAt
    }
  }
`;
