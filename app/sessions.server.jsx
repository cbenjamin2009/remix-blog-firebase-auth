// app/sessions.js
import { createCookieSessionStorage } from "remix";

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    // a Cookie from `createCookie` or the CookieOptions to create one
    cookie: {
        //firebase token
      name: "fb:token",

      // all of these are optional
      expires: new Date(Date.now() + 60),
      httpOnly: true,
      maxAge: 60,
      path: "/",
      sameSite: "lax",
      secrets: ["t@c0s"],
      secure: true
    }
  });

export { getSession, commitSession, destroySession };