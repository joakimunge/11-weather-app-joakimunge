import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';


import { Button, Welcome } from '@storybook/react/demo';

import { default as CardDetail } from '../components/CardDetail/CardDetail.js';


storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);
storiesOf('CardDetail', module).add('Normal', () => <CardDetail />);


storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);
