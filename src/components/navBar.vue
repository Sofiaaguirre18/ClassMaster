<template>
    <v-card>
      <v-layout>
        <v-navigation-drawer
          v-model="drawer"
          :rail="rail"
          permanent
          app
          @click="rail = false"
          color="primary"
          class="gradient-bg"
        >
          <v-list-item
            prepend-avatar="~@/assets/UNC-logo.png"
            title="CLASS MASTER"
            class="title-text-color"
            nav
          >
          </v-list-item>
  
          <v-divider></v-divider>
  
          <v-list dense nav>
            <v-list-item
              v-for="(item, index) in items"
              :key="index"
              :prepend-icon="item.icon"
              :title="item.title"
              :value="item.value"
              class="buttons-text-color"
            ></v-list-item>
          </v-list>
  
          <template v-slot:append>
            <v-btn
              icon="mdi-chevron-left"
              variant="text"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
  
        </v-navigation-drawer>
        <v-main style="height: 750px"></v-main>
      </v-layout>
    </v-card>
  </template>
  
  <script>
  export default {
    data () {
      return {
        drawer: true,
        rail: true,
        items: [
          { icon: 'mdi-view-dashboard', title: 'Home', value: 'home' },
          { icon: 'mdi-cached', title: 'Cohort Loading', value: 'cohortLoading' },
          { icon: 'mdi-calendar', title: 'Schedule', value: 'schedule' },
          { icon: 'mdi-account', title: 'Student', value: 'student' },
          { icon: 'mdi-account-group-outline', title: 'Faculty', value: 'faculty' },
          { icon: 'mdi-widgets', title: 'Section', value: 'section' }
        ]
      }
    },
  }
  </script>
  
  <style scoped>
  .gradient-bg {
    background: linear-gradient(to bottom , #F78C8C, #9B9B9B); 
  }
  
  .custom-text-color:hover {
    background-color: #ffadb1;
    position: relative;
  }
  
  .custom-text-color:hover::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px; 
    background-color: #EF5050;
  }
  
  .buttons-text-color {
    color: #010101; 
  }

  .title-text-color {
    color: #010101; 
  }
  </style>
  