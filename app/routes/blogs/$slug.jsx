import { useLoaderData } from 'remix';
import invariant from 'tiny-invariant';
import { getPost } from "~/post";
import postStyles from "~/styles/posts.css";

export let links = () => {
    return [{rel: "stylesheet", href: postStyles}]
}

export let loader = async({params}) => {
    
    invariant(params.slug, "expected params.slug");
    return getPost(params.slug)
}

export default function PostSlug() {
    let post = useLoaderData();
    return (
        <div className="postDisplay" dangerouslySetInnerHTML={{__html: post.html}}/>
    )
}