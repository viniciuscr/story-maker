# Story Maker a visual novel framework
This is a side project that I work on my spare time, and I use it to test and try new things. In the near feature I want to let it open and easy to add new content.

I have lots of ideas for this project, most of then I still figuring out a way to do them. 
So, for now I don't have a roadmap, I am just implementing things that I do belive are importants.

> check a demo here: https://story-maker-iota.vercel.app

## Objective
The main objective for  this project is: to delivery ready to use bootstrap to write light novel offering some customizations through the easiest way possible. At the same time it must be modular and extendable, making it easy to add more advanced and customized experiences.


## Project structure
### Current state
This is a very early stage where we have the base concepts about how it is goning to work. Not all is defined but at least it has enought to create a simple novel where no persistent state is needed.
### Tech stack
The projects is made with [React](https://pt-br.reactjs.org) to create the interface and  [React Redux](https://react-redux.js.org/) to handle the application state.

### Core features
The project is organized on a way to assimilate a play

1. **Scene**: Scene represents what is going on on the current state of the story, it has actors that performs on the stage and have dialogues.

2. **Actors**: Characters that interact on the current scene

3. **Dialogue**: Conversation for the current scene, it would be the script for that scene.

