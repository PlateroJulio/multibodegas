<template>
    <div>
        <div class="col-xl">
            <nav class="navbar navbar-light bg-light">
                <a class="navbar-brand alert alert-primary">
                    <router-link to="/menu"> EQIPO - Panel General</router-link>
                </a>

                <!-- AQUI IRA EL MENU DINAMICO POR NIVEL DE USUARIO---->


                <!-- AQUI TERMINA EL MENU DINAMICO POR NIVEL DE USUARIO---->

                <a class="alert alert-light">
                    <router-link to="/menu/Usuario"><i class="fas fa-users"></i>Usuarios</router-link>
                </a>
                
                

                <!-- AQUI VA EL CONTENIDO DE CERRAR SESSION--->
                <form class="form-inline">
                    <label class="alert alert-success">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-person-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-1 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm-3 4c2.623 0 4.146.826 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.245C3.854 11.825 5.377 11 8 11z"/>
                        </svg>
                         {{mostrar_usuario}} 
                        <input style="margin-left: 8px; margin-right:0px" type="submit" value="Logout" v-on:click="logout()" replace class="btn btn-danger btn-sm"/>
                    </label>
                    
                </form>
            </nav>
        </div>
        
    </div>
</template>
<script>
import router from 'vue-router'
import axios from 'axios'

import {mapState ,mapMutations} from 'vuex'

export default {
    name: 'menuComponent',
    components:{
        
    },
      data(){
      return {
        permiso: sessionStorage.getItem('permiso') 
      }
    },
    computed:{
        mostrar_usuario: function(){
            const session = sessionStorage.getItem('autenticado');
            this.Usuario = session;
            return session;
        },

        is_autenticated: function(){
            return sessionStorage.getItem('autenticado');
        },

        menu: function(){
            if(this.permiso == 1){
                
            }

            return this.TemplateMenu;
        }
    },
    methods: {
        logout(){
            sessionStorage.removeItem('autenticado');
            sessionStorage.removeItem('usuario');
            sessionStorage.removeItem('permiso');
            this.$emit("authenticated", false);
            this.$router.replace({ name: "Login" });
        },
        AddUser(){ //redirecciona a vista Gestion de Usuarios
            this.$router.replace({ name: "UsuarioAdd" });
        }
    }  
  }
</script>

