export default [
  {
    title: {
      firstPart: 'Ahoy you!',
      secondPart: 'Care to register?',
    },
    inputs: [
      {
        name: 'email',
        type: 'email',
        placeholder: 'Something ending with monterail.com',
      },
      {
        name: 'password',
        type: 'password',
        placeholder: 'Enter your password',
      },
    ],
    buttonLabel: 'Next Step',
  },
  {
    title: {
      firstPart: 'Great!',
      secondPart: 'Now your name',
    },
    inputs: [
      {
        name: 'first-name',
        type: 'text',
        placeholder: 'e.g. Jessica',
      },
      {
        name: 'last-name',
        type: 'text',
        placeholder: 'e.g. Walton',
      },
      {
        name: 'date-of-birth',
        type: 'date',
        placeholder: 'DD / MM / YY',
      },
      {
        name: 'privacy-policy',
        type: 'checkbox',
      },
    ],
    buttonLabel: 'Register',
  },
];
