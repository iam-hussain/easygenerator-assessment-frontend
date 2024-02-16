import * as z from "zod";

const messages = {
  string_invalid: "Must be a valid string",
  email_required: "Email is an required field",
  email_invalid: "Must be a valid email address",
  name_required: "Name is an required field",
  name_min_length_2: "Name must be at least 2 characters long",
  password_required: "Password is an required field",
  password_min_length_8: "Password must be at least 8 characters long",
  password_need_one_letter: "Password must contain at least one letter",
  password_need_one_number: "Password must contain at least one number",
  password_need_one_special_char:
    "Password must contain at least one special character",
};

const email = z
  .string({
    required_error: messages.email_required,
    invalid_type_error: messages.email_invalid,
  })
  .email(messages.email_invalid);

const name = z
  .string({
    required_error: messages.name_required,
    invalid_type_error: messages.string_invalid,
  })
  .min(2, messages.name_min_length_2);

const password = z
  .string({
    required_error: messages.password_required,
    invalid_type_error: messages.string_invalid,
  })
  .min(8, messages.password_min_length_8)
  .regex(/[a-zA-Z]/, messages.password_need_one_letter)
  .regex(/\d/, messages.password_need_one_number)
  .regex(/[!@#$%^&*(),.?":{}|<>]/, messages.password_need_one_special_char);

const schemas = {
  login: z.object({ email, password }),
  register: z.object({ name, email, password }),
};

export type RegisterSchemaValues = z.infer<typeof schemas.register>;
export type LoginSchemaValues = z.infer<typeof schemas.login>;

export default schemas;
