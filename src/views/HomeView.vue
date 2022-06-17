<template>
  <div class="home">
    <div id="logo">
      <img src="../assets/data1.png" alt="" />
    </div>
    <h1 id="title">Intern Sign Up</h1>
    <div class="formFull">
      <InputsType
        placeholderInput="Full name"
        type="text"
        classInput="formName"
        labelInput="name"
        idInput="Fullname"
        classForm="formNameFull"
        classLabel="label1"
        value="fullName"
        smallClass="classSmall"
        invalidText="Fullname Invalid"
        fieldInput="Full Name *"
        :hasError="this.$store.state.nameError"
      />
      <InputsType
        placeholderInput="Email"
        type="email"
        classInput="formEmail"
        labelInput="email"
        idInput="Email"
        valueInput=""
        classForm="formEmailFull"
        classLabel="label2"
        smallClass="classSmall"
        invalidText="Email Invalid"
        fieldInput="Email *"
         
      />
      <InputsType
        placeholderInput="Phone"
        type="number"
        classInput="formPhone"
        labelInput="phone"
        idInput="Phone"
        classForm="formPhoneFull"
        classLabel="label3"
        smallClass="classSmall"
        invalidText="Phone Invalid"
        fieldInput="Phone *"
      />
      <InputsType
        placeholderInput="Password"
        type="password"
        classInput="formPw"
        labelInput="password"
        idInput="Password"
        classForm="formPwFull"
        classLabel="label4"
        smallClass="classSmall"
        invalidText="Password Invalid"
        fieldInput="Password *"
      />
      <InputsType
        type="date"
        classInput="formBirth"
        labelInput="birthday"
        idInput="Birthday"
        classForm="formBirthFull"
        classLabel="label5"
        smallClass="classSmall"
        invalidText="Age Invalid"
        fieldInput="Birthday *"
      />
    </div>

    <div id="footer">
      <div class="box-terms">
        <label class="terms">
          <input
            :type="checkbox"
            name="terms"
            value="clickCheckbox"
            class="chk"
            id="checkbox"
            required
            @input="getValue"
          />
          <span class="geekmark"></span>
          <span class="label-text">I accept the terms and privacy</span>
        </label>
        <small id="small5" class="classSmall">You must accept the terms</small>
      </div>
      <InputsType
        type="submit"
        classInput="button-register"
        valueInput="Register"
        @input="getValue"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import InputsType from "../components/Inputs/InputsType.vue";

export default {
  name: "HomeView",
  components: {
    InputsType,
  },
  data() {
    return {
      classSmall: "",
      button: "submit",
      checkbox: "checkbox",
    };
  },
  methods: {
    ...mapActions(["setCheckbox"]),
    getValue(e) {
      if (this.checkbox === "checkbox") {
        if (e.target.checked){
          this.setCheckbox(true)
        }else {
          this.setCheckbox(false)
        }
      }
    },
  },
};
</script>

<style scooped>
@import url(../components/Inputs/styles/buttonRegister.css);
@import url(../components/Inputs/styles/form.css);
@import url(..//components/Inputs/styles/checkbox.css);
.home {
  max-width: 620px;
  height: 100%;
  margin: 0 auto;
  background: white;
}

#logo {
  display: flex;
  justify-content: center;
  padding-top: 5vh;
}

#title {
  font-family: "Inter", sans-serif;
  line-height: 1.5em;
  font-size: 2.25em;
  margin-top: 10px;
  color: #111111;
  text-align: center;
}



#footer {
  display: flex;
  justify-content: space-between;
  padding: 10vh 0;
}

span {
  display: block;
}

@media (max-width: 768px) {
  #footer {
    margin: 0 auto;
    display: flex;
    flex-flow: column wrap;
    padding: 15px 0;
  }

  #title {
    margin: 5px;
  }
}

@media (max-height: 750px) {
  #logo {
    padding-top: 10px;
  }

  #footer {
    padding: 10px 0;
  }
}
</style>
