const app = new Vue ({

el:'#app',

data: {
    url:"https://api.themoviedb.org/3/search/movie?api_key=f731de4dc238375a909e9a43cf8dd2da&query=",
    query:"",
    films:[],
},
methods:{
    searchFilms(){
        this.films=null;
        axios
            .get(this.url + this.query)
            .then(resp => {
            console.log(resp.data.results)
            this.films=resp.data.results
        }).catch(e => {
            console.error(e);
            alert("La chiamata all'API non è andata a buon fine, riprova più tardi")
        })
    }
}
})