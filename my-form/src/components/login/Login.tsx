import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "../../hooks/useAuth";
type FormValues = {
  email: string;
  password: string;
};

const schema = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(12, "Password cannot be longer than 12 characters")
    .required("Password is required"),
});

function Login() {
  const { setAuth } = useAuth();
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
        <input type="text" placeholder="Email" {...register("email")} />
        {errors.email && <p className="error">{errors.email.message}</p>}
        <input type="text" placeholder="Password" {...register("password")} />
        {errors.password && <p className="error">{errors.password.message}</p>}
        <input type="submit" id="submit" />
      </form>
    </div>
  );
}
export default Login;
