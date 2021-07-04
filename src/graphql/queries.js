/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getActivity = /* GraphQL */ `
  query GetActivity($id: ID!) {
    getActivity(id: $id) {
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
export const listActivities = /* GraphQL */ `
  query ListActivities(
    $filter: ModelActivityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActivities(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncActivities = /* GraphQL */ `
  query SyncActivities(
    $filter: ModelActivityFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncActivities(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getSubActivity = /* GraphQL */ `
  query GetSubActivity($id: ID!) {
    getSubActivity(id: $id) {
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
export const listSubActivities = /* GraphQL */ `
  query ListSubActivities(
    $filter: ModelSubActivityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubActivities(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncSubActivities = /* GraphQL */ `
  query SyncSubActivities(
    $filter: ModelSubActivityFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSubActivities(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getDocument = /* GraphQL */ `
  query GetDocument($id: ID!) {
    getDocument(id: $id) {
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
export const listDocuments = /* GraphQL */ `
  query ListDocuments(
    $filter: ModelDocumentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDocuments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncDocuments = /* GraphQL */ `
  query SyncDocuments(
    $filter: ModelDocumentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDocuments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
