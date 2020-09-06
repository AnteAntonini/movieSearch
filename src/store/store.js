import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';

Vue.component('v-select', vSelect)


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
        selectType: ['movie','series','episode'],
        seen: false,
        activeType: null 
    },
    getters: {
        msg: state => (state.todos),
        movie: state => (state.movie),
        type: state => (state.activeType)
    },
    mutations: {
        getData: (state,data) => {
            state.todos = data;   
        },
        searchMovies: (state, payload) => {
            state.movie = payload;
        },
        setActiveType(state, selectType) {
            state.activeType = selectType
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