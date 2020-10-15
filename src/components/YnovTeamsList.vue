<template>
<div class="col">

        <div class="card mt-4">
          <div class="card-body">
            <h3 class="card-title">Nos équipes ! </h3>
            <div class="card" >
              <ul class="list-group list-group-flush text-center">

                    <li v-for="team in recipientsGroup" class="list-group-item" :key="team.id"> {{team.title }} {{team.icon }}
                        <button @click='openTeamDetails(team.id)' type="button" class="btn btn-secondary btn-sm">Voir</button>
                    </li>


                  <!--
                    <li class="list-group-item">Cras justo odio <button type="button" class="btn btn-secondary btn-sm">Small button</button></li>
                    <li class="list-group-item">Dapibus ac facilisis in</li>
                    <li class="list-group-item">Vestibulum at eros</li> -->
              </ul>
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
  name: 'YnovTeamsList',
  props: {
  },
  data:()=>({
      recipientsGroup
  }),

  methods:{
    openTeamDetails(teamId){
         // this.$router.push({ name:'productsDetails', params:{coffeeId} })
        this.$router.push({ name:'teamsDetails', params:{ teamId } })
        
    }
  },
  created(){
      console.log(this.recipientsGroup);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
