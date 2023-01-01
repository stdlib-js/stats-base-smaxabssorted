<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# smaxabssorted

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Calculate the maximum absolute value of a sorted single-precision floating-point strided array.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
smaxabssorted = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-smaxabssorted@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var smaxabssorted = require( 'path/to/vendor/umd/stats-base-smaxabssorted/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-smaxabssorted@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.smaxabssorted;
})();
</script>
```

#### smaxabssorted( N, x, stride )

Computes the maximum absolute value of a sorted single-precision floating-point strided array `x`.

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ -1.0, -2.0, -3.0 ] );
var v = smaxabssorted( x.length, x, 1 );
// returns 3.0

x = new Float32Array( [ -3.0, -2.0, -1.0 ] );
v = smaxabssorted( x.length, x, 1 );
// returns 3.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: sorted input [`Float32Array`][@stdlib/array/float32].
-   **stride**: index increment for `x`.

The `N` and `stride` parameters determine which elements in `x` are accessed at runtime. For example, to compute the maximum absolute value of every other element in `x`,

```javascript
var Float32Array = require( '@stdlib/array-float32' );
var floor = require( '@stdlib/math-base-special-floor' );

var x = new Float32Array( [ 1.0, 2.0, 2.0, -7.0, 3.0, 3.0, 4.0, 2.0 ] );
var N = floor( x.length / 2 );

var v = smaxabssorted( N, x, 2 );
// returns 4.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float32Array = require( '@stdlib/array-float32' );
var floor = require( '@stdlib/math-base-special-floor' );

var x0 = new Float32Array( [ 2.0, 1.0, 2.0, 2.0, -2.0, 2.0, 3.0, 4.0 ] );
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var N = floor( x0.length / 2 );

var v = smaxabssorted( N, x1, 2 );
// returns 4.0
```

#### smaxabssorted.ndarray( N, x, stride, offset )

Computes the maximum absolute value of a sorted single-precision floating-point strided array using alternative indexing semantics.

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ -1.0, -2.0, -3.0 ] );
var v = smaxabssorted.ndarray( x.length, x, 1, 0 );
// returns 3.0
```

The function has the following additional parameters:

-   **offset**: starting index for `x`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offset` parameter supports indexing semantics based on a starting index. For example, to calculate the maximum absolute value for every other value in `x` starting from the second value

```javascript
var Float32Array = require( '@stdlib/array-float32' );
var floor = require( '@stdlib/math-base-special-floor' );

var x = new Float32Array( [ 2.0, 1.0, 2.0, 2.0, -2.0, 2.0, 3.0, 4.0 ] );
var N = floor( x.length / 2 );

var v = smaxabssorted.ndarray( N, x, 2, 1 );
// returns 4.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `NaN`.
-   The input strided array must be sorted in either **strictly** ascending or descending order.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-smaxabssorted@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var x;
var i;

x = new Float32Array( 10 );
for ( i = 0; i < x.length; i++ ) {
    x[ i ] = i - 5.0;
}
console.log( x );

var v = smaxabssorted( x.length, x, 1 );
console.log( v );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats/base/dmaxabssorted`][@stdlib/stats/base/dmaxabssorted]</span><span class="delimiter">: </span><span class="description">calculate the maximum absolute value of a sorted double-precision floating-point strided array.</span>
-   <span class="package-name">[`@stdlib/stats/base/smaxabs`][@stdlib/stats/base/smaxabs]</span><span class="delimiter">: </span><span class="description">calculate the maximum absolute value of a single-precision floating-point strided array.</span>
-   <span class="package-name">[`@stdlib/stats/base/smaxsorted`][@stdlib/stats/base/smaxsorted]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a sorted single-precision floating-point strided array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-smaxabssorted.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-smaxabssorted

[test-image]: https://github.com/stdlib-js/stats-base-smaxabssorted/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-smaxabssorted/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-smaxabssorted/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-smaxabssorted?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-smaxabssorted.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-smaxabssorted/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-smaxabssorted/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-smaxabssorted/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-smaxabssorted/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-smaxabssorted/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-smaxabssorted/main/LICENSE

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32/tree/umd

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/stats/base/dmaxabssorted]: https://github.com/stdlib-js/stats-base-dmaxabssorted/tree/umd

[@stdlib/stats/base/smaxabs]: https://github.com/stdlib-js/stats-base-smaxabs/tree/umd

[@stdlib/stats/base/smaxsorted]: https://github.com/stdlib-js/stats-base-smaxsorted/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
