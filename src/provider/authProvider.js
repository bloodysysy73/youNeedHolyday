export const emailAndPasswordAuthProvider = (firebase) => {
    return {
        login: ({ username, password }) => {
            return firebase.auth().signInWithEmailAndPassword(username, password)
                .then(result => {

                    var user = firebase.auth().currentUser;
                    var email, token;
                    if (user != null) {
                        //name = user.displayName;
                        email = user.email;
                        token = user.xa;
                        //photoUrl = user.photoURL;
                        //emailVerified = user.emailVerified;
                        //uid = user.uid;  
                    }

                    localStorage.setItem('user', JSON.stringify(user));
                    localStorage.setItem('userEmail', email);
                    localStorage.setItem('token', token);


                    return Promise.resolve()
                })
                .catch(function (error) {
                    return Promise.reject(error.message)
                })
        },
        logout: () => {
            return firebase.default.auth().signOut().then(function () {
                localStorage.removeItem('user')
                localStorage.removeItem('userEmail')
                localStorage.removeItem('token')
                localStorage.removeItem('permissions')
                return Promise.resolve()
            }).catch(function (error) {
                return Promise.reject(error.message)
            })
        },
        checkAuth: () => {
            if (localStorage.getItem('user')) {
                return Promise.resolve()
            }
            return Promise.reject({ redirectTo: '/login' })
        },
        // : Promise.reject()
        checkError: error => Promise.resolve(),

        getPermissions: (params) => {
            const role = localStorage.getItem('permissions');
            return role ? Promise.resolve(role) : Promise.reject();
        }
    }
}