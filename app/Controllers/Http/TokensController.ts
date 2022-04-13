export default class TokensController {
  /**
   * If the user is logged in, return true, otherwise return false
   * @param  - auth - This is the auth object that is passed to the controller.
   * @returns isLoggedIn: true or false
   */
  public async isLoggedIn({ auth }) {
    try {
      await auth.use('api').authenticate();
      const isLoggedIn = auth.use('api').isAuthenticated;
      return { isLoggedIn: isLoggedIn };
    } catch {
      return { isLoggedIn: false };
    }
  }
}
