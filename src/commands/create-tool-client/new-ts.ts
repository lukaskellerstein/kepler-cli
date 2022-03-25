import { Command } from "@oclif/core";

export default class NewTsTool extends Command {
  static description = "Generate new TS project";

  static examples = [`$ kepler-cli new client --language=typescript`];

  async run(): Promise<void> {
    const { args, flags } = await this.parse(NewTsTool);

    console.log("NewTsTool", args, flags);
  }
}
