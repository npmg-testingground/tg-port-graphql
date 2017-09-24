import axios from 'axios';
import env from '../../env.config';
import {
  ClassAPI
} from '../../APIs.js';
import {
  ReturnPromiseResponseRethinkDB
} from '../decorators.js';

const resolver = {
  Class: {
    members: ({members}, args, context, info) => {
      return context.loaders.user.loadMany(members);
    }
  },
  Mutation: {
    @ReturnPromiseResponseRethinkDB
    createClass: (_, {graduationYear, members}) => {
      return ClassAPI.post(`/classes`, {
        graduationYear,
        members
      })
    }
  }
};

export default resolver;