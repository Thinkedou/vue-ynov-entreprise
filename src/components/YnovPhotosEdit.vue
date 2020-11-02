<template>
<div class="container-fluid my-5">

        <div class="card p-4">
          <h5 class="card-title">Photo N°{{selectedPhoto.id}}</h5>
          <form>
            <div class="form-group">
              <label for="formGroupExampleInput">Title</label>
              <input v-model='selectedPhoto.title' type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder">
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput2">thumbnail Url</label>
              <input v-model='selectedPhoto.thumbnailUrl' type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder">
            </div>
          </form>
          <button type="button" class="btn btn-info" @click='handleBtn'>{{this.onEditMode?'Update':'Create'}}</button>
        </div>


</div>

</template>

<script>
import axios from "axios";

const PHOTOS_API_ENDPOINT = 'https://jsonplaceholder.typicode.com/photos/';

export default {
  name: 'YnovPhotosEdit',
  props: {
  },
  data:()=>({
      selectedPhoto:{},
      onEditMode:false,
  }),

  methods:{

    async fetchOnePhoto(photoId){
        let onePhoto  = await axios.get(`${PHOTOS_API_ENDPOINT}${photoId}`); // variable locale
        // let { status, headers, data } = onePhoto; // ça aussi c'est très bien
        this.selectedPhoto = onePhoto.data;

    },
    async handleBtn(){

        if(this.onEditMode){
            // PATCH
            let tryToPatch = await this.updatePhoto();
            console.log(tryToPatch);
        }else{
            // Create
        }


    },
    async updatePhoto(){
        let body = {
            title:this.selectedPhoto.title,
            thumbnailUrl:this.selectedPhoto.thumbnailUrl,
        }
        let tryToUpdate = await axios.patch(`${PHOTOS_API_ENDPOINT}${this.selectedPhoto.id}`,body)
        return tryToUpdate;
        // console.log(tryToUpdate);
    },

    async createPhoto(){

    }
  },
  async created(){

      const { photoId = false } = this.$route.params
      if(photoId){
          this.onEditMode = true;
          await this.fetchOnePhoto(photoId);
          console.log('EN EDITION');
      }else{
          this.onEditMode = false;
          console.log('EN CREATION');
      }



      // await this.fetchOnePhoto(photoId)
      // await this.fetchAllPhotos()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
