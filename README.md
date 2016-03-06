# Push state behavior

Clicking an element with this [behavior](https://github.com/chalbert/register-behavior) triggers a `pushState`
navigation to the URL specified by the `href` attribute.

Adding this behavior to a non-anchor element (`<a>`) will cause the [link role](https://www.w3.org/TR/wai-aria/roles#link) to be added, unless a [role](https://www.w3.org/TR/wai-aria/roles) is already
 specified.

## Usage

```
<a href="/about-us" push-state>About us</a>

<button href="/about-us" push-state>About us</button>
```
