const express = require('express');
const fs = require('fs');
const heroes = JSON.parse(fs.readFileSync(__dirname + '/data/heroes.json', 'utf-8'));
module.exports = {
  index:(req,res) => {
        res.send(heroes);
    }
}