# lab4-bat0322
lab4-bat0322 created by GitHub Classroom

This lab got away from me as far as time mostly because I encountered a few pesky bugs early on that prevented me from moving on to the other parts of the lab. Started out setting up just the pages with some dumb components representing posts. Then attempted to have just the titles of posts appear on the home page. Then moved on to adding them with the newPost container. Lastly I worked on the Post container to display, edit, and delete posts.

Redux was a fantastic way to deal with all of the various actions needed in this lab and thunk helped especially with the axios calls.

The nastiest bug I ran into was returning the state as I was improperly using Object.assign(). Figuring out how connect worked and the overall data flow worked took a bit, but once I figured it out for one piece it was easy to work it out for the rest of the parts.

For extra credit, I did some field verification when creating a new post, just making sure fields aren't empty, and I decided to do a sports score website rather than a blog.
