<template>
  <div id="app">
    <body>
      
      <div class="card">
    <router-view />
      </div>
    </body>

  </div>
</template>


<script>

export default {
  name: 'App'
}
</script>


<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #ccc;
  font-family: "Nunito", sans-serif;
}


.card {
  background: white  ;
  max-width: 620px;
  max-height: 100%;
  margin: 0 auto;
  margin-top: 100px;
  padding: 0 3vw;
}

.logo {
  padding-top: 50px;
  display:flex;
  justify-content: center;
}

@media (max-width: 768px){

body {
  background: white;
  height: 100%;
  
}

.card {
  margin: 0 auto;
  height: 100%;
  width: 100%;
}

}

</style>
