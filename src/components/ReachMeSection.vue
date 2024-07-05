<template>
  <div class="">
    <h1>Reach me</h1>
    <div class="row">
  <section class="container-fluid " wrap>
    <div class="row">
      <div class="col-sm-12 mb-5 col-md-5">

        <div class="card border-primary rounded-0">
          <div class="card-header p-0">
            <div class="bg-primary text-white text-center py-2">
              <h3><i class="fa fa-envelope"></i> Write to us:</h3>
              <p class="m-0">We’ll write rarely, but only the best content.</p>
            </div>
          </div>

          <div class="card-body p-3">

            <div class="form-group">
              <label> Your name </label>
              <div class="input-group">
                <input value="" type="text" name="data[name]" class="form-control" id="inlineFormInputGroupUsername"
                  placeholder="Your name">
              </div>
            </div>
            <div class="form-group">
              <label>Your email</label>
              <div class="input-group mb-2 mb-sm-0">
                <input type="email" value="" name="data[email]" class="form-control"
                  id="inlineFormInputGroupUsername" placeholder="Email">
              </div>
            </div>
            <div class="form-group">
              <label>Subject</label>
              <div class="input-group mb-2 mb-sm-0">
                <input type="text" name="data[subject]" class="form-control" id="inlineFormInputGroupUsername"
                  placeholder="Subject">
              </div>
            </div>
            <div class="form-group">
              <label>Message</label>
              <div class="input-group mb-2 mb-sm-0">
                <input type="text" class="form-control" name="mesg">
              </div>
            </div>
            <div class="text-center">
              <input type="submit" name="submit" value="submit" class="btn btn-primary btn-block rounded-0 py-2">
            </div>

          </div>

        </div>
        <div class="row text-center mt-3">
          <div class="col-md-4">
            <a class="bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block"><i
                class="fa fa-map-marker"></i></a>
            <p> Cape Town, South Africa </p>
          </div>
          <div class="col-md-4">
            <a class="bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block"><i class="fa fa-phone"></i></a>
            <p>064 651 2631</p>
          </div>
          <div class="col-md-4">
            <a class="bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block"><i
                class="fa fa-envelope"></i></a>
            <p> awodwahendrick@gmail.com</p>
          </div>
        </div>
      </div>

      <div class="col-sm-12 col-md-7 pb-5">
        <!--Google map-->
        <div class="body">
        <div class='planet-container'>
            <div class='night'></div>
            <div class='day'></div>
            <div class='clouds'></div>
            <div class='inner-shadow'></div>
        </div>
        </div>
        <!--Buttons-->
        
      </div>

    </div>
  </section>
</div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
     @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

 h1 {
    color: aliceblue !important;
    text-align: center;
  }
.container-fluid {

        height: 100%;
        background-color: #ffffff00;
}

section {
           position: relative;
           z-index: 3;
           padding-top: 50px;
           background-color: rgba(152, 152, 152, 0);
         }

         [wrap]{
          width: 80%;
         }
         
         .container {
           max-width: 1080px;
           margin-left: auto;
           margin-right: auto;
           padding-left: 20px;
           padding-right: 20px;
         }
         
         .section-header {
           margin-bottom: 50px;
           text-align: center;
         }
         
         .section-header h2 {
           color: #FFF;
           font-weight: bold;
           font-size: 3em;
           margin-bottom: 20px;
         }
         
         .section-header p {
           color: #FFF;
         }
         
         .row  {
           display: flex;
           flex-wrap: wrap;
           align-items: center;
           justify-content: space-between;
         }
         
         .contact-info {
           width: 50%;
         }
         
         .contact-info-item {
           display: flex;
           margin-bottom: 30px;
         }
         
         .contact-info-icon {
           height: 70px;
           width: 70px;
           background-color: #fff;
           text-align: center;
           border-radius: 50%;
         }
         
         .contact-info-icon i {
           font-size: 30px;
           line-height: 70px;
         }
         
         .contact-info-content {
           margin-left: 20px;
         }
         
         .contact-info-content h4 {
           color: #1da9c0;
           font-size: 1.4em;
           margin-bottom: 5px;
         }
         
         .contact-info-content p {
           color: #FFF;
           font-size: 1em;
         }
         
         .contact-form {
           background-color: #fff;
           padding: 40px;
           width: 45%;
           padding-bottom: 20px;
           padding-top: 20px;
         }
         
         .contact-form h2 {
           font-weight: bold;
           font-size: 2em;
           margin-bottom: 10px;
           color: #333;
         }
         
         .contact-form .input-box {
           position: relative;
           width: 100%;
           margin-top: 10px;
         }
         
         .contact-form .input-box input,
         .contact-form .input-box textarea{
           width: 100%;
           padding: 5px 0;
           font-size: 16px;
           margin: 10px 0;
           border: none;
           border-bottom: 2px solid #333;
           outline: none;
           resize: none;
         }
         
         .contact-form .input-box span {
           position: absolute;
           left: 0;
           padding: 5px 0;
           font-size: 16px;
           margin: 10px 0;
           pointer-events: none;
           transition: 0.5s;
           color: #666;
         }
         
         .contact-form .input-box input:focus ~ span,
         .contact-form .input-box textarea:focus ~ span{
           color: #e91e63;
           font-size: 12px;
           transform: translateY(-20px);
         }
         
         .contact-form .input-box input[type="submit"]
         {
           width: 100%;
           background: #00bcd4;
           color: #FFF;
           border: none;
           cursor: pointer;
           padding: 10px;
           font-size: 18px;
           border: 1px solid #00bcd4;
           transition: 0.5s;
         }
         
         .contact-form .input-box input[type="submit"]:hover
         {
           background: #FFF;
           color: #00bcd4;
         }
         
         @media (max-width: 991px) {
           section {
             padding-top: 50px;
             padding-bottom: 50px;
           }
           
           .row {
             flex-direction: column;
           }
           
           .contact-info {
             margin-bottom: 40px;
             width: 100%;
           }
           
           .contact-form {
             width: 100%;
           }
         }

         .body {
            display: flex;
            justify-content: center;
}
.planet-container {
    border-radius: 50%;
    box-shadow: 5px -3px 10px 3px #5e90f1;
    height: 500px;
    overflow: hidden;
    position: relative;
    width: 500px;
    z-index: 1;
}
.night {
    animation: rotate-night 80s linear infinite;
    background-image: url(https://www.solarsystemscope.com/textures/download/2k_earth_nightmap.jpg);
    background-size: 200%;
    height: 500px;
    position: absolute;
    width: 500px;
    z-index: 2;
}
.day {
    animation: rotate-day 80s linear infinite;
    background-image: url(https://www.solarsystemscope.com/textures/download/2k_earth_daymap.jpg);
    background-size: 200%;
    border-left: solid 1px black;
    border-radius: 50%;
    box-shadow: 5px 0 20px 10px #040615 inset; 
    height: 500px;
    margin-left: 110px;
    position: absolute;
    width: 500px;
    z-index: 3;
}
.clouds {
    animation: rotate-day 50s linear infinite, spin-clouds 100s ease infinite;
    background-image: url(https://www.solarsystemscope.com/textures/download/2k_earth_clouds.jpg);
    background-size: 200%;
    border-radius: 50%;    
    box-shadow: 5px 0 20px 10px #040615 inset, -9px 0px 20px 10px #5e90f1 inset;
    height: 500px;
    margin-left: 100px;
    opacity: 0.45;
    position: absolute;
    width: 500px;
    z-index: 4;
}
.inner-shadow {
    background: transparent;
    border-radius: 50%;
    box-shadow: -5px 0 10px 1px #152b57 inset, 5px 0 10px 1px #040615 inset;
    height: 500px;
    margin-left: 0;
    position: absolute;
    width: 500px;
    z-index: 5;
}

@keyframes rotate-day {
    0% { background-position: 120% 0; }
    100% { background-position: -80% 0; }
}
@keyframes rotate-night {
    0% { background-position: calc(120% + 120px) 0; }
    100% { background-position: calc(-80% + 120px) 0; }
}
@keyframes spin-clouds {
    0% { transform: rotate(0deg); }
    50% { transform: rotate(20deg); }
    100% { transform: rotate(0deg); }
}
      
</style>