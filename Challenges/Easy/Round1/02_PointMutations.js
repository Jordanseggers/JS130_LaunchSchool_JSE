"use strict";

class DNA {
  constructor(strand) {
    this.strand = strand;
  }
  
  hammingDistance(otherStrand){
    let newStrand = this.strand;
    let newComparisonStrand = otherStrand;
    
    if(this.strand.length > otherStrand.length) {
      newStrand = [...this.strand].slice(0, otherStrand.length).join("");
    } else if (this.strand.length < otherStrand.length) {
      newComparisonStrand = [...otherStrand].slice(0, this.strand.length).join("");
    }
    
    let differences = [...newStrand].filter((char, idx) => {
      return char !== newComparisonStrand[idx];
    });
    
    return differences.length;
  }
}

module.exports = DNA;
