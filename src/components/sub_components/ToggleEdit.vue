<template>
  <div class="toggle">
    <span>Toggle Editing Post</span>
    <label class="switch">
      <input type="checkbox" v-model="toggleValue" @change="toggleEdit" />
      <span class="slider round"></span>
    </label>
  </div>
</template>
<script>
import { mapWritableState } from "pinia";
import useUserStore from "@/stores/user";
export default {
  name: "ToggleEdit",
  mounted() {
    this.toggleValue = this.editMode;
  },
  data() {
    return {
      toggleValue: "false",
    };
  },
  computed: {
    ...mapWritableState(useUserStore, ["editMode"]),
  },
  methods: {
    toggleEdit() {
      this.$emit("toggle-edit");
    },
  },
  // watch: {
  //   toggleValue() {
  //     this.editMode = this.toggleValue;
  //   },
  //},
};
</script>
<style lang="scss" scoped>
.toggle {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20px;
  right: 120px;
  span {
    margin-right: 20px;
  }
}
.switch {
  position: relative;
  display: inline-block;
  width: 100px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;

  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 10px;
  bottom: 4px;
  background-color: white;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: green;
}

input:focus + .slider {
  box-shadow: 0 0 1px green;
}

input:checked + .slider:before {
  transform: translateX(34px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
