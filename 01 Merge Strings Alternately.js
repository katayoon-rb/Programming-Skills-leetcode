var mergeAlternately = function(word1, word2) {
    let langest = "" 
    let merge = ""

    if (word1.length > word2.length) {
        langest = word1
    } else {
        langest = word2
    }

    for (let i = 0; i < langest.length; i++) {
        merge += word1.charAt(i)
        merge += word2.charAt(i)
    }
    return merge
};
