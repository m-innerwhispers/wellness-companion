/*
   REGISTER USER
*/
function registerUser(userData) {
  localStorage.setItem(
    'iwUser',
    JSON.stringify(userData)
  );
}
/*
   LOGIN USER
*/
function loginUser(email, password) {
  const user =
  JSON.parse(localStorage.getItem('iwUser'));
  if(
    user &&
    user.email === email &&
    user.password === password
  ) {
    localStorage.setItem(
      'iwSession',
      'active'
    );
    return true;
  }
  return false;
}
/*
   LOGOUT USER
*/
function logoutUser() {
  localStorage.removeItem('iwSession');
  window.location.href = 'login.html';
}
/*
   CHECK SESSION
*/
function checkAuth() {
  const session =
  localStorage.getItem('iwSession');
  if(!session) {
    window.location.href = 'login.html';
  }
}
