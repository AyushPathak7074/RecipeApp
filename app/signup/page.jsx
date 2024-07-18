"use client"
import Link from "next/link";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";


export default function SignUp() {
    const handleSubmit = async (e) => {
        e.preventDefault();

        const {email, password} = e.target.elements;
        await createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            window.alert("Successfully created user");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            window.alert(errorMessage);
        });
    }

    return (
    <div className="d-flex align-items-center justify-content-center" style={{"height": "80vh"}}>
      <form onSubmit={handleSubmit}>
        <div className="fs-3 my-3 text-center">
            Sign Up
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <div className="my-3">
            <Link href={"/signin"}>existing user? signin</Link>
        </div>
      </form>
    </div>
  );
}
