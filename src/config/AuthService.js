import RestApis from './RestApis';
const AuthService={
    forgotPassword: RestApis.authservice +'/auth/forgotpassword',
    login: RestApis.authservice +'/auth/dologin',
}
export default AuthService;