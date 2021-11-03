export type Options = {
    headers?: {[p: string]: any },
    excludeHeaders?: string[],
    observe?: string,
    body?: any,
    params?: {[p: string]: string | number | boolean},
    reportProgress?: boolean,
    responseType?: string,
    withCredentials?: boolean,
    noAuth?: boolean
};
export type MethodType = 'DELETE' | 'GET' | 'POST' | 'PUT' | 'UPDATE' | 'UPLOAD' | 'UPLOAD_PUT';

export const DEFAULT_HEADERS: { [p: string]: string } = {
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, UPLOAD, OPTIONS',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
};
