
var yoctolib = require('yoctolib')
  , YAPI = yoctolib.YAPI
  , YTemperature = yoctolib.YTemperature;

// Setup the API to use local VirtualHub
YAPI.RegisterHub('http://127.0.0.1:4444/');
var anytemperature  = YTemperature.FirstTemperature();
var target = anytemperature.get_module().get_serialNumber();
var temperature1  = YTemperature.FindTemperature(target+".temperature1");
var temperature2  = YTemperature.FindTemperature(target+".temperature2");


exports.getData = function(request, response) {

  if(!temperature1.isOnline()) {
    console.log("Module not connected (check identification and USB cable)\n");
    process.exit(1);
  }

  var data = [];
  data[0] = temperature1.get_currentValue();
  data[1] = temperature2.get_currentValue();
  response.send(data);

};

