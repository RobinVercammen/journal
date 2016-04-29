# Journal

We are going to use Meteor to build us a simple but elegant real-time journal.
Our main functionality consists of a homepage where we can enter our feelings/experiences for the day and decide if today is a good day.
On our second state we can examine our previous entries and determine if we're doing a great job at living.

## The requirements

### As a user i would like to choose if today was a good day
By clicking a good/bad button the user chooses how he feels that day. Each click gets registered and updates the database in a way that the next time the users opens the page his choice is remembered

### As a user i would like to enter how i felt today
By entering a comment on a day the user expresses himself. Each keystroke gets send to the database. So the next time the user opens the page he can resume typing or start editing his experiences.

### As a user i would like to see my previous days so i can assess if I'm happy
By clicking a toggle button the user is presented with a table which lists all information of the previous days with the most recent entry at the top.

## Installing Meteor

For those of you who haven't installed meteor yet, go to [https://www.meteor.com/install](https://www.meteor.com/install), click download and install the binaries.

## Setting up your first project

With Meteor in place we can start developping. Create a directory on your filesystem. (Mine is at `C:\Projects`). 
Navigate to that location and open a command prompt (In windows explorer do shift + rightclick, open command window here).
Type `Meteor create my-app` where `my-app` is the name of your project. Meteor will start scaffolding your application.

## Running the scaffolded project

As your app is done scaffolding we can start the scaffolded app by navigating to that folder (mine is at `C:\Projects\my-app`) and opening a command prompt there (In windows explorer do shift + rightclick, open command window here).
Type the command `Meteor` and meteor downloads all packages to run your app. The first time this might take a while since it'll be downloading a lot of packages.
When it is done the command prompt will let you know and output the location at which your app is running [http://localhost:3000](http://localhost:3000). Go there and you'll be welcomed with a simple click me app.

## The pieces

For demo purposes we'll keep our hand of of packages and see whats right out of the box avaible to us. Keep in mind that some packages are already preinstalled like autopublish. These are packages you won't like to see in a production application. But again, perfectly fine for demo purposes.

### Folder structure

1. client: 
Here we'll write our Html, CSS and client-side javascript. We'll build views, accompany them with some elegant styles and write our business logic. 
2. server: 
In this demo we wont be writing any custom server code. The default mongo binding complements all our needs. But if you like to write server specific code you can write it here.
3. both: 
In this folder we write our common code which can be used by client as well as server. Mostly your collections will live here accompanied with logic which is the same for client/server.

## Running this repository

Clone this repository and run the `meteor` command in the designated folder and meteor will spin up this project.
