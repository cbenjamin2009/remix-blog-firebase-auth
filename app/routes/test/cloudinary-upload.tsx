import type { ActionFunction, UploadHandler } from '@remix-run/node';
import {
  json,
  unstable_composeUploadHandlers as composeUploadHandlers,
  unstable_createMemoryUploadHandler as createMemoryUploadHandler,
  unstable_parseMultipartFormData as parseMultipartFormData,
} from '@remix-run/node';
import { Form, useActionData } from '@remix-run/react';

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

async function uploadImage(data: AsyncIterable<Uint8Array>) {
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

type ActionData = {
  errorMsg?: string;
  imgSrc?: string;
  imgDesc?: string;
  ImgTest?: object;
};

export const action: ActionFunction = async ({ request }) => {
  const uploadHandler: UploadHandler = composeUploadHandlers(
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

  // const ImgTest = formData.get("img").split("_").pop()
  if (!imgSrc) {
    return json({
      error: 'something wrong',
    });
  }
  return json({
    imgSrc,
    imgDesc,
    ImgTest,
  });
};

export default function Index() {
  const data = useActionData<ActionData>();
  console.log(data);
  return (
    <>
      <Form method='post' encType='multipart/form-data'>
        <label htmlFor='img-field'>Image to upload</label>
        <input id='img-field' type='file' name='img' accept='image/*' />
        <label htmlFor='img-desc'>Image description</label>
        <input id='img-desc' type='text' name='desc' />
        <button type='submit'>upload to cloudinary</button>
      </Form>
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
    </>
  );
}
