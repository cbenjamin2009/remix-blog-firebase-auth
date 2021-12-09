import { Outlet, Link, useLoaderData, redirect } from 'remix';
import { auth } from '~/utils/firebase';
import { getPosts, deletePost } from "~/post";
import adminStyles from "~/styles/admin.css";

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

// this function will delete the associated postId and redirect to blogs 
export async function deleteThisPost(postId){
     await deletePost(postId)
     return redirect("/blogs")
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