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
      
    />
    <small :id="small" :class="smallClass">{{ invalidText }}</small>
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
    smallClass: {
      type: String,
      default: "clear",
    },
    invalidText: String,
    fieldInput: String,
  },

  methods: {
    ...mapActions([
      "setName",
      "setEmail",
      "setPassword",
      "setPhone",
      "setBirthday",
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
