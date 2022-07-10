# monte-cinema
The task was to create user registration panel for imaginary cinema placed in Wrocław. 

The registration should be splitted into 2 steps with various form validation and after successfully completing the form, app should provide a success screen with certain data.

## Local Setup - Development Mode

To run the app, download this repository to your local machine.

Then in the project's directory run following commands:

```bash
# install dependencies
$ npm install

# serve with hot-reload
$ npm run dev
```

Afterwards you can visit the app at [localhost:3000](http://localhost:3000/).

## Production Mode

You can also check application's version optimalized for production.

If you want to quick check production version of the app, you can visit its **live version** at [monte-cinema.web.app](https://monte-cinema.web.app/).

To check the app locally in production mode, run:

```bash
# install dependencies (if you haven't install them yet)
$ npm install

# build for production
$ npm run build

# serve production version
$ npm run preview
```

Production optimalized version will be available at [localhost:4173](http://localhost:4173/).

## Extra Feature

Additionaly to requirements of the task, the project have been created in a way so **you can easily create multiple versions of this form by yourself**.

To do so, edit `src/formSteps.js` file which is a configuration file of the app.
The file must provide data following below pattern:

```js
export default [
  // First object === first step of registration:
  {
    // The big title we see on all of the screens
    title: {
      firstPart: 'Some text for title',
      secondPart: 'Extra text for title',
    },

    // All input fields you want to show on certain step of the registration
    inputs: [
      {
        name: 'name-of-input', // UNIQUE and HYPHENATED name which will be also a label of certain input
        type: 'email', // type of input HTML element; 
        // available types: 'text', 'email', 'password', 'date' and 'checkbox'
        placeholder: 'placeholder text', // placeholder of input HTML element
      },
      {
        name: 'name-of-input',
        type: 'password',
        placeholder: 'another placeholder text',
      },
      {
        name: 'name-of-input',
        type: 'date',
        placeholder: 'DD / MM / YY', // date input can also have a placeholder
      },
      {
        name: 'privacy-policy',
        type: 'checkbox',
        // In case of Privacy Policy checkbox ommit the placeholder property.
        // Warning: checkbox can be used ONLY ONCE in an entire app,
        // providing "I accept Privacy Policy" label next to it.
      },
    ],

    // Inner text of button HTML element responsible for submitting form
    buttonLabel: 'Next Step',
  },

  // Second object === second step of registration
  {
    title: {
      // ...
    },
    inputs: [
      // ...
    ]
    buttonLabel: 'Another Step',
  },

  // Third object === third step of registration
  {
    // ...
  },

  // etc...
];
```

**Keep in mind that the success screen still is going to display only user's name and email adress in it's content.**

For the screen to work correctly you **must include** in the file objects shown below (in a step of your choice, in `inputs` array):

```js
// ...
{
  name: 'first-name', // "first-name" exclusively for user's name to be displayed
  type: 'text', // "text" for correct validation of user's name
  placeholder: 'placeholder text', // whatever placeholder text you like
},
{
  name: 'email', // "email" exclusively for user's email to be displayed
  type: 'email', // "email" for correct validation of email
  placeholder: 'placeholder text', // whatever placeholder text you like
}
// ...
```
