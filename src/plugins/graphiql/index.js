import { graphiqlHapi } from 'graphql-server-hapi';

const exportObject = {
  register: graphiqlHapi,
  options: {
    path: '/graphiql',
    graphiqlOptions: {
      endpointURL: '/graphql',
    }
  }
};

export default exportObject;