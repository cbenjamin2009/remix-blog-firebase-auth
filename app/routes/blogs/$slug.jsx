import { useLoaderData, redirect, json } from 'remix';
import invariant from 'tiny-invariant';
import { getPost } from '~/post';
import { commitSession } from '~/sessions.server';
import { getSession } from '~/sessions.server';
import postStyles from '~/styles/posts.css';

export let links = () => {
  return [{ rel: 'stylesheet', href: postStyles }];
};

export let loader = ({ params }) => {
  return getPost(params.slug);
};

export default function PostSlug() {
  let post = useLoaderData();
  return (
    <>
      <div
        className='postDisplay'
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
      <img
        height='600'
        src={
          'https://res.cloudinary.com/ositaka/image/upload/w_1050,h_600,c_fill/' +
          post.image
        }
      />
      <br />
      {post.image}
    </>
  );
}
