const ClassMutation = `
  type Mutation {
    createClass(graduationYear: Int!, members: [String]): Class
    addStudent(classId: String!, studentId: String!): Boolean
    removeStudent(classId: String!, studentId: String!): Boolean
    editClass(id: String!, number: Int, floor: Int!): Class
    deleteClass(id: String!): Class
  }
`;

export default () => [ClassMutation];