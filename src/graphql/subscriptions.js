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
      document
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
export const onUpdateActivity = /* GraphQL */ `
  subscription OnUpdateActivity {
    onUpdateActivity {
      id
      name
      description
      userID
      userName
      amount
      document
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
export const onDeleteActivity = /* GraphQL */ `
  subscription OnDeleteActivity {
    onDeleteActivity {
      id
      name
      description
      userID
      userName
      amount
      document
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
export const onCreateSubActivity = /* GraphQL */ `
  subscription OnCreateSubActivity {
    onCreateSubActivity {
      id
      name
      description
      amount
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
