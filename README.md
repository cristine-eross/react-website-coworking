# Notes for development

A problem I encounter these days is how to keep my highly optimized SEO-friendly Next.js website server-side by avoiding the 'use client' directive at any cost. In this project, the routing solves all my problems. 

## First problem: the modal

I have written a form modal for users to pay for the coworking space based on how many days they use it. But for me, the handiest solution would have been using the useSate and useEffect hooks known from React. I also tried the useRef hook, but all these hooks transform my pages involved into client-side pages, and I don't want them. So what I'm going to try next is <strong> preparing a modal page and use routing to access it, then Link component to return. </strong>

## Second problem

This one is tough as I haven't done anything like that before. How to make my website available in three different languages without using any automated language translation library, just staying with my own translation and having the SEO optimization for all languages? Well, the first one could be solved by <strong> routing. Again. </strong> I'm basically preparing three different Pages for the languages. And reuse the components with different props. This however will probably not serve the SEO purposes. But so far, this is the simplest solution that I could come up with.
