import { useState } from "react";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { theamcontext } from "../context";
function Form() {
  const [form, setform] = useState();
  const { theme } = useContext(theamcontext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  async function submit(data) {
    console.log("submited data from form", data);
    setform(data);

    try {
         const payload = JSON.stringify(data);
      const resposne = await fetch(
        "https://69329d23e5a9e342d2700388.mockapi.io/users/users",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: payload,
        }
      );
      if (!resposne.ok) {
        console.log("problem while sent the data");
      }
    } catch (err) {
      console.log("error in ", err);
    }
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <h2>Add User</h2>
      <form
        onSubmit={handleSubmit(submit)}
        style={{ display: "flex", flexDirection: "column" }}
        className={theme === 'light' ? 'form' : 'formd'}
      >
        <label htmlFor="First name">First Name</label>
        <input
          type="text"
          {...register("Firtsname", { required: true, minLength: "3" })}
        />
        {errors.Firtsname && <p>First name required</p>}

        <label htmlFor="Lastname">Last Name</label>
        <input
          type="text"
          {...register("Lastname", { required: true, minLength: "3" })}
        />
        {errors.Lastname && <p>Last name required</p>}

        <label htmlFor="Phone">Phone</label>
        <input
          type="text"
          {...register("Phone", { required: true, pattern: /^[0-9]{10}$/ })}
        />
        {errors.Phone && <p>phone required</p>}

        <label htmlFor="Email">Email</label>
        <input
          type="text"
          {...register("Email", {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          })}
        />
        {errors.Email && <p>Email required</p>}

        <label htmlFor="Adress">Adress</label>
        <input type="text" {...register("adress", { required: true })} />
        {errors.adress && <p>adress required</p>}

        <button type="submit" style={{ marginTop: "20px",padding:'7px 0px',cursor:'pointer' }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
