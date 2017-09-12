import { types } from '../models';

const RootQuery = `
    type RootQuery {
        user(id: String!): User
        users: [User]
        rooms: [Room]
        subjects: [Subject]
        classes: [Class]
        lessons: [Lesson]
        today: [Lesson]
    }
`;

export default () => [RootQuery, ...types];