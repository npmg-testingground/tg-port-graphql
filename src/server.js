import Hapi from 'hapi';
import JWT from 'jsonwebtoken';

import plugins from './plugins';
const server = new Hapi.Server();

server.connection({
  port: 80,
  routes: {
    cors: true
  }
});

// server.ext('onRequest', (request, reply) => {
//   // Take the Authorization header from the requiest
//   const auth = request.headers.authorization;
//   const secret = process.env.SERVER_SECRET;
//   if (auth && auth !== null) {
//     return JWT.verify(auth, secret, (err, decoded) => {
//       if (err) {
//         return reply({
//           message: 'Something went wrong with the authorization token!'
//         });
//       }
//       request.auth = decoded;
//       return reply.continue();
//     });
//   }

//   return reply.continue();
// });

server.register(plugins, err => {
  if (err) { throw err; }
});

server.start(err => {
  if (err) { throw err; }

  console.log(`Server running at: ${server.info.uri}`);
});
export default server;