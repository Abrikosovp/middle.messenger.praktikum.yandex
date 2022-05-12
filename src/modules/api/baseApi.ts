import HTTPTransport from "../HTTPTransport";

export class BaseApi {

    http: HTTPTransport;

    constructor(baseUrl: string, isFile = false) {
        this.http = new HTTPTransport(baseUrl, isFile);
    }

    // На случай, если забудете переопределить метод и используете его, — выстрелит ошибка

    create(p?:any):Promise<any> {
        console.log(p)
        throw new Error('Not implemented'); }

    request(p?:any):Promise<any> {
        console.log(p)
        throw new Error('Not implemented'); }

    update(p?:any):Promise<any> {
        console.log(p)
        throw new Error('Not implemented'); }

    delete(p?:any):Promise<any> {
        console.log(p)
        throw new Error('Not implemented'); }
}





