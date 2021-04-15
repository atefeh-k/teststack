const chalk = require('chalk')
const stack = require('./index')

const s = new stack()
console.log(chalk.red('isEmpty 1' , s.isEmpty()))
s.push({
    name: 'atefeh'
})
s.push({
name: 'maryam'
})

const data = s.pop()
console.log('isEmpty 2' , s.isEmpty())
console.log(chalk.blue('pop from stack', data))