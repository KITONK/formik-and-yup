import * as yup from "yup";

export const signInSchema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup.string()
              .required("Password is required")
              .min(4, "Password is too short - should be 4 chars min")
});

export const initialValues = {
    email: "",
    password: ""
};