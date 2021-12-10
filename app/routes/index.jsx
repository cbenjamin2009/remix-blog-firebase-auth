import { useLoaderData, json, Link,  redirect} from "remix";
import { auth } from "~/utils/firebase"
import { getSession } from "~/sessions.server";
import { destroySession, commitSession } from "~/sessions.server";

// use loader to check for existing session 
export async function loader({ request }) {
  const session = await getSession(
    request.headers.get("Cookie")
  );
  // console.log(session.has("access_token"))

  if (session.has("access_token")) {

  const data = { user: auth.currentUser, error: session.get("error") };
  return json(data, {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
} 
return null;
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
        <li><a href="https://github.com/cbenjamin2009/remix-blog-firebase-auth" target="_blank">Github</a></li>
        <li><a href="https://dev.to/chrisbenjamin" target="_blank">Tutorial</a></li>
      </ul>
      </aside>
    </div>
  );
}
