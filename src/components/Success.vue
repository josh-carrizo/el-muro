<template>
<div>
  <h1 class="cabecera">Welcome </h1>
        <div class="separator separator-bottom separator-skew zindex-100">
            <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <polygon class="adorno" points="2560 0 2560 100 0 100"></polygon>
            </svg>
        </div>
  
  <b-container class="cont" fluid>
    <div class="text-new-post">Write a New Post!</div>
    <b-row>
      <b-col></b-col>
      <b-col sm="8" md="8" lg="8" xl="8">
        <form @submit.prevent="addPost">
        <b-form-textarea v-model="addTxt"
          id="textarea-auto-height"
          placeholder="Write here..."
          rows="3"
          max-rows="8"
          required
        ></b-form-textarea>
        <div>
          <b-button type="submit" block variant="dark">Add Post</b-button>
        </div>
        </form>
      </b-col>
      <b-col></b-col>
    </b-row>
    <br>
    <hr><!--Posteos anteriores-->
    <b-row>
      <b-col>
      </b-col>
      <b-col sm="8" md="8" lg="8" xl="8"  >

        <b-card 
          img-src='https://discfactory.es/wp-content/uploads/2018/11/man-user-300x300.png'
          img-alt="Card image" 
          img-right 
          v-for="post in posts" 
          :key="post.id">
          <b-card-text>
            {{post.text}}
          </b-card-text>
          <template v-slot:footer>
            <div><small class="text-muted">{{post.user.name}},</small></div>
            <small class="text-muted">{{post.date}}</small>
            <div class="secondary-content">
              <a href="#" @click.prevent="like(post.id)" class="secondary-content"><img src="https://media0.giphy.com/media/eBkJkl71tvsJirkaCC/source.gif" alt="Pulgar arriba" class="Pulgar">  
              </a>
              <div><h6 class="display-5 likes">{{post.likes}} Likes</h6></div>
            </div>
          </template>
        </b-card>
        <br>
      </b-col>
      <b-col></b-col>
    </b-row>
  </b-container>
</div>
</template>

<script>
import { db } from '@/firebase';
import firebase from 'firebase/app'

const getDate = () => {
  const trailing = (d) => d.length < 10 ? '0'+d : d;
  const now = new Date();
  return `${now.getFullYear()}-${trailing(now.getMonth())}-${trailing(now.getDate())} ${trailing(now.getHours())}:${trailing(now.getMinutes())}:${trailing(now.getSeconds())}`;
}

export default {
    data() {
      return {
        addTxt: '',
        posts:[]

      }
    },
    methods:{
      addPost() { 
        console.log('Funciona boton Add Post')
        const user = firebase.auth().currentUser

        this.$firestore.posts.add({
          date: getDate(),
          img: null,
          text: this.addTxt,
          user:{
            name: user.displayName,
            uid: user.uid
          },
          likes: 0
        })
      },
      like(post_id){
        // Primer paso, recupero el post anterior por su id
        const post = this.posts.find(post => post.id == post_id);
        // actualizo en la base de datos
        this.$firestore.posts.doc(post_id).update({
          likes: post.likes++
        });
      }
    },
    firestore() {
    return {
      posts: db.collection('posts')
    }
  }
}


</script>

<style scooped>
.cont{
    background-color: #17a2b8;
}
.adorno{
    fill: #17a2b8;
}
.Pulgar{
  width:5rem;
  height:6rem;
}



</style>