<template>
<b-row>
    <b-col>
        <div>
            <!-- Header -->
            <div class="header bg-gradient-success py-7 py-lg-8 pt-lg-9">
            <b-container>
                <div class="header-body text-center mb-7">
                <b-row class="justify-content-center">
                    <b-col xl="5" lg="6" md="8" class="px-5">
                    <h1 class="text-white">Welcome!</h1>
                    <p class="text-lead text-white">Use these awesome forms to  or create new account in your project for
                        free.</p>
                    </b-col>
                </b-row>
                </div>
            </b-container>
            <div class="separator separator-bottom separator-skew zindex-100">
                <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1"
                    xmlns="http://www.w3.org/2000/svg">
                <polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
                </svg>
            </div>
            </div>
            <!-- Page content -->
            <b-container class="mt--8 pb-5">
            <b-row class="justify-content-center">
                <b-col lg="5" md="7">
                <b-card no-body class="bg-secondary border-0 mb-0">
                    <b-card-header class="bg-transparent pb-5"  >
                    <div class="text-muted text-center mt-2 mb-3"><small>Sign in with</small></div>
                    <div class="btn-wrapper text-center">
                        <a href="#" class="btn btn-neutral btn-icon">
                        <span class="btn-inner--icon"><img src="img/icons/common/github.svg"></span>
                        <span class="btn-inner--text">Github</span>
                        </a>
                        <a href="#" class="btn btn-neutral btn-icon">
                        <span class="btn-inner--icon"><img src="img/icons/common/google.svg"></span>
                        <span class="btn-inner--text">Google</span>
                        </a>
                    </div>
                    </b-card-header>
                    <b-card-body class="px-lg-5 py-lg-5">
                    <div class="text-center text-muted mb-4">
                        <small>Or sign in with credentials</small>
                    </div>
                    <validation-observer v-slot="{handleSubmit}" ref="formValidator">
                        <b-form role="form" @submit.prevent="handleSubmit(onSubmit)">
                        <base-input alternative
                                    class="mb-3"
                                    name="Email"
                                    :rules="{required: true, email: true}"
                                    prepend-icon="ni ni-email-83"
                                    placeholder="Email"
                                    v-model="model.email">
                        </base-input>

                        <base-input alternative
                                    class="mb-3"
                                    name="Password"
                                    :rules="{required: true, min: 6}"
                                    prepend-icon="ni ni-lock-circle-open"
                                    type="password"
                                    placeholder="Password"
                                    v-model="model.password">
                        </base-input>

                        <b-form-checkbox v-model="model.rememberMe">Remember me</b-form-checkbox>
                        <div class="text-center">
                            <base-button type="primary" native-type="submit" class="my-4">Sign in</base-button>
                        </div>
                        </b-form>
                    </validation-observer>
                    </b-card-body>
                </b-card>
                <b-row class="mt-3">
                    <b-col cols="6">
                    <router-link to="/dashboard" class="text-light"><small>Forgot password?</small></router-link>
                    </b-col>
                    <b-col cols="6" class="text-right">
                    <router-link to="/register" class="text-light"><small>Create new account</small></router-link>
                    </b-col>
                </b-row>
                </b-col>
            </b-row>
            </b-container>
        </div>
    </b-col>
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
    computed: {
    error() {
      return this.$store.state.error;
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
        LogOut(){
            this.$store.dispatch('logOut')

        }
        


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