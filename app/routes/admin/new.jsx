// import { isErrorResponse } from "@remix-run/react/data";
import { redirect, Form, useActionData, useTransition } from 'remix';
import { ActionFunction, UploadHandler } from '@remix-run/node';

import {
  json,
  unstable_composeUploadHandlers as composeUploadHandlers,
  unstable_createMemoryUploadHandler as createMemoryUploadHandler,
  unstable_parseMultipartFormData as parseMultipartFormData,
} from '@remix-run/node';
// import { Form, useActionData } from '@remix-run/react';

// import { uploadImage } from '~/utils.server';
// import { uploadImage } from '~/utils.server';
// import { uploadImage } from '~/utils.server';

import cloudinary from 'cloudinary';
import { writeAsyncIterableToWritable } from '@remix-run/node';

cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

async function uploadImage(data) {
  const uploadPromise = new Promise(async (resolve, reject) => {
    const uploadStream = cloudinary.v2.uploader.upload_stream(
      {
        folder: 'remix',
      },
      (error, result) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(result);
        console.log(result);
      }
    );
    await writeAsyncIterableToWritable(data, uploadStream);
  });

  return uploadPromise;
}

export { uploadImage };

// import { uploadImage } from '~/utils.server';
// import { uploadImage } from '~/utils.server';
// import { uploadImage } from '~/utils.server';
// import { uploadImage } from '~/utils.server';

import { createPost } from '~/post';

export let action = async ({ request }) => {
  // cloudinary
  // cloudinary

  const uploadHandler = composeUploadHandlers(
    async ({ name, contentType, data, filename }) => {
      if (name !== 'img') {
        return undefined;
      }
      const uploadedImage = await uploadImage(data);
      return uploadedImage.secure_url;
    },
    createMemoryUploadHandler()
  );

  const formData = await parseMultipartFormData(request, uploadHandler);
  const imgSrc = formData.get('img');
  const imgDesc = formData.get('desc');

  const ImgTest = imgSrc.replace('h', '');

  // var str2 = "adifferenttest_153";
  // alert(str2.split("_").pop());

  // const ImgTest = formDataImage.get("img").split("_").pop()
  if (!imgSrc) {
    return json({
      error: 'something wrong',
    });
  }
  // cloudinary
  // cloudinary

  // let formData = await request.formData();

  let title = formData.get('title');
  let slug = formData.get('slug');
  let markdown = formData.get('markdown');

  let errors = {};
  if (!title) errors.title = true;
  if (!slug) errors.slug = true;
  if (!markdown) errors.markdown = true;

  if (Object.keys(errors).length) {
    return errors;
  }

  await createPost({ title, slug, imgSrc, imgDesc, ImgTest, markdown });

  return json({
    imgSrc,
    imgDesc,
    ImgTest,
    title,
    slug,
    markdown,
  });
  return redirect('/admin');
};

export default function NewPost() {
  // pull in errors from our action using the useActionData() hook
  let errors = useActionData();
  // transition will allow us to create a better user experience by updating the text of the submit button while creating the blog post
  let transition = useTransition();
  // we are going to create the slug for the user
  let slug = '';

  let imgSrc = '';

  // as the Title input is updated we will generate the slug automatically.
  // My First Post slug would equal 'my-first-post'. We will convert to lower case and we will strip spaces and replace with hyphens
  const handleChange = (e) => {
    let text = e.target.value;
    // using regex and replace, let's convert spaces to dashes
    slug = text.replace(/\s/g, '-');
    // lets set the value of the slug text box to be our new slug in lowercase
    document.getElementById('slugInput').value = slug.toLowerCase();
    console.log('hello');
  };

  //
  //
  const data = useActionData();
  console.log(data);
  //

  return (
    <>
      {data?.errorMsg && <h2>{data.errorMsg}</h2>}
      {data?.imgSrc && (
        <>
          <h2>uploaded image</h2>
          <img
            src={data.imgSrc}
            alt={data.imgDesc || 'Upload result'}
            style={{ width: '400px' }}
          />
          <h1>Image Id: {data.imgSrc}</h1>
        </>
      )}
      <Form method='post' encType='multipart/form-data'>
        <label htmlFor='img-field'>Image to upload</label>
        <input id='img-field' type='file' name='img' accept='image/*' />
        <label htmlFor='img-desc'>Image description</label>
        <input id='img-desc' type='text' name='desc' />

        <input id='imgSrc' type='hidden' name='imgSrc' value={imgSrc} />

        {/* <input type='hidden' value={data.imgSrc} /> */}

        <button type='submit'>upload to cloudinary</button>
        <p>
          <label htmlFor=''>
            Post Title: {errors?.title && <em>Title is required</em>}{' '}
            <input onChange={handleChange} type='text' name='title' />
          </label>
        </p>
        <p>
          <label htmlFor=''>
            {' '}
            Post Slug: {errors?.slug && <em>Slug is required</em>}
            <input placeholder={slug} id='slugInput' type='text' name='slug' />
          </label>
        </p>
        <p>
          <label htmlFor='markdown'>Markdown:</label>{' '}
          {errors?.markdown && <em>Markdown is required</em>}
          <br />
          <textarea name='markdown' id='' rows={20} cols={30} />
        </p>
        <p>
          <button type='submit'>
            {transition.submission ? 'Creating...' : 'Create Post'}
          </button>
        </p>
      </Form>
    </>
  );
}

// type ActionData = {
//   errorMsg?: string,
//   imgSrc?: string,
//   imgDesc?: string,
//   ImgTest?: object,
// };

// export const action: ActionFunction = async ({ request }) => {
// };

// export default function Index() {
//   const data = useActionData<ActionData>();
//   console.log(data);
//   return (
//     <>
//       <Form method='post' encType='multipart/form-data'>
//         <label htmlFor='img-field'>Image to upload</label>
//         <input id='img-field' type='file' name='img' accept='image/*' />
//         <label htmlFor='img-desc'>Image description</label>
//         <input id='img-desc' type='text' name='desc' />
//         <button type='submit'>upload to cloudinary</button>
//       </Form>
//       {data?.errorMsg && <h2>{data.errorMsg}</h2>}
//       {data?.imgSrc && (
//         <>
//           <h2>uploaded image</h2>
//           <img
//             src={data.imgSrc}
//             alt={data.imgDesc || 'Upload result'}
//             style={{ width: '400px' }}
//           />
//           <h1>Image Id: {data.imgSrc}</h1>
//         </>
//       )}
//     </>
//   );
// }
