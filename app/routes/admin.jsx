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

export default function Admin() {
    let posts = useLoaderData();
    return (
        <div className="admin">
            <h1 className="adminTitle">Admin</h1>
           
            <nav>
             <p>Click on a post to edit the blog post</p>
               
                <ul>
                    {posts.map(post => (
                        <li key={post.slug}>
                        <Link to={post.slug}>{post.title}</Link>
                        </li>
                    ))}
                </ul>
                <main>
                    {/* Outlet renders the /admin/index.jsx */}
                    <Outlet />
                </main>
            </nav>
           
        </div>
    )
}