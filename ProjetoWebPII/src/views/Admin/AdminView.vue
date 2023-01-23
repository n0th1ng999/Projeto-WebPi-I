<template>
    <div class="w-100">
        <h1> Olá {{ UserStore.LoggedUserGetter.name }}</h1>
        <div class="w-100">
           
           
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
import { useUserStore } from '../../stores/User';
import { useActivityStore } from '../../stores/Activity';

export default {
    setup () {
        const UserStore = useUserStore();
        const ActivityStore = useActivityStore();

 
        return {UserStore,ActivityStore}
    }
}
</script>

<style lang="scss" scoped>

</style>