import { Command } from "@oclif/core";

export default class NewJsTool extends Command {
  static description = "Generate new JS project";

  static examples = [`$ kepler-cli new client --language=javascript`];

  async run(): Promise<void> {
    const { args, flags } = await this.parse(NewJsTool);

    console.log("NewJsTool", args, flags);
  }
}
