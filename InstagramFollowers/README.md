instagram_followers.js contains a Bookmarklet for creating a CSV file that contains the usernames of
each person that follows a selected person on instagram. This works on Chrome & Firefox.
This is not the fastest process and doesn't scale well, so for users that have many many instagram
followers it will take some time. For 1,500~ followers it will take around 10 seconds, scaling linearly from there.

To Run:

Create a bookmark, give it any name, in the URL section paste the contents of instagram_followers.js.

Navigate to any instagram page that is public or that you follow and click the bookmarklet.

Wait a few seconds until a file downloads named <username>_followers.csv. 