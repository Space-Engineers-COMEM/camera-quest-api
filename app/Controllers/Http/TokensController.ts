export default class TokensController {
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
