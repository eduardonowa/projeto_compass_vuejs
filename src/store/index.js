import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: '',
    email: "",
    password: "",
    phone: "",
    birthday: "",
    checkbox: "",
    nameError: false,
    emailError: false,
    pwError: false,
    phoneError: false,
    ageError: false,
    chkError: false,
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
      console.log(email);
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
      console.log(password);
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

    setNameError(state, nameError) {
      state.nameError = nameError;
      console.log(nameError + ' name');
    },
    setEmailError(state, emailError) {
      state.emailError = emailError;
      console.log(emailError + ' email');
    },
    setPwError(state, pwError) {
      state.pwError = pwError;
      console.log(pwError + ' pw');
    },
    setPhoneError(state, phoneError) {
      state.phoneError = phoneError;
      console.log(phoneError + ' phone');
    },
    setAgeError(state, ageError) {
      state.ageError = ageError;
      console.log(ageError + " age");
    },
    setChkError(state, chkError) {
      state.chkError = chkError;
      console.log(chkError + ' checkbox');
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

    setNameError({ commit }, nameError) {
      commit("setNameError", nameError);
    },
    setEmailError({ commit }, emailError) {
      commit("setEmailError", emailError);
    },
    setPwError({ commit }, pwError) {
      commit("setPwError", pwError);
    },
    setPhoneError({ commit }, phoneError) {
      commit("setPhoneError", phoneError);
    },
    setAgeError({ commit }, ageError) {
      commit("setAgeError", ageError);
    },
    setChkError({ commit }, chkError) {
      commit("setChkError", chkError);
    },
  },
  modules: {},
});
