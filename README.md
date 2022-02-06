# Anagram Solution

## What is an anagram ? 

- Anagram stands for a word or a phrase by rearranging the letters of another word or phase, using by the original letters.
> Example: brag - grab; elbow - below; state - taste; safe - fase;

## Setup and Prerequirements
> Before we start this section, the technology used for this solution is Node JS.

### It's not a problem to run this project with higher versions of npm and nodejs but it is recommendet to be the same.

- In order to execute this solution you need to have npm and nodejs installed on your machine. 
  > My npm version is: 6.14.9 and my node version is: v14.15.3
  
  If you already have npm installed on your machine use the following command: `npm install npm@6.14.9`.
  
  If not, then download npm from the offical site, for your specific OS.
  
  For NodeJS please install [NVM](https://github.com/nvm-sh/nvm#install--update-script)
  After you install `nvm` run the following command:
  ```
  nvm use
  ```
  which will give you information about your node version and a command if you need to change it.
  
- After compliting the installation process, please check npm and node version with the following commands:
  ```
  npm -v 
  node -v
  ```
  result example:
  ```
  npm: 6.14.9
  node: v14.15.3
  ```

- To setup the project, run the command: 
  ```
  npm install
  ```
  After this process is done, you can start the program with the command: 
  ```
  node index.js
  ``` 

- `index.js` in the solution file, placed in the root of the folder.
  
- Before you start the solution, make sure that you uncomment `line 92: // Init()` from `index.js`. This line is commented for the sake of executing the tests. 

## Solution Description

- As mentioned above `index.js` holds the anagram solution, there is a `wordlist.txt` file containing words that are being processed and based on this list, when you enter a word in the command promt, the program tries to find all the anagram it has for the letters you entered. 

- Once you start the solution the file, `wordlist.txt`, is being processed. After the processing is done you will get a message saying `Hi, please enter a word below and find out the Anagrams:` from here on out you can start typing words. Once you type a word, press enter to start the search for an anagram.

## Unit Tests

- A total of 14 Unit tests are written in the folter `tests/index.test.js`.
- The package used for the tests is: `jest` `version: ^27.5.0`
- In order to install this package run the command: `npm install jest --save-dev`, but this package will be installed once you do `npm install` at the begining.
- To execute the tests please comment `line 92: Init()` from `index.js` so that you don't see error for async when running the tests.
  The command for running the tests is: 
  ```
  npm run test
  ```
