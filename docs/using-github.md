In an open source project it's important to keep as much information and decision making clear and transparent, and assume that people are actively watching it.
It's a good habit to always assume that no comment you post can truly be deleted. It'll leave a digital mark anyway because it'll be emailed to someone as a notification or so on.

I intended to making this project open source once we have some good direction for it, so let's keep everything cool and clean :)

With that in mind, here are some ways I use GitHub to get around a project and contribute to it.

# Contributing

So that we can all make contributions to the project without overwriting eachothers work, we use git (open source version control software) and GitHub (just a company that built a good service around git).

When we want to work on some new feature, or some other update we need to create a branch of the 'master' version of the software.

We manage branches in the command line... so, assuming you're already in the directory for this project, run the following:

`git branch some-feature-branch-name-could-be-anything`

and you'll end up with a branch called `some-feature-branch-name-could-be-anything`

Then you just need to do `git checkout some-feature-branch-name-could-be-anything` and you'll "be on it" now. From here you can do any work you like independently of the other branches... It makes it really hard to actually destroy anything so you can hack away worry free.

When you've made your changes, you'll be ready to make a 'pull request' (or PR) to get that code merged in to the projects master branch (or some other branch).

To do so, check over your work and do `git add .`. This will add all of the new changes ready to be `commit`ted to the project. Its a better practice to check in smaller, more specific, but overall complete changes if possible, but let's worry about those best practices a little later. For now, just try to make a commit or a PR as clean, concise and meaningful as you can.

# Communication

As mentioned above, always assume commucation is logged.
This is actually great because we can always refer back to a previous comment, or discussion in the history of the project.
We can talk privately no problem, but we should aim to keep any future-useful discussion either on a PR if it's relevant, or in an issue.
