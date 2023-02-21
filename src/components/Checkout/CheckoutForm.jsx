import React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useCartContext } from "../../context/CartContext";
export const CheckoutForm = () => {
  const { getTotalPrice, cartAsArray } = useCartContext();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    watch,
    reset,
  } = useForm();

  const emailRegExp = new RegExp(
    // eslint-disable-next-line no-control-regex
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
  );

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset(() => ({
        name: null,
        email: null,
        emailRepeat: null,
        cellphone: null,
        direction: null,
      }));
    }
  }, [isSubmitSuccessful, reset]);

  const name = watch("name") || "",
    email = watch("email") || "",
    emailRepeat = watch("emailRepeat") || "",
    cellphone = watch("cellphone") || "",
    direction = watch("direction") || "";
  return (
    <form
      onSubmit={handleSubmit((clientData) => {
        let cart = cartAsArray();
        let totalprice = getTotalPrice();
        let currentDate = new Date().toLocaleDateString();
        console.dir({ clientData, cart, totalprice, currentDate });

        toast.success("Order sent.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      })}
      autoComplete="off"
    >
      <Grid id="form-grid" container spacing={2}>
        <Grid xs={12} md={12}>
          <TextField
            sx={{ width: "100%" }}
            error={errors.name ? true : false}
            helperText={errors.name ? errors.name.message : "Enter your name"}
            color="success"
            focused={!errors.name && name ? true : false}
            id="name"
            label="name"
            variant="filled"
            {...register("name", {
              required: "3-50 characters name is required",
              minLength: { value: 3, message: "name minimum length is 3" },
              maxLength: { value: 50, message: "name maximum length is 50" },
            })}
          />
        </Grid>
        <Grid xs={12} md={12}>
          <TextField
            sx={{ width: "100%" }}
            error={errors.email ? true : false}
            helperText={
              errors.email ? errors.email.message : "Enter your email"
            }
            color="success"
            focused={!errors.email && email ? true : false}
            id="email"
            label="email"
            variant="filled"
            {...register("email", {
              required: "Valid email is required",
              pattern: {
                value: emailRegExp,
                message: "Please enter a valid email",
              },
            })}
          />
        </Grid>
        <Grid xs={12} md={12}>
          <TextField
            sx={{ width: "100%" }}
            error={errors.emailRepeat ? true : false}
            helperText={
              errors.emailRepeat
                ? errors.emailRepeat.message
                : "Repeat your email"
            }
            color="success"
            focused={!errors.emailRepeat && emailRepeat ? true : false}
            id="emailRepeat"
            label="repeat your email"
            variant="filled"
            {...register("emailRepeat", {
              required: "Repeat your email",
              pattern: {
                value: emailRegExp,
                message: "This doesnt seem to be a valid email",
              },
              validate: {
                emailEqual: (value) => value === email || "Email doesnt match",
              },
            })}
          />
        </Grid>
        <Grid xs={12} md={12}>
          <TextField
            sx={{ width: "100%" }}
            error={errors.cellphone ? true : false}
            helperText={
              errors.cellphone
                ? errors.cellphone.message
                : "Enter your cellphone"
            }
            color="success"
            focused={!errors.cellphone && cellphone ? true : false}
            id="cellphone"
            label="cellphone"
            variant="filled"
            {...register("cellphone", {
              required: "10 characters number",
              pattern: {
                value: /^\d{10}$/,
                message: "cellphone must be a ten digit value",
              },
            })}
          />
        </Grid>
        <Grid xs={12} md={12}>
          <TextField
            sx={{ width: "100%" }}
            error={errors.direction ? true : false}
            helperText={
              errors.direction
                ? errors.direction.message
                : "Enter your direction"
            }
            color="success"
            focused={!errors.direction && direction ? true : false}
            id="direction"
            label="direction"
            variant="filled"
            {...register("direction", {
              required: "3-50 characters direction is required",
              minLength: { value: 3, message: "direction minimum length is 3" },
              maxLength: {
                value: 50,
                message: "direction maximum length is 50",
              },
            })}
          />
        </Grid>
        <Grid xs={6} md={5}>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Grid>
        <Grid xs={6} md={5}>
          <Button
            onClick={() => {
              reset(() => ({
                name: null,
                email: null,
                emailRepeat: null,
                cellphone: null,
                direction: null,
              }));
            }}
            variant="contained"
          >
            Clear
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
