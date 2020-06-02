# Q3 - Form Processing

## Walkthrough

### Step 1 - Register the methods to process Form
Add the following before the routes:

```
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
```

### Step 2 - Setup a Form
Add the route `\greet`

Create a form that takes in a user name. The form is submitted via HTTP POST and will just say "Hi <whatever the user name is>"

Using `req.body.<form-name>` to extract out the value in the submitted field.

## Questions

Implement the following routes:

### \find_average\
Display a form that asks the user for three numbers, then after the user has submitted, display the average of the three numbers.

### \feedback
Implement the following form that asks the user for feedback. Display all the user's choices and entries after the user has submitted the form.
Use the form below and be sure to add in any attributes you need to get this form to work.
```
<form method="POST">
    <div>
        <label>Name</label>
        <input type="text" name="user-name">
    </div>
    <div>
        <label>How did you find out about us?</label>
        <input type="radio"/>>Recommended by friends
        <input type="radio"/>>From search engines
        <input type="radio"/>>From social media
        <input type="radio"/>>Others
    </div>
    <div>
        <label>Which sections of the website did you find helpful?</label>
        <input type="checkbox"/>Tutorials
        <input type="checkbox"/>Videos
        <input type="checkbox"/>Forums
    </div>
</form>
```