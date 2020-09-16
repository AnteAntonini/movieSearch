<template>
  <div class="the-header">
    <nav class="nav" :class="{affix: scrollPosition}">
        <div class="container">
            <div class="logo">
                <a href="#top">Your Logo</a>
            </div>
            <div id="mainListDiv" class="main_list" :class="{show_list: isActive}">
                <ul class="navlinks">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <span class="navTrigger" @click="myFilter" :class="{active: isActive}">
                <i></i>
                <i></i>
                <i></i>
            </span>
        </div>
    </nav>
    <section class="home">
        <input type="text" placeholder="pretrazi naslove" class="trazi" v-model="searchMovies">        
        <v-select
          class="select-type"
          label="text"
          @input="setActiveType" 
          :options="$store.state.selectType"
          :value="$store.state.todos.type"
        ></v-select>

        <button class="btn" @click="klik(); fokus()">Pretrazi</button>
    </section>
    <div v-if="seen" style="height: 200px" id="listaFilmova">
			<h2 class="myH2">All {{getType}} with name {{searchMovies}}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheHeader', 
  data() {
    return {
      isActive: false,
      scrollPosition: null,
      seen : false,
      newTitle: ''
    }
  },
  methods: {
    myFilter(){
      this.isActive = !this.isActive;
    },
    updateScroll () {
    this.scrollPosition = window.scrollY > 50;
    },
    fokus() {
      this.seen = true;
    },
    setActiveType(val) {
      this.$store.commit('setActiveType', val)
    },
    klik() {
      this.$store.commit('searchMovies', this.newTitle);
    }
  },
  computed: {
    searchMovies: {
        get() {
          return '';
        },
        set(movie) {
          this.newTitle = movie;
      }
    },
    getType() {
      console.log(this.$store.getters.type)
      return this.$store.getters.type;
    }
  },
  mounted () {
    window.addEventListener('scroll', this.updateScroll);
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.updateScroll);
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Quicksand:400,500,700');
@import '@/styles/_animation.scss';

/* Navbar section */

.the-header {
  height: 100vh;
}
.nav {
    width: 100%;
    height: 65px;
    position: fixed;
    line-height: 65px;
    text-align: center;
    z-index: 2;
    div.logo {
      float: left;
      width: auto;
      height: auto;
      padding-left: 3rem;
      a {
        text-decoration: none;
        color: #fff;
        font-size: 2.5rem;
        &:hover {
          color: #00E676;
        }
      }
    }
    div.main_list {
       height: 65px;
      float: right;
      display: flex;
      ul {
        width: 100%;
        height: 65px;
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
        li {
          width: auto;
          height: 65px;
          padding: 0;
          padding-right: 3rem;
          margin-top: 1em;
          a {
            text-decoration: none;
            color: #fff;
            line-height: 65px;
            font-size: 2.4rem;
            &:hover {
              color: #00E676;
            }
          }
        }
      }
    }
}

/* Home section */

.home {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-image: url(https://images.unsplash.com/photo-1498550744921-75f79806b8a7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b0f6908fa5e81286213c7211276e6b3d&auto=format&fit=crop&w=1500&q=80);
    background-position: center top;
    background-size:cover;
    z-index: 1;
    .trazi {
        background: rgb(220, 213, 213);
        height: 33px;
        width: 17rem;
        text-align: justify;
        border: none;
        padding: 0 50px;
        font-size: 1.2rem;
        outline: none;
        &::placeholder {
            text-align: center;
        }
    } 
    .select-type {
      background: rgb(220, 213, 213);
    } 
}

.navTrigger {
    display: none;
}

.nav {
    padding-top: 20px;
    padding-bottom: 20px;
    -webkit-transition: all 0.4s ease;
    transition: all 0.4s ease;
}

.btn {
  background: linear-gradient(180deg, rgba(46,46,50,1) 0%, rgba(85,85,133,1) 0%, rgba(68,68,153,1) 49%, rgba(23,27,28,1) 100%, rgba(36,161,186,1) 100%);
  position: absolute;
  margin: 0 auto;
  top: 60%;
  height: 2.5rem;
  width: 10rem;
  border-radius: 5px;
}

.btn:hover {
  background: linear-gradient(180deg, rgba(46,46,50,1) 0%, rgba(47,47,180,1) 0%, rgba(26,26,163,1) 49%, rgba(23,27,28,1) 100%, rgba(189,221,227,1) 100%);
}

/* Media qurey section */

@media screen and (min-width: 768px) and (max-width: 1024px) {
    .container {
        margin: 0;
    }
}

@media screen and (max-width:768px) {
    .navTrigger {
        display: block;
    }
    .nav div.logo {
        margin-left: 15px;
    }
    .nav div.main_list {
        width: 100%;
        height: 0;
        overflow: hidden;
    }
    .nav div.show_list {
        height: auto;
        display: flex;
        flex-direction: column;
        width: 359px;
        margin-right: 1em;
    }
    .nav div.main_list ul {
        flex-direction: column;
        width: 100%;
        height: 100vh;
        right: 0;
        left: 0;
        bottom: 0;
        background-color: #111;
        /*same background color of navbar*/
        background-position: center top;
    }
    .nav div.main_list ul li {
        width: 100%;
        text-align: right;
    }
    .nav div.main_list ul li a {
        text-align: center;
        width: 100%;
        font-size: 3rem;
        padding: 20px;
    }
    .nav div.media_button {
        display: block;
    }
}
</style>