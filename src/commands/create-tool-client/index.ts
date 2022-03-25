import { Command, Flags } from "@oclif/core";

export default class CreateTool extends Command {
  static description =
    "Generate new project for Kepler's 3rd party client tool";

  static examples = [
    "$ kepler-cli new client --language=javascript",
    "$ kepler-cli new client --language=typescript",
  ];

  static flags = {
    from: Flags.string({
      char: "l",
      description: "programming language",
      required: true,
    }),
  };

  static args = [];

  async run(): Promise<void> {
    const { args, flags } = await this.parse(CreateTool);

    console.log("CreateTool", args, flags);
  }
}
