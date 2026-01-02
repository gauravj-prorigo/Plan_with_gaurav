import { useForm } from "react-hook-form";
import constusimg from "../assets/download.jpg";
import { SiPanasonic } from "react-icons/si";
import '../css/ContactUs.css'
import { toast } from "react-toastify";
function ContactUs() {
  const {
    register,
    handleSubmit,
     clearErrors,
     reset,
    formState: { errors },
  } = useForm();

  function handlesub(data){
    toast.success("Your response submited")
    console.log(data)
    reset()
  }

  function handlechange(){
    clearErrors("Email")
  }
  return (
    <div className="main-contactus">
      <div className="sub-contactus">
        <div className="sub1-contactus">
          <div className="img-contactus">
            <img
              src={constusimg}
              alt="contacusimg"
            />
          </div>
        </div>
        <div className="sub2-contactus">
            <h1>Contact Us</h1>
          <div className="contactus-form">
            <form onSubmit={handleSubmit(handlesub)}>
              <div className="form1">
                <label htmlFor="FullName">FullName</label>
                <input type="text" {...register("fullname")} />
              </div>
               <div className="form1">
                <label htmlFor="FullName">Email</label>
                <input type="email"  {...register("Email",{required:true})}  className="email-contactus" onChange={handlechange}/>
                {errors.Email && <span style={{color:'red'}}>Email required</span>}
              </div>
               <div className="form1">
                <label htmlFor="FullName">Message</label>
                <input type="textarea" {...register("Meassge")} />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
