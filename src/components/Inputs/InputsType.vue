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
      @click="register"
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
        const nameInput = this.$store.state.name;
        console.log(nameInput);
        // const emailInput = this.$store.state.email
        // const passwordInput = this.$store.state.password
        // const phoneInput = this.$store.state.phone
        // const birthdayInput = this.$store.state.birthday
        // const checkboxInput = this.$store.state.checkbox

        if ((this.checkName(nameInput)))  {
          // this.$router.push("/SucessView");
        }
      }
    },

    checkName(value) {
      if (
        /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/.test(
          value
        )
      ) {
        window.localStorage.setItem("name", value);
         this.setNameError(false);
        return true;
      } else {
        window.localStorage.setItem("name", "");
        this.setNameError(true);
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
