# docdoc - Jekyll theme

## Demo

- [Github Pages demo](https://stevenmouret.github.io/jekyll-theme-docdoc/)

## Theme details

docdoc it's a free project documentation theme.  
Particular attention has been paid to accessibility in this theme.

## Features

- [ ] Fully responsive
- [x] WCAG 2.0
- [x] HTML5 - CSS3
- [x] Home page with access to the main sections
- [x] Documentation layout
- [ ] News
- [ ] Glossary

## Use this theme on Github pages
An example of files are available on the branch gh-pages of this repo.

Configure your project in the file _config.yml

```
remote_theme: stevenMouret/jekyll-theme-docdoc
url: https://stevenmouret.github.io
baseurl: /rgaa-training
title: RGAA Training
author: Steven Mouret
email: steven.mouret+github@gmail.fr
```

## File structure

### Layout
For the moment only two layout, one for the home and other for the documentation pages.
Your data are in the folder _doc.

### Index
The home page display the main sections.
To customize the main sections navigation, you can change the YAML front matter block at the top of index.md.
This menu give access to the main sections, you need to create one page by section at the root of _doc folder.

### Section
Each section must be configured to access the children's sections.
You can change the YAML front matter block at the top of each file. A new folder must be created for each sub section. 

## Author and licence
This Jekyll theme is created by [Steven Mouret](https://twitter.com/stevenmouret) and is 100% free under the [Creative Commons Attribution 3.0 License (CC BY 3.0)](http://creativecommons.org/licenses/by/3.0/)
 



