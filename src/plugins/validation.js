import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure,
} from "vee-validate";
import { required, min, max, email } from "@vee-validate/rules";
export default {
  install: (app) => {
    app.component("VeeForm", VeeForm);
    app.component("VeeField", VeeField);
    app.component("ErrorMessage", ErrorMessage);
    defineRule("required", required);
    defineRule("min", min);
    defineRule("max", max);
    defineRule("email", email);

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `The field ${ctx.field} is required`,
          min: `The field ${ctx.field} is too short`,
          max: `The field ${ctx.field} is too long`,
          email: `The field ${ctx.field} should be a valid email`,
        };
        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `the field ${ctx.field} is invalid`;
        return message;
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true,
    });
  },
};
