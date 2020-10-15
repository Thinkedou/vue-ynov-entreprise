<template>
<div class="col">

        <div class="card mt-4">
          <div class="card-body">
            <h3 class="card-title">{{ selectedTeam.icon }} Oh la belle équipe de {{ selectedTeam.title }} {{ selectedTeam.icon }}</h3>
            <h5 class="card-title">Composée de {{selectedTeam.recipients.length}} membres</h5>
                <div class="media mb-2" v-for="(oneGus,id) in selectedTeam.recipients" :key='id'>
                  <img class="mr-3" :src="oneGus.avatar" alt="Generic placeholder image">
                  <div class="media-body">
                    <h5 class="mt-0">{{oneGus.firstName+' '+oneGus.lastName}}</h5>
                    <span class="badge badge-info">{{oneGus.email}}</span>
                  </div>
                </div>

          </div>
        </div>
        <!-- /.card -->


</div>
      <!-- /.col-lg-9 -->
</template>

<script>
import { recipientsGroup } from '../../public/js/recipientsGroup'


export default {
  name: 'YnovTeamsDetails',
  props: {
  },
  data:()=>({
      recipientsGroup,
      selectedTeam:{}
  }),

  methods:{

  },
  created(){
      let { teamId } = this.$route.params;
      this.selectedTeam =  recipientsGroup.find(rec=> rec.id==teamId);


      console.log(teamId);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
