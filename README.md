# [Spacestagram](https://spacestagram-dakshub.vercel.app/)

A web application to like/unlike images from NASA's Image API.
[Check it out!](https://spacestagram-dakshub.vercel.app/)

## Built with

- [React](https://reactjs.org/)
  - Libraries - [Shopify Polaris](https://www.npmjs.com/package/@shopify/polaris), [Polaris Icons](https://www.npmjs.com/package/@shopify/polaris-icons), [Axios](https://www.npmjs.com/package/axios), [Framer Motion](https://www.npmjs.com/package/framer-motion), [React Router](https://www.npmjs.com/package/react-router)
- [Vercel](https://vercel.com/)

## Features

### Main page

Images returned from the API are shown here. Each image result lists a title, date of capture (earth_date) and a button to “like” that image.
Each image can be “liked”, and a user is able to undo their “like”.

<img width="600" alt="Main" src="https://user-images.githubusercontent.com/45903885/150244857-5c133ea2-a358-4f26-a0a6-ea992e8bd835.png">

### Accessibility

100% accessibility score on Lighthouse.

<img width="433" alt="accessibility" src="https://user-images.githubusercontent.com/45903885/150245445-e282b94b-b47f-47de-989e-bf62f57c3b2f.png">

### Home page

`Begin` button redirects user to `/images` where images from NASA's image API are shown.

<img width="600" alt="Home" src="https://user-images.githubusercontent.com/45903885/150245489-79ed01bd-6922-43d2-914e-c2975788341c.png">

### Loading state

Skeleton page shown until images are fetched.

<img width="600" alt="loading state" src="https://user-images.githubusercontent.com/45903885/150245577-bac90485-72c3-4c06-b8bd-9b91476c33dc.png">

### Load more images

Ability to load more images from the API.

<img width="600" alt="load more funtion" src="https://user-images.githubusercontent.com/45903885/150245606-8115afa6-a90c-420f-b098-87657fa70076.png">

### Shareable links

Ability to copy each image's URL.

<img width="600" alt="Shareable link" src="https://user-images.githubusercontent.com/45903885/150245673-d55fb137-360d-41d1-93f1-60c17c0302d6.png">

### Error handling

<img width="600" alt="end of results" src="https://user-images.githubusercontent.com/45903885/150245765-e76e00b2-32be-4a02-be38-0130da6d44ab.png">

### Save likes

Using localStorage to save likes if the user leaves or reloads the page.

In addition, the like action is animated and the application has responsive web design!

## Run project locally

1. Get a free API key from https://api.nasa.gov
2. Clone this repository using `git clone https://github.com/dakshub/spacestagram.git`
3. Create an `.env` file in the base directory and a variable named `REACT_APP_API_URL=https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2022-1-1&api_key=key` where `key` is your `api_key` from step 1
4. Run `npm start` and the application should be available on `localhost:3000`

## Future enhancements

I would start off by adding tests to make the code more robust. Filtering API results and storing them to reduce API calls would be really helpful. LocalStorage is not scalable, so I'll create a database and link it with backend service to store user likes.
