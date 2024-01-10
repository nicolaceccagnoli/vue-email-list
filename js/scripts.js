// Estraggo la funzione createApp dall'oggetto Vue
const { createApp } = Vue;

// Creo l'istanza di Vue da montare in pagina
createApp({
    data() {
        return {
            message: 'Vue Email List',

            // Creo un array vuoto che andrà a contenere le email generate randomicamente
            myRandomEmail: [],
            nMail: 10
        };
    },
    mounted() {

        // Creo un ciclo che vada a richiamare 10 volte le chiamate asincrone della libreria di Axios 
        for (let i = 0; i <  this.nMail; i++) {
            // Richiamo la libreria di axios
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')   // Tramite la proprietà .get richiamo l'API
            .then(res => res.data)                                            // Tramite la proprietà .then chiedo alla funzione di estrapolare la risposta e pusharla dentro l'array delle mail 
            let newRandomEmail = data.response;                               // Posso Concatenare più volte la proprietà .then 
            .then((data) => {                                                 
                this.myRandomEmail.push(newRandomEmail);

                console.log('new RandomEmail: ', newRandomEmail);
                
            })
            // .catch(err => console.log('Error: ', err))
        }

        // this.loaded = true

        console.log('this.myRandomEmail: ', this.myRandomEmail);

    }
  // Monto l'istanza di Vue in pagina
}).mount('#app');