import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Web Rendering Patterns Comparison Guide | Mitchie's Dev Blog",
    },
    {
      name: "description",
      content:
        "Comprehensive comparison of modern web rendering patterns: SSR, SSG, ISR, and CSR. Learn the pros, cons, and ideal use cases for each rendering strategy in web development.",
    },
    {
      name: "keywords",
      content:
        "SSR, SSG, ISR, CSR, web rendering patterns, server-side rendering, static site generation, incremental static regeneration, client-side rendering, web development, performance optimization",
    },
    {
      property: "og:title",
      content:
        "Complete Guide to Web Rendering Patterns | Modern Web Development",
    },
    {
      property: "og:description",
      content:
        "Compare SSR, SSG, ISR, and CSR rendering patterns with detailed analysis of performance, use cases, and implementation strategies.",
    },
    {
      property: "og:type",
      content: "article",
    },
    {
      name: "author",
      content: "Mitchie",
    },
    {
      property: "article:published_time",
      content: "2024-01-20",
    },
    {
      property: "article:section",
      content: "Web Development",
    },
    {
      property: "article:tag",
      content: "Web Development, Performance, Architecture",
    },
  ];
};

export default function Index() {
  return (
    <article className="content prose prose-lg max-w-none">
      The JavaScript filter() function is a built-in method for arrays that is used to create a new array containing only the elements that satisfy a specified condition. It does not modify the original array but returns a new array with the filtered elements.
{/* 
Key Features of filter()
Selective filtering: It applies a callback function to every element of the array and includes only those elements for which the callback returns true.
Non-destructive: The original array remains unchanged.
Returns a new array: The size of the new array can be smaller, equal to, or even empty depending on the conditions.
Syntax
javascript
Copy code
const newArray = originalArray.filter(callback(element, index, array));
callback: The function to test each element, which takes the following arguments:

element: The current element being processed.
index (optional): The index of the current element.
array (optional): The array filter() was called on.
originalArray: The array to filter.

When to Use filter()
When you want to extract elements from an array based on certain conditions.
Examples: Filtering even numbers, extracting items that match a specific property value, or removing invalid data.
Examples
1. Filter Even Numbers
javascript
Copy code
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6]
2. Filter Strings with More than 5 Characters
javascript
Copy code
const words = ['apple', 'banana', 'cherry', 'kiwi'];
const longWords = words.filter(word => word.length > 5);
console.log(longWords); // ['banana', 'cherry']
3. Filter Objects Based on a Property
javascript
Copy code
const users = [
  { id: 1, name: 'Alice', active: true },
  { id: 2, name: 'Bob', active: false },
  { id: 3, name: 'Charlie', active: true }
];
const activeUsers = users.filter(user => user.active);
console.log(activeUsers); 
// [{ id: 1, name: 'Alice', active: true }, { id: 3, name: 'Charlie', active: true }]
4. Remove Falsy Values
javascript
Copy code
const values = [0, 1, '', null, 'hello', undefined, false, true];
const truthyValues = values.filter(Boolean);
console.log(truthyValues); // [1, 'hello', true]
5. Filter Negative Numbers
javascript
Copy code
const numbers = [-3, -1, 0, 2, 5];
const positiveNumbers = numbers.filter(num => num >= 0);
console.log(positiveNumbers); // [0, 2, 5]
Common Mistakes
Not returning a condition:

javascript
Copy code
const nums = [1, 2, 3, 4];
const results = nums.filter(num => { num > 2 }); // Incorrect
console.log(results); // []
Fix: Ensure the callback explicitly returns a condition.

javascript
Copy code
const results = nums.filter(num => num > 2); // Correct
Using filter() for side effects:

filter() is meant to select elements, not for tasks like logging or modifying variables. Use forEach for those.
Differences Between filter() and map()
Purpose:
filter() is for selecting elements based on a condition.
map() is for transforming elements.
Output:
filter() can return a smaller array than the original.
map() always returns an array of the same length.
Conclusion
The filter() function is a versatile and concise way to extract data from arrays based on conditions. Use it whenever you need to isolate elements that meet specific criteria, leaving behind everything else.*/}
    </article>
  );
}
