# Q2 - Add in static files and templates

# PART I - WALKTHROUGH

### Step 1 
Create a `public` folder

### Step 2
Register the `public` folder as the location of static files by adding the following lines of codes:

```
app.use(express.static('public'));
```

*Important: All setup code must go before your routes*

### Step 3 
Add in templates support. Follow the steps below carefully:

#### 1 - Install hbs 
Type in the following at the terminal:

```
yarn add hbs
```

#### 2 - Register the view engine and the templates folder
We need to tell express that we are using hbs (short "handlebar express") as the view engine, and where to find the template file.

Add in the following code before your routes:

```
// add the end of all require() calls
const hbs = require('hbs')

// before your routes
app.set('view engine', 'hbs');

```

Then create a folder named `views`

#### 3 - Add index.hbs to the `views` folder
Create a `index.hbs` in the `views` folder. It's just basic HTML. Using <h1> tags, display "Hello World"

#### 4 - Add a `style.css` to the `public` folder
Add a style to set the font family to `Verdana`

#### 5 - Link `style.css` in `index.hbs`
So that the text will display using Verdana

## PART II - Questions

### Add in a `/about` route 
Displays the image `puppy.jpg` along with the header 'Welcome to our gallery'. You have to put this file in the right folder for this to work.
Using CSS, add a red border to the image.
