var app = angular.module('audit', ['ngRoute', 'ngAnimate', 'ui.bootstrap','initialValue','firebase']);

app.config(function($routeProvider) {
  $routeProvider
    // route for the home page
  .when('/', {
    templateUrl: 'html/general.html',
    controller  : 'SiteController'
  })

  // route for the room page
  .when('/room', {
    templateUrl: 'html/room.html',
    controller  : 'RoomController'
  })

  // route for the rack page
  .when('/rack', {
    templateUrl: 'html/rack.html',
    controller  : 'RackController'
  })

  // route for the equipment page
  .when('/equipment', {
    templateUrl: 'html/equipment.html',
    controller  : 'EquipController'
  })

  .when('/data', {
    templateUrl: 'html/data.html',
    controller  : 'DataController'
  })

  .otherwise({redirectTo:'/'});
});

app.constant('FirebaseUrl', 'https://siteaudit.firebaseio.com/');

app.service('siteFB', ["SiteService","FirebaseUrl" ,"$firebaseArray",
  function (SiteService,FirebaseUrl, $firebaseArray) {
  //create, retrieve, update, destroy data from angularfire

  this.save = function (site){
    site = SiteService.list();
    console.log("saving site ");
    var ref = new Firebase(FirebaseUrl+ 'sites');

    var list = $firebaseArray(ref);
    list.$add({site});
  };
}]);

app.service('SiteService', function () {
    var uid = 0;

    //site array to hold list of all site
    var site = [];

    //save method create a new equip if not already exists
    //else update the existing object
    this.save = function (siteComponent) {
      if (siteComponent.id == null) {
        siteComponent.id = uid++;
        site.push(siteComponent);
      }  else {
              //for existing contact, find this contact using id
              //and update it.
              for (i in site) {
                  if (site[i].id == siteComponent.id) {
                      site[i] = siteComponent;
                  }
              }
          }
    };

    //simply search site list for given id
    //and returns the equip object if found
    this.get = function (id) {
        for (i in site) {
            if (site[i].id == id) {
                return site[i];
            }
        }

    };

    //iterate through site list and delete
    //equip if found
    this.delete = function (id) {
        for (i in site) {
            if (site[i].id == id) {
                site.splice(i, 1);
            }
        }
    };

    this.listroomname = function () {
      var roomnames = [];
      for (i in site) {
        if (site[i].roomName) {
        console.log("rName - "+site[i].roomName);
        roomnames.push(site[i].roomName);
        }
      }

      return roomnames;
    };

    this.listrackname = function () {
      var racknames = [];
      for (i in site) {
        if (site[i].rackName) {
        console.log("rName - "+site[i].rackName);
        racknames.push(site[i].rackName);
        }
      }

      return racknames;
    };

    this.listequipname = function () {
      var equipnames = [];
      for (i in site) {
        if (site[i].equipmentName) {
          console.log("eName - "+site[i].equipmentName);
          equipnames.push(site[i].equipmentName);
        }
      }

      return equipnames;
    };

    //simply returns the site list
    this.list = function () {
        return site;
    };
});

app.directive('equipmentMinimize', function(){
  return{
    restrict: 'E',
    templateUrl: 'html/min-equipment.html',
  }
});

app.directive('pduDetails', function(){
  return {
    restrict: 'E',
    templateUrl: 'html/pdu.html'
  }
});

app.controller('SiteController', function($scope, SiteService) {

  //$scope.site = SiteService.list();
  $scope.site = SiteService.list();

  $scope.savesite = function () {
      SiteService.save($scope.newsite);
  }

  $scope.departments = ('DOJ DWELP DEDJTR').split(' ').map(function(department) {
    return {
      abbrev: department
    };
  });

  //Get GPS Co-ords
  geoSuccess = function(event){
      $scope.gps =  event.coords.latitude + ", " + event.coords.longitude;
      //document.getElementById("gps-field").value = $scope.gps;
      //$scope.$apply();
  };

  $scope.getLocation = function() {
     if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(geoSuccess);
     } else {
         alert("Your browser or device doesn't support Geolocation");
     }
   };
  //END Get GPS Co-ords

});

app.controller('RoomController', function($scope, SiteService) {

  $scope.rooms = SiteService.list();
  $scope.count = 0;

    $scope.saveroom = function () {
        SiteService.save($scope.newroom);
        $scope.newroom = {};
        $scope.roomAdded = false;
        $scope.count = SiteService.listroomname().length;
    }

    $scope.count = SiteService.listroomname().length;

    $scope.delete = function (id) {
        SiteService.delete(id);
        if ($scope.newroom.id == id) $scope.newroom = {};
        $scope.count = SiteService.listroomname().length;
    }

    $scope.edit = function (id) {
        $scope.newroom = angular.copy(SiteService.get(id));
    }


});

app.controller('RackController', function($scope, SiteService) {

  $scope.racks = SiteService.list();
  $scope.count = 0;
  $scope.roomnames = SiteService.listroomname();

    $scope.saveRack = function () {
        SiteService.save($scope.newrack);
        $scope.newrack = {};
        $scope.rackAdded = false;
        $scope.count = SiteService.listrackname().length;
    }

    $scope.count = SiteService.listrackname().length;

    $scope.delete = function (id) {
        SiteService.delete(id);
        if ($scope.newrack.id == id) $scope.newrack = {};
        $scope.count = SiteService.listrackname().length;
    }

    $scope.edit = function (id) {
        $scope.newrack = angular.copy(SiteService.get(id));
    }

});

app.controller('PduController', function($scope, SiteService) {

  $scope.pdus = SiteService.list();
  $scope.count = 0;

    $scope.savePdu = function () {
        SiteService.save($scope.newpdu);
        //$scope.newpdu = {};
        //$scope.pduAdded = false;
        //$scope.count = SiteService.listpduname().length;
    }

    //$scope.count = SiteService.listpduname().length;

    $scope.delete = function (id) {
        SiteService.delete(id);
        if ($scope.newpdu.id == id) $scope.newpdu = {};
        //$scope.count = SiteService.listpduname().length;
    }

    $scope.edit = function (id) {
        $scope.newpdu = angular.copy(SiteService.get(id));
    }


});

app.controller('EquipController', function($scope, $filter, SiteService) {

  $scope.equipment = SiteService.list();
  $scope.count = SiteService.listequipname().length;


  $scope.saveEquip = function () {
    SiteService.save($scope.newequip);
    $scope.newequip = {};
    $scope.count = SiteService.listequipname().length;
  }

  $scope.racknames = SiteService.listrackname();

    $scope.delete = function (id) {
        SiteService.delete(id);
        if ($scope.newequip.id == id) $scope.newequip = {};
        $scope.count = SiteService.listequipname().length;
    }

    $scope.edit = function (id) {
        $scope.newequip = angular.copy(SiteService.get(id));
    }
});

app.controller('DataController', function($scope, $filter, SiteService, siteFB) {

  $scope.site = SiteService.list();

  $scope.saveAll = function () {
      siteFB.save();
  };

});
