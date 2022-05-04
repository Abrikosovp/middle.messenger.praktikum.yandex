import HTTPTransport from "../../modules/HTTPTransport";

export class BaseApi {

    http: HTTPTransport;

    constructor(baseUrl: string) {
        this.http = new HTTPTransport(baseUrl);
    }

    // На случай, если забудете переопределить метод и используете его, — выстрелит ошибка

    create():Promise<any> {
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





