// Browser Styles
    // Headings are large and bold and our list has bullets on any default page even with no css.
    // Browsers have internal stylesheets containing default styles, which they apply to all pages by default; without them all of the text would run together in a clump and we would have to style everything from scratch




// Combining selectors and combinators
    /* selects any <span> that is inside a <p>, which is inside an <article>  */
        article p span {
        }
    /* selcts any <p> that comes directly after a <ul>, which comes directly after an <h1>  */
        h1 + ul + p {
        }

    // You can combine multiple types together, too. Try adding the following into your code:
        body h1 + p .special {
            color: yellow;
            background-color: black;
            padding: 5px;
          }

        //   This will style any element with a class of special, which is inside a <p>, which comes just after an <h1>, which is inside a <body>. Phew!