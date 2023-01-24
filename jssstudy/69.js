function getCount(str) {
  
    let vowelsCount = 0;
    const vowels = ['a','e','i','o','u'];
    const strArr = str.split('');

    strArr.forEach(element => {
        for (let i = 0; i < vowels.length; i++){
            if (element === vowels[i]) {
                vowelsCount++;
            }
        }
    });
    return vowelsCount;
}