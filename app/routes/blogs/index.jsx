import { getPosts } from '~/post';
import { Link, useLoaderData, redirect, json } from 'remix';
import postStyles from "~/styles/posts.css";
import { getSession } from '~/sessions.server';
import { commitSession } from '~/sessions.server';
export let links = () => {
    return [{rel: "stylesheet", href: postStyles}]
}
// on load remix will check to see if the user is logged in, if not it will send them to login page to prevent unauthorized access
// if the user is found it will getPosts() and render correctly. 
export let loader = () => {
    return getPosts();

}

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