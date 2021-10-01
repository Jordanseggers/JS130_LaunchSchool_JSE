"use strict";

class DNA {
  constructor(strand) {
    this.strand = strand;
  }
  
  hammingDistance(otherStrand){
    let newStrand = this.strand;
    let newOtherStrand = otherStrand;
    
    if(this.strand.length > otherStrand.length) {
      newStrand = [...this.strand].slice(0, otherStrand.length).join("");
    } else if (this.strand.length < otherStrand.length) {
      newOtherStrand = [...otherStrand].slice(0, this.strand.length).join("");
    }
    
    let differences = [...newStrand].filter((char, idx) => {
      return char !== newOtherStrand[idx];
    });
    
    return differences.length;
  }
}

module.exports = DNA;

// let dna = new DNA("1234");
// let other = "152";

// console.log(dna.hammingDistance(other));