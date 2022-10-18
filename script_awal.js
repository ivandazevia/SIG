var image = new ol.style.Circle({   
  radius: 5,
  fill: null,
  stroke: new ol.style.Stroke({color: 'red', width: 1})
});

var styles = {
  'Point': new ol.style.Style({
    image: image
  }),
  'LineString': new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'green',
      width: 1
    })
  }),
  'MultiLineString': new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'blue',
      width: 6
    })
  }),
  'MultiPoint': new ol.style.Style({
    image: image
  }),
  'MultiPolygon': new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'yellow',
      width: 1
    }),
    fill: new ol.style.Fill({
      color: 'rgba(255, 255, 0, 0.1)'
    })
  }),
  'Polygon': new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'blue',
      lineDash: [4],
      width: 3
    }),
    fill: new ol.style.Fill({
      color: 'rgba(0, 0, 255, 0.1)'
    })
  }),
  'GeometryCollection': new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'magenta',
      width: 2
    }),
    fill: new ol.style.Fill({
      color: 'magenta'
    }),
    image: new ol.style.Circle({
      radius: 10,
      fill: null,
      stroke: new ol.style.Stroke({
        color: 'magenta'
      })
    })
  }),
  'Circle': new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'red',
      width: 2
    }),
    fill: new ol.style.Fill({
      color: 'rgba(255,0,0,0.2)'
    })
  })
};

var styles1 = {
  'Point': new ol.style.Style({
    image: image
  }),
  'LineString': new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'green',
      width: 1
    })
  }),
  'MultiLineString': new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'red',
      width: 2
    })
  }),
  'MultiPoint': new ol.style.Style({
    image: image
  }),
  'MultiPolygon': new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'yellow',
      width: 1
    }),
    fill: new ol.style.Fill({
      color: 'rgba(255, 255, 0, 0.1)'
    })
  }),
  'Polygon': new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'yellow',
      lineDash: [4],
      width: 3
    }),
    fill: new ol.style.Fill({
      color: 'rgba(0, 0, 255, 0.1)'
    })
  }),
  'GeometryCollection': new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'magenta',
      width: 2
    }),
    fill: new ol.style.Fill({
      color: 'magenta'
    }),
    image: new ol.style.Circle({
      radius: 10,
      fill: null,
      stroke: new ol.style.Stroke({
        color: 'magenta'
      })
    })
  }),
  'Circle': new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'red',
      width: 2
    }),
    fill: new ol.style.Fill({
      color: 'rgba(255,0,0,0.2)'
    })
  })
};

function CenterMap(long, lat) {
    //console.log("Long: " + long + " Lat: " + lat);
    map.getView().setCenter(ol.proj.transform([long, lat], 'EPSG:4326', 'EPSG:3857'));
    map.getView().setZoom(20);
}

var geojsonObject;


var styleFunction = function(feature) {
  return styles[feature.getGeometry().getType()];
};

var styleFunction1 = function(feature) {
  return styles1[feature.getGeometry().getType()];
};

var format = new ol.format.GeoJSON({
featureProjection:"EPSG:3857"
});


var vectorLayer = new ol.layer.Vector({
  source: new ol.source.Vector(),
  style: styleFunction
});

var vectorLayer1 = new ol.layer.Vector({
  source: new ol.source.Vector(),
  style: styleFunction1
});

var map = new ol.Map({
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    }),
    vectorLayer,
    vectorLayer1,
  ],
  target: 'map',
  controls: ol.control.defaults({
    attributionOptions: {
      collapsible: false
    }
  }),
  view: new ol.View({
    center: ol.proj.fromLonLat([112.7953, -7.2818]),
    zoom: 14
  })

});
function execute(){
  if(vectorLayer.getSource()){
    vectorLayer.getSource().clear();
  }
  if(vectorLayer1.getSource()){
    vectorLayer1.getSource().clear();
  }
  var format = new ol.format.GeoJSON({
  featureProjection:"EPSG:3857"
  });
  var done= new Promise(function(resolve,reject){
      var elements=document.forms.lembar.getElementsByTagName('input');
      var daftaruniv = document.getElementById("listuniv");
      var univku = daftaruniv.options[daftaruniv.selectedIndex].value;
      console.log(univku);
      var temp21 = $('#latitude');
      var tempx = temp21.val();

      var temp22 = $('#longitude');
      var tempy = temp22.val();

      var oReq = new XMLHttpRequest();
      oReq.onload = reqListener;
      var url="http://localhost/FP_SIG/find.php?x1="+tempx+"&y1="+tempy+"&resto="+univku;
      oReq.open("GET",url, true);
      oReq.send();
      console.log(url);
      function reqListener(e) {
          geojsonObject = JSON.parse(this.responseText);
          resolve(geojsonObject);
      }
  });

  done.then((geojsonObject)=>{
    vectorLayer.getSource().addFeatures(format.readFeatures(geojsonObject.astar));
    vectorLayer1.getSource().addFeatures(format.readFeatures(geojsonObject.dijkstra));
  }).catch((error)=>{
    //console.log(error);
  });
  //ini untuk mengghitung
  var done1= new Promise(function(resolve,reject){
      var elements=document.forms.lembar.getElementsByTagName('input');
      var daftaruniv = document.getElementById("listuniv");
      var univku = daftaruniv.options[daftaruniv.selectedIndex].value;
      console.log(univku);
      var temp21 = $('#latitude');
      var tempx = temp21.val();

      var temp22 = $('#longitude');
      var tempy = temp22.val();

      var oReq = new XMLHttpRequest();
      oReq.onload = reqListener;
      var url="http://localhost/FP_SIG/jarak.php?x1="+tempx+"&y1="+tempy+"&resto="+univku;
      // var url="http://localhost/tryMap/jarak.php?x1="+elements[0].value+"&y1="+elements[1].value+"&x2="+elements[2].value+"&y2="+elements[3].value;
      oReq.open("GET",url, true);
      oReq.send();
      console.log(url);
      function reqListener(e) {
          var umu = this.responseText.split('-')
          geojsonObject = JSON.parse(umu[0]);
          resolve(geojsonObject);
      }
  });

  done1.then((geojsonObject)=>{
    console.log(geojsonObject);
    var points = geojsonObject;
    var dist_inMeter = points*51.7647059/1000;
    var dist_string = dist_inMeter.toString();
    dist_string = dist_string.split(".")
    console.log(dist_string);
    var sisa = dist_string[1]
    console.log(sisa);
    var total = dist_string[0]+"."+sisa[0];
    var tex = $('#jarakGanti');
    tex.text("The Distance is "+total+" km");
    vectorLayer.getSource().addFeatures(format.readFeatures(geojsonObject.astar));
    vectorLayer1.getSource().addFeatures(format.readFeatures(geojsonObject.dijkstra));
  }).catch((error)=>{
    console.log(error);
  });
  return false;
}

// 
function terdekat()
{  
  if(vectorLayer.getSource()){
    vectorLayer.getSource().clear();
  }
  if(vectorLayer1.getSource()){
    vectorLayer1.getSource().clear();
  }
  var format = new ol.format.GeoJSON({featureProjection:"EPSG:3857"});
  var terpendek;
  var flag = 0;
  var semuajarak = [99999,0,0,0];
  console.log(semuajarak);
  var done1= new Promise(function(resolve,reject){
  var elements=document.forms.lembar.getElementsByTagName('input');
  var temp21 = $('#latitude');
  var tempx = temp21.val();
  var temp22 = $('#longitude');
  var tempy = temp22.val();
  var univku = 1;
  var oReq = new XMLHttpRequest();
  oReq.onload = reqListener;
  var url="http://localhost/FP_SIG/jarak.php?x1="+tempx+"&y1="+tempy+"&resto="+univku;
  oReq.open("GET",url, true);
  oReq.send();

  function reqListener(e) {
    geojsonObject = JSON.parse(this.responseText);
    resolve(geojsonObject);
  }
  });

  done1.then((geojsonObject)=>{
  console.log("done1-start");
  //console.log(geojsonObject);
  var points = geojsonObject;
  var dist_inMeter = points*51.7647059/1000;
  var dist_string = dist_inMeter.toString();
  dist_string = dist_string.split(".")
  //console.log(dist_string);
  var sisa = dist_string[1]                  
  var total = dist_string[0]+"."+sisa[0];
  console.log(total);
  semuajarak[1]=total;
  flag = flag +1 ;
  if (flag > 2)
  {
  var min = Min(semuajarak);
  terpendek = indexOfMin(semuajarak);
  console.log("uyeeeeee");
  console.log(min);
  var tex = $('#jarakGanti');
  tex.text("The Distance is  "+min+" km");

  $('#pendekpol').attr('value',terpendek);
  var oReq = new XMLHttpRequest();
  oReq.onload = reqListener;
  var url="http://localhost/FP_SIG/nama.php?x1="+terpendek;
  oReq.open("GET",url, true);
  oReq.send();
  function reqListener(e) {
  geojsonObject = (this.responseText);
  console.log("cek nama");
  console.log(this.responseText);
  console.log(geojsonObject);
  //resolve(geojsonObject);
  var nama = $('#namauniv');
  nama.text("The Nearest Restaurant is "+geojsonObject);
  }

  var done= new Promise(function(resolve,reject){
  var elements=document.forms.lembar.getElementsByTagName('input');
  var temp21 = $('#latitude');
  var tempx = temp21.val();

  var temp22 = $('#longitude');
  var tempy = temp22.val();
  var univku = terpendek;
  var oReq = new XMLHttpRequest();
  oReq.onload = reqListener;
  var url="http://localhost/FP_SIG/find.php?x1="+tempx+"&y1="+tempy+"&resto="+univku;
  oReq.open("GET",url, true);
  oReq.send();
  console.log(url);
  function reqListener(e) {
  console.log(this.responseText);
  geojsonObject = JSON.parse(this.responseText);
  resolve(geojsonObject);
  }
  console.log("done1-end");
  });

  done.then((geojsonObject)=>{
  console.log("donethen");
  vectorLayer.getSource().addFeatures(format.readFeatures(geojsonObject.astar));
  vectorLayer1.getSource().addFeatures(format.readFeatures(geojsonObject.dijkstra));
  }).catch((error)=>{
  console.log(error);
  });

  }
  console.log(total);
  console.log(semuajarak);
  // var min = Math.min.apply(null, semuajarak);
  // console.log("uyeeeeee");
  // console.log(min);
  })

  var done2= new Promise(function(resolve,reject){
  // console.log("done2");
  var elements=document.forms.lembar.getElementsByTagName('input');
  var temp21 = $('#latitude');
  var tempx = temp21.val();

  var temp22 = $('#longitude');
  var tempy = temp22.val();
  var univku = 2;
  var oReq = new XMLHttpRequest();
  oReq.onload = reqListener;
  var url="http://localhost/FP_SIG/jarak.php?x1="+tempx+"&y1="+tempy+"&resto="+univku;
  // var url="http://localhost/tryMap/jarak.php?x1="+elements[0].value+"&y1="+elements[1].value+"&x2="+elements[2].value+"&y2="+elements[3].value;
  console.log(url);
  oReq.open("GET",url, true);
  oReq.send();
  function reqListener(e) {
  console.log(this.responseText);
  geojsonObject = JSON.parse(this.responseText);
  resolve(geojsonObject);
  }
  });

  done2.then((geojsonObject)=>{
  console.log("done2then");
  var points = geojsonObject;
  var dist_inMeter = points*51.7647059/1000;
  var dist_string = dist_inMeter.toString();
  dist_string = dist_string.split(".")
  var sisa = dist_string[1]
  var total = dist_string[0]+"."+sisa[0];
  semuajarak[2]=total;
  flag = flag +1 ;
  if (flag > 2)
  {
  var min = Min(semuajarak);
  terpendek = indexOfMin(semuajarak);
  console.log("uyeeeeee");
  console.log(min);
  var tex = $('#jarakGanti');
  tex.text("The Distance is "+min+"km");

  $('#pendekpol').attr('value',terpendek);
  var oReq = new XMLHttpRequest();
  oReq.onload = reqListener;
  var url="http://localhost/FP_SIG/nama.php?x1="+terpendek;
  console.log(url);
  oReq.open("GET",url, true);
  oReq.send();
  function reqListener(e) {
  geojsonObject = (this.responseText);
  console.log("cek nama");
  console.log(geojsonObject);
  //resolve(geojsonObject);
  var nama = $('#namauniv');
  nama.text("The Nearest Restaurant is "+geojsonObject);
  }

  var done= new Promise(function(resolve,reject){
  var elements=document.forms.lembar.getElementsByTagName('input');
  var temp21 = $('#latitude');
  var tempx = temp21.val();

  var temp22 = $('#longitude');
  var tempy = temp22.val();
  var univku = terpendek;
  var oReq = new XMLHttpRequest();
  oReq.onload = reqListener;
  var url="http://localhost/FP_SIG/find.php?x1="+tempx+"&y1="+tempy+"&resto="+univku;
  oReq.open("GET",url, true);
  oReq.send();
  console.log(url);
  function reqListener(e) {
  geojsonObject = JSON.parse(this.responseText);
  resolve(geojsonObject);
  }
  });

  done.then((geojsonObject)=>{
  vectorLayer.getSource().addFeatures(format.readFeatures(geojsonObject.astar));
  vectorLayer1.getSource().addFeatures(format.readFeatures(geojsonObject.dijkstra));
  }).catch((error)=>{
  console.log(error);
  });
  }
  console.log(total);
  console.log(semuajarak);
  // var min = Math.min.apply(null, semuajarak);
  // console.log("uyeeeeee");
  // console.log(min);
  })

  var done3= new Promise(function(resolve,reject){
  console.log("done3");
  var elements=document.forms.lembar.getElementsByTagName('input');
  var temp21 = $('#latitude');
  var tempx = temp21.val();

  var temp22 = $('#longitude');
  var tempy = temp22.val();
  var univku = 3;
  var oReq = new XMLHttpRequest();
  oReq.onload = reqListener;
  var url="http://localhost/FP_SIG/jarak.php?x1="+tempx+"&y1="+tempy+"&resto="+univku;
  // var url="http://localhost/tryMap/jarak.php?x1="+elements[0].value+"&y1="+elements[1].value+"&x2="+elements[2].value+"&y2="+elements[3].value;
  console.log(url);
  oReq.open("GET",url, true);
  oReq.send();
  function reqListener(e) {
  console.log(this.responseText);
  geojsonObject = JSON.parse(this.responseText);                          
  resolve(geojsonObject);
  }
  });



  done3.then((geojsonObject)=>{
  var points = geojsonObject;
  var dist_inMeter = points*51.7647059/1000;
  var dist_string = dist_inMeter.toString();
  dist_string = dist_string.split(".")
  var sisa = dist_string[1]
  var total = dist_string[0]+"."+sisa[0];
  semuajarak[3]=total;
  flag = flag +1 ;
  if (flag > 2)
  {
  var min = Min(semuajarak);
  terpendek = indexOfMin(semuajarak);
  console.log("uyeeeeee");
  console.log(min);
  console.log(terpendek);
  var tex = $('#jarakGanti');
  tex.text("The Distance is "+min+" km");

  $('#pendekpol').attr('value',terpendek);

  var oReq = new XMLHttpRequest();
  oReq.onload = reqListener;
  var url="http://localhost/FP_SIG/nama.php?x1="+terpendek;
  console.log(url);
  oReq.open("GET",url, true);
  oReq.send();
  function reqListener(e) {
  geojsonObject = (this.responseText);
  console.log("cek nama");
  console.log(geojsonObject);
  //resolve(geojsonObject);
  var nama = $('#namauniv');
  nama.text("The Nearest Restaurant is "+geojsonObject);
  }
  var done= new Promise(function(resolve,reject){
  var elements=document.forms.lembar.getElementsByTagName('input');
  var temp21 = $('#latitude');
  var tempx = temp21.val();

  var temp22 = $('#longitude');
  var tempy = temp22.val();
  var univku = terpendek;
  var oReq = new XMLHttpRequest();
  oReq.onload = reqListener;
  var url="http://localhost/FP_SIG/find.php?x1="+tempx+"&y1="+tempy+"&resto="+univku;
  oReq.open("GET",url, true);
  oReq.send();
  console.log(url);
  function reqListener(e) {
  geojsonObject = JSON.parse(this.responseText);
  resolve(geojsonObject);
  }
  });

  done.then((geojsonObject)=>{
  vectorLayer.getSource().addFeatures(format.readFeatures(geojsonObject.astar));
  vectorLayer1.getSource().addFeatures(format.readFeatures(geojsonObject.dijkstra));
  }).catch((error)=>{
  console.log(error);
  });

  }
  console.log(total);
  console.log(semuajarak);

  })



  function indexOfMin(arr)
  {
  if (arr.length === 0) {
  return -1;
  }

  var min = arr[0];
  var minIndex = 0;

  for (var i = 1; i < arr.length; i++) {
  if (arr[i] < min) {
  minIndex = i;
  min = arr[i];
  }
  }

  return minIndex;
  }
  function Min(arr)
  {
  if (arr.length === 0) {
  return -1;
  }

  var min = arr[0];
  var minIndex = 0;

  for (var i = 1; i < arr.length; i++) {
  if (arr[i] < min) {
  minIndex = i;
  min = arr[i];
  }
  }

  return min;
  }
}