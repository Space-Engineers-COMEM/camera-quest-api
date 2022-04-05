export default class AuthController {
  public async login({ auth, request, response }) {
    const email = request.input('email');
    const password = request.input('password');

    try {
      const token = await auth.use('api').attempt(email, password, {
        expiresIn: '2days',
      });
      return token.toJSON();
    } catch (error) {
      return response.badRequest(error);
    }
  }
  public async logout({ auth, response }) {
    try {
      await auth.use('api').revoke();
      return { revoked: true };
    } catch (error) {
      return response.send(error);
    }
  }
}
