<template>
  <div class="pretplata">

    <div v-if="alert" style=" margin: 15px; padding-top: 15px;">
      <v-alert type="success"
      v-model="alert"
      dismissible>
      Successfully subscribed
    </v-alert>
    </div>

    <h2 style="text-align: center; margin: 15px; padding-top: 15px;">Pretplatite se za novosti.</h2>
    <v-row justify="center">


      <v-dialog
        v-model="dialog"
        persistent
        max-width="600px"
        
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
            style="margin: 20px"
          >
            Subscription
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">Subscription form</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                >
                  <v-text-field
                    label="Ime *"
                    required
                    v-model="first_name"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                >
                  <v-text-field
                    label="Prezime *"
                    required
                    v-model="last_name"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Email *"
                    required
                    v-model="email"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                >
                  <v-select
                    :items="['0-17', '18-29', '30-54', '54+']"
                    label="Godine"
                    
                    v-model="age"
                  ></v-select>
                </v-col>
                
              </v-row>
            </v-container>
            <small>* obavezna polja</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue light-1"
              text
              @click="dialog = false"
            >
              Zatvori
            </v-btn>
            <v-btn
              color="blue light-1"
              text
              @click="saveSubscription()"
            >
              Spremi
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      alert: false,
      first_name: '',
      last_name: '',
      email: '',
      age: '',
     
      
    }),
    methods: {
      saveSubscription: function(){
        this.dialog = false
        this.alert = true
        
        if((this.first_name == '') || (this.last_name == '')  || (this.email ="")){
          alert('Morate ispuniti tražena polja!')
          this.dialog = true
          this.alert = false
        } else {
          this.first_name = ''
          this.last_name = ''
          this.age = ''
          this.email = ''
          
        }
        
      }
    }
  }
</script>