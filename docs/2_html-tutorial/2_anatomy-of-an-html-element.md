---
sidebar_position: 2
---

# Anatomy of an HTML Element

## Parts of an HTML Element

Most HTML elements consist of three parts: a **start tag**, **content**, and an **end tag**. 

Here’s an example:


```html
<h1>Welcome to the Show!</h1>
<p>The Lucky Robbers are back with a new performance. Tickets available now.</p>
```
 start tag | content | end tag 
 --- | --- | ---
 &lt;h1> | Welcome to the Show! | &lt;/h1>
 &lt;p> | The Lucky Robbers are back with a new performance. Tickets available now. | &lt;/p> 

* **start tag**, represented as tag name (h1, p) enclosed by a left “>” and right “&lt;” facing angle bracket.
* **end tag**, the same as the start tag with the addition of a slash “/” between the left facing angle bracket and the tag name.
* **content**, anything in between the start and end tags.

The start tag and the end tag of an HTML element always have the same tag name.



:::note
Often in casual speech, "element" and "tag" are used interchangeably. In addition, the terms "opening tag" and "closing tag" are used synonymously with start and end tags.
:::


### Void Elements

**Void elements** are HTML elements that do not have an end tag or content.

For example, `<br>`, an element that represents a line break, is a void element.


```html
<h1>Welcome to the Show!</h1>
<p>The Lucky Robbers are back with a new performance.</p>
<br>
<p>Tickets available now.</p>
```

There is only a short [list of all void elements](https://www.w3.org/TR/2011/WD-html-markup-20110113/syntax.html#syntax-elements). You don’t need to memorize this list or understand every void element. As you continue to work with HTML, there are common void elements that you will likely use regularly. For example:

* &lt;img>, void element, inserts an image to be rendered in the browser.
* &lt;hr>, void element, represents a thematic break and renders a horizontal line in the browser.
* &lt;col>, void element, represents a table column.

:::note

A special note about self-closing tags which are often confused with void elements in HTML.

Self-closing tags are start tags that have a trailing "/" slash before the closing ">" angle bracket.

For example: &lt;polygon /> is a self-closing tag.

In HTML, self-closing tags are reserved only for foreign elements; typically SVG or MathML elements. However, many people write void elements with a "/" slash before the closing ">" angle bracket. For example, instead of &lt;br>, many people may choose to write this void element as &lt;br/>.

Including a "/" slash in a void element will not break your code but it is not necessary. Though many HTML writers do include a "/" slash. Usually this is because they are more familiar with XML which is visually similar to HTML and does require a trailing "/" slash before the closing ">" angle bracket.

Be aware that in casual english people often refer to a void element as a self-closing tag. The two are technically different but their terms are often used synonymously. 

If you are interested in getting into the technical nitty gritty then read step 6 in the HTML documentation.
:::


 


### Start Tag Attributes {#start-tag-attributes}

HTML start tags may optionally include one or more **attribute(s)**. For example, the image element in the example below has a `src` “source” attribute and an `alt` “alt text” attribute. The text in between the two quotes is the **attribute value**. 


```html
<h1>Welcome to the Show!</h1>
<p>The Lucky Robbers are back with a new performance.</p>
<br>
<p>Tickets available now.</p>
<img src="https://picsum.photos/200/300" alt="random image from picsum.photos">
```


Attributes may only be included in the start tag and you may include as many attributes as you need.

Exactly what attributes you can use depends on the tag. For example, an img tag has a different set of attributes from a form tag. W3Schools is an excellent resource to find a list of all attributes for a given tag. For example, here is the page on [img tags ](https://www.w3schools.com/tags/tag_img.asp)and if you scroll down to the bottom of the page to “Attributes” there is a complete list of all attributes for the image tag. Over time you will eventually memorize commonly used attributes but otherwise it is simple to look them up as needed.

HTML attributes are commonly used in conjunction with CSS and JavaScript so we won’t dive into them much in this lesson.  