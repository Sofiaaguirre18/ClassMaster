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
        ></v-list-item>

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
            icon
            @click.stop="rail = !rail"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </template>
      </v-navigation-drawer>
      <v-main style="height: 750px">
       
        

        <v-container fluid>
          <v-layout row wrap>
            <v-flex xs12 sm6>
              <v-card class="home-card">
                <v-card-title class="title-text-color">
                  Welcome to Class Master Dashboard!
                </v-card-title>
                <v-card-text>
                  <p>
                    kskskkss
                  </p>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm6>
              <v-card class="home-card">
                <v-card-title class="title-text-color">
                  Today's Schedule
                </v-card-title>
                <v-card-text>
                  <p>
                    kskkskkss
                  </p>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  data() {
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
    };
  },
};
</script>

<style scoped>
.gradient-bg {
  background: linear-gradient(to bottom, #f78c8c, #9b9b9b);
}

.home-card {
  margin: 20px;
}

.title-text-color {
  color: #010101;
}
</style>
