import { renderToString } from 'react-dom/server';
import { RemixServer } from 'remix';

import { PassThrough } from 'stream';

import { EntryContext } from '@remix-run/node';
import { Response } from '@remix-run/node';
// import { RemixServer } from "@remix-run/react";
import isbot from 'isbot';
import { renderToPipeableStream } from 'react-dom/server';

export default function handleRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext
) {
  let markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  );

  responseHeaders.set('Content-Type', 'text/html');

  return new Response('<!DOCTYPE html>' + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
