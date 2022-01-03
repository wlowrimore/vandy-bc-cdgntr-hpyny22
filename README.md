# PASSWORD GENERATOR

## JavaScript-Challenge 3

In this challenge I was given a starting HTML, CSS, and JS markup to create a random password generator.  I began by writing out pseudo-code to determine the steps in which to create a step by step guide for completion of the generator.  I later found that by replacing my pseudo-code with the "When / Then" statements, found in the provided README.md file, I could use it as a reference to individualize functions.  This proved to be a more straight forward approach to a function and call function road map.  Upon using my resources (i.e. MDN, Google Foo, and help from my Tutor, as well as, (Software Developer and Brother) Timothy Lowrimore, I was able to successfully expand my scope of understanding certain problem solving avenues.  For instance; I used "Const" instead of "Var" where I found that the information nested within needed to be free from possibilities of unwanted and/or unnecessary access or manipulation.  I also used "push" to insure that the generator would pull at least 1 character from each string, so that the generator would not pull from only 1 string.  Also, I used "Math.floor" to round down the integers to a whole number...Math.ceiling was not an option as that would round up and place the (possible) integer called, outside of the string. The end result is a properly, functioning random password generator which randomly chooses uppercase, lowercase, numbers, and special characters (respectively), and generates the password to the legnth chosen by the user, which is a legnth of no less than 8 characters and no more than 128 characters. All of the aforementioned attributes are provided by user, via window prompted inquiries and statements. The overall flow of the JS code is neat and organized for ease of examination and debugging.

<image src= "assets\images\landing_page-CG.png" alt ="Code Generator Landing Page"/>

<a href= "https://github.com/wlowrimore/vandy-bc-cdgntr-hpyny22" target= "_blank" rel= "noreferrer">GitHub Page</a>

<a href= "https://wlowrimore.github.io/vandy-bc-cdgntr-hpyny22/" target= "_blank" rel= "noreferrer">Deployed Page</a>