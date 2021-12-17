## Part 2 Remix Blog - Setup Auth through Firebase
This portion of the blog assumes that you have followed the [first blog article](https://dev.to/chrisbenjamin/remix-blog-tutorial-remix-react-prisma-mongodb-vercel-1hhb). 


![An image of the website home page for the finished product](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/t9mv1iuoy7stkj3h9feu.jpeg)

This is a continuation that focuses on setting up Authentication using Firebase with Email and Password, protecting pages from view until authenticated, and adding a delete option for blog posts.

Note: You can follow portions of this for a basic firebase authentication for any Remix app using Firebase without having complete the first tutorial. 

### Code and Demo
You can view the sourcode for this tutorial on GitHub [here](https://github.com/cbenjamin2009/remix-blog-firebase-auth)

You can view a live Demo on Vercel [here](https://remix-blog-firebase-auth.vercel.app/)

### Requirements (Free):
- Vercel Account
- Google Account
- MongoDB Account
- Completion of part 1 tutorial and working code


### Why make this tutorial?
When I was first looking at Remix, one of the issues I quickly stumbled upon was how to handle authentication. Since Remix removes the need for useState in your React app, in most cases, it was hard to grasp the concept of creating authentication. The first several times I created server side authentication with Remix it was not successful. 

### Firebase setup
This section assumes you have never used Firebase before and will walk through the initial setup of your firebase account.  We will be creating a Firebase account, setting up our app, and retreiving our firebase configuration information including API key. 

1. Register for firebase [here](https://firebase.google.com/) and click Get Started
2. Create a new project, I named mine _remix-blog-tutorial_
    
![Shows what the add project button looks like on firebase](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/a0h32kxkwhfxeacql87b.png)
3. I turned off Google Analytics, you can use this if you want. 
4. Setup Auth with Email and Password
    1. Click Authentication
    2. Click Get Started
    3. Click Email/Password under Native Providers
    4. Click the slider to enable
    5. Disable Email link (passwordless sign-in) for this tutorial  
![Shows the email/password registration page with email turned on](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/k6xame254e0cvdumq1h3.png)
5. Register an App
    1. In Firebase Console click Project Overview
    2. On the main page where it says Get Started by adding Firebase to your app, click on the code icon </> for web app  
![Shows the web app button to click](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7482radq7ed01wngh0j7.png)
    3. I'm going to call mine _remix-blog-app_ you can name yours however you like. 
    4. We are not setting up firebase hosting at this time so be sure to leave that unchecked.  
![Shows the app register page with remix-blog-app filled in and firebase hosting unchecked](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/p9kzeidphcro9q7k2zph.png)
    5. Click Register App
    6. Copy your firebase config for the next step. 
6. Setup your Firebase config
    1. Create a folder named `utils` in your (`/app`) directory
    1. Create a new file under `/app/utils` called `firebase.js`
    2. Copy the firebase config from the console to this firebase.js file 
7. Install Firebase `npm install firebase`

Update Your firebase.js file should look like this but leave your firebaseConfig values the same. 
```javascript
import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhab0G2GmrgosEngBHRudaOhSrlr2d8_4",
  authDomain: "remix-auth-tutorial.firebaseapp.com",
  projectId: "remix-auth-tutorial",
  storageBucket: "remix-auth-tutorial.appspot.com",
  messagingSenderId: "496814875666",
  appId: "1:496814875666:web:99246a28f282e9c3f2db5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export { auth }
```

### Project Files
Now we are going to be working our remix app. 

### Project Cleanup
We are going to do a bit of project cleanup here to make our Remix project more personalized from the `npx create-remix@latest` bootstrap page. 

Open your `index.jsx` file located in (`./app/routes/index.jsx`)


In the return statement of the Index() function, update it however you see fit. Also remove the current **loader** function. Here is what I'm using which gives some links to this tutorial, the github repo for the code, and the tutorial which you are currently reading.
```javascript
export default function Index() {

  return (
    <div className="remix__page">
      <main>
        <h2>Welcome to Remix Blog Auth Tutorial!</h2>
        <h3>This blog was created by <strong>Chris Benjamin</strong></h3>
        <p>This tutorial will show you how firebase authentication functionality works in Remix</p>
      </main>
      <aside>
      <h3>Tutorial Links</h3>
      <ul>
        <li><a href="https://github.com/cbenjamin2009/remix-blog-firebase-auth" target="_blank">Github</a></li>
        <li><a href="https://dev.to/chrisbenjamin" target="_blank">Tutorial</a></li>
      </ul>
      </aside>
    </div>
  );
}
```

## Authentication
This section will cover our Session file, registering for an account, logging into that account, signing out of our account, and resetting our password. We are going to add authentication to the Admin page of our blog which allows for creating blogs, editing existing blogs, and deleting blogs. 

### Server Session File
We need to house all of our session data in a server side file that will handle our sessions. We are going to use the built in Remix session handling for this, refer to Remix documentation for more information. 

This file will export our getSession, commitSession, and destroySession that we will use for our authentication. 

Create a new file called `sessions.server.jsx` in the root of your (`/app/sessions.server.jsx`)
We are going to be using the default Remix code from their documentation for this section with 2 small changes. 
1. Update the name of your token, I chose `fb:token` for firebase token. 
2. Update your secrets to include something of your own. 

```javascript
// app/sessions.js
import { createCookieSessionStorage } from "remix";

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    // a Cookie from `createCookie` or the CookieOptions to create one
    cookie: {
        //firebase token
      name: "fb:token",

      // all of these are optional
      expires: new Date(Date.now() + 600),
      httpOnly: true,
      maxAge: 600,
      path: "/",
      sameSite: "lax",
      secrets: ["tacos"],
      secure: true
    }
  });

export { getSession, commitSession, destroySession };
```

### Login Setup
This is our Login route file which will handle user authentication for logging in and/or registering for our app through Firebase. 

The Remix **Loader** function will be used to see if a user is already logged in, if so, it will not render the login page it will instead redirect them to the blogs page. 

The Remix **Action** function will receive the post request from the login button to sign our user in with email and password. We will also be creating a session cookie to keep the user signed in for the duration of their session. If a user closes their browser and tries to get back to the page, it will ask them to sign in again. 

1. Create `./app/routes/login.jsx`

```javascript
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
```

### Additional Authentication Functions 
First, let's house all of our authentication besides login in a folder to keep it together and clean. 
Create a folder called `auth` under (`/app/routes/auth/`)

### Register User Setup
This will allow a user to register and create a new user account for our blog and then immediately sign them in. 

The Remix **Action** function will receive the post request from the register button to register our user with email and password then sign them in. If there are no errors with creating the user, we will create a session cookie to keep the user signed in for the duration of their session and redirect them to the home page. If a user closes their browser and tries to get back to the page, it will ask them to sign in again.

1. Create `register.jsx` in (`/app/routes/auth/register.jsx`)

```javascript
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
```

### Logout Setup (Updated 12/17/2021)
It's important that our users be able to logout of their session.
**Update**: The previous version of this blog had the logout feature be a separate route, this resulted in the Root not re-rendering and therefore the logout button remained even after logout. This new update uses a remix `<Form>` tag to call an action and post the request which updates correctly.  

The Remix **Action** function will load in the current session Cookie, and then using destroySession from Remix we will remove that cookie to effectively sign the user out and then redirect them to the home page. 

1. Edit your `Root.jsx` file as follows

Update the imports to include the following
```javascript
import { redirect } from "remix";
import { getSession } from "~/sessions.server";
import { destroySession } from "~/sessions.server";
import { auth } from "~/utils/firebase";
```

Now let's setup our action which will run when the user clicks the Logout button in the nav. 

```javascript
// loader function to check for existing user based on session cookie
// this is used to change the nav rendered on the page and the greeting. 
export async function loader({ request }) {
  const session = await getSession(
    request.headers.get("Cookie")
  );

  if (session.has("access_token")) {

  const data = { user: auth.currentUser, error: session.get("error") };
  return json(data, {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
} else {

  return null;
}
}
```

### Forgot Password Setup
Let's setup the page if a user forgets their password
Create a new file called `forgot.jsx` under (`/app/routes/auth/forgot.jsx`)

The Remix **Action** will receive the users email from the post request on submit, and then using Firebase Auth sendPasswordResetEmail function, we can have Firebase send the user an email with instructions on how to reset their password. If sending the email is successful we will inform the user and then redirect back to the login page so they can attempt to login again. 

Update your `forgot.jsx`: 
```javascript
import { auth } from "~/utils/firebase"
import { sendPasswordResetEmail } from "@firebase/auth";
import { redirect, Form, Link } from "remix";

    export let action = async ({ request }) => {
        // pull in the form data from the request after the form is submitted
        let formData = await request.formData();
    
        let email = formData.get("email");

        // perform firebase send password reset email 
        try{
            await sendPasswordResetEmail(auth, email)
        }
        catch (err) {
          console.log("Error: ", err.message)
        }
        // success, send user to /login page
        return redirect('/login')
    }

    export default function Login(){
    return(
        <div className="loginContainer">
            <div className="authTitle">
            <h1>Forgot Password?</h1>
            </div>
            <Form method="post">
                <p>Enter the email address associated with your account</p>
                <input className="loginInput" type="email" name="email" placeholder="you@awesome.dev" required />
                <button className="loginButton" type="submit">Submit</button>
            </Form>
            <div className="additionalLinks">
            Not Yet Registered?  <Link to="/auth/register">Register</Link>
            </div>
        </div>
    )
}
```

### Update Navigation
We are going to update our navigation to have a Login/Logout button. This will vary depending on if the user is currently logged in or not. If the user is not logged in, we want it to say Login, otherwise it will say Logout. We will also add a small greeting to put the user's email address on the home page to show the email address they signed in with, if they are not signed in, it will say 'friend'. 

How do we know if someone is logged in or not? We use the **actionLoader** function to get the data from our action. Our action will check the current session for a Cookie containing access_token value and if it exists it will load that user's information. 

1. Let's add our Remix **Loader** function to check if the user has an existing session when they first hit our root site. 
   1. Open `root.jsx`
   2. Add the following import statements if they are not already imported
   ``` javascript
    import {auth} from "~/utils/firebase"
    import { useLoaderData, json } from "remix";
    import { getSession } from "./sessions.server";
    import { commitSession } from "./sessions.server";
   ```
   3. Add the following loader function 

```javascript
// loader function to check for existing user based on session cookie
// this is used to change the nav rendered on the page and the greeting. 
export async function loader({ request }) {
  const session = await getSession(
    request.headers.get("Cookie")
  );

  if (session.has("access_token")) {

  const data = { user: auth.currentUser, error: session.get("error") };
  return json(data, {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
} else {

  return null;
}
}
```

2. Pull in the loader data and check if the user is logged in or not. Create responsive nav links for Login and Log Out (Register will be a link on the Login page) in `root.jsx`. 

The logout button will be wrapped in a Remix `<Form>` tag which will allow our action loader to run when the user clicks our logout button and not trigger a full page refresh. We are also going to add a Class so we can update our styles to make it match the rest of the nav. 

```javascript
function Layout({ children }) {
  // let's grab our loader data to see if it's a sessioned user
  let data = useLoaderData();
  // let's check to see if we have a user, if so we will use it to update the greeting and link logic for Login/Logout in Nav
  let loggedIn = data?.user
  return (
    <div className="remix-app">
      <header className="remix-app__header">
        <div className="container remix-app__header-content">
          <Link to="/" title="Remix" className="remix-app__header-home-link">
            <RemixLogo />
          </Link>
          <nav aria-label="Main navigation" className="remix-app__header-nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
               {!loggedIn ? <li>
                <Link to="/login">Login</Link>
              </li> : 
              <li>
                <Form method="post">
              <button type="submit" className="navLogoutButton">Logout</button>
              </Form>
            </li> }
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <a href="https://remix.run/docs">Remix Docs</a>
              </li>
              <li>
                <a href="https://github.com/remix-run/remix">GitHub</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="remix-app__main">
        <div className="container remix-app__main-content">{children}</div>
      </div>
      <footer className="remix-app__footer">
        <div className="container remix-app__footer-content">
          <p>&copy; You!</p>
        </div>
      </footer>
    </div>
  );
}
```

Lets update our global style to set the style so it appears just like the rest of our nav links instead of as a button. 

Open `global.css` from (`/app/styles/global.css`) and update the exiting a tags and adding .navLogoutButton styling as follows:
```css
a, .navLogoutButton {
  color: var(--color-links);
  text-decoration: none;
}

a:hover, .navLogoutButton:hover {
  color: var(--color-links-hover);
  text-decoration: underline;
}

.navLogoutButton{
  background: none;
  border: none;
  font-family: var(--font-body);
  font-weight: bold;
  font-size: 16px;
}
```

### Update Blogs page to put link for admin inside our blogs page
Open `index.jsx` from (`/app/routes/blogs/index.jsx`)
Update the Posts() function 
```javascript
// our Posts function which will return the rendered component on the page .
export default function Posts() {
    let posts = useLoaderData();
    return (
        <div>
            <h1>My Remix Blog</h1>
            <p>Click on the post name to read the post</p>
            <div>
                <Link to="/admin">Blog Admin (Edit/Create)</Link>
            </div>
            <ul>
                {posts.map(post => (
                    <li className="postList" key={post.slug}>
                        <Link className="postTitle" to={post.slug}>{post.title}</Link>
                    </li>
                ))}
            </ul>

        </div>
    )
}
```

### Update Index.jsx page if logged in
When the user is logged in, let's add a quick greeting on the index page to help us identify if the user is logged in or not. 

The Remix **loader** function is going to check for a current Cookie with access_token to determine if user is logged in. This will change the 'Welcome Friend...' to read 'Welcome <useremail>'. 

The Remix **action** is set to redirect the user to the login page. 

Open your `index.jsx` under (`/app/index.jsx`)
1. Add the following imports and loader to check if logged in

```javascript
import { useLoaderData, json, Link,  redirect} from "remix";
import { auth } from "~/utils/firebase"
import { getSession } from "~/sessions.server";
import { destroySession, commitSession } from "~/sessions.server";

// use loader to check for existing session 
export async function loader({ request }) {
  const session = await getSession(
    request.headers.get("Cookie")
  );

  if (session.has("access_token")) {
//user is logged in 
  const data = { user: auth.currentUser, error: session.get("error") };
  return json(data, {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
} 
// user is not logged in
return null;
}
```

If the user is logged in it will show as this with their email 
![The login screen showing a logged in user's email](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mt99bsqyi5toblyuofek.png)

If the user is logged out it will show as this
![The login screen showing the word friend instead of user's email](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wqvutb1ha39hrlvdw9hs.png)

## Testing Login, Logout, Forgot and Register
Superb Job! You should now have functional Firebase authentication in your Remix Blog app. Users will now be able to sign in to the blog so let's give that a go!

### Register
Before we can login, we first need to register. _If your project is not running, simply run `npm run dev` to get it going._ Click on Login in the top Nav of your remix application and then click Register link next to Not Yet Registered. 

![The login screen for the register page with email and password fields](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mf3hm9hxne3mfb9qp866.png)

Input a Email address and a Password and then click Register

If successful, you should be redirected to the Admin page. Awesomesauce!

### Logout
Now that we are logged in, let's log out and then make sure we can get back in. On your Remix app, click Logout on the top nav. You should be redirected to the home page and it should update to show Login. 
 
![The home page for a logged out user,](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gwealor7lvglk39pukwk.png)

### Login
Let's log back in with that same Email and Password you created. If successful, you should be logged in and looking at the admin page. 

![The unstyled login page asking for username and password with login button](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qxgj41wd2zftop7cdnft.png)

### Forgot
If a user forgets their password, we want them to be able to receive a password reset email so they can gain access to their account. Since we are using Firebase Auth, this process is pretty simple, we pass the email address to firebase and the user will get an email with a link that lets them set a new password.  
![The forgot password screen asking user for email address and a submit button](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8cv45cwb0drloukduym1.png)

## Styling
What app is complete without styling? Our current pages are looking a bit like they came out of the 90's! Let's add some basic styles to make our app more appealing, you can skip this step or create your own styles. 

We are going to create auth.css in  (`/app/styles/auth.css`)
Inside your auth.css we are going to apply some basic styles for our form with some flex, background, padding, and margins. 

```css
/* Used for styling the Auth pages (Login, Register, Forgot) */
.loginContainer{
    margin-top: 1em;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 3em;
    background-color: rgba(0, 0, 0, 0.301);
    border-radius: 10px;
}

.loginContainer h1 {
    margin-bottom: 2em;
}

.loginContainer label {
    font-size: 1.5em;
    font-weight: bold;
}

.loginContainer form {
    display: flex;
    flex-direction: column;
}

.loginInput{
    padding: .5em;
    font-size: 1.5em;
    margin: 1em;
    border-radius: 1em;
    border: none;
}

.loginButton {
    padding: .2em;
    font-size: 2em;
    border-radius: 1em;
    width: 200px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2em;
    cursor: pointer;
    background-color: rgba(47, 120, 255, 0.733);
}

.loginButton:hover{
    border: 2px dashed skyblue;
    background-color: rgba(47, 120, 255, 0.9);
}

.additionalLinks{
    display: flex;
    justify-content: space-evenly;
    font-size: x-large;
}
```

We then need to import this stylesheet using Remix links on all of the pages that we want to have the styles applied. 
Add the following code to `login.jsx, forgot.jsx, register.jsx`

```javascript
import authStyles from "~/styles/auth.css";

//create a stylesheet ref for the auth.css file 
export let links = () => {
    return [{rel: "stylesheet", href: authStyles}]
}
```

The login page should now look like this: 
![The styled login page with dark grey background, rounded input methods and blue rounded button.](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4cxtschjb8ouqk5rodm6.png)
The register page should now look like this: 
![The styled register page with dark grey background, rounded input methods and blue rounded button](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/613sht2sdv0znihb8kk9.png)
The forgot page should now look like this
![The styled forgot page with dark grey background, rounded input methods and blue rounded button](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/20tg1db50a3xvzq6t4az.png)

## Protect pages from view unless logged in
We want to protect our admin page from being rendered unless the user is authenticated with our app. 

1. Let's secure our Admin page
2. Open `admin.jsx` from (`/app/routes/admin.jsx`)
3. Update the imports and loader to look like this. The loader function will check the cookies for a session, if it doesn’t find one it will redirect the user to the login page, otherwise it commits the existing session and renders. 

```javascript
import { Outlet, Link, useLoaderData, redirect, json } from 'remix';
import { getPosts } from "~/post";
import adminStyles from "~/styles/admin.css";
import { getSession } from '~/sessions.server';
import { commitSession } from '~/sessions.server';

//create a stylesheet ref for the admin.css file 
export let links = () => {
    return [{rel: "stylesheet", href: adminStyles}]
}

// this is the same loader function from our Blogs page
// check for existing user, if not then redirect to login, otherwise set cookie and getPosts()
export async function loader({ request }) {
    const session = await getSession(
      request.headers.get("Cookie")
    );

    if (!session.has("access_token")) {
      return redirect("/login");
    } 
  
    const data = { error: session.get("error") };
  
    return json(data, {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    }), getPosts();

}
```

Now if someone who is not authenticated through login or has a cookie and tries to access the admin page, they will be sent back to the login page automatically. 

## Blog Delete Functionality
We want to be able to delete blog articles on our blog site, so let's add in the functionality to do that. 

### Add Delete
Open your `$edit.jsx` file from (`/app/routes/admin/$edit.jsx`)
Below the existing From in the return section, let's add another form, this type we are going to set the method to delete so we can capture that in our action and run a different action. Since we will be including 2 Form tags, I'm going to wrap both of these in a JSX Fragment. Update your PostSlug() function as follows. I have also added a class to the submit button for styling. 

```javascript
export default function PostSlug() {
    let errors = useActionData();
    let transition = useTransition();
    let post = useLoaderData();
    return (
            <>
            <Form method="post">
                <p>
                    <input className="hiddenBlogID" name="id" defaultValue={post.id}>
                    </input>
                </p>
                <p>
                    <label htmlFor="">
                        Post Title: {" "} {errors?.title && <em>Title is required</em>} <input type="text" name="title" defaultValue={post.title}/>
                    </label>
                  </p>
                  <p>
                      <label htmlFor=""> Post Slug: {" "} {errors?.slug && <em>Slug is required</em>} 
                      <input defaultValue={post.slug} id="slugInput" type="text" name="slug"/>
                  </label>
                  </p>
                  <p>
                      <label htmlFor="markdown">Markdown:</label>{" "} {errors?.markdown && <em>Markdown is required</em>} 
                      <br />
                      <textarea defaultValue={post.markdown} name="markdown" id="" rows={20} cols={50}/>
                  </p>
                  <p>
                      <button type="submit" className="adminButton updateButton">{transition.submission ? "Updating..." : "Update Post"}</button>
                    
                  </p>
            </Form>
            <Form method="delete">
                <p>
                    <input className="hiddenBlogID" name="id" defaultValue={post.id}>
                    </input>
                </p>
                <p>
                    <button className="adminButton deleteButton" type="submit">Delete</button>
                </p>
            </Form>
            </>
            
        )
}
```

Now let's update our Remix **loader** function in the same file to check the request.method and if so it will call deletePost() from our post method. 

```javascript
export let action = async ({ request }) => {

    let formData = await request.formData();
 
    let title = formData.get("title");
    let slug = formData.get("slug")
    let markdown = formData.get("markdown")
    let id = formData.get("id");
    if (request.method == 'DELETE'){
        await deletePost(id)
        return redirect("/admin")
    }

    let errors = {};
    if (!title) errors.title = true;
    if (!slug) errors.slug = true;
    if (!markdown) errors.markdown = true;
    
    if (Object.keys(errors).length) {
        return errors;
    }
        await updatePost({id, title, slug, markdown});
    return redirect("/admin")
}
```

Awesome, now we just need to update our post method so it knows what to do when deletePost() is called. 
Open your `post.js` file from (`/app/post.js`)
Add the following deletePost() function

```javascript
export async function deletePost(post){
    await prisma.$connect()
    await prisma.posts.delete({
        where: {
        id: post
        },
    })
    prisma.$disconnect();
    return(post);
}
```

Sweet, now all we have to do is update our imports on our `$edit.jsx` to bring in this deletePost() function. 
Open `$edit.jsx` and update the import at the top 
`import { getPostEdit, updatePost, deletePost } from "~/post";`

Now when we click the shiny Delete button, our blog post will actually get deleted. 

### Updated Admin Styling
Let's update our admin styling a little bit to make the button's a bit nicer. You have creative freedom here to style however you see fit. Otherwise update your admin.css file to look like this so the buttons are styled a bit. 

Open your `admin.css` from (`/app/styles/admin.css`)

```css
.admin {
    display: flex;
    flex-direction: row;
}

.admin > h1 {
    padding-right: 2em;
}

.admin > nav {
    flex: 1;
    border-left: solid 2px #555;
    padding-left: 2em;
}

.hiddenBlogID {
    display: none;
}

.adminNewPostButton{
    margin-top: 2em;
    background-color: royalblue;
    color: white;
    border-radius: 10px;
    padding: 1em;
}

.adminTitle {
    font-size: x-large;
    color: crimson;
}

.remix-app__header{
    background-color: rgb(141, 20, 20);
}

.adminButton{
    color: white;
    padding: 1em;
    border-radius: 2em;
}

.deleteButton{
    background-color: rgb(158, 3, 3);
}

.updateButton{
    background-color: rgb(2, 5, 180);
}
```

Awesome now it should look something like this
![The styled admin page with red header, the list of blogs, fields to update the blog, blue update button and red delete button. ](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0swj0nd5em3z67eoy84j.png)

### Final Folder Structure
The final folder structure should look like this. If something isn't working, take a peek and make sure you have the folders in order. 
![A depictiction of the folder an dfiles in each folder](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/noquzhunaup67n0mmgh0.png)

## Deploy to Vercel 
Let's get our application published to our Vercel site. 

Close your running dev server. 

Let's run a build `npm run build`

Let's deploy run `vercel deploy` 🚀🚀🚀

## Conclusion
Through this tutorial, you now have a Remix blog site that stores it's blog posts on MongoDB, has authentication through Firebase Auth, and is hosted on Vercel. 

One of the most important things I learned when creating this tutorial was how server side Authentication works. The first attempts were logging in the server on the server-side so anyone visiting the app was authenticated. It’s important to do client auth for each client and just use the Remix Loader functions to get the cookie in user session  and keep it updated. 


**Support - Your support is 100% optional**
[You can buy me a Taco to show your support](https://www.buymeacoffee.com/ChrisBenjamin)
