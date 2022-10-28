  <script setup>

  </script>
    
  <script>

  </script>


<template>
  <nav>
  <router-link to="/" >Home</router-link> | 
  <router-link to="/PlanoAtividades" >Criar Plano de Atividades</router-link> |
  <router-link to="/RegistoAtividades" >Registar Atividades</router-link> |
  <router-link to="/Dashboard" >Dashboard</router-link> |
  <router-link to="/Admin">Admin</router-link>
  </nav>

  <div>
  <router-view/>
  </div>
</template>


<style lang="scss" scoped>

</style>