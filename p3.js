/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let a = 0
    let ans = 0
    let record = {}
    for(let b = 0 ; b < s.length ; b++){
        if(s.charAt(b) in record && record[s.charAt(b)] >= a){
            a = record[s.charAt(b)] + 1

        }
        ans = Math.max(ans , b - a +1 )
        record[s.charAt(b)] = b 

    }
    return ans
    
};

console.log(lengthOfLongestSubstring("abcabcbb"))