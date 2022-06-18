<template>
  <div :class="classForm">
    <label :class="classLabel" >{{ fieldInput }} </label>
    <input
      :type="type"
      required
      :class="classInput"
      :placeholder="placeholder"
      :id="id"
      @input="getValue"
    />
    <small :id="small" :class="smallClass" v-show="hasError">
      {{ invalidText }}</small
    >
  </div>
</template>

<script>
import { mapActions } from "vuex";

export function register() {
  const createLs = (name, data) => {
    window.localStorage.setItem(name, data);
  };

  const nameInput = this.$store.state.name;
  if (
    /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/.test(
      nameInput
    )
  ) {
    this.setNameError(false);
    createLs("name", nameInput);
  } else {
    createLs("name", "");
    this.setNameError(true);
  }

  const emailInput = this.$store.state.email;
  if (
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      emailInput
    )
  ) {
    this.setEmailError(false);
    createLs("email", emailInput);
  } else {
    createLs("email", "");
    this.setEmailError(true);
  }

  const pwInput = this.$store.state.password;
  if (/^[0-9]{6,9}$/.test(pwInput)) {
    this.setPwError(false);
    createLs("password", pwInput);
  } else {
    createLs("password", "");
    this.setPwError(true);
  }

  const phoneInput = this.$store.state.phone;
  if (/^[0-9]{11}$/.test(phoneInput)) {
    this.setPhoneError(false);
    createLs("phone", phoneInput);
  } else {
    createLs("phone", "");
    this.setPhoneError(true);
  }

  const ageInput = this.$store.state.birthday;
  const yearBirth = ageInput.substring(0, 4);
  const date = new Date();
  const ano = date.getFullYear();
  const age = ano - yearBirth;
  if (age >= 0 && age <= 121) {
    this.setAgeError(false);
    createLs("age", ageInput);
  } else {
    createLs("age", "");
    this.setAgeError(true);
  }

  const chkInput = this.$store.state.checkbox;
  if (chkInput) {
    this.setChkError(false);
    createLs("checkbox", chkInput);
  } else {
    createLs("checkbox", "");
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

export default {
  name: "InputsType",
  components: {},
  props: {
    placeholder:String,
    classInput:String,
    id:String,
    showInput: String,
    type: String,
    classForm: String,
    classLabel: String,
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
      small: "",
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
      } else if (this.type === "tel") {
        const newPhone = e.target.value.replace(/\W/g, "")
        this.setPhone(newPhone);
      } else if (this.type === "email") {
        this.setEmail(e.target.value);
      } else if (this.type === "submit") {
        this.setButton(e.target.value);
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
