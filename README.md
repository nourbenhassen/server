# App to be used by Startup owner to receive feedback

User uses startup's user 
==> startup owner wants feedback 
==> send customer an email requesting feedback 
==> get tabulation of results 
==> make app/service better with feedback!

              --------------

Flow walkthrough:

1. User signs up via Google OAuth (Express server + MongoDB + PassportJS)
2. User creates a new 'campaign' (React + Redux)
3. User enters list of emails to send survey to (React + Redux + Redux Form)
4. App sends email to list of surveyees  (Email Provider)
5. Surveyees click on link in email to provide feedback  (Email Provider + Express + MongoDB)
6. Feedback is tabulated (MongoDB)
7. User can see report of all survey responses (Mongo + React + Redux)


              ---------------

