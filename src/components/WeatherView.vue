<template >
  <div>
   
        <input
        id="input"
          type="text"
          class="form-control"
          v-model="query"
          @change="fetchWeather()"
          placeholder="Unesite grad..."
          style="margin-bottom:20px"
        />
        <br>
        <p>Drzava.. {{currentWeather.country}}</p>
        <p>Grad.. {{currentWeather.city}} </p>
        <p>Temperatura.. {{currentWeather.temp}}</p>
        <p>Vlažnost zraka.. {{currentWeather.humidity}} %</p>
        <p>Osjećaj.. {{currentWeather.feels_like}}</p>
        <p>Opis.. {{currentWeather.description}}</p>
        

      
  </div>
</template>

<script>
export default {
  name: "WetherView",

  data() {
    return {
      currentWeather: {
        city: "",
        temp: "",
        humidity: "",
        description: "",
        country: "",
        feels_like: "",
      },
      podaci: [],
      api_key: "8ddedeec352a3d0261f7d6aeac5ee21d",
      url: "https://api.openweathermap.org/data/2.5/weather?q=",
      query: "",
    };
  },
  methods: {
    fetchWeather() {
      let final_url =this.url + this.query + "&units=metrics" + "&appid=" + this.api_key;
      this.axios.get(final_url).then((response) => {
        (this.currentWeather.city=response.data.name),
       ( this.currentWeather.temp=Math.round(response.data.main.temp)),
        (this.currentWeather.humidity=response.data.main.humidity),
        (this.currentWeather.country=response.data.sys.country),
        (this.currentWeather.feels_like=Math.round(response.data.main.feels_like)),
        (this.currentWeather.description=response.data.weather[0].description)
       
      })
       .catch((error)=>{
        if(error.response.status==404){
          alert("Ime grada nije ispravno")
          this.query="";
        }
       })
    },
  },
  mounted() {
    this.fetchWeather();
  },
};
</script>
<style scoped>
    #input{
      border: solid grey;
    }
</style>

