import * as React from "react";
import {
  Template,
  GetPath,
  TemplateConfig,
  GetHeadConfig,
  HeadConfig,
} from "@yext/pages";

// Config
/**
 * Required when the Knowledge Graph is used for a template.
 */
export const config: TemplateConfig = {
  stream: {
    $id: "locations",
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: ["id", "name", "address", "mainPhone", "description", "slug"],
    // Defines the scope of entities that qualify for this stream.
    filter: {
      entityTypes: ["location"],
    },
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en"],
    },
  },
};

// Path
/**
 * Defines the path that the generated file will live at for production.
 */
export const getPath: GetPath = ({ document }) => {
  return `locations/${document.id}`;
};

// Head
/**
 * This allows the user to define a function which will take in their template
 * data and produce a HeadConfig object. When the site is generated, the HeadConfig
 * will be used to generate the inner contents of the HTML document's <head> tag.
 * This can include the title, meta tags, script tags, etc.
 */
export const getHeadConfig: GetHeadConfig = ({ document }): HeadConfig => {
  const { name, description } = document;
  return {
    title: name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          description,
        },
      },
    ],
  };
};

export const getRedirects: GetRedirects = ({ document }) => {
  return ["template-redirect/" + document.name];
};

/*
 * Part 3. The Template (Default Export)
 */

// Template
/**
 * This is the main template. It can have any name as long as it's the default export.
 * The props passed in here are the direct result from `transformProps`.
 */
const LocationTemplate: Template = ({ document }) => {
  const { name, address, mainPhone } = document;

  return (
    <>
      <h1>{name}</h1>
      <div>{address.line1}</div>
      <div>{mainPhone}</div>
    </>
  );
};

export default LocationTemplate;
