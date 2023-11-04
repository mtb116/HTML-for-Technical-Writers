---
sidebar_position: 3
---

# HTML: Nesting, Indentation, and Format

## Nesting

The content of an HTML element can be text or another HTML element. Adding HTML elements to the content of other HTML elements is called **nesting**.


```html
<h1>Welcome to the Show!</h1>
<div>
<p>The Lucky Robbers are back with a new performance.</p>
</div>
<br>
<p>Tickets available now.</p>
<ul>
<li>Wednesday, 6pm</li>
<li>Thursday, 6pm</li>
<li>Friday, 6pm</li>
</ul>
<img src="https://picsum.photos/200/300" alt="random image from picsum.photos">
```


Nested elements are typically described by their relationship to other elements using the terms **parent element** and **child element** (or just **parent** and **child** for short).

For example, in the HTML example above, the &lt;p> element on line 3 is a **child element** of the &lt;div> element and the &lt;div> element is a **parent element** to the &lt;p> element. This relationship between the &lt;div> and &lt;p> element is because the &lt;div> element **wraps around** the &lt;p> element. An element that **wraps around** is another way of saying that the content of an element is another element. This is also simply known as **wrapping**.

There is no limit to nesting elements. A single element can be both a **parent** and **child** to many other elements at the same time.


## Indentation

Indentation is used to make HTML easier to read. Typically, nested elements are indented to the left using the “tab” key in an editor. Indentation has no bearing on if the code will work or not. It is just to make HTML easier to read for humans.


```html
<h1>Welcome to the Show!</h1>
<div>
	<p>The Lucky Robbers are back with a new performance.</p>
</div>
<br>
<p>Tickets available now.</p>
<ul>
	<li>Wednesday, 6pm</li>
	<li>Thursday, 6pm</li>
	<li>Friday, 6pm</li>
</ul>
<img src="https://picsum.photos/200/300" alt="random image from picsum.photos">
```


How far a nested element is indented using tab key depends on the tab size. Tab size equals the number of spaces (pressing the spacebar) that results from pressing the tab button on your keyboard. Most HTML editors have a default tab size. For example, VS Code sets `Tab Size` to 4 spaces. In other words, pressing tab to indent code equals the same as pressing the spacebar key four times.

There is a lot of debate out there on tab size tab size best practice when indenting code. It depends on the coding language and the company or team. While it largely comes down to personal preference, there are still some conventional standards regarding tab size. Typically, the choice is either 2 spaces or 4 spaces for tab size. Anything smaller than 2 or greater than 4 may be seen as unconventional.


## Format

Most editors will have an auto formatter that will make most of the formatting choices for you. However, there are some formatting choices that will be entirely your preference.


### Start and End Tags: On the same line or on separate lines? {#start-and-end-tags-on-the-same-line-or-on-separate-lines}

You may have noticed that some elements in this example from before that the &lt;div> element has a start and end tags on separate lines. Whereas other elements like the &lt;h1>, &lt;p> and &lt;li> have start and end tags all on the same line. 


```html
<h1>Welcome to the Show!</h1>
<div>
	<p>The Lucky Robbers are back with a new performance.</p>
</div>
<br>
<p>Tickets available now.</p>
<ul>
	<li>Wednesday, 6pm</li>
	<li>Thursday, 6pm</li>
	<li>Friday, 6pm</li>
</ul>
<img src="https://picsum.photos/200/300" alt="random image from picsum.photos">
```


There is no reason to make this distinction other than it is convention to do so. For example, while this is considered less conventional, this is okay to do:


```html
<h1>
Welcome to the Show!
</h1>
<div>
	<p>
      The Lucky Robbers are back with a new performance.
     </p>
</div>
<br>
<p>
Tickets available now.
</p>
<ul>
	<li>
      Wednesday, 6pm
     </li>
	<li>
     Thursday, 6pm
     </li>
	<li>
      Friday, 6pm
     </li>
</ul>
<img src="https://picsum.photos/200/300" alt="random image from picsum.photos">
```


The reason why the first example is considered more conventional is because it saves a lot of visual space when formatting HTML. There are some elements (like header elements, list item elements) that typically don’t end up with a lot of content in them. Therefore, visually it is okay to keep the start and end tag on the same line because both will remain in view. Whereas a `div` element is an example of an element that tends to end up with a lot of content inside. In a div element, the start and end tags are given their own lines to better distinguish them as the visual space between them becomes vast.

However, many people prefer the second example (or some combination of the two) because it makes HTML elements and their contents even more distinguishable for easier reading.

Whatever you decide, be consistent within the html file and your project.


### Whitespace {#whitespace}

The term whitespace comes from print referring to the white parts of the paper that had no text.

In code, whitespace refers to empty lines that have no code. Such as:


```
<h1>Welcome to the Show!</h1>

<div>
	<p>The Lucky Robbers are back with a new performance.</p>
</div>
<br>

<p>Tickets available now.</p>
<ul>
	<li>Wednesday, 6pm</li>
	<li>Thursday, 6pm</li>
	<li>Friday, 6pm</li>
</ul>

<img src="https://picsum.photos/200/300" alt="random image from picsum.photos">
```


Whitespace has been added after the &lt;h1>, the &lt;br> and the &lt;ul> element.

Often whitespace is just called “spacing” or referred to as “added spaces.”

Whitespace is ignored by HTML.

When writing HTML code, including whitespace is up to you. Oftentimes people like to include a line of whitespace to separate large chunks of related code.

Whatever you decide, be consistent within the html file and your project. However, limit yourself to only one or two lines of whitespace when deciding to visually separate lines of code. Having more than two lines of whitespace in a given location is excessive and likely will be seen as unconventional.



