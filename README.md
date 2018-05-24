# newsapi-viewer

A simple viewer for newsapi.org

## Introduction

To be able to deliver the tests in a short amount of time, I approached it incrementally defining a basic MVP and some improvements if there was some remaining time.

I tracked the progress in 2 different branches so you won't find anything in master cause the final result it's the second branch.
I thought that was a sensible approach.

(First iteration) [1-MVP](https://github.com/umbobabo/newsapi-viewer/tree/1-MVP)
: It is basically a Multiple Page Application SSR.
Please read the .md files for more information about I approached it.

(Second iteration - final result) [2-SPA](https://github.com/umbobabo/newsapi-viewer/tree/2-SPA): it is instead an universal Single Page Application with SSR. Please read the .md files for more information about I approached it.

**If you don't have time to view both the solutions please jump to 2-SPA branch cause it's the final results.**

## Run the Application

```
npm i
NEWS_API_KEY=<YOUR_API_KEY>  npm run start
```

## Something is missing...

Due to lack of time and because it's also GDPR week unfortunately :(, I wasn't unable to cover everything as I wanted to. Apologies in advance for some lack in tests, typechecking, optimisation of the folder structure, automation, and commit messages.
