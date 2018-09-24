# docdoc - Jekyll theme


## Theme details

docdoc is a free project documentation theme through Github Pages.
Particular attention has been paid to accessibility in this theme.

[Github Pages demo](https://stevenmouret.github.io/jekyll-theme-docdoc/)

## Features

This project is under development so feature is not finalized.

- [x] Compatible with GitHub Pages
- [ ] Fully responsive
- [x] WCAG 2.0
- [x] HTML5 - CSS3
- [x] Home page with access to the main sections
- [x] Documentation layout
- [ ] News
- [ ] Glossary
- [ ] Commenting support
- [ ] Search module

## Installation

### GitHub Pages Installation

To start using Jekyll right away with GitHub Pages, [fork the docdoc repository on GitHub](https://github.com/stevenMouret/jekyll-theme-docdoc).
In the settings of your new repo, in the GitHub Pages section add master branch in the source field.
In `_config.yml` add the configuration:

```
remote_theme: USERNAME/jekyll-theme-docdoc
url: https://USERNAME.github.io
baseurl: 
title: Awesome title
author: author
email: email@email.com
```

```
remote_theme: USERNAME/jekyll-theme-docdoc
```
Your website should be ready at 'http://USERNAME.github.io'

### Local Installation

For a full local installation of Lagrange, [download your own copy of docdoc](https://github.com/stevenMouret/jekyll-theme-docdoc/archive/master.zip) and unzip it into it's own directory.
From there, open up your favorite command line tool, enter `bundle install`, and then enter `bundle exec jekyll serve`. Your site should be up and running locally at [http://localhost:4000](http://localhost:4000).
 
## File structure

### Layout
For the moment only two layout, one for the home and other for the documentation pages.
Your data are in the folder `_doc`.

### Index
The home page display the main sections.
To customize the main sections navigation, you can change the YAML front matter block at the top of `index.md`.
This menu give access to the main sections, you need to create one page by section at the root of _doc folder.

### Section
Each section must be configured to access the children's sections.
You can change the YAML front matter block at the top of each file. A new folder must be created for each sub section.

## Run the theme
```
bundle exec jekyll serve
``` 

## Author and licence
This Jekyll theme is created by [Steven Mouret](https://twitter.com/stevenmouret) and is 100% free under the [Creative Commons Attribution 3.0 License (CC BY 3.0)](http://creativecommons.org/licenses/by/3.0/)
 



