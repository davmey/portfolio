const settings = {
  "name": "portfolio",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      name: "davids-portfolio"
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://jsnation2020.frontity.org/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
