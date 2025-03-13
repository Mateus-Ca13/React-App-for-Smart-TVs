/*================================================================================

Desenvolvimento →   IPTV_SERVER_URL:'https://deviptv.oletelecom.com.br:8443/drm/services/web/v1';
Homologação →       IPTV_SERVER_URL: 'https://homologiptv.oletelecom.com.br:8443/drm/services/web/v1';
Produção →          IPTV_SERVER_URL: 'https://iptv.oletelecom.com.br:8443/drm/services/web/v1';

Documentação da API → http://docs.oletv.net.br/apidocs/br/com/firsti/drm/services/WebService.html

==================================================================================*/

// Objetos mutáveis globalmente acessíveis para armazenamento de informações para a camada do webservice

const globalSessionInfo ={
    deviceID: localStorage.getItem("deviceID"), 
    sessionToken: localStorage.getItem("sessionToken"), 
    IPTV_SERVER_URL: 'https://deviptv.oletelecom.com.br:8443/drm/services/web/v1' 
}; 

const globalDeviceInfo = {
    deviceBrand: '', 
    deviceModel: '', 
    deviceMacAddress: ''
}; 

export { globalDeviceInfo, globalSessionInfo }