const app = require('express')();
const express = require('express');
const http = require('http').Server(app);
const keys = require('./keys');
const request = require('request');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
  //if the user is not signed in (by checking cookie), take them to /login 
  if (!req.cookies.user) {
    res.redirect('/login')
  }
  else {
    console.log('redirected')
    //can clear cookie using setTimeout maybe after certain minutes?
    res.sendFile(path.join(__dirname, '/build/index.html'));
  }
});

app.get('/login', (req, res) => {
  // if (req.cookies.user) {
  //   res.redirect('/')
  // }
  // else {
    res.sendFile('signIn.html', {root: path.join(__dirname, './app')});
  // }
})

app.get('/auth', (req, res) => {
  console.log('inside the /auth')
  // res.write('inside the auth')
  request.post(`https://github.com/login/oauth/access_token?client_id=${keys.client_id}&client_secret=${keys.client_secret}&code=${req.query.code}&accept=json`, (err, response, body) => {
    const token = body.split('&')[0].split('=')[1];
    console.log("token: ", token)
    const options = {
      url: `https://api.github.com/user?access_token=${token}`, 
      headers: {
        'User-Agent': 'ringoyip0901'
      }
    }
    request.get(options, (err, response, body ) => {
      console.log('inside of get request')
      // res.send((JSON.parse(body).login))
      let username = (JSON.parse(body).login);
      let avatar = (JSON.parse(body).avatar_url)
      let name = (JSON.parse(body).name);
      console.log((body))
      res.cookie('user', username);
      res.cookie('avatar', avatar)
      res.redirect(302, '/')
    })
  })
})

app.listen(8080, () => {
  console.log('server is listening on 8080')
})