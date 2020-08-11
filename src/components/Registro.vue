<template>
<b-row>
    <b-col></b-col>
    <b-col>
        <!-- REGISTRO USUARIOS
        <b-form @submit="CreateUser" @reset="onReset" v-if="show">-->
        <b-form @submit.prevent="CreateUser"  v-if="show">

            <b-form-group id="input-group-1" label="Your Name:" label-for="input-1">
                <b-form-input id="input-1" v-model="formCreate.name" required   placeholder="Enter name"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Email address:" label-for="input-2"   description="We'll never share your email with anyone else.">
                <b-form-input id="input-2" v-model="formCreate.email" type="email" required
                placeholder="Enter email">
                </b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="Your Password:" label-for="input-3"  >
                <b-form-input type="password" class="form-control" label-for="input-3"
                    name="password" required v-model="formCreate.password" placeholder="Enter your password">
                </b-form-input>
            </b-form-group>

            <b-form-group id="input-group-4" label="Repeat Your Password:" label-for="input-4"  >
                <b-form-input type="password" class="form-control" label-for="input-4"
                    name="RepeatPassword" required v-model="formCreate.RepeatPassword" placeholder="Repeat your password">
                </b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Create User</b-button>
            <!--<b-button type="reset" variant="danger">Reset</b-button>-->
        </b-form>
    </b-col>
    <b-col></b-col>
        <b-col>    
        <!--Login   
        <b-form @submit="LogIn" @reset="onResetLogIn" v-if="show">-->
        <b-form @submit.prevent="LogIn" v-if="show">

            <b-form-group id="input-group-1-login" label="Your Name:" label-for="input-1-login">
                <b-form-input id="input-1-login" v-model="formLogIn.name" required placeholder="Enter name"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2-login" label="Email address:" label-for="input-2-login" >
                <b-form-input id="input-2-login" v-model="formLogIn.email" type="email" required
                placeholder="Enter email">
                </b-form-input>
            </b-form-group>

             <b-form-group b-form-group id="input-group-3-login" label="Password:" label-for="input-3-login" >
                <b-form-input type="password" class="form-control" label-for="input-3-login"
                    name="password" required v-model="formLogIn.password" placeholder="Enter email">
                </b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Log In</b-button>
            <!--<b-button type="reset" variant="danger">Reset</b-button>-->
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
            formCreate: {
                password:'',
                RepeatPassword:'',
                email: '',
                name: '',
            },
            formLogIn:{
                name:'',
                password:'',
                email:''
            },
            
            show: true
        }

    },
    methods: {
        CreateUser() {

            if(this.formCreate.password != this.formCreate.RepeatPassword){
                alert('Ambas contraseñas deben coincidir');
                return;

            } 
            const datos= {name:this.formCreate.name, email:this.formCreate.email, password: this.formCreate.password}
            this.$store.dispatch('registerAction',datos)

        },
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

        }/*,
        onReset(evt) {
            evt.preventDefault()
            // Reset our form values

            this.formCreate.email = '';
            this.formCreate.name = '';
            this.formCreate.password = '';
            this.formCreate.RepeatPassword = '';

        },
        onResetLogIn(evt) {
            evt.preventDefault()
            // Reset our form values

            this.formLogIn.email = '';
            this.formLogIn.name = '';
            this.formLogIn.password = '';

        },*/
}


</script>