<template>
<div class="container-fluid my-5">

        <div class="card p-4">
          <h5 class="card-title">Ajouter une nouvelle photo </h5>
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
          <button type="button" class="btn btn-info" @click='updatePhoto'>SAVE</button>
        </div>


</div>

</template>

<script>
import axios from "axios";

const PHOTOS_API_ENDPOINT = 'https://jsonplaceholder.typicode.com/photos/';

export default {
  name: 'YnovPhotosCreate',
  props: {
  },
  data:()=>({
      selectedPhoto:{}
  }),

  methods:{

    async updatePhoto(){
        let body = {
            title:this.selectedPhoto.title,
            thumbnailUrl:this.selectedPhoto.thumbnailUrl,
        }
        let tryToUpdate = await axios.patch(`${PHOTOS_API_ENDPOINT}${this.selectedPhoto.id}`,body)

        console.log(tryToUpdate);
    }
  },
  async created(){
      // console.log(this.$route.params);

      // await this.fetchAllPhotos()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
