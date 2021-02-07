import {Command, flags} from '@oclif/command'
import {Todos} from '../db'

export default class Add extends Command {
  static description = `Adds a new todo
  ...
  Adds a new todo to the existing list`;

  static flags = {
    task: flags.string({char: 'n', description: 'task'}),
  };

  static args = [{name: 'file'}];

  async run() {
    const {
      flags: {task},
    } = this.parse(Add)
    if (!task) return
    const todo = await Todos.push({
      task,
      id: Todos.value().length,
      done: false,
    }).write()
    this.log(JSON.stringify(todo))
  }
}
