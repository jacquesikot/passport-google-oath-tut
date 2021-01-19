# Passport-Google-Oath-Tutorial
This is the repo for my blog post on How to Implement Authentication in Node JS with Passport &amp; JWT. You can find the article at https://jacquesikot.hashnode.dev/

## Installation

First of all, you need to get your GOOGLE_API_KEY & GOOGLE_API_SECRET from your google cloud console. To do this, login to your google cloud console.
On the the top navigation bar, create a new project and name it. When this is done, navigate to the project dashoard, and on the side navigation go to 
APIs & Services > Oath Consent Screen. Setup the details of your consent screen, once done, navigate to APIs & Services > Credentials, create new Oauth credentails
and get your API key and secret. create a .env file from the sample.env file provided, pass any random string as JWT_KEY and use PORT = 3000 then run:

```bash
npm install
```

## Usage
Once the dependencies are installed, run:
```bash
npm run watch
```
after that, in a new terminal, start your development server with:
```bash
npm run dev
```

To login or signup a new google user open your web browser and run http://localhost:3000/api/auth/google. You will be redirected to the callback URL, and the user object and jwt token will be returned.

## Contributing
If there is any way you can contribute to this code base, Pull requests are welcome.
