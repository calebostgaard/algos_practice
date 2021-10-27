// ------------------------------------------------------------------------------------------------------------------------------------------------------
// WED
// ------------------------------------------------------------------------------------------------------------------------------------------------------


// Given 2 SVGStringList, write a functin to determine 
// if 2nd string is an anagram of the first

function isAnagram(string1, string2) {
    var dict = {}

    if (string2.length > string1.length) {return false}
    
    for (var i=0; i < string1.length; i++) {
        if (string1[i] in dict) {
            dict[string1[i]] += 1
        }
        else {
            dict[string1[i]] = 1
        }
    }

    
    for (var j=0; j < string2.length; j++) {
        if (string2[j] in dict) {
            dict[string2[j]] -= 1
            if (dict[string2[j]] < 0) {
                return false
            }
        }
        else {
            return false
        }
    }
    return true
}

console.log(isAnagram("aaz", "zaa"));
console.log(isAnagram("aaz", "zzay"));
