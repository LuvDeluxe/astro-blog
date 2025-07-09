import contentful from "contentful";

// Check ensures the code does not crash if the env vars missing

// Securely read the keys put in .env file
const space = import.meta.env.CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.CONTENTFUL_DELIVERY_TOKEN;

// Safety check
if (!space || !accessToken) {
    throw new Error(
      "Contentful space ID and access token must be provided in .env file"
    );
}

// Creates the client object to talk to Contentful.
export const contentfulClient = contentful.createClient({
  space: space,
  accessToken: accessToken
});

console.log("Contentful client initialized successfully.");
