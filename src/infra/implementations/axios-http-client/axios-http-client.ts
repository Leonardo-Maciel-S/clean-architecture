import axios from "axios";
import {
  HttpMethod,
  HttpResponse,
  IHttpClient,
} from "../../contracts/http-client";

export class AxiosHttpClient implements IHttpClient {
  async request(method: HttpMethod, url: string): Promise<HttpResponse> {
    const data = await axios.request<HttpResponse>({ method, url });

    return data;
  }
}
