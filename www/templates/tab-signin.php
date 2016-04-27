<div class="tabs-striped  tabs-background-positive tabs-color-light">
    <div class="tabs">
      <a class="tab-item active " href="#/app/login"><i class="icon ion-unlocked"></i> Login</a>
      <a class="tab-item " href="#/app/signup"> <i class="icon ion-person"></i> Sing Up </a>
    </div>
 </div>

<ion-view view-title="Sign In" class="pane" hide-nav-bar="true" >
<!-- <ion-nav-title><img src="img/logo.png" width="40"></ion-nav-title> -->

  <ion-content class="padding">

  <div class="row responsive-sm padding remvoeBP">
	  <div class="col">
			<div class="app-logo"><img src="img/logo.png"></div>

			<div class="list list-inset removePM">
			  <label class="item item-input"><input type="text" ng-model="user.username" placeholder="Username" > </label>
			  <label class="item item-input"><input type="password" ng-model="user.password" placeholder="Password" > </label>
			</div>

			<div class="loginButton"><button class="button ion-unlocked button-block button-dark" ng-click="login(user);" > Login </button>  </div>
	  </div>
  </div>

	<div class="row  padding removePM">
	  <div class="col"> <a class=" button-positive button button-block" ng-click="facebookSignIn()"><i class="icon ion-social-facebook"></i></a> </div>

	</div>

  </ion-content>
</ion-view>