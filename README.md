
# History of the Project Creation:
This is my passion project to learn in and out of tech stacks and use-cases

# Project Name
Looking for a hotel nearby your desired location? Our Hotel booking SPA Site has got you covered! Our platform aggregates prices and reviews from different portals, making it easy for you to find the perfect hotel that meets your customized interests. Whether you're on a business trip or a vacation, our user-friendly interface helps you quickly filter and compare hotels based on your preferred amenities, location, and budget. Book your next stay with us and experience a hassle-free hotel booking process.

# Table of Contents
Tech stack used
Installation
Usage
contributors


# Tech stack used
    1.React - to build front end page
    2. Faker - that generates fake data for you
    3. json-server - to exchange data to/from a web server
    4. React i18n.
# Installation
there are two steps to it
    1. Running the server to generate and connect to Data from faker
        1.a.  Install Faker - npm install @faker-js/faker --save-dev - To get the dummy data for the dummy api creation
        1.b   Install base64-img - npm install base64-img --save - Base64 is an encoding schema used for representing binary data in a text format. This is useful when the storage or delivery medium does not support binary data such as when embedding an image into a database, CSS files or HTML. One must be careful to not mix up compression with encoding
    2. Running the react-app to fetch the data and showcase it to the ui
        2.a   Install latest node and npm 
        2.b   Create the react app  
                        npm start
                Runs the app in the development mode.
                Open http://localhost:3000 to view it in your browser.

                The page will reload when you make changes.
                You may also see any lint errors in the console.

                npm test
                Launches the test runner in the interactive watch mode.
                See the section about running tests for more information.

                npm run build
                Builds the app for production to the build folder.
                It correctly bundles React in production mode and optimizes the build for the best performance.

                The build is minified and the filenames include the hashes.
                Your app is ready to be deployed!

                See the section about deployment for more information.

                npm run eject
                Note: this is a one-way operation. Once you eject, you can't go back!

                If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

                Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

                You don't have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
        2.c     npm i react-i18next - for internationalization
                We use() the initReactI18next plugin provided by react-i18next. initReactI18next is responsible for binding our i18next instance to an internal store, which makes the instance available to our React components. 
                
# Installation steps (e.g. how to download and set up the project)
    1. git clone - https://github.com/kskeerthi/client-api
        run npm i for installing the packages
        run npm start to start the server and fetch the data from server
    2. git clone - https://github.com/kskeerthi/client-api/tree/api
        run npm i for installing the packages
        run npm run start to stat the dev server
        Note: Both servers had to run parallely 

# Usage
This can be used as boilerplate for many upcoming projects which are SPA and can be upgraded by changing the backend
once login form is open


# To Login to the application please use below credentials :

username:john
password:john

-------------------------------------------------------------------------------
# Select the hotel and click with the vieW and continue with the flow
______________________________________________________________________________

# Google maps integration with real data is pending, 

---------------------------------------------------------------------------------
# Admin view is not done
________________________________________________________________________________

1. Positive workflow

### App.js is the page which hosts three components such as login, selection of the language and hotels component
# Login page(loginForm.js) ---> Login page with (john and john validation) working along with the validations

# Landing page(Hotelcard.js) --> Showcase of the hotels is completed accoring to the API coming from trv-venue-hotel-api and select the listed hotel

# Hotel detail page(about..js) --> Relevant hotel info and listing of the rooms is completed by validating which are the hotels available and which are not available for selection

# Confirmation page(booking.js) --> Once you select the room, it asks for the details about the stay to carry with payment. With relevant information it shows the amount depending  on the people and the room you choose

# Click on the pay it shows congratulatory message and you can LOGOUT from the application.

# Integrated Google maps with the json data.

# Responsive for mobile and ipads, used media queries to make it responsive

# It Supports multiple languages

# Made simple design based on MVP, it can be scaled further with new design initiatives

# Search and filter functionality are working well
----------------------------------------------------------------------------------------------

2. Negative workflow / Rough edges that can be scaled further

# Admin View is not included in MVP

# API data is not integrated with google maps

# Form validation is not handled on Confirmation page after selecting the room

# Internationalization is enabled only for certain parts of the site 

# Few CSS for text boxes and forms is not done

-----------------------------------------------------------------------------------------------
# contributors
Keerthi koppolu - sk.keetu@gmail.com
