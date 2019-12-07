import JsonP from 'jsonp';
// import { func } from '../../../../../Library/Caches/typescript/3.6/node_modules/@types/prop-types';

export default class Axios{
    static jsonp(options){
        return new Promise((resolve, reject)=>{
            JsonP(options.url, {
                param: 'callback'
            }, function(err, response){
                if (response.status == "success"){
                    resolve(response);
                }else{
                    reject(response.message);
                }
            })
        })
    }
}