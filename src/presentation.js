import React from 'react';
import {
  Deck,
  Heading,
  Slide,
  Text,
  Appear,
  Image,
  Notes,
  CodePane
} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import 'prismjs/components/prism-kotlin';
import 'prismjs/components/prism-csharp';

const kotlinLogo = require('./assets/kotlin-logo.png');
const webAssemblyLogo = require('./assets/web-assembly-logo.svg');
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

const textMargin = "60px 0";

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        theme={theme}
        contentWidth={1300}
        contentHeight="100%"
        progress="none"
      >
        <Slide>
          <Heading size={1} caps textColor="secondary">
            "Real" languages in the browser
          </Heading>
          <Heading size={3} textColor="tertiary" fit bold>
            For those of you who hate Javascript
          </Heading>
        </Slide>

        <Slide>
          <Image src={kotlinLogo} />
        </Slide>

        <Slide>
          <Appear><Text margin={textMargin}>Made by Jetbrains</Text></Appear>
          <Appear><Text margin={textMargin}>Statically typed language</Text></Appear>
          <Appear><Text margin={textMargin}>Compiles to JVM bytecode, Javascript and native code</Text></Appear>

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

        <Slide bgColor="secondary">
          <CodePane
            lang="kotlin"
            source={require("./exampleCode/kotlinSyntax.kt")}
            textSize="2rem"
          />
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

        <Slide>
          <Heading size={4} textColor="tertiary">How to compile to JS?</Heading>
          <Appear><Text margin={textMargin}>Build standard Kotlin project via Grade / Maven</Text></Appear>
          <Appear><Text margin={textMargin}>Kotlin Webpack Plugin</Text></Appear>
          <Appear><Text margin={textMargin}>Create React Kotlin App</Text></Appear>

          <Notes>
            <p>Demo create-react-kotlin-app</p>
          </Notes>
        </Slide>

        <Slide>
          <Heading size={4} textColor="tertiary">Javascript interop?</Heading>
          <Appear><Text margin={textMargin}><b>Call JS from Kotlin</b> - need to declare external types</Text></Appear>
          <Appear><Text margin={textMargin}><b>ts2kt</b> - Convert Typescript definitions</Text></Appear>
          <Appear><Text margin={textMargin}><b>Call Kotlin from JS</b> - just call compiled JS</Text></Appear>

          <Notes>
            <p>Show ts2kt-automator</p>
            <p>Can output JS in CommonJS module format</p>
            <p>
              Kotlin syntax is a bit unwieldy, easier to just use Javascript / Typescript directly to make use of web frameworks.
              But could make sense to share complicated logic with server, eg DTOs etc.
            </p>
          </Notes>
        </Slide>

        <Slide>
          <Heading size={4} textColor="tertiary">
            But do we have to transpile to JS?
          </Heading>
          <Appear>
            <Image src={webAssemblyLogo} width={500} margin="50px auto" />
          </Appear>

          <Notes>
            <p>A low-level bytecode format for in-browser client-side scripting</p>
            <p>Runs in Javascript VM</p>
            <p>Compile all sorts of languages to run in the browser - good support from C, C++, LLVM based compilers</p>
          </Notes>
        </Slide>

        <Slide>
          <Heading size={3} textColor="tertiary">.NET in the browser!</Heading>
          <Appear><Heading size={5} margin={textMargin}>Mono in WebAssembly</Heading></Appear>

          <Notes>
            Two modes:
            <ul>
              <li>AOT - Full static compilation of Mono, compiles the Mono C runtime and Mono class library, and user code, into Wasm code. Produces one large statically compiled app</li>
              <li>Intepreted mode - Compile Mono runtime into WASM, then uses Mono's IL interpreter to run managed code. Execute standard .NET assemblies. Smaller download, slower performance. No JITing</li>
            </ul>
          </Notes>
        </Slide>

        <Slide>
          <Text margin="60px 0" textColor="tertiary">So we can run C# - what to do with it?</Text>
          <Appear order={0}><Text margin="60px 0 0 0">Browser</Text></Appear>
          <Appear order={1}><Text>+</Text></Appear>
          <Appear order={1}><Text>Razor</Text></Appear>
          <Appear order={2}><Text margin="30px 0">=</Text></Appear>
          <Appear order={2}><Heading size={4} textColor="tertiary">Blazor</Heading></Appear>

          <Notes>
            <p>Running .NET in the browser isn't enough - we need an easy way to write applications.</p>
            <p>Could use existing frameworks, but most are fairly tied to JS / TS</p>
            <p>Ideally want something tailored to .NET and C#.</p>
            <p>We also already have a C# based templating language in Razor</p>
            <p>Blazor is a new SPA framework being developed by Microsoft and Steve Sanderson</p>
            <p>Very experimental - first demoed 2017, first public preview 22nd March. Still in alpha, not production ready</p>
          </Notes>
        </Slide>

        <Slide bgColor="secondary">
          <CodePane
            lang="csharp"
            source={require("./exampleCode/blazorComponent.cshtml")}
            textSize="2rem"
          />

          <Notes>
            <p>A component is a .NET class, which you can write directly, or more commonly using Razor</p>
            <p>Normal HTML and Razor syntax</p>
            <p>Members of the component class defined in the functions block. Can specify state (properties, fields), methods, events, lifecycle hooks.</p>
            <p>All runs on the client - this isn't WebForms</p>
            <p>When an event occurs on a component (eg onclick), component regenerates its render tree. Blazor will then compare the new render tree against the previous one and update DOM as required</p>
            <p>Demo the code!</p>
          </Notes>
        </Slide>

        <Slide>
          <Appear><Text margin={textMargin}>Component model</Text></Appear>
          <Appear><Text margin={textMargin}>Routing, layouts, validation</Text></Appear>
          <Appear><Text margin={textMargin}>Live reloading</Text></Appear>
          <Appear><Text margin={textMargin}>Server side rendering</Text></Appear>
          <Appear><Text margin={textMargin}>.NET debugging</Text></Appear>
          <Appear><Text margin={textMargin}>Run on old browsers via asm.js</Text></Appear>

          <Notes>
            <p>Lots of these are future features.</p>
            <p>Intended to be fully featured framework, but everything is optional.</p>
            <p>Can be hosted in ASP.NET, or output standalone static content. Easy to share code with ASP.NET</p>
            <p>I would show IE11, but it's broken in the latest release</p>
            <p>Other future tasks: easier JS interop (typescript definitions?), code stripping, optimisation</p>
          </Notes>
        </Slide>

        <Slide>
          <Heading size={4} textColor="tertiary">Should you use these?</Heading>
          <Appear><Text margin={textMargin}>No (not yet)</Text></Appear>
          <Appear><Text margin={textMargin}>But expect things to change over the next few years</Text></Appear>

          <Notes>
            <p>Both Kotlin and Blazor are a bit too immature at this point. Kotlin has been around longer but lacking in documentation.</p>
            <p>Don't see much reason to use Kotlin syntax over TS, just seems like extra overhead. But definitely could be worth sharing bits of business logic</p>
            <p>Wasm will be a big thing over </p>
          </Notes>
        </Slide>

        <Slide>
          <Heading size={2} textColor="tertiary">Questions?</Heading>
        </Slide>

      </Deck>
    );
  }
}
