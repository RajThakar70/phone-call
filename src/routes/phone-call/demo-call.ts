import { FastifyRequest, FastifyReply } from "fastify";
import { errorBuilder, responseBuilder } from "../../utils/builders";
import { demoCall } from "../../utils/PhoneCall";

export class DemoCall {
	public static async perform(
		req: FastifyRequest<{ Body: any, Querystring: {to: string} }>,
		rep: FastifyReply
	): Promise<any> {
		try {
      const { to } = req.query;
			const response = await demoCall.createCall(to);

			rep.code(200);
			return responseBuilder({ response });
		} catch (err) {
			rep.code(500);
			return err;
		}
	}
}
