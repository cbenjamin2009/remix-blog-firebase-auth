import { redirect } from "remix";
import { getSession } from "~/sessions.server";
import { destroySession } from "~/sessions.server";
import { auth } from "~/utils/firebase";

// when this page loads we are going to get the session, if we find one then we are going to destroySession to remove the cookie
export let loader = async({request}) => {
    const session = await getSession(
      request.headers.get("Cookie")
    );
  
    if (session.has("access_token")) {
    return redirect("/", {
      headers: {"Set-Cookie": await destroySession(session)}
    })
  }
  return redirect('/')
}