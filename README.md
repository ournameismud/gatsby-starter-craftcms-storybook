# Gatsby, Craft and Storybook... and tailwind...

Works with craftql... like a boss

## Getting started

### Craft CMS.

Install craftcms and the craftql plugin.

Create a craftql.php file in the craft config folder

```php

<?php

/* https://github.com/markhuot/craftql/issues/51 */

return [
  'allowedOrigins' => [
		'http://localhost:8000',
		'https://YOUR.DOMAIN',
  ]
];

```

See [here](https://github.com/markhuot/craftql) for more information on setting up craftql.

### Gatsby

Install all of the dependencies `npm i` or `yarn`

Create a `.env.development` file in the root of the repo.

Add the following keys

```
API_URL=REPLACE_ME
API_BEARER=REPLACE_ME
```

If craftql is setup correctly you should now be able to start querying craft though the graphql explorer.

### Storybook

To develop in storybook mode run `npm run storybook`

see [here](https://storybook.js.org/docs/basics/introduction/) for more information

### Commands

- `npm start` will start the gatsby server
- `npm run build` will create a production build
- `npm run storybook` will start the storybook server
