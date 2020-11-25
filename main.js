var app = new Vue({
  el: "#root",
  data: {
    movies:[],
    series:[],
    //lingue:[],
    newSearch: ""

  },
  methods:{
    movieSearch(){

      if (this.newSearch != " ") {
        axios.get("https://api.themoviedb.org/3/search/movie", {
           params:{
             api_key: "f5832f2e772a96d3d6ca65a253515876",
             query: this.newSearch,
             language: "it"
           }
        }).then((risultati) => {
          this.movies=risultati.data.results
          this.newSearch = ""
          console.log(risultati);
        });
      }

    },
    tvSearch(){

      if (this.newSearch != " ") {
        axios.get("https://api.themoviedb.org/3/search/tv", {
           params:{
             api_key: "f5832f2e772a96d3d6ca65a253515876",
             query: this.newSearch,
             language: "it"
           }
        }).then((risultati) => {
          this.series=risultati.data.results
          this.newSearch = ""
        });
      }

    }




  },


});
