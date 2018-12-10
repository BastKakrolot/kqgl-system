import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpClientService, GmOptions } from '@static-resources';
import { RESTURL } from '../../../config/rest-url';

@Injectable()
export class ManagementService {
  constructor(
    private http: HttpClient
  ) { }
  private httpClientService = new HttpClientService(this.http);
  getDepartmentData(gmParams?: object, options?: GmOptions): Observable<any> {
    return this.httpClientService
      .getRequest(RESTURL.department.listDepartment, gmParams, options);
  }
  getUserData(gmParams?: object, options?: GmOptions): Observable<any> {
    return this.httpClientService
      .getRequest(RESTURL.user.queryUser, gmParams, options);
  }
  changeTreeNode(treeArray: Array<any>, name = 'name', children = 'children') {
    let filterArray = insertArray => {
      insertArray.forEach(item => {
        item.title = item[name];
        if (item[children] && item[children].length > 0) {
          item['children'] = item[children]
          filterArray(item['children']);
        } else {
          item.isLeaf = true;
        }
      });
    }
    filterArray(treeArray);
    return treeArray;
  }
}
