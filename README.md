# Taker of Notes by Dominique Gibson

As instructed, this is a simple note app in which a user can index, create, edit, and delete notes. Apologies for the delay in getting this over. Finding time during the week can be challenging and the weekend was tighter than usual due to Mother's Day. I had fun working on this project because I got to learn something new. Thank you for the opportunity! The app meets the following criteria:

- Must be written with JavaScript or Typescript (preferred)

- Note Form must have the following validations

- Must not be shorter then 20 characters

- Must not be longer then 300 characters

- Main page must include all the notes and a way to create a new note

- Main page must include a search bar that will find based on a notes content. (Client or Server query is fine)

- Must include README with steps on how to run the application(s) locally and any details around the implementation of the final product, struggles you ran into, and things you would change and return to if given more time.

- Must include working web app hosted somewhere publicly accessible

## About This Project

I decided to go with Next.js because I've never used it before. It struck me as an opportunity to simultaneously learn something new and demonstrate my adaptability. I selected a Postgres database in order to align with the current stack at Solace. The app and database are deployed on the Vercel platform, which was expedient and free. This app employs a similar color scheme to what I observed on Solace's home page.

## Hypotheticals & General Thoughts

### Technology

Had I decided to stick with what I was already familiar with, I probably would've had a React project client-side and Node.js Express API querying a Postgres database server-side, hosted using AWS. It has been pretty cool to see the client/server line blurred a bit while working with Next.js (server components, server actions). The form validation is done using [Zod](https://www.npmjs.com/package/zod) and I applied the 20-300 constraint on the content section of the note. In addition to the content section, I added on optional title field (if left blank, it will default to 'Untitled').

### Improvements

With more time, I would've improved various elements of the look, feel, and functionality. Including but not limited to:

- Pagination.
- Additional sorting. Currently I sort by most recently updated, however alphabetical sorting or even least recently updated might also be a nice options.
- Perhaps a popup modal for creating a new note on desktop, rather than a different page.
- "Are you sure?" prompt when deleting.
- Hamburger button on mobile.
- Suspense/Loading elements (currently loads too fast to notice, but good practice to have).
- Icons, images, animations, interesting fonts.
- Decrease redundancy of my various Button components.
- Dark mode (I added this to an internal tool at a previous employer and everyone loved me lol).
- Support for multiple users / authentication.

### Struggles

Only while putting this readme together at the end of working on this project did I notice that the "Visit" url Vercel provides me to load my app in the browser requires a login. I never noticed during development because I was always logged in. It took me longer than I'd like to admit to finally find the truly public link. I was beginning to wonder if it was a limitation of the free tier service and was very close to spinning up an EC2 and redeploying everything on AWS haha. The development itself was a fun learning process and I definitely see myself using Next.js again in the future.

## View the Deployed App Online

- Find it here: https://solace-notes-eta.vercel.app/
- Github repo: https://github.com/DGibson8822/solace-notes.git

## Local Development

### Database

Create a free Postgres database on the [Vercel](https://vercel.com/storage/postgres) platform, then copy the credentials to your .env file at the root of the project (if you don't already have one, create it). The credentials should take the formseen below. Alternately I can push my .env up if you all want it, since the data therein isn't exactly sensitive (I've only used it for this project.)

```bash
POSTGRES_URL="***************"
POSTGRES_PRISMA_URL="***************"
POSTGRES_URL_NO_SSL="***************"
POSTGRES_URL_NON_POOLING="***************"
POSTGRES_USER="***************"
POSTGRES_HOST="***************"
POSTGRES_PASSWORD="***************"
POSTGRES_DATABASE="***************"
```

I wrote script to create the notes table seed the database with notes. Note required, but usefuly for quickly getting multiple notes to work with. The file is `/scripts/seed.js` and can be executed with the command:

```bash
npm run seed
```

### Launch App

1. Install dependencies

```bash
npm install
```

2. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the home page.
