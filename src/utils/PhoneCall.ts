import Vonage from "@vonage/server-sdk";
// import key from '../keys/private.key';

class PhoneCall {
	#vongeInstanc;

	constructor() {
		this.#vongeInstanc = new Vonage({
			apiKey: "ef738ac9",
			apiSecret: "mkKq6DFF3FF4q7e0",
			applicationId: "a941a78e-8f38-4178-866b-891724f730c1",
			privateKey: "src/keys/private.key",
		});
	}

	createCall(toPhoneNumber) {
		return new Promise((resolve, reject) => {
			this.#vongeInstanc.calls.create(
				{
					to: [
						{
							type: "phone",
							number: "919978649419",
						},
					],
					from: {
						type: "phone",
						number: "919978649419",
					},
					ncco: [
						// {
						// 	action: "talk",
						// 	text: "This is a text to speech call from Vonage",
						// },
						{
							action: "conversation",
							from: toPhoneNumber,
							endpoint: [
								{
									type: "phone",
									number: "917359729081",
								},
							],
						},
					],
				},
				(error, response) => {
					if (error) reject(error);
					if (response) resolve(response);
				}
			);
		});
	}
}

export const demoCall = new PhoneCall();
