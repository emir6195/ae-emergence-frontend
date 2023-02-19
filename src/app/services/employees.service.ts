import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  base_url : string = 'http://127.0.0.1:3000';
  path: string = '/api/employees';

  constructor(private http: HttpClient) {}

  getEmployees() {
    return this.http.get(this.base_url + this.path);
  }

  getFilteredEmployees(filter: string) {
    return this.http.get(this.base_url + this.path + '?filter=' + JSON.stringify(filter));
  }

  addEmployees(data:any) {
    return this.http.post(this.base_url + this.path, data);
  }

  deleteEmployees(id: string) {
    return this.http.delete(this.base_url + this.path + '/' + id);
  }

  updateEmployees(data: any) {
    return this.http.put(this.base_url + this.path, data);
  }

  importEmployees(file: File) {
    const formdata: FormData = new FormData();
    formdata.append('file', file);
    return this.http.post(
      this.base_url + '/upload-employees',
      formdata
    );
  }
}
