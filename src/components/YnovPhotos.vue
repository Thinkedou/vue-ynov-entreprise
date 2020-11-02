<template>
<div class="col">
    <button type="button" class="btn btn-info"> Ajouter une photo ++ </button>

        <div class="card">

          <div class="media mt-2" v-for="(photo,idx) in allPhotos" :key='idx'>
            <img :src="photo.thumbnailUrl" class="mr-3" alt="">
            <div class="media-body">
              <h5 class="mt-0">{{photo.id}}</h5>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              <button type="button" class="btn btn-info btn-sm" @click='goToUpdatePhoto(photo.id)'>Update ?</button>
            </div>
          </div>

        </div>


</div>

</template>

<script>
import axios from "axios";

const PHOTOS_API_ENDPOINT = 'https://jsonplaceholder.typicode.com/photos/?_limit=50';

export default {
  name: 'YnovPhotos',
  props: {
  },
  data:()=>({
      allPhotos:[],
  }),

  methods:{
      async fetchAllPhotos(){
          let allPhotos  = await axios.get(PHOTOS_API_ENDPOINT); // variable locale
          let { data } = allPhotos;
          this.allPhotos = data; // data reactive
      },
      goToUpdatePhoto(photoId){
          // path: '/admin/photos/:photoId', name:'photoEdit',
          this.$router.push({name:'photoEdit',params:{photoId}})
      }
  },
  async created(){
      await this.fetchAllPhotos()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
