let wordnikAPI = "https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=3&maxLength=-1&api_key=69831269a789de393b00907a0250ea3d3203df34417d4d5a3"
let giphyAPI = "http://api.giphy.com/v1/gifs/search?q=" 
let giphyKey = "&api_key=RI99LR6sMfDO6TXz4lSpeBSNryxXyI0x&limit=5"



function setup() {

  noCanvas();
  fetch(wordnikAPI)
    .then(response => response.json())
    .then(json => {
      createP(json.word);
      return fetch(giphyAPI + json.word + giphyKey);
    })
    .then(response => response.json())
    .then(json => {
      createImg(json.data[0].images['fixed_height_small'].url);
    })
    .catch(err => console.log(err));
}

