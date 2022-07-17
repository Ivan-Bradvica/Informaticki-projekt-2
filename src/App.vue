<template>
  <v-app id="inspire">
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Izbornik</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed temporary id="sidebar">
      

      <v-list>
        <v-list-item
          v-for="link in linkovi"
          :key="link.text"
          :to="link.path"
          text
        >
          <v-list-item-content>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item-content>

          
        </v-list-item>
<br><br>
        <v-list-item-title>Made by Ivan Bradvica  </v-list-item-title>
        
        
      </v-list>
      
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12">
            <router-view></router-view>
          </v-col>

          
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>



<script>

export default {
  
  data: () => ({
    
    cards: ["Today", "Yesterday"],
    
    drawer: null,
   

    linkovi: [
      {
        text: "Naslovnica",
        path: "/",
      },
      {
        text: "Kalkulator",
        path: "/kalkulator",
      },
      {
        text: "Prognoza",
        path: "/prognoza",
      },
      {
        text:"Registracija korisnika",
        path:"/registracija"
      }
      
    ],
  }),
 
  
};
</script>

<style scoped>
#inspire {
  background-color: rgb(172, 167, 167);
}

#sidebar {
  background-color: #bdbdbd;
  padding: 5px;
  margin-bottom: 2px;
}
</style>
