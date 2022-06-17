import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name:  "",
    email: "",
    password: "",
    phone: "",
    birthday: "",
    checkbox: "",
    button: "",
    nameError:false,
    // emailError:false,
    // passwordError:false,
    // phoneError:false,
    // birthdayError:false,
    // checkboxError:false,
  },
  getters: {},
  mutations: {
    setName(state, name) {
      state.name = name;
      console.log(name);
      // if (
      //   /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/.test(
      //     name
      //   )
      // ) {
      //   window.localStorage.setItem("Name:", name);
      //   return true;
      // } else {
      //   window.localStorage.setItem("Name:", "");
      // }
    },
    setEmail(state, email) {
      state.email = email;
      // if (
      //   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      //     email
      //   )
      // ) {
      //   window.localStorage.setItem("Email:", email);

      //   return true;
      // } else {
      //   window.localStorage.setItem("Email:", "");
      // }
    },

    setPassword(state, password) {
      state.password = password;
      // if (/^[0-9]{6,9}$/.test(password)) {
      //   console.log(password);
      //   window.localStorage.setItem("Password:", password);
      //   return true;
      // } else {
      //   window.localStorage.setItem("Password:", "");
      // }
    },
    setPhone(state, phone) {
      state.phone = phone;
      // if (/^[0-9]{11}$/.test(phone)) {
      //   window.localStorage.setItem("Phone:", phone);
      //   return true;
      // } else {
      //   window.localStorage.setItem("Phone:", "");
      // }
    },
  setBirthday(state, birthday) {
    state.birthday = birthday;
    // const yearBirth = birthday.substring(0, 4);
    // const date = new Date();
    // const ano = date.getFullYear();
    // const age = ano - yearBirth;
    // if (age >= 18 && age <= 121) {
    //   window.localStorage.setItem("Birthday:", birthday);
    // } else {
    //   window.localStorage.setItem("Birthday:", "");
    // }
  },
  setCheckbox(state, checkbox) {
    state.checkbox = checkbox;
  //   if (checkbox){
  //   window.localStorage.setItem("Terms: ", checkbox);
  // } else {
  //   window.localStorage.setItem("Terms: ", "");
  
  },

  setButton(state, button) {
    state.button = button;
    console.log(button);
  },

  setNameError(state, nameError) {
    state.nameError = nameError;
    console.log(nameError);
  },
},
  actions: {
    setName({ commit }, name) {
      commit("setName", name);
    },
    setEmail({ commit }, email) {
      commit("setEmail", email);
    },
    setPassword({ commit }, password) {
      commit("setPassword", password);
    },
    setPhone({ commit }, phone) {
      commit("setPhone", phone);
    },
    setBirthday({ commit }, birthday) {
      commit("setBirthday", birthday);
    },
    setCheckbox({ commit }, checkbox) {
      commit("setCheckbox", checkbox);
    },
    setButton({ commit }, button) {
      commit("setButton", button);
    },
    setNameError({ commit }, nameError) {
      commit("setNameError", nameError);
    },
  },
  modules: {},
});
