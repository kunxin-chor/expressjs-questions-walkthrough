# Q4 - Template Inheritance and Blocks

Recreate the steps to add in templates and static files from the second question.

## Walkthrough

### Step 1: Add a layout.hbs

By default, the layout file is `layout.hbs`. The `hbs view engine` will automatically extends from `layout.hbs`.

Example `layout.hbs` below:

```
<!DOCTYPE html>
<html>
  <head>
    <title>{{title}}</title>
    <link rel='stylesheet' href='/stylesheets/style.css' />
  </head>
  <body>
    {{{body}}}
  </body>
</html>

```

Your content in each individual .hbs file will go into `{{{body}}}`

If you wish to do have more blocks, you can do so with `{{{block scripts}}}`. Example below:

```
<!DOCTYPE html>
<html>
  <head>
    <title>{{title}}</title>
    <link rel='stylesheet' href='/stylesheets/style.css' />
  </head>
  <body>
    <div class="container">
        {{{body}}}
    </div>

    {{{block scripts}}}
  </body>
</html>
```

And here's how you can use it in a .hbs file:

```
let the magic begin

{{#extend "scripts"}}
<script>
  document.write('foo bar!');
</script>
{{/extend}}
```

## Question

Use bootstrap inside layout.hbs and create two routes:

### /about
Display some filler text about a company in `about.hbs` using the `layout.hbs` as parent template.

### /feedback
Display a form that asks feedback from user (just the form, no need to do proccessing)

Also create a navbar in Bootstrap that allows us to navigate between the two routes. The navbar should not be recreated in each of the individual `.hbs`