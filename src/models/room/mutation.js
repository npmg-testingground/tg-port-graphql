const RoomMutation = `
  type Mutation {
    createRoom(number: Int!, floor: Int!): Room
    editRoom(id: String!, number: Int, floor: Int!): Room
    deleteRoom(id: String!): Boolean
  }
`;

export default () => [RoomMutation];