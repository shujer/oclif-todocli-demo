import {Command, flags} from '@oclif/command'
import {Todos} from '../db'

export default class Update extends Command {
  static description = `Marks a task as done
  ...
  Maks a task as done`;

  static flags = {
    id: flags.string({char: 'n', description: 'task id'}),
  };

  async run() {
    const {
      flags: {id},
    } = this.parse(Update)
    if (!id) return
    const todo = await Todos.find({id: parseInt(id, 10)})
    .assign({done: true})
    .write()
    this.log(JSON.stringify(todo))
  }
}
