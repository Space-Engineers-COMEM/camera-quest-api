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
      return response.badRequest({ type: 'error', content: 'Bad pseudo or password' });
    }
  }

  public async logout({ auth, response }) {
    try {
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
