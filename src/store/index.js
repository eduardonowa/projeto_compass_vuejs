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
    button: "",
  },
  getters: {},
  mutations: {
    setName(state, name) {
      state.name = name;
      if (
        /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/.test(
          name
        )
      ) {
        return true;
      }
    },
    setEmail(state, email) {
      state.email = email;
      if (
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          email
        )
      ) {
        
        console.log('caio viado');
      } else {
        console.log('nowa hetero');
      }
    },

    setPassword(state, password) {
      state.password = password;
      if (/^[0-9]{6,9}$/.test(password)) {
        console.log("boa");
      } else {
        console.log("n vai dar");
      }
    },
    setPhone(state, phone) {
      state.phone = phone;
      console.log(phone);
    },
    setBirthday(state, birthday) {
      state.birthday = birthday;
      console.log(birthday);
    },
    setCheckbox(state, checkbox) {
      state.checkbox = checkbox;
      if (checkbox.checked){
        console.log("marcada");
      }else {
        console.log("desmarcada");

      }
    },
    setButton(state, button) {
      state.button = button;
      console.log(button);
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
  },
  modules: {},
});
