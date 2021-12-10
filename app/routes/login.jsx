import { auth } from "~/utils/firebase"
import { signInWithEmailAndPassword } from "@firebase/auth";
import { redirect, Form, Link, json, useActionData } from "remix";
import { getSession, commitSession } from "~/sessions.server";
import authStyles from "~/styles/auth.css";

//create a stylesheet ref for the auth.css file 
export let links = () => {
    return [{rel: "stylesheet", href: authStyles}]
}
// use loader to check for existing session, if found, send the user to the blogs site
export async function loader({ request }) {
    const session = await getSession(
      request.headers.get("Cookie")
    );
  
    if (session.has("access_token")) {
      // Redirect to the blog page if they are already signed in.
    //   console.log('user has existing cookie')
      return redirect("/blogs");
    } 
  
    const data = { error: session.get("error") };
  
    return json(data, {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    });
  }

// our action function will be launched when the submit button is clicked
// this will sign in our firebase user and create our session and cookie using user.getIDToken()
    export let action = async ({ request }) => {
        let formData = await request.formData();
        let email = formData.get("email");
        let password = formData.get("password")
            const {user, error} = await signInWithEmailAndPassword(auth, email, password)
            // if signin was successful then we have a user
            if ( user ) {
                // let's setup the session and cookie wth users idToken
                let session = await getSession(request.headers.get("Cookie"))
                session.set("access_token", await user.getIdToken())
                // let's send the user to the main page after login
                return redirect("/admin", {
                    headers: {
                        "Set-Cookie": await commitSession(session),
                    }
                })
            }
            return { user, error}
        }

    export default function Login(){
        // to use our actionData error in our form, we need to pull in our action data
        const actionData = useActionData();
    return(
        <div className="loginContainer">
            <div className="authTitle">
            <h1>Login</h1>
            </div>
            <Form method="post">
                <label htmlFor="email">Email</label>
                <input className="loginInput" type="email" name="email" placeholder="you@awesome.dev" required />
                <label htmlFor="password">Password</label>
                <input className="loginInput" type="password" name="password" required />
                <button className="loginButton" type="submit">Login</button>
            </Form>
            <div className="additionalLinks">
            <Link to="/auth/register">Register</Link>
            <Link to="/auth/forgot">Forgot Password?</Link>
            </div>
            <div className="errors">
                {actionData?.error ? actionData?.error?.message: null}
            </div>
           
        </div>
    )
}