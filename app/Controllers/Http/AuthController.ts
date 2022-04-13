export default class AuthController {
  /**
   * It attempts to authenticate the user using the email and password provided in the request body,
   * and if successful, returns the token
   * @param  - auth: The auth module.
   * @returns The token is being returned.
   */
  public async login({ auth, request, response }) {
    const email = request.input('email');
    const password = request.input('password');

    try {
      const token = await auth.use('api').attempt(email, password, {
        expiresIn: '2days',
      });
      return token.toJSON();
    } catch (error) {
      return response.unauthorized({ type: 'error', content: 'Wrong email or password' });
    }
  }

  /**
   * It checks if the token is in the database, if it is, it logs the user out and returns a revoke:
   * true object, otherwise it returns a revoke: false object
   * @param  - auth - The auth object
   * @returns The response is being returned.
   */
  public async logout({ auth, response }) {
    try {
      //check if the token is in the database
      const check = await auth.use('api').check();
      if (!check) {
        return { revoke: false };
      }
      await auth.logout();
      return { revoke: true };
    } catch (error) {
      return response.badRequest(error);
    }
  }
}
