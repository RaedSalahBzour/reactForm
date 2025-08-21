import "./Form.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  password: string;
  confirmPassword: string;
};

const schema = yup.object({
  firstName: yup
    .string()
    .test(
      "not-bahaa",
      "The name 'bahaa' is in the black list",
      value => value?.toLowerCase() !== "bahaa"
    )
    .required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  age: yup
    .number()
    .typeError("Age must be a number")
    .positive("Age must be greater than zero")
    .integer("Age must be an integer")
    .required("Age is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(12, "Password cannot be longer than 12 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const submitForm = (data: FormValues) => {
    console.log("the data is", data);
    reset();
  };
  return (
    <div className="form">
      <div className="title">Sign up</div>
      <form onSubmit={handleSubmit(submitForm)}>
        <input
          type="text"
          placeholder="First Name"
          {...register("firstName")}
        />
        {errors.firstName && (
          <p className="error">{errors.firstName.message}</p>
        )}
        <input type="text" placeholder="Last Name" {...register("lastName")} />
        {errors.lastName && <p className="error">{errors.lastName.message}</p>}
        <input type="text" placeholder="Email" {...register("email")} />
        {errors.email && <p className="error">{errors.email.message}</p>}
        <input type="text" placeholder="Age" {...register("age")} />
        {errors.age && <p className="error">{errors.age.message}</p>}
        <input type="text" placeholder="Password" {...register("password")} />
        {errors.password && <p className="error">{errors.password.message}</p>}
        <input
          type="text"
          placeholder="Confirm Password"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword.message}</p>
        )}
        <input type="submit" id="submit" />
      </form>
    </div>
  );
}
export default Form;
