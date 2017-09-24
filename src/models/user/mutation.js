const UserMutation = `
  type Mutation {
    createUser(number: Int!, floor: Int!): User
    editUser(id: String!, number: Int, floor: Int!): User
    deleteUser(id: String!): User
  }
`;

export default () => [UserMutation];