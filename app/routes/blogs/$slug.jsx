import { useLoaderData, redirect, json } from 'remix';
import invariant from 'tiny-invariant';
import { getPost } from "~/post";
import { commitSession } from '~/sessions.server';
import { getSession } from '~/sessions.server';
import postStyles from "~/styles/posts.css";

export let links = () => {
    return [{rel: "stylesheet", href: postStyles}]
}

export let loader = async({params, request}) => {
    const session = await getSession(
        request.headers.get("Cookie")
      );
  
      if (!session.has("access_token")) {
        return redirect("/login");
      } 
    
      const data = { error: session.get("error") };
      invariant(params.slug, "expected params.slug");

      return json(data, {
        headers: {
          "Set-Cookie": await commitSession(session)
        }
      }), getPost(params.slug);
    
}

export default function PostSlug() {
    let post = useLoaderData();
    return (
        <div className="postDisplay" dangerouslySetInnerHTML={{__html: post.html}}/>
    )
}