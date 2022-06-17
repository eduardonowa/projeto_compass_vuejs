<template>
  <div :class="classForm">
    <label :class="classLabel" :for="labelInput">{{ fieldInput }} </label>
    <input
      :type="type"
      required
      :class="classInput"
      :placeholder="placeholderInput"
      :id="idInput"
      :value="valueInput"
      @input="getValue"
      @click.prevent="register()"
    />
    <small :id="small" :class="smallClass" v-if="hasError">
      {{ invalidText }}</small
    >
  </div>
</template>

<script>
import { mapActions } from "vuex";

export function funcionando() {
  console.log("name");
}

export default {
  name: "InputsType",
  components: {},
  props: {
    placeholderInput: String,
    classInput: String,
    idInput: String,
    labelInput: String,
    showInput: String,
    type: String,
    classForm: String,
    classLabel: String,
    small: String,
    valueInput: {
      type: String,
      default: "",
    },
    smallClass: String,
    invalidText: String,
    fieldInput: String,
    hasError: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      handleError: this.$store.state.showError,
    };
  },

  methods: {
    ...mapActions([
      "setName",
      "setEmail",
      "setPassword",
      "setPhone",
      "setBirthday",
      "setButton",
      "setNameError",
      "setEmailError",
      "setPwError",
      "setPhoneError",
      "setAgeError",
      "setChkError",
    ]),

    getValue(e) {
      if (this.type === "text") {
        this.setName(e.target.value);
      } else if (this.type === "password") {
        this.setPassword(e.target.value);
      } else if (this.type === "date") {
        this.setBirthday(e.target.value);
      } else if (this.type === "number") {
        this.setPhone(e.target.value);
      } else if (this.type === "email") {
        this.setEmail(e.target.value);
      } else if (this.type === "submit") {
        this.setButton(e.target.value);
      }
    },
    register() {
      if (this.type === "submit") {
        const createLS = (name, data) => {
          return window.localStorage.setItem(name, data);
        };

        const nameInput = this.$store.state.name;
        if (
          /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/.test(
            nameInput
          )
        ) {
          this.setNameError(false);
          createLS("name", nameInput);
        } else {
          createLS("name", "");
          this.setNameError(true);
        }

        const emailInput = this.$store.state.email;
        if (
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            emailInput
          )
        ) {
          this.setEmailError(false);
          createLS("email", emailInput);
        } else {
          createLS("email", "");
          this.setEmailError(true);
        }

        const pwInput = this.$store.state.password;
        if (/^[0-9]{6,9}$/.test(pwInput)) {
          this.setPwError(false);
          createLS("password", pwInput);
        } else {
          createLS("password", "");
          this.setPwError(true);
        }

        const phoneInput = this.$store.state.phone;
        if (/^[0-9]{11}$/.test(phoneInput)) {
          this.setPhoneError(false);
          createLS("phone", phoneInput);
        } else {
          createLS("phone", "");
          this.setPhoneError(true);
        }

        const ageInput = this.$store.state.birthday;
        const yearBirth = ageInput.substring(0, 4);
        const date = new Date();
        const ano = date.getFullYear();
        const age = ano - yearBirth;
        if (age >= 0 && age <= 121) {
          this.setAgeError(false);
          window.localStorage.setItem("age", ageInput);
        } else {
          window.localStorage.setItem("age", "");
          this.setAgeError(true);
        }

        const chkInput = this.$store.state.checkbox;
        if (chkInput) {
          this.setChkError(false);
          createLS("checkbox", chkInput);
        } else {
          createLS("checkbox", "");
          this.setChkError(true);
        }

        const nameStorage = window.localStorage.getItem("name");
        const emailStorage = window.localStorage.getItem("email");
        const pwStorage = window.localStorage.getItem("password");
        const phoneStorage = window.localStorage.getItem("phone");
        const chkStorage = window.localStorage.getItem("checkbox");
        const ageStorage = window.localStorage.getItem("age");

        if (
          nameStorage &&
          emailStorage &&
          pwStorage &&
          phoneStorage &&
          chkStorage &&
          ageStorage
        ) {
          this.$router.push("/SucessView");
        }
      }
    },
  },
};
</script>

<style scooped>
input[type="date"]::-webkit-calendar-picker-indicator {
  color: #767676;
  opacity: 1;
  display: block;
  background: url(../../assets/vector.png) no-repeat;
  margin-top: 5px;
  width: 20px;
  height: 20px;
  border-width: thin;
}

small {
  display: block;
}
</style>
