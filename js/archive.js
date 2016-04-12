
app.service('RackService', function () {
    var uid = 0;

    //racks array to hold list of all racks
    var racks = [];

    //save method create a new equip if not already exists
    //else update the existing object
    this.save = function (rack) {
        rack.id = uid++;
        racks.push(rack);
    };

    //simply search racks list for given id
    //and returns the equip object if found
    this.get = function (id) {
        for (i in racks) {
            if (racks[i].id == id) {
                return racks[i];
            }
        }

    };

    //iterate through racks list and delete
    //equip if found
    this.delete = function (id) {
        for (i in racks) {
            if (racks[i].id == id) {
                racks.splice(i, 1);
            }
        }
    };

    this.listname = function () {
      var racknames = [];
      for (i in racks) {
        console.log("rName - "+racks[i].rackName);
        racknames.push(racks[i].rackName);
      }

      return racknames;
    };

    //simply returns the racks list
    this.list = function () {
        return racks;
    };
});

app.service('EquipmentService', function () {
    var uid = 0;

    //equipment array to hold list of all equipment
    var equipment = [];

    //save method create a new equip if not already exists
    //else update the existing object
    this.save = function (equip) {
        equip.id = uid++;
        equipment.push(equip);
    };

    //simply search equipment list for given id
    //and returns the equip object if found
    this.get = function (id) {
        for (i in equipment) {
            if (equipment[i].id == id) {
                return equipment[i];
            }
        }

    }

    //iterate through equipment list and delete
    //equip if found
    this.delete = function (id) {
        for (i in equipment) {
            if (equipment[i].id == id) {
                equipment.splice(i, 1);
            }
        }
    }

    //simply returns the equipment list
    this.list = function () {
        return equipment;
    }
});

app.factory('storeEquipment', function(){
  var equipment = {};

  $scope.equipment = {
     equipmentName: '',
     equipmentRack: '',
     equipmentRu: '',
     equipmentMake: '',
     equipmentModel: '',
     equipmentAsset: '',
     equipmentSerial: ''
   };

  equipment.list = [];

  equipment.add = function(equipment) {
     equipment.list.push({equipmentName:$scope.equipmentName, equipmentRack:$scope.equipmentRack,
                                equipmentRu:$scope.equipmentRu, equipmentMake:$scope.equipmentMake,
                                equipmentModel:$scope.equipmentModel, equipmentAsset:$scope.equipmentAsset,
                                equipmentSerial:$scope.equipmentSerial});
  };

  return equipment;

});

app.directive('equipmentDetails', function(){
  return {
    restrict: 'E',
    templateUrl: 'html/equipment-details.html'
  }
});
