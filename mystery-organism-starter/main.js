// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};


const pAequorFactory = (num,arr) => {
  return {
    specimenNum : num,

    dna : arr,

    mutate(){
      const baseLoc = Math.floor(Math.random() * this.dna.length);
      const base = this.dna[baseLoc];
      let changeBase = '';
      do{
        changeBase = returnRandBase();
      }
      while (changeBase == base);

      this.dna[baseLoc] = changeBase;

      return this.dna;
    },

    compareDNA : function (other){
      let matches = 0;
      for (let i = 0; i < other.dna.length; i++){
        if(this.dna[i] == other.dna[i]){
          matches++;
        }
      }
      console.log(`Specimen ${this.specimenNum} and specimen ${other.specimenNum} have ${((matches/other.dna.length) * 100).toFixed(2)}% in common.`);
    },

    willLikelySurvive(){
      
      let rate = 0;
      for (let i = 0; i < this.dna.length; i++){
        if(this.dna[i] == 'C' || this.dna[i] == 'G'){
          rate++;
        }
      }

      return (Math.round(rate/this.dna.length) * 100) > 60;
    }

  }
};

let thirtypAequor = [];

for(let i = 0; i <= 30; i++){
  let subject = '';

  do{
    subject = pAequorFactory(i,mockUpStrand());
  }
  while (!subject.willLikelySurvive());

  thirtypAequor.push(subject);
  
}

console.log(thirtypAequor);



