import { RoomAPI } from '../../APIs';

const resolver = {
  Room: {
    
  },
  Mutation: {
    createRoom: (_, args) => {
      return RoomAPI.post('/rooms', args).then(result => {
        return result.data.changes[0].new_val;
      })
    },
    editRoom: (_, {id, ...args}) => {
      return RoomAPI.patch(`/rooms/${id}`, args).then(result => {
        return result.data.changes[0].new_val;
      })
    },
    deleteRoom: (_, {id}) => {
      return RoomAPI.delete(`/rooms/${id}`).then(() => true);
    }
  }
};

export default resolver;