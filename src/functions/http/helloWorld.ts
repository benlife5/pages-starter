import { PagesHttpRequest, PagesHttpResponse } from "@yext/pages/*";

export default async function helloWorld(
  request: PagesHttpRequest
): Promise<PagesHttpResponse> {
  const { pathParams, queryParams, site } = request;

  return {
    body: "Hello World",
    headers: {},
    statusCode: 200,
  };
}
