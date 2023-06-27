import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Allocation } from 'src/model/Allocation';

@Injectable({
  providedIn: 'root'
})
export class AllocationService {

  constructor(private http: HttpClient) { }



  private baseUrl = "http://127.0.0.1:8081/api";



  createAllocation(Allocation: Allocation, id: number): Observable<any> {
    return this.http.post(this.baseUrl + "/allocation/"+id, Allocation);
  }

  getAllocations(): Observable<Allocation[]> {
    return this.http.get<Allocation[]>(this.baseUrl + "/allocations");
  }

  getAllocation(id: number): Observable<Allocation[]> {
    return this.http.get<Allocation[]>(this.baseUrl + "/allocation/${id}");
  }

  deleteAllocation(id: number): Observable<Allocation> {
    return this.http.delete<Allocation>(`${this.baseUrl}/allocation/${id}`);
  }

  findAllocationById(id: number): Observable<Allocation> {
    return this.http.get<Allocation>(`${this.baseUrl}/allocation/${id}`);
  }

  updateAllocation(allocation: Allocation, id: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/allocation`, allocation);
  }
}
