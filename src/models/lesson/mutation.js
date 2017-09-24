const LessonMutation = `
  type Mutation {
    createLesson(number: Int!, floor: Int!): Lesson
    editLesson(id: String!, number: Int, floor: Int!): Lesson
    deleteLesson(id: String!): Boolean
  }
`;

export default () => [LessonMutation];