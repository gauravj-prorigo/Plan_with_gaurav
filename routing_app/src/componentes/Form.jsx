import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { theamcontext } from "../context";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
function Form() {
  const [form, setform] = useState();
  const { theme } = useContext(theamcontext);
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  async function submit(data) {
    console.log("submited data from form", data);
    setform(data);

    try {
      const payload = JSON.stringify(data);
      if (id) {
        const resposne = await fetch(
          `https://69329d23e5a9e342d2700388.mockapi.io/users/users/${id}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: payload,
          }
        );
        if (!resposne.ok) {
          console.log("problem while sent the data");
        }
        toast.success("Updated sucessfully");
        navigate("/user");
      } else {
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
        toast.success("User add sucessfully");
        navigate("/user");
      }
    } catch (err) {
      console.log("error in ", err);
    }
  }

  useEffect(() => {
    if (id) {
      console.log("id is here ", id);
      async function fetchdata() {
        try {
          const response = await fetch(
            `https://69329d23e5a9e342d2700388.mockapi.io/users/users/${id}`
          );
          if (!response.ok) {
            console.log("error from api");
          }
          const data = await response.json();
          reset(data);
        } catch (e) {
          console.log("error", e);
        }
      }
      fetchdata();
    }
  }, [id]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",

        padding: "10px 20px",
        marginTop: "50px",
        borderRadius: "5px",
      }}
    >
      <form
        onSubmit={handleSubmit(submit)}
        style={{ display: "flex", flexDirection: "column" }}
        className={theme === "light" ? "form" : "formd"}
      >
        {id ? <h2>Edit user</h2> : <h2>Add User</h2>}
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

        <button
          type="submit"
          disabled={isSubmitting}
          style={{ marginTop: "20px", padding: "7px 0px", cursor: "pointer" }}
          className="buttons"
        >
          {isSubmitting ? "  Submitingg" : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default Form;
