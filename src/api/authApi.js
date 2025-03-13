import { globalDeviceInfo } from "./core/globalSessionInfo";
import { sendWebserviceRequestJson } from "./core/sendWebserviceRequestJson";

const { deviceBrand, deviceModel, deviceMacAddress} = globalDeviceInfo

//===============================================================================================

export async function deviceSessionPasswordRegister (username, password) {
    
    const requestData = {
        action: "deviceSessionPasswordRegister",
        data: {
            username: username,
            password: password,
            brand: deviceBrand,
            model: deviceModel,
            device: "TV",
            macAddress: deviceMacAddress
        }
    };

    try {
        const returndata = await sendWebserviceRequestJson(requestData);
        return returndata;
    } catch (error) {
        console.error("Erro na solicitação:", error);
        throw error;
    }
}

//===============================================================================================

// Continuar criando funções (webservices.js)