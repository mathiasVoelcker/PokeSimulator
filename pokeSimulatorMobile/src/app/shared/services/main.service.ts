import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpHeaders } from '@angular/common/http';

export abstract class MainService {

  protected TOKEN = 'TOKEN';
  protected headers: HttpHeaders

  protected url: string
  constructor(object: string) {
      this.url = environment.baseUrl + object;
      var token = localStorage.getItem(this.TOKEN)
      if (!!token)
      {
        this.headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem(this.TOKEN)
        })
      }
      else 
      {
        this.headers = new HttpHeaders({
          'Content-Type': 'application/json',
        })
      }
  }
}
