import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import Locals from './Locals';
import { errorBuilder } from '../../utils/builders';

export class Auth {
  public static verifyUserNamePassword(fastifyServer: FastifyInstance) {
    return function (request, reply, done) {
      console.log('VALIDATION: PASSWORD');
      done();
    };
  }

  public static verifyJWTToken(fastifyServer: FastifyInstance) {
    return async function (request: FastifyRequest, reply: FastifyReply, done) {
      console.log(
        '‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡ VALIDATION: JWT ‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡'
      );
      
      const authToken = request?.headers?.authorization?.split(' ')[1];
      const JWT = fastifyServer.jwt;

      if (!authToken) {
        reply.code(401).send({ error: 'invalid token' });
      }

      try {
        // const { userId, iat, exp } = JWT.verify(authToken);

        // const tokenExpireTime = Locals.config().tokenExpireTime;

        // const currentTimeStamp = Date.now();

        // const userDB = await User.findOne({ _id: userId });

        // if (exp - iat !== tokenExpireTime) {
        //   reply.code(401).send({ error: 'invalid token' });
        // }

        // if (currentTimeStamp > exp) {
        //   reply.code(401).send({ error: 'token expired' });
        // }

        // if (!userDB) {
        //   reply.code(401).send({ error: 'invalid token' });
        // }

        // request.userDetails = {
        //   ...userDB.toJSON(),
        // };
      } catch (error) {
        return done(error);
      }
    };
  }

  public static canUserAccess(accessPermission) {
    return async (request: FastifyRequest, response: FastifyReply) => {
      try {

        return;
        throw new Error('Permission denied!');
      } catch (error) {
        response.code(403);
        response.send(errorBuilder(error.message));
      }
    };
  }
}
