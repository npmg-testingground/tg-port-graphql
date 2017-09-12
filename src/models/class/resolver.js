import axios from 'axios';
import env from '../../env.config';

const resolver = {
  Class: {
    members: ({members}, args, context, info) => {
      console.log(members, args, context, info)

      return context.loaders.user.loadMany(members);
    }
  }
};

export default resolver;