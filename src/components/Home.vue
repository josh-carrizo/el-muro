
<template>
  <div class="GeneralBlock">
  <h1>Home Page</h1>
    
<!--<div class="front" style="background-image: url()">-->

      <div class="wrapper">
  
        <div class="cols">
            <div class="col" ontouchstart="this.classList.toggle('hover');">
              <div class="container">
                <div class="front" style="background-image: url(https://images.unsplash.com/photo-1512552288940-3a300922a275?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80)">
                  <div class="inner">
                    <p>Block1</p>
                    <span>Lorem ipsum</span>
                  </div>
                </div>
                <div class="back">
                  <div class="inner">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col" ontouchstart="this.classList.toggle('hover');">
              <div class="container">
                <div class="front" style="background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0BACCmzl07ul_r44C3HOGNHIBGUPXbApmgw&usqp=CAU)">
                  <div class="inner">
                    <p>Block2</p>
                    <span>Lorem ipsum</span>
                  </div>
                </div>
                <div class="back">
                  <div class="inner">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      

        <div class="cols">
            <div class="col" ontouchstart="this.classList.toggle('hover');">
              <div class="container">
                <div class="front" style="background-image: url(https://r1.ilikewallpaper.net/iphone-wallpapers/download/74980/Relax-iphone-wallpaper-ilikewallpaper_com.jpg)">
                  <div class="inner">
                    <p>Block2</p>
                    <span>Lorem ipsum</span>
                  </div>
                </div>
                <div class="back">
                  <div class="inner">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col" ontouchstart="this.classList.toggle('hover');">
              <div class="container">
                <div class="front" style="background-image: url(data:image/jpeg;base64,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)">
                  <div class="inner">
                    <p>Block4</p>
                    <span>Lorem ipsum</span>
                  </div>
                </div>
                <div class="back">
                  <div class="inner">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      <br>
      <br>
      <br>
</div>

</template>

<script>
export default {

}
</script>

<style>
.GeneralBlock{
  background-image: url('https://i.pinimg.com/originals/e1/4c/fa/e14cfadd63764f7e7863eaf427274ccf.gif');
  width: 100%;
  height: 100%;
  margin-top: -2rem;
}

h1{
  font-size: 2.5rem;
  font-family: 'Montserrat';
  font-weight: normal;
  color: #444;
  text-align: center;
  margin: 2rem 0;
}

.wrapper{
  width: 90%;
  margin: 0 auto;
  max-width: 80rem;
}

.cols{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

.col{
  width: calc(25% - 2rem);
  margin: 1rem;
  cursor: pointer;
}

.container{
  -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
	-webkit-perspective: 1000px;
          perspective: 1000px;
}

.front,
.back{
  background-size: cover;
	background-position: center;
	-webkit-transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
	transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
	-o-transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
	transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
	transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1), -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
	-webkit-backface-visibility: hidden;
  backface-visibility: hidden;
	text-align: center;
	min-height: 280px;
	height: auto;
	border-radius: 10px;
	color: #fff;
	font-size: 1.5rem;
}

.back{
  background: #78f3bf;
  background: -webkit-linear-gradient(to right, #78f3bf, #63eaf7);
  background: -o-linear-gradient(to right, #78f3bf, #63eaf7);
  background: linear-gradient(to right, #78f3bf, #63eaf7);
  color: #000;
}

.front:after{
	position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    content: '';
    display: block;
    opacity: .6;
    background-color: #000;
    -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
    border-radius: 10px;
}
.container:hover .front,
.container:hover .back{
    -webkit-transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
    -o-transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1), -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
}

.back{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}

.inner{
    -webkit-transform: translateY(-50%) translateZ(60px) scale(0.94);
            transform: translateY(-50%) translateZ(60px) scale(0.94);
    top: 50%;
    position: absolute;
    left: 0;
    width: 100%;
    padding: 2rem;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    outline: 1px solid transparent;
    -webkit-perspective: inherit;
            perspective: inherit;
    z-index: 2;
}

.container .back{
    -webkit-transform: rotateY(180deg);
            transform: rotateY(180deg);
    -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
}

.container .front{
    -webkit-transform: rotateY(0deg);
            transform: rotateY(0deg);
    -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
}

.container:hover .back{
  -webkit-transform: rotateY(0deg);
          transform: rotateY(0deg);
  -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
}

.container:hover .front{
  -webkit-transform: rotateY(-180deg);
          transform: rotateY(-180deg);
  -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
}

.front .inner p{
  font-size: 2rem;
  margin-bottom: 2rem;
  position: relative;
}

.front .inner p:after{
  content: '';
  width: 4rem;
  height: 2px;
  position: absolute;
  background: #C6D4DF;
  display: block;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: -.75rem;
}

.front .inner span{
  color: #fff;
  font-family: 'Montserrat';
  font-weight: 300;
}

@media screen and (max-width: 64rem){
  .col{
    width: calc(33.333333% - 2rem);
  }
}

@media screen and (max-width: 48rem){
  .col{
    width: calc(50% - 2rem);
  }
}

@media screen and (max-width: 32rem){
  .col{
    width: 100%;
    margin: 0 0 2rem 0;
  }
}
</style>