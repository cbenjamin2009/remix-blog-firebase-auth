import { useLoaderData, json, Link,  redirect} from "remix";
import { auth } from "~/utils/firebase"
import { getSession } from "~/sessions.server";
import { destroySession, commitSession } from "~/sessions.server";
import { signInWithCredential, signInWithCustomToken } from "@firebase/auth";


// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
// https://remix.run/api/conventions#loader
// export let loader = async ({request}) => {
//   const redirectTo = new URL(request.url).pathname;

//   let session = await getSession(request.headers.get("Cookie"))

  
//   if (!session.has("access_token")){
//     let searchParams = new URLSearchParams([["redirectTo", redirectTo]])
//     throw redirect(`/login?${searchParams}`)
//   } else {

//     // check for access token
//   const { user, error: sessionErr} = await auth.currentUser;
//     // if there isn't an error, then let's assume we have an access_token and we can update the logged in user to be the current session 
//   if (!sessionErr){
//     //auth.updateCurrentUser(session.get("access_token"));
//    // commitSession(session)
//    // signInWithCustomToken(auth, session.get("access_token"))
//    auth.onAuthStateChanged(async (user) => {
//     session.set("access_token", await user.getIdToken())
//    })
//   }
// return {user, sessionErr}
//   }
//   // if (!auth.currentUser) {
//   //     currentUser = 'friend'
//   //   }
//   // else {
//   //   currentUser = auth.currentUser.email
//   // }
//   //   return currentUser;
// }

// use loader to check for existing session 
export async function loader({ request }) {
  const session = await getSession(
    request.headers.get("Cookie")
  );
  console.log(session.has("access_token"))

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


export let action = async ({request}) => {
  let session = await getSession(request.headers.get("Cookie"))

  return redirect("/login", {
    headers: {"Set-Cookie": await destroySession(session)}
  })
}

// https://remix.run/api/conventions#meta
export let meta = () => {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!"
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  const data = useLoaderData();
  let greeting = data?.user?.email ? data.user.email : 'friend'
  return (
    <div className="remix__page">
      <main>
        <h2>Welcome {greeting} to Remix Blog Auth Tutorial!</h2>
        <h3>This blog was created by <strong>Chris Benjamin</strong></h3>
        <p>This tutorial will show you how firebase authentication functionality works in Remix</p>
      </main>
      <aside>
      <h3>Tutorial Links</h3>
      <ul>
        <li>Github</li>
        <li>Tutorial</li>
      </ul>
      </aside>
    </div>
  );
}
