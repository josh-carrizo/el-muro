<template>
  <div class="container">
  <div class="left-side">
    <img class="left-side-img" src="https://source.unsplash.com/category/people" />
    <div class="left-side-bg">
      <div class="company-name">CONNECT <span style="font-style: italic; color:#FFF;">365</span></div>
  </div>
  </div>
    <div class="right-side">
      <div class="sign-in-container login-font">
        <div class="sign-in">
          <button id="signin" class="btn btn-default btn-header active" type="submit">Sign In</button>
        </div>
        <div class="sign-up">
          <button id="signup" class="btn btn-default btn-header" type="submit">Sign Up</button>
        </div>
        <div id="signup-tab" class="sign-up-information-container" style="display:none;">
          <div class="prompt-field">USERNAME</div>
            <input type="text" name="login-name" class="input-field" placeholder="Create a username">
          <div class="prompt-field">PASSWORD</div>
            <input type="password" name="login-password" class="input-field" placeholder="*************">
          <div class="prompt-field">E-MAIL ADDRESS</div>
            <input type="text" name="login-email" class="input-field" placeholder="Enter your e-mail address">
          <div class="terms-container">
             <input type="checkbox" class="terms-checkbox" value="terms_checkbox">
             <label class="terms-prompt">I accept the <span style="border-bottom: 1px solid #47C1B9">terms and conditions</span></label>
          </div>
          
          <button class="btn btn-default btn-signup" type="submit">SIGN UP <i class="fa fa-arrow-right" aria-hidden="true"></i></button>
        </div>
        
        <div id="signin-tab" class="sign-up-information-container">
            <div class="prompt-field">USERNAME</div>
            <input type="text" name="login-name" class="input-field">
            <div class="prompt-field">PASSWORD</div>
            <input type="password" name="login-password" class="input-field">
          <div class="terms-container">
              <label class="terms-prompt"><span style="border-bottom: 1px solid #47C1B9">Forgot your password?</span></label>
            </div>
            <button class="btn btn-default btn-signup" type="submit">SIGN IN <i class="fa fa-arrow-right" aria-hidden="true"></i></button>
        </div>
      </div>
  </div>
</div>
</template>

<script>
export default {
    name:'Login2',
    mounted(){
       
    $("#signup").click(function(){
        $("#signin-tab").css("display", "none");
        $("#signup").css("color", "#47C1B9");
        $("#signin").css("color", "#FAFAFA");
        $("#signup-tab").css("display", "");
    }); 
  
    $("#signin").click(function() {
        $("#signup-tab").css("display", "none");
        $("#signin").css("color", "#47C1B9");
        $("#signup").css("color", "#FAFAFA");
        $("#signin-tab").css("display", "");
    });

    }
}
</script>

<style scoped>

html, body {
	 margin: 0;
	 padding: 0;
	 min-height: 100vh;
	 min-width: 100vw;
}
 .container {
	 display: flex;
	 box-sizing: border-box;
	 padding: 0;
	 margin: 0;
	 width: 100%;
	 min-height: 100vh;
}
 .container .left-side, .container .right-side {
	 flex: 1 1 0;
}
 .left-side {
	 overflow: hidden;
	 position: relative;
}
 .left-side .left-side-bg {
	 position: absolute;
	 left: 0px;
	 top: 0px;
	 bottom: 0px;
	 right: 0px;
	 z-index: 2;
	 opacity: 0.7;
	 background: #7ADDD6;
	 background: -webkit-linear-gradient(#92EBE4,#37B9B1);
	 background: -o-linear-gradient(#92EBE4,#37B9B1);
	 background: -moz-linear-gradient(#92EBE4,#37B9B1);
	 background: linear-gradient(#92EBE4,#37B9B1);
}
 .left-side .left-side-bg .company-name {
	 margin: 30px;
	 font-size: 28px;
	 font-family: Helvetica, sans-serif;
	 color: #000;
	 opacity: 1.0;
}
 .left-side .left-side-img {
	 width: inherit;
	 height: 100%;
	 position: relative;
	 z-index: 1;
}
 .right-side {
	 position: relative;
	 z-index: 3;
	 background: #093548;
	 background: -webkit-linear-gradient(#15657E,#093548);
	 background: -o-linear-gradient(#15657E,#093548);
	 background: -moz-linear-gradient(#15657E,#093548);
	 background: linear-gradient(#15657E,#093548);
}
 .right-side .btn-header {
	 font-family: Helvetica, sans-serif;
	 font-size: 20px;
	 letter-spacing: 1px;
	 color: #FAFAFA;
	 border-style: none;
	 border-bottom: 1px solid #47C1B9;
	 background-color: transparent;
	 padding: 10px 0px;
	 border-radius: 0px;
}
 .right-side .btn-header:active, .right-side .btn-header:focus, .right-side .btn-header:hover, .right-side .btn-header.active {
	 border: none;
	 box-shadow: none;
	 border-bottom: 1px solid #47C1B9;
	 background-color: transparent;
	 outline: none;
	 color: #47C1B9;
}
 .sign-in-container {
	 width: 60%;
	 margin: 0 auto;
	 margin-top: 20%;
	 margin-bottom: 15%;
	 background: transparent;
	 color: #FFF;
}
 .sign-in-container .sign-in {
	 width: 50%;
	 float: left;
}
 .sign-in-container .sign-up {
	 width: 50%;
	 overflow: hidden;
}
 .sign-in-container a {
	 color: #FFF;
	 text-decoration: none;
}
 .sign-in-container a:active, .sign-in-container a:hover {
	 border-bottom: 1px solid #37B9B1;
}
 .sign-in-container .sign-up-information-container {
	 height: 75%;
	 width: 100%;
	 margin-top: 80px;
}
 .sign-in-container .sign-up-information-container .prompt-field {
	 font-size: 16px;
	 margin-top: 38px;
	 margin-bottom: 25px;
}
 .sign-in-container .sign-up-information-container input[type="password"] {
	 -webkit-text-security: disc;
}
 .sign-in-container .sign-up-information-container .input-field {
	 width: 100%;
	 font-size: 14px;
	 letter-spacing: 0.5px;
	 background: transparent;
	 border: none;
	 border-bottom: 1px solid #A09F9F;
	 color: #A09F9F;
}
 .sign-in-container .sign-up-information-container .input-field:active, .sign-in-container .sign-up-information-container .input-field:focus {
	 border: none;
	 border-bottom: 1px solid #A09F9F;
	 outline-color: transparent;
}
 .sign-in-container .sign-up-information-container .terms-container {
	 margin-top: 38px;
	 font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
	 font-size: 12px;
	 letter-spacing: 1px;
}
 .sign-in-container .sign-up-information-container .terms-prompt {
	 margin-left: 5px;
}
 .sign-in-container .sign-up-information-container .btn-signup {
	 font-family: Helvetica, sans-serif;
	 font-size: 18px;
	 letter-spacing: 1px;
	 color: #FAFAFA;
	 border: none;
	 background-color: #47C1B9;
	 margin-top: 68px;
	 padding-top: 15px;
	 padding-bottom: 15px;
	 padding-left: 25px;
	 padding-right: 25px;
	 border-radius: 8px;
}
 .sign-in-container .sign-up-information-container .btn-signup .fa {
	 font-size: 12px;
}
 .sign-in-container .sign-up-information-container .btn-signup .fa:before {
	 padding-left: 10%;
}
 .login-font {
	 font-family: Helvetica, sans-serif;
	 font-size: 20px;
	 letter-spacing: 1px;
	 color: #FAFAFA;
}
 

</style>