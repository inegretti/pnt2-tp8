//import { resolve } from 'core-js/fn/promise'
import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";


Vue.use(Vuex)


export default new Vuex.Store({
    state:{
        url:"https://634271f73f83935a78433ad7.mockapi.io/personas",
        posts:[],
        usuarios:[]
     },
    actions:{ 
        async ingresar({commit},valor){
            await axios.post(this.state.url, {name:valor.nombre,edad:Number(valor.edad),emai:valor.email})
            commit("postear",valor)
        },
        async traer({commit}){
            let lista=[];
            await axios(this.state.url).then(respuesta=>{lista=respuesta.data}).catch(error=>console.error(error))
            commit("getPosts",lista)
        }
    },
    mutations:{ 
        async postear(state,valor){
            state.usuarios.push({name:valor.nombre,edad:Number(valor.edad),emai:valor.email})
        },
        async getPosts(state,lista){
            state.posts=lista;
           
        }
    }
})