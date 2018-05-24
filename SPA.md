# newsapi-viewer

## Let's make it better!

### Retrospective

What went well:

1. We have an MVP!
2. The SSR guarantees us super fast paint
3. The Application work also with JS disabled
4. Cross-browser support is great out-of-the-box cause we used very basic and well supported features
5. The SSR make the application easy crawlable by Search Engine or crawler in general
6. The amount of dependencies is very low and this make simple updates and maintenance
7. The simple and semantic HTML help accessibility and users that use screen readers

What didn't went so well:

1. While developing the article page I realised that there were no way to get the data of the full article so I thought that build the article page wouldn't have give any value neither by the user POV nor by the test POV; I decided to spend the remain time to improve the existing features instead.
2. Styles in page: Styles are in an external file while I could have probably add them into the page via a `style` tag. In this way we would have had a Critical Path and an incredibly improved first paint.
3. Improve accessibility
4. Meta-data are missing
5. ... and most important: the App is awful!...

The App is very awful, it does the job, but clearly can be improved.
I will use the remaining time to achieve the following points.

1. Make the App nicer
2. Make the UX Experience better

### Technical approach (SPA)

#### Make it nicer

I don't have a lot of time to write my own styles in an appropriate way so I will use a library to improve the look and feel.
I guess material.ui should work for this purpose.

### Improve UX experience

After the first load, the filter functionality could work just CS.
Welcome SPA!

