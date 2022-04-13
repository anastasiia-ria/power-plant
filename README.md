# Currency Exchanger

#### Converts currency between all available currency types

#### By Anastasiia Riabets

## Technologies Used

- CSS
- HTML
- JavaScript
- jQuery
- Node.js
- Eslint
- Babel
- Popper
- currency-symbol-map
- country-flag-icons

## Description

Currency Exchanger converts currency between all available currency types. A user can type in an amount and then choose which currency it should be converted from and to (such as francs, marks, rupees, and so on).

## Setup/Installation Requirements

- Click on or copy and paste this [GitHub Page](https://anastasiia-ria.github.io/currency-exchanger/) into your preferred browser:<br>https://anastasiia-ria.github.io/currency-exchanger/

  **_OR_**

- Clone this repository to your Desktop:
  1. Your computer will need to have GIT installed. If you do not currently have GIT installed, follow [these](https://docs.github.com/en/get-started/quickstart/set-up-git) directions for installing and setting up GIT.
  2. Once GIT is installed, clone this repository by typing following commands in your command line:
     ```
     ~ $ cd Desktop
     ~/Desktop $ git clone https://github.com/anastasiia-ria/currency-exchanger.git
     ~/Desktop $ cd currency-exchanger
     ```
  3. Get API key:
     - Visit the [ExchangeRate-API](https://www.exchangerate-api.com/) site. Input your email address and click the "Get Free Key" button.
     - You will be prompted to create an account with your email, first name and a password. Agree to the terms of use and click "Get Started!"
     - You will get an email with activation link. Click the link in the email.
     - Get to the [Dashboard](https://app.exchangerate-api.com/dashboard), and copy your API key.
  4. Create .env file with your API key:
     ```
      ~/Desktop/currency-exchanger $ touch .env
      ~/Desktop/currency-exchanger $ echo "API_KEY={YOUR API KEY}" > .env
     ```
     Replace {YOUR API KEY} with your API key, remove curly brackets.
  5. Make sure you have ".env" in your .gitignore file. If not, type following command in your command line:
     ```
      ~/Desktop/currency-exchanger $ echo ".env" >> .gitignore
     ```
  6. (Optional) If you are planing to push your repository to the GitHub, push .gitignore file to your GitHub repository first:
     ```
      ~/Desktop/currency-exchanger $ git init
      ~/Desktop/currency-exchanger $ git remote add origin https://github.com/{your github username}/{your repository name}.git
      ~/Desktop/currency-exchanger $ git add .gitignore
      ~/Desktop/currency-exchanger $ git commit -m "add .gitignore"
      ~/Desktop/currency-exchanger $ git push origin main
     ```
     Replace {your github username} with your github username, {your repository name} with your repository name, remove curly brackets.
  7. Install necessary dependencies:
     ```
     ~/Desktop/currency-exchanger $ npm install
     ```
  8. Run:
     ```
     ~/Desktop/currency-exchanger $ npm run start
     ```

## Known Bugs

- Layout is not adjusted for the small screens

## License

[ISC](https://opensource.org/licenses/ISC)

Copyright (c) 02/11/2022 Anastasiia Riabets
