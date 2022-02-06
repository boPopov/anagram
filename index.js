var fs = require('fs');
var readline = require('readline');
var stream = require('stream')

var dictionary = {}
var anagramObj;

class AnagramReader {
    constructor() {
        this.dictionary = {}
    }

    setReadLineInterface(rli) {
        this.readLineInterface = rli
    }

    setDictionary(myDictionary) {
        this.dictionary = myDictionary
    }
}

/**
 * Start Reading function which starts the process of reading the wordlist.txt file.
 */
AnagramReader.prototype.startReading = function(myDictionary) {
    console.log("Starting file reading process, please give us a second.")
    const startReadingTime = new Date();
    let word;
    this.readLineInterface.on('line', function(line) {
        word = line.toLowerCase();
        
        word = wordFormatting(word);

        if (myDictionary[word] != null) {
            myDictionary[word].push(line);
        } else {
            myDictionary[word] = [line];
        }
    })

    this.readLineInterface.on('close', function(){
        console.log(`Thank you for waiting. The file reading processing was executed in ${(new Date() - startReadingTime) / 1000 }s`);
        dictionary = myDictionary
        openConsole()
    })
}

/**
 * Word Formatting function which formats the words in order what we will use in the map
 */
var wordFormatting = AnagramReader.prototype.wordFormatting = function(wordToFormat) {
    wordToFormat = wordToFormat.split("")
    wordToFormat = wordToFormat.sort()
    return wordToFormat.join("")
}

var findMyAnagrams = AnagramReader.prototype.findMyAnagrams = function(myWord, myDictionary) {
    let word = wordFormatting(myWord.toLowerCase())
    if (myDictionary[word] != null) {
        return myDictionary[word]
    } else {
        return `Sorry... there are no anagrams for "${myWord}"`;
    }
}

function Init() {
    var instream = createReadStream('wordlist.txt')
    var outstream = new stream();
    anagramObj = new AnagramReader()
    anagramObj.setReadLineInterface(readline.createInterface(instream, outstream))
    anagramObj.startReading(anagramObj.dictionary)
}

function createReadStream(filename) {
    return fs.createReadStream(filename)
}

function openConsole() {
    anagramObj.setDictionary(dictionary)
    var consoleInterface = readline.createInterface(process.stdin, process.stdout);
    consoleInterface.setPrompt("Hi, please enter a word below and find out the Anagrams:\n")
    consoleInterface.prompt()
    consoleInterface.on('line', (myWord) => {
        console.log(findMyAnagrams(myWord, anagramObj.dictionary));
        consoleInterface.setPrompt("Enter another word below and find more Anagrams:\n")
        consoleInterface.prompt();
    }).on('close', () => {
        console.log("Closing prompt...")
    })
}

Init()
module.exports = AnagramReader