# newsapi-viewer

## Introduction
I will approach this test as a real product/project.
Currently, is not clear if I will be able to discuss the choices that I will make in the development of the project, so I will try to describe my approach to the test and additional commenting some code.
I beg your pardon is this will sound a little bit verbose.

Similarly to a product I will define an MVP and then, if I will remain time, I will improve it as much as possible.
For the sake of clarity I will create different incremental branches.

## MVP
#### Business requirements (AC)

1. As a user when I visit the HP then I can read the latest news from the United Kingdom proposed by newsapi.org service
2. As a user when I use a form with a keyword then I can see a filtered result of news
3. As a user when a click on a news then I can see the full article

There is no mentioning about the fact that the application should be MPA or a SPA so I will build the App as a MPA with SSR.
There is no design specification or requirement so I will be more focus on the pure HTML output, postponing the FE part (CSS and SPA) to the secondary iteration.

#### Technical requirements

```
We anticipate that the website may have future requirements, so you should aim for maintainability with your solution
```
To enforce maintanability I will reduce to the minimum the dependecies and I will try to reach a good test coverage.
