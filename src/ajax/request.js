import axios from 'axios';
import api from './api';

function get(url,data) {
    return new Promise((resolve,reject)=>{
        let param = data || {};
        axios.get(url,{
            param,
            baseURL: api.HOST
        })
        .then(res=>{
            resolve(res);
        })
        .catch(err=>{
            reject(err);
        })
    })
}

function post(url,data) {
    return new Promise((resolve,reject)=>{
        let param = data || {};
        axios.post(url,param,{
            baseURL: api.HOST
        })
        .then(res=>{
            resolve(res);
        })
        .catch(err=>{
            reject(err);
        })
    })
}

export default {
    get,
    post
}