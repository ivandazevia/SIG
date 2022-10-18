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
      var restoku = daftaruniv.options[daftaruniv.selectedIndex].value;
      console.log(restoku);
      var temp21 = $('#latitude');
      var tempx = temp21.val();

      var temp22 = $('#longitude');
      var tempy = temp22.val();

      var oReq = new XMLHttpRequest();
      oReq.onload = reqListener;
      var url="http://localhost/FP_SIG/find.php?x1="+tempx+"&y1="+tempy+"&resto="+restoku;
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
      var restoku = daftaruniv.options[daftaruniv.selectedIndex].value;
      console.log(restoku);
      var temp21 = $('#latitude');
      var tempx = temp21.val();

      var temp22 = $('#longitude');
      var tempy = temp22.val();

      var oReq = new XMLHttpRequest();
      oReq.onload = reqListener;
      var url="http://localhost/FP_SIG/jarak.php?x1="+tempx+"&y1="+tempy+"&resto="+restoku;
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
  var format = new ol.format.GeoJSON({
  featureProjection:"EPSG:3857"
  });

  var terpendek=10000;
  var flag = 0;
  var index = 0;
  var temp21 = $('#latitude');
  var tempx = temp21.val();
  var temp22 = $('#longitude');
  var tempy = temp22.val();
  var restoku, oReq, url;
  
  var promise1 = new Promise(function(resolve,reject){
    for(i = 1; i <= 15; i++){
      restoku = i;
      
      oReq = new XMLHttpRequest();
      oReq.onload = reqListener;
      url="http://localhost/FP_SIG/jarak.php?x1="+tempx+"&y1="+tempy+"&resto="+restoku;
      oReq.open("GET",url, true);
      oReq.send();
      console.log("index-1"+restoku);

      function reqListener(e) {    
        // console.log(this.responseText);
        var umu = this.responseText.split('-')
        console.log("index0"+restoku);
        // console.log("index"+restoku);
          // console.log(this.responseText);
          // console.log(umu[0]);
            // console.log("halo"+umu[1]);
          if(terpendek > parseInt(umu[0])) {
            geojsonObject = JSON.parse(umu[0]);
            resolve(geojsonObject);
            terpendek = umu[0];
            console.log("terpendek"+terpendek);
            index = umu[1];
            console.log("index"+restoku);
            // console.log("index"+umu[1]);

          }
            // console.log("umu[i]");
            console.log();
          if(umu[1]=='15'){
            console.log("halo akhir");
            var points = geojsonObject;
            var dist_inMeter = points*51.7647059/1000;
            var dist_string = dist_inMeter.toString();
            dist_string = dist_string.split(".")
            var sisa = dist_string[1]
            console.log(sisa);
            var total = dist_string[0]+"."+sisa[0];
            var tex = $('#jarakGanti');
            console.log(total);
            tex.text("The Distance is "+total+" km");
            
            $('#pendekpol').attr('value',terpendek);
            var oReq = new XMLHttpRequest();
            oReq.onload = reqListener;            
            var url="http://localhost/FP_SIG/nama.php?x1="+index;
            console.log("tes");
            console.log(url);
            oReq.open("GET",url, true);
            oReq.send();
            //daftar univ (alternatif)
            

            function reqListener(e) {
                geojsonObject = (this.responseText);
                var nama = $('#name');
                //atau panggil url lagi query dari db
                nama.text("The Nearest Restaurant is "+geojsonObject);
            }
        
            var done= new Promise(function(resolve,reject){
              var temp21 = $('#latitude');
              var tempx = temp21.val();
              var temp22 = $('#longitude');
              var tempy = temp22.val();
              var restoku = index;
              var oReq = new XMLHttpRequest();
              oReq.onload = reqListener;
              var url="http://localhost/FP_SIG/find.php?x1="+tempx+"&y1="+tempy+"&resto="+restoku;
              oReq.open("GET",url, true);
              oReq.send();
              console.log(url);
              function reqListener(e) {
                  geojsonObject = JSON.parse(this.responseText);
                  console.log(geojsonObject);

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
      }
    }
  });
}