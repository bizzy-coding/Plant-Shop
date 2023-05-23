# Plant Shop

Vanilla javascript project, utilising objects and sorting methhods to create a plant shop. 

Featuring:
- object methods
- sorting functionality
- vanilla javascript

👀 [LIVE PREVIEW](https://bizzy-coding.github.io/) coming soon....

## Next steps

[x] Create product object
[x] Basic Styling
[x] Display products 
[x] Sorting functionality

## Functionality utilised

1. To sort the plants array alphabetically (A-Z) based on their names:
   - Use the `sort()` method with a comparison function that compares the `name` property of each plant using `localeCompare()`.

2. To implement a button for sorting the plants:
   - Create a separate array (`originalPlants`) to preserve the original order.
   - Use the original array to create and append the product cards initially.
   - Add a button element to trigger the sort functionality.

3. When the sort button is clicked to sort the plants alphabetically:
   - Sort the `originalPlants` array using `sort()` with a comparison function that compares the `name` property.
   - Clear the existing product cards and regenerate them in the sorted order.

4. To sort the plants based on price (high to low):
   - Add a button element to trigger the sort functionality.
   - Sort the `originalPlants` array using `sort()` with a comparison function that subtracts `b.price` from `a.price`.
   - Regenerate the product cards in the sorted order.

5. To sort the plants based on price (low to high):
   - Add a button element to trigger the sort functionality.
   - Sort the `originalPlants` array using `sort()` with a comparison function that subtracts `a.price` from `b.price`.
   - Regenerate the product cards in the sorted order.

   ## Acknowledgments

Sources used
* [MDN WEB DOCS - String.prototype.localeCompare()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)
* [MDN WEB DOCS - Sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)



# 🚀 About Me

Hi. I'm Laura Bizzle, but you can call me Bizz and I am always [Bizzy Coding](https://www.instagram.com/bizzy_coding/) 

I'm a self-taught front-end developer with a background in design & digital marketing.

I made the career switch to front-end developer in 2022 and haven't looked back.

Coding is life 

## 🔗 Connect with me!
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://bizzy-coding.github.io/Junior_Dev/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/laura-bizzle/)
[![instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/bizzy_coding/)

