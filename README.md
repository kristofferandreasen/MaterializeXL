# MaterializeXL
A small CSS file that creates an XL column option in materialize for larger screens

I work on a wide screen and I'm pretty sure I'm not the only one. In order to leverage the full width of these screens, the standard options for columns in the Materializecss grid are not enough.

I have created an extra large column, which means you can simply add an extra css file instead of creating a bunch of extra css.

The XL column is defined by screens larger than 1600px.

Simply download and link to the file in your header or concatenate it with the additional css files.

```html
<link href="css/MaterializeXL.min.css" type="text/css" rel="stylesheet" media="screen,projection"/>
```

It is referenced exactly like the other options in Materialize, only with an xl instead of an s, m or l.

# Usage
```html
<div class="container">
  <div class="section">

      <!--   Section   -->
      <div class="row">
        <div class="col s12 m4 xl2">
          <div class="icon-block">
            <h5 class="center">Speeds up development</h5>
          </div>
        </div>

        <div class="col s12 m4 xl2">
          <div class="icon-block">
            <h5 class="center">User Experience Focused</h5>
          </div>
        </div>

        <div class="col s12 m4 xl2">
          <div class="icon-block">
            <h5 class="center">Easy to work with</h5>
          </div>
        </div>
      </div>

    </div>
  </div>
```

Enjoy!
