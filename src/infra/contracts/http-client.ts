export type HttpResponse<TData = any> = {
  data: TData;
};

export type HttpMethod = "get" | "put" | "delete" | "post";

export interface IHttpClient<TData = any> {
  request(method: HttpMethod, url: string): Promise<HttpResponse<TData>>;
}
