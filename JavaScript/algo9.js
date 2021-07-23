const Clist =[{
        name: 'Yemen',
        capital: "Sana'a",
        languages: ['Arabic'],
        population: 27478000,
        flag:'https://restcountries.eu/data/yem.svg',
        currency: 'Yemeni rial'
    },
    {
        name: 'Zambia',
        capital: "Lusaka",
        languages: ['English'],
        population: 15933883,
        flag:'https://restcountries.eu/data/zmb.svg',
        currency: 'Zambia Kwacha'
    },
    {
        name: 'Zimbabwe',
        capital: "Harare",
        languages: ['English', 'Shona','Northern Ndebele'],
        population: 14240168,
        flag:'https://restcountries.eu/data/zwe.svg',
        currency: 'Botswana pula'
    }]

    function get(re){
        const gh = re.reduce((acc, e) =>{
            //acc[e.languages[0]] = (acc[e.languages[0]] || 0) + 1;
            e.languages.forEach(el => {
                acc[el] = (acc[el] || 0) + 1;
            });
            // console.log(acc)
            return acc;
        },{})

        // console.log(gh)        

        return Object.keys(gh).reduce((a, b) => gh[a] > gh[b] ? a : b)
    }

    console.log(get(Clist))