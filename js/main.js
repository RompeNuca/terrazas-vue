// var urlUsers = 'http://localhost:3000/api/users';
//
// new Vue({
//   el: '#app',
//   created: function() {
//     this.getUsers();
//   },
//   data:{
//     lists: []
//   },
//   methods: {
//     getUsers: function() {
//       this.$http.get(urlUsers).then(function(res){
//         this.lists = res;
//       })
//     }
//   }
// })
var urlUsers = 'http://localhost:3000/api/users';
var urlSignIn = 'http://localhost:3000/api/signin';

new Vue({
  el: '#app',
  created: function() {
    this.getUsers();
  },
  data: {
    lists: []
  },
  methods: {
    getUsers: function() {
      axios.get(urlUsers)
        .then(response => {
          this.lists = response.data
        })
        .catch(error => {
          console.log(error);
        })
    },
    signInUser: function() {
      axios.post(urlSignIn, {
          email: this.txtEmail,
          password: this.txtPassword
        })
        .then(function(response) {
          console.log(response.data);
        })
        .then(function(data) {
          localStorage.setItem('token', data.token)
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
})
