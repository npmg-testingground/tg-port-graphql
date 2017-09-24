const resolver = {
  Subject: {
    
  },
  Mutation: {
    // createSubject: (_, args) => {
    //   return SubjectAPI.post('/subjects', args).then(result => {
    //     return result.data.changes[0].new_val;
    //   })
    // },
    // editSubject: (_, {id, ...args}) => {
    //   return SubjectAPI.patch(`/subjects/${id}`, args).then(result => {
    //     return result.data.changes[0].new_val || {id, ...args};
    //   })
    // },
    // deleteSubject: (_, {id}) => {
    //   return SubjectAPI.delete(`/subjects/${id}`).then(() => true);
    // }
  }
};

export default resolver;