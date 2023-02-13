import axios from "axios";
import { LOGIN_REQUEST } from "../../constants/requests";

/**
 *
 * @typedef  {Object} AuthInfo
 * @property {string} email
 * @property {string} password
 */

export class AuthService {
  /**
   * @desc     Request to access to the application
   * @param    {AuthInfo} info
   * @returns  User authenticated, token access
   * @access   Public
   * @method   POST
   */
  async logIn(info) {
    const { data } = await axios.post(LOGIN_REQUEST, {
      ...info,
    });
    return { user: data.result, token: data.token };
  }

  /**
   * @desc    Request to log out from the application
   * @returns User authenticated
   * @access  Public
   * @method  POST
   */
  async logOut() {}
}
