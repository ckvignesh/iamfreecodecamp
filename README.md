# Welcome to #iamfreeCodeCamp

## What is #iamfreeCodeCamp?

**#iamfreeCodeCamp** is a movement to raise awareness for the Open Source Community.
It's built around the freeCodeCamp community and presented as a challenge with the following goals:

1.  helping the non-profit to increase its sustainability by raising awareness on Alumni and Students to donate.

2.  provide mentorship to the students

3.  make Alumni get to know one another.

**🔥 #iamfreeCodeCamp** project is non-commercial, open source and with educational purposes.

## How to contribute?

If you have any suggestion please raise an issue in our repo.

If you want to participate as a developer:

1. create a fork from iamfreecodecamp repo

2. create a feature branch

3. create a PR to our `develop` branch with detailed and well documented descriptions about what your're doing (feature / enhancement / bug fix).

## Style guide

How to write on our site

A
alumni, alumnus - lower case.

N
Numbers one to nine spelled out. Use numerals for 10 and above.

## Website

The website is a Next.js app. It automatically deploys to Vercel when the master branch is updated.

## How you can run it on your local machine

- Clone the Repo.
- Run:
  ```
  npm install
  npm run dev
  ```
  It will run on the [port 3000](http://localhost:3005) of your local machine, by default.

If you're umable to run it on Port 3000 due to any reason, you can run it on any other port.

For that, follow these steps:

- Go to the [package.json file](package.json).
- You'll see this line of code `"dev": "next"`.
- Replace `"next"` with `"next dev -p 3002"`. `3002` is the port you may want to use. You can use any number here but, remember to use it for the next steps in place of `3002`.
- It should look like this, now: `"dev": next dev -p 3002"`.
- Save the [package.json file](package.json) and go to your terminal.
- Type `npm run dev -- -p 3002` in your terminal. Now, the server will run on port 3002.

<!-- ## Team

1. Eduardo Vedes (eduardo.vedes@gmail.com)
2. Can Ural (can.ural@outlook.com) -->

## Mentors

1. Eduardo Vedes (eduardo.vedes@gmail.com)
2. Can Ural (can.ural@outlook.com)

## Students

1.

## Contributors

## Sponsors

Powered By

<a href="https://vercel.com?utm_source=iamfreecodecamp&utm_campaign=oss">
<img src="./public/assets/vercel/logo.svg" alt="logo">
</a>
