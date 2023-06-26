import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractRestService<T> {
  protected constructor(protected http: HttpClient) {
  }

  list(url: string, options ?: object): Observable<T[]> {
    return this.http.get<T[]>(url, options);
  }

  get(url: string, id: number, options ?: object): Observable<T> {
    return this.http.get<T>(`${url}/${id}`, options);
  }

  create(url: string, object: T | FormData, options ?: object): Observable<T> {
    return this.http.post<T>(url, object, options);
  }

  put(url: string, id: number, object: T | FormData, options ?: object): Observable<T> {
    return this.http.put<T>(`${url}/${id}`, object, options);
  }

  async delete(url: string, id: number, options ?: object): Promise<void> {
    await Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able the element!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.http.delete<void>(`${url}/${id}`, options).subscribe({
          next: () => {
            Swal.fire(
              'Deleted!',
              'Your imaginary file has been deleted.',
              'success'
            );
          },
          error: () => {
            Swal.fire(
              'Cancelled',
              'Your imaginary file is safe :)',
              'error'
            );
          }
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        );
      }
    })
  }
}

export function saveDataToLocalhost(data: any): void {
  const keys = Object.keys(data);
  keys.forEach((key: string) => {
    localStorage.setItem(key, data[key]);
  });
}
