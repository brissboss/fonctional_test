# Fonctional testing

## Installation

### Chromium

To install Chromium on Linux, you can use Snap. Follow these steps:

1. Open a terminal.

2. Run the following command to install Snap if you don't have it already:
    ```shell
    sudo apt update
    sudo apt install snapd
    ```

3. Run the following command to install Chromium:
    ```shell
    sudo snap install chromium
    ```

### Project

To install the project, follow these steps:

1. Clone the repository:
    ```shell
    git clone git@github.com:brissboss/fonctional_test.git
    ```

2. Install the dependencies:
    ```shell
    npm install
    ```

## Usage

To run the tests, follow these steps:

1. Create .env file and set the following variables:
    ```shell
    CHROMIUM_PATH=/path/to/chromium
    WEBSITE_URL=https://www.the-website-to-test.com
    ```

2. Write your tests in the `test` folder. (You can display your results with the displayResult function in the `utils.js` file.)

3. Call your tests in the `index.js` file.

4. Run the following command:
    ```shell
    npm test
    ```

## Documentation

This project uses puppeteer to run the tests. You can find the documentation [here](https://pptr.dev/).

![Puppeteer logo](https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png)
