import { FastifyInstance, FastifyError } from 'fastify';

// import AuthenticationRoutes from './authentication';
import PhoneCallRoutes from './phone-call';

const serverRoutes = [
  // ...AuthenticationRoutes,
  ...PhoneCallRoutes
];
const secureRoutes = [
  
];

export default class Route {
  public static addRoutes(
    server: FastifyInstance,
    options: any,
    callback: (error?: FastifyError) => void
  ) {
    serverRoutes.forEach((routeJSON) => {
      server.route(routeJSON);
    });

    secureRoutes.forEach((routeJSON: any) => {
      routeJSON.preValidation = server.auth([server.validateJWT]);
      server.route(routeJSON);
    });

    callback();
  }
}
