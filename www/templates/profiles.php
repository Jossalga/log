<ion-view view-title="Friends">
  <ion-content>
    <ion-list>
      <ion-item ng-repeat="profilelist in profiles" class="item item-avatar" href="#/app/profile/{{profilelist.id}}">
		   <img ng-src="{{profilelist.face}}">
		   <h2>{{profilelist.name}}</h2>
		  <p>Top Gun Reloaded ({{profilelist.deseg}})</p>
      </ion-item>
    </ion-list>
  </ion-content>
</ion-view>
