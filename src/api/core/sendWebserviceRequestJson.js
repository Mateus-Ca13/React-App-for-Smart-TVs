import { globalSessionInfo } from "./globalSessionInfo";
const { deviceID, sessionToken, IPTV_SERVER_URL } = globalSessionInfo; 
//===============================================================================================

// Função responsável pela estruturação e envio de requisições.

export async function sendWebserviceRequestJson (jsonRequestLoad) {

	try {
		const returndata = await fetch(IPTV_SERVER_URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"X-DEVICE-ID": deviceID,
				"X-SESSION-TOKEN": sessionToken,
			},
			body: JSON.stringify(jsonRequestLoad),
		});

		if (!returndata.ok) {
			throw new Error("Erro na requisição: " + returndata.status);
		}

		return returndata;

	} catch (error) {
		return { status: "errnetwork", message: "Connection error!" };
	}
}