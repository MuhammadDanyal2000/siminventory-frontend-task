<p align="center">SIMINVENTORY</p>
<p align="center"> - Frontend Demo Task - </p>

##

### Introduction:

This is a basic test that is meant to analyze your fundamental **React** skills by designing a simple UI.

The requirements, prototype link, instructions, docs links, fonts, and colors can all be found below in their own specific sections. Make sure to follow them well and ask if you have any queries.

### Requirements:

1. **NextJS(React Framework)** - Canary version **recommended\***
2. **TailwindCSS**
3. **React Hook Forms**
4. **Zod**
5. **Basic Git and Github skills and knowledge.**

\* **Note**: Canary version is recommended due to a minor bug with NextJS's stable version `3.14.19`. You can use the following command to bootstrap a project in canary:

```sh
npx create-next-app@latest
```

\* **Note:** **NextJS** is the framework we will use with react in our main project, hence while we are not using any specific function of the framework in this demo, it would be best to familarize yourself with how NextJS works, atleast to a basic level. Moreover, we will specifically be using the **App Router**.

### Instructions:

In this demo, you basically have to replicate the provided prototype UI made in `Figma`, albeit with some imposed constraints/requirements so that it better fits what we are looking for. The requirements and constraints you **must** follow are listed above.

1. Open up the prototype UI from the link provided in the **Resources** section below.
2. Create a NextJS project and replicate the UI.

You **MUST** use TailwindCSS for the styling and Zod for form validation. Extend Tailwind's theme and use the colors provided in the **Additionals** section below. "React Hook Forms" must be used to submit the details collected from the form.

The developer must make it so that the submitted details from the form will generate a comment preview, replacing whatever was already there. The heart icon in the preview must change to the opposite state (for example from liked to unliked) depending on whether the "Liked" option was true or not.

> Developer must not use any kind of convertor and restrict the usage of AI Tools if any to a minimum.

### Additionals

#### Colors:

1. Background: #E9EDF5
2. Card & Input background: #FFFFFF
3. "Comment Preview" text color: #000000
4. Primary text color (Label, username): #424D6A
5. Secondary text color (placeholders, comment message): #7A7A7A
6. Likes count text color: #49703C
7. Button color: #9BE5AB
8. Stroke/Border for Select input: #000000

#### Fonts:

You can use the `Poppins` font available [here](https://fonts.google.com/specimen/Poppins). The font variants being used are: **Regular** & **Semi-bold**.

### Assets:

The assets, namely the images and icons used in the prototype can be found in the repository under the `assets` folder. Icons not provided or found in the repository can be copied from the [FontAwesome's Icon website](https://fontawesome.com/icons).

### Resources:

1. [Figma Prototype](https://www.figma.com/file/8VW6NglKjFw2sQDn0hQTck/Siminventory-Frontend-Demo-Task?type=design&node-id=0%3A1&mode=design&t=MHE30g2sVuCcjYOG-1)
2. [NextJS App router docs](https://nextjs.org/docs/app)
3. [TailwindCSS docs](https://tailwindcss.com/docs)
4. [React Hook Forms docs](https://react-hook-form.com/get-started)
5. [Zod docs](https://zod.dev/)
