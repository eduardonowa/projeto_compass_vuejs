<template>
  <div class="pageSucess">
    <div id="header-sucess">
        <div class="logo">
          <img src="../assets/data1.png" alt="" />
        </div>
      <h1>Sucess</h1>
    </div>
          <div class="button-goback">
          <input @click="goBack()" type="button" value="Go Back!" class="goback" onClick="goBack(event)" />
      </div>
  </div>
</template>

<script>
export default {
  name: 'SucessView',
  methods: {
          goBack(){
      this.$router.push('/');      
    }
  }
}
</script>


<style scooped>

  .pageSucess {
    padding-top: 15vw;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    min-height: 700px;
  }

 img {
  display: flex;
  justify-content: center;

}


#header-sucess h1 {
  font-family: "Inter", sans-serif;
  line-height: 1.5em;
  font-size: 2.25em;
  margin-top: 10px;
  color: #111111;
  text-align: center;
  padding: 3vh 0;
}

.button-goback {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  margin: 10vh auto 150px;
}

.goback {
  padding: 0px 12px;
  font-size: 2.25em;
  width: 269px;
  height: 177px;
  border-radius: 10px;
  border: none;
  background: #0dbdbd;
  color: white;
  gap: 6px;
}

.goback:hover {
  background: #0ca1a1;
  cursor: pointer;
}
@media (max-width: 768px){

#header-sucess h1 {
  padding-bottom: 8vh;
}

.pageSucess {
  height: 100%;
  width: 100%;
  padding-top: 0

}

.button-goback {
  width: 90%;
  margin: 0 auto;
  }

.goback {
  width: 100%;
  height: 10vh;

}

}



</style>
