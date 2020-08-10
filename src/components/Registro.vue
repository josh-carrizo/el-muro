<template>
<b-row>
    <b-col></b-col>
    <b-col>
        <b-form @submit="CreateUser" @reset="onReset" v-if="show">

            <b-form-group id="input-group-1" label="Your Name:" label-for="input-1">
                <b-form-input id="input-1" v-model="form.name" required        placeholder="Enter name"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Email address:" label-for="input-2"   description="We'll never share your email with anyone else.">
                <b-form-input id="input-2" v-model="form.email" type="email" required
                placeholder="Enter email">
                </b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="Your Password:" label-for="input-3"  >
                <b-form-input type="password" class="form-control" label-for="input-3"
                    name="password" required v-model="password" placeholder="Enter your password">
                </b-form-input>
            </b-form-group>

            <b-form-group id="input-group-4" label="Repeat Your Password:" label-for="input-4"  >
                <b-form-input type="password" class="form-control" label-for="input-4"
                    name="RepeatPassword" required v-model="RepeatPassword" placeholder="Repeat your password">
                </b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Create User</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
    </b-col>
    <b-col></b-col>
        <b-col>    
        <!--Login-->    
        <b-form @submit="Login" @reset="onReset" v-if="show">

            <b-form-group id="input-group-1-login" label="Your Name:" label-for="input-1-login">
                <b-form-input id="input-1-login" v-model="form.name" required        placeholder="Enter name"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2-login" label="Email address:" label-for="input-2-login"   description="We'll never share your email with anyone else.">
                <b-form-input id="input-2-login" v-model="form.email" type="email" required
                placeholder="Enter email">
                </b-form-input>
            </b-form-group>

             <b-form-group>
                <label>Password</label>
                <input type="password" class="form-control" label-for="input-3-login"
                    name="password" required v-model="password">
            </b-form-group>

            <b-button type="submit" variant="primary">Log In</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
        </b-col>
        <b-col></b-col>
  </b-row>
    
</template>

<script>


export default {
    name:'Registro',
    data() {
        return{
            form: {
            password:'',
            RepeatPassword:'',
            email: '',
            name: '',
            },
            show: true
        }

    },

    methods: {
        CreateUser() {

            if(this.password != this.RepeatPassword){
                alert('Ambas contraseñas deben coincidir');
                return;

            }
            const datos= {email:this.email, password: this.password}
            this.$store.dispatch('registerAction',datos)

            console.log('User Created')
        },
            /*firebase
                .auth()
                .createUserWithEmailAndPassword(this.form.RegisterEmail, this.form.RegisterPassword)
                .then(data => {
                data.user
                    .updateProfile({
                    displayEmail: this.form.email
                    })
                    .then(() => {});
                })
                .catch(err => {
                this.error = err.message;
                });
                    
        },*/
        LogIn(){
            console.log('Login user')

        },
        
        /*signOut() {
            firebase
                .auth()
                .signOut()
                .then(() => {
                this.$router.replace({
                    name: "/"
                });
                });
        },*/

        },
        onReset(evt) {
            evt.preventDefault()
            // Reset our form values

            this.form.email = ''
            this.form.name = ''
            this.form.password = ''
            this.form.RepeatPassword = ''
            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
            this.show = true
            })
        }
}


</script>