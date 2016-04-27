<ion-view view-title="Profile">
  <ion-content>

<div class="list card">

  <div class="item item-avatar">
    <img src="{{profile.face}}">
    <h2>{{profile.name}}</h2>
    <p>{{profile.deseg}}</p>
  </div>

  <div class="item item-body">
    <img class="full-image" src="{{profile.face}}">
    <p>
    Esta es una prueba del profile de usuario de TopGunReloaded 
    con Ionic and AngularJs
    </p>
    <p>
      <a href="#" class="subdued">1 Like</a>
      <a href="#" class="subdued">5 Comments</a>
    </p>
  </div>

  <div class="item tabs tabs-secondary tabs-icon-left">
    <a class="tab-item" href="#"> <i class="icon ion-thumbsup"></i> Like </a>
	<a class="tab-item" href="#"> <i class="icon ion-chatbox"></i> Comment</a>
    <a class="tab-item" href="#"> <i class="icon ion-share"></i>Share</a>
  </div>

</div>

  </ion-content>
</ion-view>
