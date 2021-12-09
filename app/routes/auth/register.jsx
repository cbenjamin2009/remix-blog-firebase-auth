import { auth } from "~/utils/firebase"
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { redirect, Form, useActionData, Link, json } from "remix";
import { getSession, commitSession } from "~/sessions.server";
import authStyles from "~/styles/auth.css";

//create a stylesheet ref for the auth.css file 
export let links = () => {
    return [{rel: "stylesheet", href: authStyles}]
}
// This will be the same as our Sign In but it will say Register and use createUser instead of signIn 

    export let action = async ({ request }) => {
        let formData = await request.formData();
        let email = formData.get("email");
        let password = formData.get("password")

        //perform a signout to clear any active sessions
        await auth.signOut();

        //setup user data 
        let {session: sessionData, user, error: signUpError} =  await createUserWithEmailAndPassword(auth, email, password)

        if (!signUpError){
            let session = await getSession(request.headers.get("Cookie"))
            session.set("access_token", auth.currentUser.access_token)
            return redirect("/blogs",{
                headers: {
                    "Set-Cookie": await commitSession(session),
                }
            })
        }
        // perform firebase register 
        return {user, signUpError}
    }

    export default function Register(){
        const actionData = useActionData();
    return(
        <div className="loginContainer">
            <div className="authTitle">
                <h1>Register</h1>
            </div>
            <Form method="post">
                <label htmlFor="email">Email</label>
                <input className="loginInput" type="email" name="email" placeholder="you@awesome.dev" required />
                <label htmlFor="password">Password</label>
                <input className="loginInput" type="password" name="password" required />
                <button className="loginButton" type="submit">Register</button>
            </Form>
            <div className="additionalLinks">
            Already Registered?  <Link to="/login">Login</Link>
            </div>
            <div className="errors">
                {actionData?.error ? actionData?.error?.message: null}
            </div>
        </div>
    )
}