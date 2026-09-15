# harshvashishtha.github.io

Personal academic site. Jekyll, built and served by GitHub Pages from `main`.
No build step to run yourself — push and it deploys.

## Where things live

| I want to…                        | Edit                                        |
|-----------------------------------|---------------------------------------------|
| Add a paper                       | `_data/publications.yml`                    |
| Add a news item                   | `_data/news.yml`                            |
| Change the bio / home page        | `index.html`                                |
| Add or edit a project             | `Research.html`                             |
| Change name, links, nav, ORCID    | `_config.yml`                               |
| Change how anything looks         | `assets/css/main.css`                       |
| Edit the CV                       | `CV.html`                                   |

Nothing else needs touching for routine updates.

## Adding a paper

One block in `_data/publications.yml`. It gets grouped by year, bolds your name,
tags preprints, and emits the Google Scholar citation metadata automatically:

```yaml
- title: "Title of the paper"
  authors:
    - { name: "H. Vashistha", full: "Harsh Vashistha", me: true }
    - { name: "A. Coauthor" }
  venue: "Journal Name"
  year: 2027
  type: article          # article | preprint | review
  url: "https://…"
  doi: "10.xxxx/xxxxx"   # optional
  selected: true         # optional — also shows on the home page
```

When a preprint is published, change `type` to `article`, update `venue` and
`year`, and add the `doi`. Nothing else moves.

## ORCID

Set `author.orcid` in `_config.yml` to your iD (`0000-0000-0000-0000`). It then
appears in the footer, on Contact, on Publications, and in the page's
structured data, which is what ties your papers to your author record.

## Media

Videos live in `assets/media/` as `<name>.mp4` with a matching
`<name>-poster.jpg`. Add one to a page with:

```liquid
{% include video.html src="name" caption="What it shows." %}
```

They are click-to-play and `preload="none"`, so nothing downloads until a
visitor asks. To add a new one, encode it reasonably small and generate the
poster frame:

```sh
ffmpeg -i source.mov -an -c:v libx264 -crf 27 -preset slow \
       -pix_fmt yuv420p -movflags +faststart assets/media/name.mp4
ffmpeg -i assets/media/name.mp4 -frames:v 1 -q:v 4 assets/media/name-poster.jpg
```

## Local preview (optional)

```sh
bundle install
bundle exec jekyll serve
```

## URLs

The old page URLs are preserved: `/Research/`, `/Publications/`, `/Resources/`,
`/Contact/`, `/illusion/`. Don't rename those permalinks — they're what's
indexed and what people have linked to.
