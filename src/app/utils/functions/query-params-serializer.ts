import { HttpParams } from "@angular/common/http";

export function queryParamsSerializer(params: any): HttpParams {
    let httpParams: HttpParams = new HttpParams();

    Object.keys(params).forEach((key: string) => {
        if (params[key]) httpParams = httpParams.set(key, params[key])
    });

    return httpParams;
}