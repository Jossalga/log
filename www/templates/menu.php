<ion-side-menus enable-menu-with-back-views="false"  >
  <ion-side-menu-content>
    <ion-nav-bar class="bar-stable bar-dark">
      <ion-nav-back-button>
      </ion-nav-back-button>

      <ion-nav-buttons side="left">
        <button id="leftMenu" class="button button-icon button-clear ion-navicon" menu-toggle="left"></button>
      </ion-nav-buttons>
    </ion-nav-bar>

    <ion-nav-view name="menuContent"></ion-nav-view>

  </ion-side-menu-content>

  <ion-side-menu side="left" class="f">
    <ion-header-bar class="bar-stable bar-dark">
      <h1 class="title">Menu</h1>
    </ion-header-bar>
    <ion-content >
      <ion-list id="menuLinks">
        <ion-item menu-close href="#/app/dashboard"> Feed </ion-item>
        <ion-item menu-close href="#/app/profiles"> Friends </ion-item>
        <ion-item menu-close href="#/app/profile1" > Profile </ion-item>
        <ion-item menu-close href="#/app/profile2" > Search </ion-item>
		<ion-item menu-close href="#" ng-click="logout()"> Logout </ion-item>
      </ion-list>
    </ion-content>
  </ion-side-menu>
</ion-side-menus>
