<!DOCTYPE html>
<html>
<title>Find Your Restaurant</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
<script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=requestAnimationFrame,Element.prototype.classList,URL"></script>
<script src="https://openlayers.org/en/v4.6.5/build/ol.js"></script>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
<!-- <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous"> -->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+695DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>
<style>
body,h1,h5 {font-family: "Raleway", sans-serif}
body, html {height: 100%}
.bgimg {
  background-image: url('resto.jpg');
  min-height: 100%;
  background-position: center;
  background-size: cover;
}
</style>
<body>

<div class="bgimg w3-display-container w3-text-white">
  <!-- <div class=" w3-jumbo"> -->
    <div id="map" class="map container w3-display-right" style="height: 400px; width: 900px"></div>
  <!-- </div> -->
  <div class="w3-display-top w3-container w3-large " style="padding-top: 30px">
   <!--  <p><button onclick="document.getElementById('menu').style.display='block'" class="w3-button w3-black" style="margin-top: 30px">menu</button></p>
    <p><button onclick="document.getElementById('contact').style.display='block'" class="w3-button w3-black">contact</button></p> -->
    <nav class="navbar navbar-expand-lg navbar-light">
            <div class="collapse navbar-collapse justify-content-md-center">
                <ul class="nav nav-tabs">
                  <li class="nav-item"><a class="nav-link active w3-black w3-opacity w3-hover-opacity-off w3-padding-large" href="index.php" style="" ><i class="fa fa-university"></i> The Nearest Restaurant</a></li>
                  <li class="nav-item active"><a class="nav-link active w3-black w3-opacity w3-hover-opacity-off w3-padding-large" href="findroad_menu.php"><i class="fa fa-route"></i> Route to The Restaurant </a></li>
                   <li class="nav-item"><a class="nav-link active w3-black w3-hover-opacity-off w3-padding-large" href="between_menu.php"><i class="fa fa-arrows-alt-h"></i> Route Between Restaurant</a></li>
                </ul>
            </div>
        </nav>
  </div>
  <div class="w3-display-bottomleft w3-container">
    <p class="w3-xxlarge">Find Your Restaurant</p>
    <p>Created by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">Ivanda Zevi Amalia - 05111640000041</a></p>
  </div>
</div>
<div class="mySlides w3-animate-opacity" >
    <!-- <img class="w3-image" src="1.jpg" alt="Image 1" style="min-width:500px" width="1500" height="1000"> -->
    <div class="w3-display-left w3-padding w3-hide-small" style="width:35%;">
      <div class="w3-padding-large " style="background-color: rgba(0, 0, 0, 0.7); ">
        <div class="col-sm-12">
                <p style="color: white; text-align: center; font-size: 33px; margin-top: 20px">Find The Route</p>
                
              <div class="form-group row">
                <!-- <label class="col-2 col-form-label btn btn-danger" for="exampleFormControlInput1">Universitas Asal</label> -->
                <div class="col-2">
                  <select class="custom-select; col-200 btn btn-outline-success btn-block mb-2" id=koor0 name="product" width="100" style="width: 370px">
                            <option disabled selected value="Option">Choose The First Restaurant</option>
                            <option value="-7.280947, 112.781198">Rumah Makan Sederhana</option> 
                            <option value="-7.266776, 112.796446">MCDonalds Mulyosari</option>                           
                            <option value="-7.275930, 112.802708">Food Festival Pakuwon City</option>
                            <option value="-7.289714, 112.783168">Soto Ayam Lamongan Cak Har</option>
                            <option value="-7.282046, 112.776351">Communal Coffee & Eatery</option>
                            <option value="-7.280211, 112.778548">Steak Hotel by HOLYCOW!</option>
                            <option value="-7.292685, 112.802972">Dapoer Mantab</option>
                            <option value="-7.277814, 112.780757">Sop Ayam Pak Min Klaten</option>
                            <option value="-7.273013, 112.781477">Niki Sae Restoran</option>
                            <option value="-7.258674, 112.750274">Aiola Eatery</option>                            
                            <option value="-7.297693, 112.658918">Bakso Boedjangan Citraland</option>
                            <option value="-7.258419, 112.729270">Depot Bu Rudy</option>
                            <option value="-7.301054, 112.738832">Sego Sambel Mak Yeye</option>
                            <option value="-7.261573, 112.732414">Bubur Ayam Mang Dudung</option>
                            <option value="-7.246914, 112.738037">Nasi Bebek Tugu Pahlawan</option>
                  </select>
                </div>  
                   </div>  

                 <div class="form-group row">
                <!-- <label class="col-2 col-form-label btn btn-info" for="exampleFormControlInput1">Universitas Tujuan</label> -->
                <div class="col-2">
                  <select class="custom-select; col-200 btn btn-outline-primary btn-block mb-2" id=koor1 name="product" width="100" style="width: 370px">
                              <option class="btn-dark" disabled selected value="Option">Choose The Second Restaurant</option>
                            <option value="-7.266776, 112.796446">MCDonalds Mulyosari</option>                           
                            <option value="-7.275930, 112.802708">Food Festival Pakuwon City</option>
                            <option value="-7.289714, 112.783168">Soto Ayam Lamongan Cak Har</option>
                            <option value="-7.282046, 112.776351">Communal Coffee & Eatery</option>
                            <option value="-7.280211, 112.778548">Steak Hotel by HOLYCOW!</option>
                            <option value="-7.292685, 112.802972">Dapoer Mantab</option>
                            <option value="-7.277814, 112.780757">Sop Ayam Pak Min Klaten</option>
                            <option value="-7.273013, 112.781477">Niki Sae Restoran</option>
                            <option value="-7.258674, 112.750274">Aiola Eatery</option>                               
                            <option value="-7.297693, 112.658918">Bakso Boedjangan Citraland</option>
                            <option value="-7.258419, 112.729270">Depot Bu Rudy</option>
                            <option value="-7.301054, 112.738832">Sego Sambel Mak Yeye</option>
                            <option value="-7.261573, 112.732414">Bubur Ayam Mang Dudung</option>
                            <option value="-7.246914, 112.738037">Nasi Bebek Tugu Pahlawan</option>
                            <option value="-7.280947, 112.781198">Rumah Makan Sederhana</option> 
                  </select>
              </div>
               </div>  
                <div class="form-group row">
                  <!-- <div class="col-0"> -->
                    <button onclick="return execute()" class="w3-button w3-block w3-green" id="buttonCariJarak">Find The Route!</button>
                  <!-- </div> -->
                </div>

                <div class="form-group row">
                  <!-- <div class="col-0"> -->                    
                    <p class="w3-large" id="jarakGanti" style="color: white; margin-bottom: 0px"></p>
                    <!-- <h2 >Nearest</h2> -->
                    <!-- <button  class="w3-button w3-block w3-gray">Nearest : </button> -->
                  </div>   

              </div>
              <form id="lembar">
                  <!-- <button onclick="return execute()" class="w3-button w3-block w3-green" id="buttonCariJarak">Find The Route!</button> -->
              </form>
              <div class="form-group row">
                  <!-- <div class="col-0"> -->                    
                    <!-- <p class="w3-large" id="jarakGanti" style="color: white; margin-bottom: 0px"></p> -->
                    <!-- <h2 >Nearest</h2> -->
                    <!-- <button  class="w3-button w3-block w3-gray">Nearest : </button> -->
                  </div>   
                </div>
              <br><br>
             
                           </div> <!-- tambah ini kalo ingin map gede -->

                           </div> <!-- tambah ini kalo ingin map gede -->
          </div>
        </main>
          <div id="map" class="map" style="height: 400px"></div>
      </div>
            <!--<button onclick="getLocation()">Posisi anda</button>
            <button onclick="return terdekat()" class="btn btn-danger mb-2" id="buttonCariJarak">Jarak Terdekat</button>
            <p id="namamasjid"></p>
            <input type="text" class="form-control" name="pendekpol" id="pendekpol" >
          <form id="lembar">
              <button onclick="return execute()" class="btn btn-danger mb-2">Submit</button>
<!--                <p id="jarakGanti">Jarak : </p>
 -->            </form>
        </main>

      </div>
    </div>
    <script src="script3.js"> </script>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
  </body>
</html>