<template>
    <div>
        <h1>{{ ReunionStore.GetReunionById(Route.params.id).name }}</h1>
        <template v-for="Message in MessageStore.GetMessagesByReunion(Route.params.id)" :key="Message.id">
            <!-- LoggedUser -->
            <div v-if="UserStore.LoggedUserGetter.id == Message.author">
                <b-img v-if="Message.image" :src="Message.image"></b-img>
                {{ Message.text }} 
                <p>Autor: {{ UserStore.GetUserFunc(Message.author).name }}</p> 
                <p>Data: {{ new Date(Message.date).toLocaleString('default', { 
                                                day: '2-digit', 
                                                month: '2-digit', 
                                                year: 'numeric', 
                                                hour: '2-digit', 
                                                minute: '2-digit'
                                                }).replace(',','') }} </p>
                                                <b-button variant="danger" @click="MessageStore.DeleteMessage(Message.id)">Eliminar</b-button>
              
            </div>

             <!-- OtherUsers -->
            <div v-if="UserStore.LoggedUserGetter.id != Message.author">
                <b-img v-if="Message.image" :src="Message.image"></b-img>
                {{ Message.text }} 
                <p>Autor: {{ UserStore.GetUserFunc(Message.author).name }}</p> 
                <p>Data: {{ new Date(Message.date).toLocaleString('default', { 
                                                day: '2-digit', 
                                                month: '2-digit', 
                                                year: 'numeric', 
                                                hour: '2-digit', 
                                                minute: '2-digit'
                                                }).replace(',','') }} </p>
            </div>


        </template>
        <b-form @submit="CreateMessage"> 
            <b-form-group>
                <b-input v-model="message"></b-input>
                <b-button type="submit" :disabled="!Boolean(message)" > Enviar Mensagem</b-button>
            </b-form-group>
            <b-form-group>
                <b-file 
                    v-model="messageFile"
                    id="ImagePicker"
                    placeholder="Escolha uma imagem (jpeg,png,gif)"
                    accept="image/jpeg, image/png, image/gif"
                ></b-file>
            </b-form-group>
        </b-form>
    </div>
</template>

<script>
import { useReunionStore } from '../../stores/Reunion';
import { useMessageStore } from '../../stores/Message';
import { useRoute } from 'vue-router';
import { useUserStore } from '../../stores/User';

import { ref } from 'vue';

export default {
    setup () {
        const Route = useRoute()
        const MessageStore = useMessageStore()
        const ReunionStore = useReunionStore()
        const UserStore = useUserStore()

        const message = ref('')
        const messageFile = ref('')
        console.log(MessageStore.GetMessagesByReunion(Route.params.id))

        function CreateMessage(){
            event.preventDefault()

            MessageStore.CreateMessage({
                 text : message.value ,
                  idReunion: Route.params.id ,
                   image: messageFile.value,
                    author: UserStore.LoggedUserGetter.id


            })

            message.value = ''
            messageFile.value = ''

        }

        return {ReunionStore,MessageStore,Route,UserStore,message,messageFile,CreateMessage}
    }
}
</script>

<style lang="scss" scoped>

</style>