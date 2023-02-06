import React from "react";

import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { toast } from "react-toastify";
export const Form = () => {
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
        message: null,
      }));
    }
  }, [isSubmitSuccessful, reset]);

  const name = watch("name") || "",
    email = watch("email") || "",
    message = watch("message") || "";
  return (
    <form
      onSubmit={handleSubmit((data) => {
        toast.success("Contact message sent.", {
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
          <p>Contact us</p>
        </Grid>
        <Grid xs={6} md={6}>
          <TextField
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
        <Grid xs={6} md={6}>
          <TextField
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
            error={errors.message ? true : false}
            helperText={
              errors.message ? errors.message.message : "Enter your message"
            }
            color="success"
            focused={!errors.message && message ? true : false}
            id="message"
            label="message"
            variant="filled"
            multiline
            rows={10}
            {...register("message", {
              required: "20-250 characters message required",
              minLength: {
                value: 20,
                message: "Minimum required characters are 20",
              },
              maxLength: {
                value: 250,
                message: "Maximum allowed characters are 250",
              },
            })}
          />
        </Grid>
        <Grid xs={4} md={3}>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Grid>
        <Grid xs={4} md={3}>
          <Button
            onClick={() => {
              reset(() => ({
                name: null,
                email: null,
                message: null,
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
