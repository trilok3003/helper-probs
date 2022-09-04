import { Injectable } from '@angular/core';
import { finalize, map, catchError } from 'rxjs/operators'

@Injectable()
export class LoaderService {

  private static loaderEnabled: boolean;

  constructor() { }

  get loaderEnabled() {
    return LoaderService.loaderEnabled;
  }

  public static showLoader() {
    LoaderService.loaderEnabled = true;
  }

  public static hideLoader() {
    LoaderService.loaderEnabled = false;
  }

}