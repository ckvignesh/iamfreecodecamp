# Welcome to #iamfreeCodeCamp
***
## What is #iamfreeCodeCamp?

**#iamfreeCodeCamp** is a movement to raise awareness for the Open Source Community.
It's built around the freeCodeCamp community and presented as a challenge with the following goals:

1.  helping the non-profit to increase its sustainability by raising awareness on Alumni and Students to donate.

2.  provide mentorship to the students

3.  make Alumni get to know one another.

**🔥 #iamfreeCodeCamp** project is non-commercial, open source and with educational purposes.

***
## How to contribute?

If you have any suggestion please raise an issue in our repo.

If you want to participate as a developer:

1. create a fork from iamfreecodecamp repo.
   
   ![](./public/assets/instructions/fork.png)

2. clone the repo that was forked.
   
   ![](./public/assets/instructions/clone.png)

   Enter this in terminal: 
   `git clone https://github.com/<yourUserName>/iamfreecodecamp.git`

3. set the upstream for your repo by entering this into the terminal
   
   `git remote add upstream https://github.com/iamfreeCodeCamp/iamfreecodecamp.git`

4. create a feature branch after cloning the repo. To do this, open the repo from the code editor (Preferably VS Code). Create a `my-feature-branch` by entering this into the terminal. This is the branch where contributions can be made.
   
    `git checkout -b my-feature-branch`

5. run the Development Environment on the local machine by entering these commands into the terminal
      ```
      yarn install
      yarn dev
      ```
    the development environment will run on your local machine's [Port 3000](http://localhost:3000) by default.

6. contribute code and test it in the development environment.
    
7. after working on the feature branch it must be staged, committed and pushed to the remote i.e. your Repo that was cloned from `iamfreecodecamp`. Enter these commands into the terminal:
      ```
      git add .
      git commit -m "feat: my commit message"
      git push origin my-feature-branch
      ```

8. create a Pull Request to merge your contributions to the iamfreeCodeCamp Repo. Go to the iamfreeCodeCamp Repo and click `pull requests` 
   
   ![](./public/assets/instructions/PR1.png)

   Click on `compare across forks`
   ![](./public/assets/instructions/compareForks.png)

9.  submit the pull request to our `develop` branch. Do not create a Pull Request to our `master` branch.

      To achieve this, set the `Comparing Changes` as follows:
   ![](./public/assets/instructions/compareForksPRset.png)

      ```
      base repository: iamfreeCodeCamp Repo
      base: develop
      head repository: your Forked Repo
      base: my-feature-branch
      ```
      You can see `Able to merge` in green. This confirms that you can raise a PR.

10. scroll below and click on `Create Pull Request` after giving a detailed and well documented description about what your're doing (it maybe a feature / enhancement / bug fix). Keep the `Allow edits by maintainers` checked.
 
      ![](./public/assets/instructions/submitPR.png)

11.  work on suggestions that may be given by the Repo Maintainer(s) as comments under the Pull Requests. You need not create a new Pull Request once it's done. Pushing the code to remote would do the job. You must request for a review, by clicking the button shown. 
    
      ![](./public/assets/instructions/requestReview.png)
    
12. congrats! the Maintainer(s) will review your code, approve the changes in the Pull Request and merge it.
    
13. feel free to contribute more to our Open Source repo by raising an issue. Before you start working on the next PR, run these commands on your terminal to update the local repo with updates from iamfreeCodeCamp (upstream).
   ```
   git fetch upstream
   git pull upstream/master
   ```
***
## Style guide

How to write on our site

A
alumni, alumnus - lower case.

N
Numbers one to nine spelled out. Use numerals for 10 and above.

***
## Website

The website is a Next.js app. It automatically deploys to Vercel when the master branch is updated.

***
## Mentors

1. Eduardo Vedes (eduardo.vedes@gmail.com)
2. Can Ural (can.ural@outlook.com)

***

<!-- ## Students

1.
2. 
*** -->
## Contributors


***
## Sponsors

Powered By

<a href="https://vercel.com?utm_source=iamfreecodecamp&utm_campaign=oss">
<img src="./public/assets/vercel/logo.svg" alt="logo">
</a>

***
## FAQ

### 1. I am unable to run the development environment on PORT 3000 as there's something else running 

Refer to Step 4 of [How to contribute?](#how-to-contribute)

Run `PORT=3005 yarn dev` instead of `yarn dev`. You can use any other port number you wish to, instead of 3005. 