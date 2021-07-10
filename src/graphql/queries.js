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
        document
        hasDocument
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
        document
        hasDocument
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
export const getPartners = /* GraphQL */ `
  query GetPartners($id: ID!) {
    getPartners(id: $id) {
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
export const listPartners = /* GraphQL */ `
  query ListPartners(
    $filter: ModelPartnersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPartners(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncPartners = /* GraphQL */ `
  query SyncPartners(
    $filter: ModelPartnersFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPartners(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
