<template>
    <div class="w-100">
        <h1> Olá {{ UserStore.LoggedUserGetter.name }}</h1>
        <div class="w-100">
            <div>
                <h2>Projeto {{ UserStore.FindLoggedUserProject().nameProject }}</h2>
                <b-badge>{{ UserStore.FindLoggedUserProject().theme}}</b-badge>
                <b-badge>{{ UserStore.FindLoggedUserProject().nameSchool}}</b-badge>
                <b-badge>{{
                  LevelsStore.CheckLevel(
                  ActivityStore.GetActivityCountByProjectID(UserStore.FindLoggedUserProject().id)
                  ,ActivityStore.GetAreaCountByProjectID(UserStore.FindLoggedUserProject().id)).name}}
                </b-badge>
            </div>
            <div>
                <h3>Estado Do Projeto</h3>
                <p>{{ UserStore.FindLoggedUserProject().state }}</p>
                <h3>Número de Atividades</h3>
                <p>{{ ActivityStore.GetActivityCountByProjectID(UserStore.FindLoggedUserProject().id)}}</p>
                <h3>Número de áreas abrangidas</h3>
                <p>{{ ActivityStore.GetAreaCountByProjectID(UserStore.FindLoggedUserProject().id) }}</p>
                <h3>Número de colaboradores</h3>
                <p>{{   UserStore.FindLoggedUserProject().collaborators.length }}</p>
            </div>
        </div>

        <h2>Atividade recente em Reuniões</h2>
        <b-card-group deck>
      <b-card img-src="https://placekitten.com/1000/300" img-alt="Card image"  style="max-width: 30%;" img-top>
        <b-card-text>
          <h4>Reuniao 1</h4>
          <p>Mensagem 12:34</p>
        </b-card-text>
      </b-card>
      <b-card img-src="https://placekitten.com/1000/300" img-alt="Card image"  style="max-width: 30%;" img-top>
        <b-card-text>
          <h4>Reuniao 1</h4>
          <p>Mensagem 12:34</p>
        </b-card-text>
      </b-card>
      <b-card img-src="https://placekitten.com/1000/300" img-alt="Card image"  style="max-width: 30%;" img-top>
        <b-card-text>
          <h4>Reuniao 1</h4>
          <p>Mensagem 12:34</p>
        </b-card-text>
      </b-card>
    </b-card-group>
    </div>
</template>

<script>
import { useUserStore } from '../stores/User';
import { useActivityStore } from '../stores/Activity';
import { useLevelsStore } from '../stores/levels';

export default {
    setup () {
        const UserStore = useUserStore();
        const ActivityStore = useActivityStore();
        const LevelsStore = useLevelsStore();

 
        return {UserStore,ActivityStore,LevelsStore}
    }
}
</script>

<style lang="scss" scoped>

</style>