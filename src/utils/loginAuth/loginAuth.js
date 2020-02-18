export const authUser = {
  isAuth: false,
  authenticate(redirectUser) {
    this.isAuth = true;
    localStorage.getItem('AccessToken');
    redirectUser();
  },
  signout(redirectUser) {
    this.isAuth = false;
    localStorage.removeItem('AccessToken');
    redirectUser();
  },
};
