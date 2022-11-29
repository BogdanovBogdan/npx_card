#!/usr/bin/env node

'use strict';

const boxen = require('boxen');
const chalk = require('chalk');
const inquirer = require('inquirer');
const clear = require('clear');
const open = require('open');
const fs = require('fs');
const request = require('request');
const path = require('path');
const ora = require('ora');
const cliSpinners = require('cli-spinners');
clear();

const prompt = inquirer.createPromptModule();

const questions = [
  {
    type: 'list',
    name: 'action',
    message: 'What you want to do?',
    choices: [
      {
        name: `Send me an ${chalk.green.bold('email')}?`,
        value: () => {
          open('mailto:bogdanovbogdanv@gmail.com');
          console.log('\nDone, see you soon at inbox.\n');
        },
      },
      {
        name: 'Just quit.',
        value: () => {
          console.log('Goodbye.\n');
        },
      },
    ],
  },
];

const data = {
  name: chalk.bold.green('             Bogdan Bogdanov'),
  // handle: chalk.white('@anmol098'),
  work: `${chalk.white('Frontend Software Engineer at')} ${chalk
    .hex('#2b82b2')
    .bold('Ruport')}`,
  // twitter: chalk.gray("https://twitter.com/") + chalk.cyan("bogdanovbogdan"),
  github: chalk.gray('https://github.com/') + chalk.green('bogdanovbogdan'),
  linkedin:
    chalk.gray('https://linkedin.com/in/') + chalk.blue('bogdanovbogdan'),
  npx: chalk.red('npx') + ' ' + chalk.white('bogdanov'),

  labelWork: chalk.white.bold('      Work:'),
  labelGitHub: chalk.white.bold('      GitHub:'),
  labelLinkedIn: chalk.white.bold('      LinkedIn:'),
};

const me = boxen(
  [
    `${data.name}`,
    ``,
    `${data.labelWork}  ${data.work}`,
    ``,
    `${data.labelTwitter}  ${data.twitter}`,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelLinkedIn}  ${data.linkedin}`,
    `${data.labelWeb}  ${data.web}`,
    ``,
    `${data.labelCard}  ${data.npx}`,
    ``,
    `${chalk.italic('I am currently looking for new opportunities,')}`,
    `${chalk.italic('my inbox is always open. Whether you have a')}`,
    `${chalk.italic('question or just want to say hi, I will try ')}`,
    `${chalk.italic('my best to get back to you!')}`,
  ].join('\n'),
  {
    margin: 1,
    float: 'center',
    padding: 1,
    borderStyle: 'single',
    borderColor: 'green',
  }
);

console.log(me);
const tip = [
  `Tip: Try ${chalk.cyanBright.bold('cmd/ctrl + click')} on the links above`,
  '',
].join('\n');
console.log(tip);

prompt(questions).then((answer) => answer.action());
