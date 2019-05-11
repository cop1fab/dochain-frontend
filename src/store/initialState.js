module.exports = {
  currentUser: {
    isAuth: localStorage.getItem('token') !== null,
    loggingIn: false,
    signingUp: false,
    loginError: '',
    loginForm: {
      username: '',
      password: '',
    },
    loginFormError: {
      username: '',
      password: '',
    },
    data: {
      token: localStorage.getItem('token'),
    },
  },
  user: {
    loadingSingleUser: true,
    submittingUsers: false,
    submittingSingleUser: false,
    requestError: '',
    singleUser: {},
    singleUserForm: {
      id: '',
      avatar: '',
      username: '',
      email: '',
      firstName: '',
      lastName: '',
      middleName: '',
      gender: '',
      birtDate: '',
      userType: '',
      phone: '',
      status: '',
      createdAt: '',
      updatedAt: '',
    },
  },
};
