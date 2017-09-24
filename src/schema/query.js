import { types } from '../models';

const RootQuery = `
    type RootQuery {
        user(id: String!): User
        users: [User]
        room(id: String!): Room
        rooms: [Room]
        subject(id: String!): Subject
        subjects: [Subject]
        class(id: String!): Class
        classes: [Class]
        lesson(id: String!): Lesson
        lessons: [Lesson]
        today: [Lesson]
    }
`;

export default () => [RootQuery, ...types];