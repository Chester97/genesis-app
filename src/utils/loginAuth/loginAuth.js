const isAuthenticated = localStorage.getItem('AccessToken');
export const loginRedirectPath = isAuthenticated ? '/content' : '/login';
