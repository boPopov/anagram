var AnagramReader = require("../index.js")

// //test test
// test('First test', async () => {
//     let res = 5-5
//     expect(res).toStrictEqual(0)
// })

// //word formatting
// test('Format a word', async () => {
//     let formatWord = anagramReader.wordFormatting("banana");
//     expect(formatWord).toBe("aaannb");
// })

describe("Anagram", () => {
    let anagramReader;
    let dictionary;
    beforeAll(() => {
        anagramReader = new AnagramReader()
        dictionary = {
            "aabbhip": [
                "abhipba",
                "hapbbai",
                "bibapha"
            ],
            "": [""],
            "01abcde": [
                "acd0eb1",
                "0b1aced",
                "d0ba1ce",
                "ecbad10"
            ],
            "*@ajmpv": [
                "jmp@av*",
                "mav*@jp",
                "@pavmk*"
            ],
            "##)678aborvw": [
                "#6aboR)#8vw7",
                "BoWV76)#8#ar",
                ")6#7#W8rAVbo",
                "w##78BROv6)A"
            ]
        }
        anagramReader.setDictionary(dictionary)
    })

    describe("Word Formatting", () => {
        it("word formatting expect to be", () => {
            let formatWord = anagramReader.wordFormatting("banana");
            expect(formatWord).toBe("aaabnn");
        });
    
        it("word formatting expect not to be", () => {
            let formatWord = anagramReader.wordFormatting("mijakola")
            expect(formatWord).not.toBe("aamijkol")
        });
    
        it("word formatting expect to be - with numbers", () => {
            let formatWord = anagramReader.wordFormatting("0bsarwu1")
            expect(formatWord).toBe("01abrsuw")
        })
    
        it("word formatting expect not to be - with numbers", () => {
            let formatWord = anagramReader.wordFormatting("6okwur3")
            expect(formatWord).not.toBe("63wurko")
        })
    
        it("word formatting expect to be - with special characters", () => {
            let formatWord = anagramReader.wordFormatting("ioanaka!@")
            expect(formatWord).toBe("!@aaaikno")
        })
    
        it("word formatting expect not to be - with special characters", () => {
            let formatWord = anagramReader.wordFormatting("bortika#bana$")
            expect(formatWord).not.toBe("aabboikrtn#$")
        })

        it("word formatting expect to be - with number, special characters and letters", () => {
            let formatWord = anagramReader.wordFormatting("$86^lopa1$")
            expect(formatWord).toBe("$$168^alop") 
        })
    });

    describe("Finding Anagrams", () => {
        it("find anagram", () => {
            let anagrams = anagramReader.findMyAnagrams("hapBBai", dictionary)
            let res =  [
                "abhipba",
                "hapbbai",
                "bibapha"
            ]
            expect(anagrams).toStrictEqual(res)
        })
    
        it("find anagram - empty string", () => {
            let anagrams = anagramReader.findMyAnagrams("", dictionary)
            let res =  [
                ""
            ]
            expect(anagrams).toStrictEqual(res)
        })
    
        it("can not find anagram - with numbers", () => {
            let anagrams = anagramReader.findMyAnagrams("01AbrSt", dictionary)
            let res = `Sorry... there are no anagrams for "01AbrSt"`
            expect(anagrams).toStrictEqual(res)
        })
    
        it("find anagram - with numbers", () => {
            let anagrams = anagramReader.findMyAnagrams("01aBcDe", dictionary)
            let res = [
                "acd0eb1",
                "0b1aced",
                "d0ba1ce",
                "ecbad10"
            ]
            expect(anagrams).toStrictEqual(res)
        })
    
        it("can not find anagram - with special characters", () => {
            let anagrams = anagramReader.findMyAnagrams("zi^O!w", dictionary)
            let res = `Sorry... there are no anagrams for "zi^O!w"`
            expect(anagrams).toStrictEqual(res)
        })
        
        it("find anagram - with special characters", () => {
            let anagrams = anagramReader.findMyAnagrams("JP*avm@", dictionary)
            let res = [
                "jmp@av*",
                "mav*@jp",
                "@pavmk*"
            ]
            expect(anagrams).toStrictEqual(res)
        })
    
        it("find anagram - number, special, characters and letters", () => {
            let anagrams = anagramReader.findMyAnagrams("8Rb#oVA#)67w", dictionary)
            let res = [
                "#6aboR)#8vw7",
                "BoWV76)#8#ar",
                ")6#7#W8rAVbo",
                "w##78BROv6)A"
            ]
            expect(anagrams).toStrictEqual(res)
        })
    })

    afterAll(() => {
        console.log("All tests have been executed");
        anagramReader = undefined;
        dictionary = undefined;
    })
})