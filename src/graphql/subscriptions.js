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
export const onUpdateActivity = /* GraphQL */ `
  subscription OnUpdateActivity {
    onUpdateActivity {
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
export const onDeleteActivity = /* GraphQL */ `
  subscription OnDeleteActivity {
    onDeleteActivity {
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
      owner
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
      owner
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
      owner
    }
  }
`;
export const onCreateDocument = /* GraphQL */ `
  subscription OnCreateDocument {
    onCreateDocument {
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
export const onUpdateDocument = /* GraphQL */ `
  subscription OnUpdateDocument {
    onUpdateDocument {
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
export const onDeleteDocument = /* GraphQL */ `
  subscription OnDeleteDocument {
    onDeleteDocument {
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
