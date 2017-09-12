import { graphqlHapi } from  'graphql-server-hapi';
import { formatError } from  'apollo-errors';

import schema from  '../../schema';
import env from '../../env.config';
import loaders from './loaders';

export default {
  register: graphqlHapi,
  options: {
    path: '/graphql',
    graphqlOptions: request => ({
      schema,
      formatError,
      context: {
        loaders,
        auth: request.auth
      }
    })
  }
};