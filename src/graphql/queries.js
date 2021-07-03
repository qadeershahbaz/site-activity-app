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
      nextToken
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
      createdAt
      updatedAt
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
