# philippseidel.github.io

Source code of my personal website, hosted on GitHub Pages at
**[philippseidel.github.io](https://philippseidel.github.io)**.

## Pages

| Route       | Content                                                         |
| ----------- | --------------------------------------------------------------- |
| `/`         | Home – short introduction                                       |
| `/resume`   | Resume                                                          |
| `/projects` | Projects, loaded from WordPress (category `projects`)           |
| `/blog`     | Blog posts, loaded from WordPress (category `blog`), with search, tag filter and sorting |
| `/gallery`  | Photo gallery (travel, black & white, Kodak Gold, Kodak Super Max) |
| `/imprint`  | Imprint                                                         |

Blog and project posts are fetched at runtime from the WordPress REST API at
`https://wordpress.philipp-seidel.de/wp-json/wp/v2`. The site also has a light/dark theme toggle that saves your choice.

## Tech stack

- [React 19](https://react.dev) + TypeScript, bootstrapped with Create React App (`react-scripts`)
- [React Router](https://reactrouter.com) for client-side routing
- [Bootstrap 5](https://getbootstrap.com) and Bootstrap Icons
- [Devicon](https://devicon.dev) for technology icons
- [axios](https://axios-http.com) for WordPress API requests
- Montserrat font (SIL Open Font License)

## Project structure

```
public/
  index.html
  home/              # images for the home page
  gallery_images/    # photos shown in the gallery, one folder per album
src/
  App.tsx            # route definitions
  components/        # Layout, Header, Footer, ThemeToggle, ImageGallery, ReadMoreElement
  pages/             # Home, Resume, Projects, Blog, Gallery, Imprint
  fonts/             # Montserrat and Devicon font files
```

## Development

Requires Node.js and npm.

```bash
npm install     # install dependencies
npm start       # dev server at http://localhost:3000
npm test        # run tests
npm run build   # production build in ./build
```

### Adding gallery photos

Put the image in the matching folder under `public/gallery_images/`, then add an
entry (`src` and `alt`) to the matching list in `src/pages/Gallery.tsx`.

## Deployment

```bash
npm run deploy
```

This builds the site and pushes `build/` to the `gh-pages` branch with
[`gh-pages`](https://github.com/tschaub/gh-pages). GitHub Pages serves the site from that branch.
