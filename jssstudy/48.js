function comp(a1, a2){
    if(a1 === null || a2 === null) return false;
    
    for(let i = 0; i < a2.length; i++) {
        const idxA1 = a1.indexOf(Math.sqrt(a2[i]))
        if(idxA1 === -1) return false;
        a1[idxA1] = null
    }

    return true;
  }