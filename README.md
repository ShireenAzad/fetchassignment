                            TEST DRIVEN DEVELOPMENT
    PREREQUISITES:
    ==========================
npm init 
        -  set up a new or existing npm package
npm install -g typescript 
        - install TypeScript in the folder.
npm i jest @types/jest ts-jest typescript -D 
        - TypeScript preprocessor with source map support for Jest that lets you use Jest to test projects written in TypeScript.
npx ts-jest config:init
        -Jest transformer with source map support that lets you use Jest to test projects written in TypeScript.
npm install isomorphic-fetch
        - This module will enable you to use fetch in your Node code in a cross-browser compliant fashion. 

Problem Statement:
    Call the above API and log status from the response

Solution:
===============
Writing Test Cases:
======================
If the url is fetched successfully ,then the function should return the status as success

Running test case :
==================
npx jest --watchAll - To run test files 

Writing the code:
==================
Using Isomorphic fetch package
1.Fetching the url and converting into json format 
2.Returning the status of the message (data in json)

Run and Refactor the code :
======================
1.Running the code ,if test fails refactor it.
2.If success,add new test case and follow step1

