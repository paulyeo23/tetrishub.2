import { Info } from "../service/info.mjs";
import { register, login } from "../service/userTable.mjs";
import cookieParser from "cookie-parser";

export default function initUserController() {
  const Register = async (request, response) => {
    const loginDetails = request.body.loginDetails;
    const username = loginDetails.username;
    const password = loginDetails.password;
    const country = loginDetails.country;
    register(username, password, country).then((result) =>
      response.send(result),
    );
  };

  const Login = async (request, response) => {
    console.log(request.body);
    const loginDetails = request.body.loginDetails;
    const username = loginDetails.username;
    const password = loginDetails.password;
    login(username, password).then((result) => response.send(username));
  };

  return {
    Register,
    Login,
  };
}
