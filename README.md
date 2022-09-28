# Telnyx automation testing with webdriver.io & Allure HTML reporter

Testing website URL: https://telnyx.com

# Run on your local machine
1. Clone this repository by using command in "Git":
```
git clone https://github.com/ddpolianskyi/telnyx-wdio-allure.git
```
2. Install all requirement packages by using command:
```
npm install
```
3. Run tests on Google Chrome, Mozilla Firefox, Microsoft Edge or Docker:
```
# Run on Google Chrome
npm run test

# Run on Mozilla Firefox
npm run test:firefox

# Run on Microsoft Edge
npm run test:edge

# Run on Docker
docker-compose -f ./dockercompose.yml up
npm run test:docker
```
4. Generate Allure HTML report:
```
npm run report:generate
```
5. Open report:
```
npm run report:open
```

# Versions
- Node JS - 16.17.0
- NPM - 8.19.1
- @wdio/cli - 7.24.0
- @wdio/allure-reporter - 7.24.1