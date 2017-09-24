const SubjectMutation = `
  type Mutation {
    createSubject(number: Int!, floor: Int!): Subject
    editSubject(id: String!, number: Int, floor: Int!): Subject
    deleteSubject(id: String!): Subject
  }
`;

export default () => [SubjectMutation];