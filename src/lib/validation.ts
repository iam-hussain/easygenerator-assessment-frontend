import * as z from "zod";

const messages = {
  required: "Required field",
  email_required: "Email is an required field",
  name_required: "Name is an required field",
  password_required: "Password is an required field",
  valid_string: "Must be a valid string",
  valid_email: "Must be a valid email address",
  min_length_2: "Name must be at least 2 characters long",
  min_length_8: "Password must be at least 8 characters long",
  need_one_letter: "Password must contain at least one letter",
  need_one_number: "Password must contain at least one number",
  need_one_special_char: "Password must contain at least one special character",
};

const email = z
  .string({
    required_error: messages.email_required,
    invalid_type_error: messages.valid_email,
  })
  .email({ message: messages.valid_email });

const name = z
  .string({
    required_error: messages.name_required,
    invalid_type_error: messages.valid_string,
  })
  .min(2, {
    message: messages.min_length_2,
  });

const password = z
  .string({
    required_error: messages.password_required,
    invalid_type_error: messages.valid_string,
  })
  .min(8, {
    message: messages.min_length_8,
  });

const schemas = {
  login: z.object({ email, password }),
  register: z.object({ name, email, password }),
};

export type RegisterSchemaValues = z.infer<typeof schemas.register>;
export type LoginSchemaValues = z.infer<typeof schemas.login>;

export default schemas;
