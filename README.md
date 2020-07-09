# wopian.me

[![web badge]][web]
[![uptime badge]][web]
[![travis badge]][travis]
[![david badge]][david]
[![david dev badge]][david dev]

Homepage for my personal projects and open source contributions.

![](https://raw.githubusercontent.com/wopian/wopian.me/master/.github/homepage.png)

## Contributing

### Requirements

- Node - Any supported LTS version
- Yarn - 1.x

### Installing

In your terminal or IDE run:

```
yarn
```

### Making Changes

The HTML is written in [Pug] under `./client/`.

The CSS is written in [SCSS] under `./client/styles`.

### Commands

#### Build Website

Compiles the [Pug] and [SCSS] source files into `./dist`.

```
yarn build
```

#### Development Server

Hot reloads changes made to `./dist`. Active port is outputted to terminal.

```
yarn dev
```

[web]:https://wopian.me
[web badge]:https://flat.badgen.net/uptime-robot/status/m779134093-6b18c63b2a1d76c408678c30
[uptime badge]:https://flat.badgen.net/uptime-robot/month/m779134093-6b18c63b2a1d76c408678c30

[david]:https://david-dm.org/wopian/wopian.me
[david badge]:https://flat.badgen.net/david/dep/wopian/wopian.me
[david dev]:https://david-dm.org/wopian/wopian.me?type=dev
[david dev badge]:https://flat.badgen.net/david/dev/wopian/wopian.me

[travis]:https://travis-ci.org/wopian/hibari
[travis badge]:https://flat.badgen.net/travis/wopian/wopian.me

[Pug]:https://pugjs.org/api/getting-started.html
[SCSS]:https://sass-lang.com/documentation/syntax
