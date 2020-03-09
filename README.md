# BlurredBoard

[![Maintainability](https://api.codeclimate.com/v1/badges/becf8ff87f6653e3eb80/maintainability)](https://codeclimate.com/github/blurtech/blurred-board/maintainability) [![GitHub issues](https://img.shields.io/github/issues/blurtech/blurred-board.svg)](https://github.com/blurtech/blurred-board/issues) [![HitCount](http://hits.dwyl.io/blurtech/blurred-board.svg)](http://hits.dwyl.io/blurtech/blurred-board) [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/blurtech/blurred-board)

Dashboard for Information Security Competitions

## Getting started

`yarn install` - install dependencies  
`yarn start` - start project

## Offline development

[`.env`](.env) file contains environment variables `PROXY` and `REACT_APP_ONLINE`. For development recommended use `REACT_APP_ONLINE=0` and `PROXY=1`. If you started python mock server use `PROXY=0`.

Need Python3 and pip. It is assumed that you have a fresh version of python installed and it is installed by default, if not, then use the command `python3 server/server.py` instead `python server/server.py`.

`pip install server/requirments.txt` - install dependencies  
`yarn run server` - server on Python with mock backend data for offline development, offline mode enables in [`.env`](.env) file `ONLINE` variable (number casted to boolean 0 or 1)

## Useful features

- All paths in the project are relative ([`src/classes/utils/Logger`](src/classes/utils/Logger.ts), [`src/components/App`](src/components/App.tsx) and etc).
- Prettier. Formats your code according to the rules in [`.prettierc`](.prettierrc). In WebStorm keyboard shortcut `Alt+Shift+Ctrl+P`.
- Husky. Hook before committing. If you forgot to format your code, then Husky will launch the Prettier before committing.

## Authors

- :feelsgood: **Alexandr Sidorenko** - _Team Lead front-end developer_ - [batyshkaLenin](https://github.com/batyshkaLenin)  
  [![Twitter Follow](https://img.shields.io/twitter/follow/batyshkaLenin.svg?style=social&label=Follow)](https://twitter.com/batyshkaLenin)
- :shipit: **Vitaly Shatalov** - _Front-end developer_ - [tnnNull](https://github.com/tnnNull)  
  [![Twitter Follow](https://img.shields.io/twitter/follow/thevetka.svg?style=social&label=Follow)](https://twitter.com/thevetka)
- :penguin: **Danil Tankov** - _Front-end developer_ - [evist0](https://github.com/evist0)  
  [![Twitter Follow](https://img.shields.io/twitter/follow/danushaperdusha.svg?style=social&label=Follow)](https://twitter.com/danushaperdusha)

See also the list of [contributors](https://github.com/blurtech/blurred-board/contributors) who participated in this project.

## Deploy

Autodeploy on Heroku: [board.blur.tech](http://board.blur.tech)
