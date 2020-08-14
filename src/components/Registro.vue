<template> 
<div class="login- "> 
    <!-- Header -->
    <div class="header  bg-gradient-success py-7 py-lg-8 pt-lg-9">
        <b-container>
            <div class="header-body  text-center mb-7">
                <b-row class="justify-content-center">
                    <b-col xl="5" lg="6" md="8" class="px-5">
                        <h1 class="text-black">Welcome!</h1>
                        <p class="text-lead text-black">blablabla</p>
                    </b-col>
                </b-row>
            </div>
        </b-container>
        <div class="separator separator-bottom separator-skew zindex-100">
            <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <polygon class="adorno" points="2560 0 2560 100 0 100"></polygon>
            </svg>
        </div>
    </div>

    <b-row class=" body-row">
        <b-col sm="1" md="1" lg="1" xl="1"></b-col>
    <b-col>
        <!-- REGISTRO USUARIOS
        <b-form @submit="CreateUser" @reset="onReset" v-if="show">-->
        <b-card no-body class="bg-secondary border-0 mb-0" >
            <b-card-body class="px-lg-5 py-lg-5">
                <b-form @submit.prevent="CreateUser"  v-if="show">

                    <b-form-group id="input-group-1" label="Your Name:" label-for="input-1">
                        <b-form-input id="input-1" v-model="formCreate.name" required   placeholder="Enter name"
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-2" label="Email address:" label-for="input-2"   description="We'll never share your email with anyone else." >
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
            </b-card-body>
        </b-card>
    </b-col>
    <b-col sm="1" md="1" lg="1" xl="1"></b-col>
        <b-col> 
            <b-card no-body class="bg-secondary cardColor border-0 mb-0">
                <b-card-body class="px-lg-5 py-lg-5">
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
                </b-card-body>
            </b-card>
        </b-col>
        <b-col sm="1" md="1" lg="1" xl="1"></b-col>
    </b-row>
</div>    
    
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
            const datosLogIn= {email:this.formLogIn.email, password: this.formLogIn.password}
            this.$store.dispatch('logIn',datosLogIn)
           

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
<style scoped>
.body-row{
    background-color: #17a2b8;
}
.adorno{
    fill: #17a2b8;
}

.text-black{
    color:black
}

.text-white{
    color:white
}
</style>