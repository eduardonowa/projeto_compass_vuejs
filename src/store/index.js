import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: "",
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
    },
    setEmail(state, email) {
      state.email = email;
    },

    setPassword(state, password) {
      state.password = password;
    },
    setPhone(state, phone) {
      state.phone = phone;
    },
    setBirthday(state, birthday) {
      state.birthday = birthday;
    },
    setCheckbox(state, checkbox) {
      state.checkbox = checkbox;
    },

    setNameError(state, nameError) {
      state.nameError = nameError;
    },
    setEmailError(state, emailError) {
      state.emailError = emailError;
    },
    setPwError(state, pwError) {
      state.pwError = pwError;
    },
    setPhoneError(state, phoneError) {
      state.phoneError = phoneError;
    },
    setAgeError(state, ageError) {
      state.ageError = ageError;
    },
    setChkError(state, chkError) {
      state.chkError = chkError;
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
