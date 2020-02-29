# How to use Parallax
TODO: Make better
### Example
```javascript
//jobs.js
<Layout parallax={"jobs-background">
...
</Layout>
```
```scss
// styles/parallax.scss
...
@include parallax-background("jobs-background", "../images/jobs-background-image.jpg", center, auto 100vh);
```


### Full Instructions
1. In parallax.scss, use the parallax-background mixin to make sure the background image you would like to use will work.
    
    a. Syntax: parallax-background(identifier, imagePath, bgPosition, size)
    
    Example:
```scss
@include parallax-background("skyline", "../images/bg.jpg", center, auto 100vh);
```
   The identifier is a unique identifier for the background image. It will need to be passed to Layout in step 2.
2. Add the `parallax` prop to Layout. The value should be set to the identifier of the background image that you would like to use, from step 1.

