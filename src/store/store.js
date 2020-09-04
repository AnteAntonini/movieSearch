import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export const store = new Vuex.Store({
    strict: true,
    state: {
        todos: [{
            title: [],
            type: [],
            year: []
            }
        ],  
        movie: '',
        seen: false 
    },
    getters: {
        msg: state => (state.todos),
        movie: state => (state.movie)
    },
    mutations: {
        getData: (state,data) => {
            state.todos = data;   
        },
        searchMovies: (state, payload) => {
            state.movie = payload;
        }
    },
    actions: {
        getData: (context, payload) => {
            axios.get(`http://www.omdbapi.com/?apikey=67800ad8&s=${payload}&type=movie`)
            .then( res => {
                console.log(res.data.Search);
                context.commit('getData', res.data.Search);
            })
            .catch(err => {
                console.log(err);
            })
        }
    }
})