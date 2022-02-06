# Anagram Solution

## What is an anagram ? 

- Anagram stands for a word or a phrase by rearranging the letters of another word or phase, using by the original letters.
> Example: brag - grab; elbow - below; state - taste; safe - vase;

## Setup and Prerequirements

- In order to executed this solution you need to have npm and node installed on your machine. 
  > My npm version is: 6.14.9 and node: v14.15.3
  
  If you already have npm installed on your machine use the following command: `npm install npm@6.14.9`
  If not, then download npm from the offical site, for your specific OS.
 
  If you don't have node, please check [Node version 14.15.3](https://nodejs.org/en/blog/release/v14.15.3/) where you have a list of specific OS.

- After compliting the installation process, please check npm and node version with the following commands:
  
  npm: `npm -v` result example: `6.14.9`
  node: `node -v` result example: `v14.15.3`

- To setup the project, you need to install all the neceserry package with the command: `npm install`.
  After this process is done, you can start the solution which is in 'index.js' in the root of the folder by executing the command `node index.js`.
  But before you do so, make sure that you uncomment `line 92: // Init()` from `index.js`. This line is commented for the sake of executing the tests. 

## Solution Description

- As mentioned above `index.js` holds the anagram solution, there is a `wordlist.txt` file which is a big file with words that are being processed and based on this list, when you enter a word in the command promt the program tries to find all the anagram it has for the letters you entered. 

- Once you start the solution the file, `wordlist.txt`, is being processed. After the processing is done you will get a message saying `Hi, please enter a word below and find out the Anagrams:` from here on out you can start typing words. Once you type a word press enter to start the search for an anagram.

## Unit Tests

- A total of 14 Unit tests are written in the folter `tests/index.test.js`.
- The plugin that is used is `jest version: ^27.5.0`
- In order to install this package run the command: `npm install jest --save-dev`, but this package will be installed once you do `npm install` at the begining.
- To executed the tests please comment `line 92: // Init()` from `index.js` so that you don't see error for async when running the tests.
  The command for running the tests is: `npm run test`