import { injectable } from "inversify";
import { Axios } from "axios";
import { LogService } from "../log/log.service";
import qs from "qs";



@injectable()
export class SuperService{
    constructor(private readonly logService: LogService) {}

    getDefaultAxios(options?: {baseURL?:string}):Axios{
        const axios = new Axios({
            ...options,
            baseURL: options?.baseURL ?? process.env.PUBLIC_END_POINT,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            paramsSerializer: (params:any) =>{
                return qs.stringify(params)
            },
        })

        axios.interceptors.request.use(
            (req) => {
                req.data = (req.data && JSON.stringify(req.data)) || undefined;
                this.logService.debug(req);
                return req;
            },
            (error) => {
                this.logService.error(error);
            }
        );

        axios.interceptors.response.use(
            (res) => {
                if (res.status >= 400) {
                    switch (res.status) {
                        case 401:
                            // throw new TokenException(res);
                        default:
                            throw new Error(res.data);
                    }
                }

                res.data = (res.data && JSON.parse(res.data)) || undefined;
                this.logService.debug(res);
                return res;
            },
            (error) => {
                this.logService.error(error);
            }
        );

        return axios;
    }
}