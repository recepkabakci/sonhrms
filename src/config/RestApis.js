const portAuth = '9090';
const portUser = '9091';
const version = '/v1/api';
const RestApis = {
    authservice: "http://localhost:"+portAuth+version,
    userservice: "http://localhost:"+portUser+version,    
    onlineservice: "http://localhost:"+portUser+version   
}
export default RestApis;
