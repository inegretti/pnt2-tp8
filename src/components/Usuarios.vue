<template>

  <section class="src-components-http-client">
     <div class="jumbotron">
    <h1>Usuarios</h1>
    <button class="btn btn-success my-3 mr-3" @click="getPostsAxios()">Pedir por axios</button>
    <button class="btn btn-danger my-3 mr-3" @click="$store.state.posts=[]">Clear</button>
    <br>
     <hr>
    <table v-if="this.$store.state.posts.length" class="table table-dark">
      <tr>
        <th>Nombre</th>
        <th>Telefono</th>
        <th>Email</th>
      </tr>
      <tr v-for="(post,index) in $store.state.posts" :key="index">
        <td>{{post.name}}</td>
        <td>{{post.edad}}</td>
        <td>{{post.emai}}</td>
      </tr>
    </table>
    <h2 v-else class="alert alert-danger text-center">no se encuentran datos</h2>
    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-http-client',
    props: [],
    mounted () {

    },
    data () {
      return {
        

      }
    },
    methods: {
      getPostsAxios(){
        this.$store.dispatch("traer");
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
    .jumbotron{
    background-color: red;
    color: black;
  }
  hr{
    background-color: black;
  }
</style>
