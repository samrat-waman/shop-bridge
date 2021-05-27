import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private httpClient: HttpClient) { }

  /**
   *
   * @param path path for server url
   * @param id used to find specific id's item
   * @returns
   */
  get(path: string, id: any) {
    const url = `${environment.apiURL}${path}${id}`;
    return this.httpClient.get(url);
  }

  /**
   *
   * @param path path for server url
   * @param data data to be add.
   * @returns
   */
  post(path: string, data: object) {
    const url = `${environment.apiURL}${path}`;
    return this.httpClient.post(url, data);
  }


  /**
   *
   * @param path path for server url
   * @param id used to identify which product to be deleted
   * @returns
   */
  delete(path: string, id: any) {
    const url = `${environment.apiURL}${path}${id}`;
    return this.httpClient.delete(url);
  }

  /**
   *
   * @param path path for server url
   * @param data edited data
   * @param id id of item where we want to replace current data from new data.
   * @returns
   */
  put(path: string, data: object, id: number,) {
    const url = `${environment.apiURL}${path}${id}`;
    return this.httpClient.put(url, data);
  }

}
