import React from 'react';
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Magic,
  Appear,
  Layout,
  Fit,
  Fill,
  Image,
  Notes,
  CodePane
} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import CodeSlide from 'spectacle-code-slide';

const kotlinLogo = require('./assets/kotlin-logo.png');
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        theme={theme}
      >
        <Slide>
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            "Server side" languages in the browser
          </Heading>
          <Heading size={3} textColor="tertiary" fit bold>
            For those of you who hate Javascript
          </Heading>
        </Slide>

        <Slide>
          <Image src={kotlinLogo} />
        </Slide>

        <Slide>
          <Appear><Text margin="40px 0">Made by Jetbrains</Text></Appear>
          <Appear><Text margin="40px 0">Statically typed language</Text></Appear>
          <Appear><Text margin="40px 0">Compiles to JVM bytecode, Javascript and native code</Text></Appear>

          <Notes>
            <p>Extremely solid Java interop. Easy to use entire Java ecosystem, Spring, Maven, Gradle etc</p>
            <p>Explain JVM</p>
            <p>Been in development since 2011, 1.0 released in 2016</p>
            <p>Gaining traction lately, officially supported language on Android. Now used for Gradle. Used by Uber</p>
            <p>
              Streamlined version of Java, with modern language design making it very nice to work in. <br />
              Strong functional design <br />
              Terse yet readable syntax (easier than Scala) <br />
            </p>
            <p>Worth considering for your server side projects</p>
          </Notes>
        </Slide>

        <Slide>
          <Notes>
            <div>
              Features:
              <ul>
                <li>Null safety</li>
                <li>Data classes</li>
                <li>Unchecked exceptions</li>
                <li>Extension functions</li>
                <li>Coroutines (async / await and more)</li>
                <li>Delegation</li>
                <li>Builder syntax (will be useful later)</li>
              </ul>
            </div>
          </Notes>
        </Slide>

      </Deck>
    );
  }
}
