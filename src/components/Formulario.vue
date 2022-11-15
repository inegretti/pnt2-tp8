<template >

  <section class="src-components-formulario">
    <div class="jumbotron">
    <h1>Formulario</h1>
    <hr>
    <hr>
    <br>
    <vue-form :state="formState" @submit.prevent="enviar()">
 
          <validate tag="div">
            <span>Nombre: </span>
            <input v-model="formData.nombre" required name="name" :minlength="nombreMin" :maxlength="nombreMax"/>
            <field-messages name="name" show="$dirty">
              <div slot="required">Complete el campo</div>
              <div slot="minlength">Este campo debe poseer al menos {{nombreMin}} caracteres</div>
              <div slot="maxlength">Este campo debe no puede poseer mas de {{nombreMax}} caracteres</div>
            </field-messages>
          </validate>
        <br>
          <validate tag="label">
            <span>Email: </span>
            <input v-model="formData.email" name="email" type="email" required />
            <field-messages name="email" show="$dirty">
              <div slot="required">Complete el campo</div>
              <div slot="email">Email no valido</div>
            </field-messages>
          </validate>
        <br>
        <br>
          <validate tag="label">
            <span>Edad: </span>
            <input v-model="formData.edad" name="edad" type="number" required :min="edadMin" :max="edadMax"/>
            <field-messages name="edad" show="$dirty">
              <div slot="required">Complete el campo</div>
              <div slot="min">La edad debe ser mayor a {{edadMin}} años</div>
              <div slot="max">La edad no debe ser mayor a {{edadMax}} años</div>
            </field-messages>
          </validate>
         <br>
         <br>
    <button type="submit" class="btn btn-success" :disabled="formState.$invalid">Submit</button>
  </vue-form>

  <hr>
  <h2>Tablas</h2>
 
  <h3>Actualizacion en posterior al submit</h3>
  <table>
  <tr>
    <th class="my-3 mr-3">Nombre</th>
    <th class="my-3 mr-3">Edad</th>
    <th class="my-3 mr-3">Email</th>
  </tr>
  <tr v-for="usuario in usuarios" :key="usuario.nombre">
    <td class="my-3 mr-3">{{usuario.name}}</td>
    <td class="my-3 mr-3">{{usuario.edad}}</td>
    <td class="my-3 mr-3">{{usuario.emai}}</td>
</tr>
</table>
    </div>
  </section>

</template>

<script >

  export default  {
    name: 'src-components-formulario',
    props: [],
    mounted () {

    },
    data () {
      return {
        formState:{},
        formData:this.getDataInicial(),
        nombreMin:5,
        nombreMax:15,
        edadMax:120,
        edadMin:15,
        usuarios:this.$store.state.usuarios
       
        
      }
    },
    methods: {
      async enviar(){
        this.$store.dispatch("ingresar",{nombre:this.formData.nombre,edad:Number(this.formData.edad),email:this.formData.email});
        this.formData= this.getDataInicial()
        this.formState._reset()
      },


      getDataInicial(){
         return {
          nombre:null,
          edad:null,
          email:null
         }
      },
      

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-formulario {

  }
  .jumbotron{
    background-color: brown;
    color: black;
  }
  hr{
    background-color: black;
  }
</style>
