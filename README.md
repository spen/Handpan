# React Handpan Project

React is a powerful rendering engine that lets us create apps for the web effectively.
With it we can build a handpan and a step sequencer so players can create patterns on a sequencer and play it back on the handpan on the screen.
One of the problems with the handpan world is that it's difficult to choose which scale to buy. Uncommon scales are hard to come by so you might have to travel to go play one.

Folk could benefit from being able to "try out" different scales either by tapping on their screen or by using the step sequencer to build melodies.

A stretch goal would be allow them to record their handpan player and detect the notes being played, map those to midi, then play the same patterns (of hand movements) to a different handpan... that would be cool.

# The project so far...

Here's our starting point

![Screen shot](https://raw.githubusercontent.com/spen/Handpan/master/2020-07-02.png?token=ABBCOWVPSUQHPF5BLYPE2W27A4KL6)

A simple handpan component made with react, that doesn't really do much but visualize scale data as a handpan. Humble beginnings.

# Getting Up & Running

With any project you work with through git, you'll need to first clone it. To do so, go to your command line terminal (iterm or whatever) and find the following url and copy it:

<img width="608" alt="Screenshot 2020-07-02 at 14 06 57" src="https://user-images.githubusercontent.com/4335450/86362576-6890d200-bc6d-11ea-8902-e2da62924348.png">

Then, in your terminal run this:

`git clone git@github.com:spen/Handpan.git`

This makes a copy on your local machine, but keeps a reference to this project in the cloud (GitHub). In this case we call the GitHub project the 'remote' of the project. We could have many 'remotes' too.

You should have the project now, so `cd` in to it with

`cd Handpan`

From here run

`yarn`

To install any extra software we need, then do

`yarn start`

to hopefully bring the project up in your browser automagically

# Files to ignore (For now)

For now, let's ignore a few files, allow them to be magic voodoo files and we'll circle back to them once we find a need to and learn more about them when that times comes for each.

Those are `package.json`, `package-lock.json`, `tsconfig.json`, `tslint.json`, `webpack.config.js`, `yarn.lock`, `yarn-error.log`.

Most of this is just standard configuration across many projects and lets you work with and fine tune the app in different ways.
I think it's important we get our bearings comfortably with the other stuff first then look at this stuff later.

# Project Management & Discussion

We all want the same thing, the ability to work without stress from anywhere when we need dollar from the man. let's all use this project as a trial to show that we can build and execute on something (even with near-strangers), regardless of where we are, or what hours we contribute.
If we want, we could record some video conferences too, I think people would love watching it, but I'm happy not to do that either, we'll benefit either way around.

For now I've started off an [issue thread here](https://github.com/spen/Handpan/issues/1) - think of this as a place for a discussion around the app itself... By keeping an official discussion public as you do with an issue, your helping others in the community - which you should always be trying to do... it's rewarding - and helps when someone else joins the project, as they can then see all the decisions, so it's good to assume that there's value in recording as much relevant talk and decision making as possible.
