const toBin = (i: number) => i.toString(2);
const toInt = (b: string) => parseInt(b, 2);

const Reset = "\x1b[0m";

const FgBlack = "\x1b[30m";
const FgRed = "\x1b[31m";
const FgYellow = "\x1b[33m";
const FgCyan = "\x1b[36m";

const BgRed = "\x1b[41m";
const BgYellow = "\x1b[43m";
const BgCyan = "\x1b[46m";

const PRINT_MODE = 7; // 111
const PRINT_MODE_INFO = 1; // 001
const PRINT_MODE_WARN = 2; // 010
const PRINT_MODE_ERROR = 3; // 100

const ERROR_PREFIX = `${BgRed}${FgBlack}[SERVER ERROR]${Reset}${FgRed}`;
const WARN_PREFIX = `${BgYellow}${FgBlack}[SERVER WARN]${Reset}${FgYellow}`;
const INFO_PREFIX = `${BgCyan}${FgBlack}[SERVER INFO]${Reset}${FgCyan}`;

function log(prefix: string, text:string, ...args: any) {
  console.log(prefix, `>`, `${text}${Reset}`, ...args)
}

const serverInfo = (text: string, ...args: any) => {
  if (PRINT_MODE & PRINT_MODE_INFO) log(INFO_PREFIX, text, ...args)
}

const serverWarn = (text: string, ...args: any) => {
  if (PRINT_MODE & PRINT_MODE_WARN) log(WARN_PREFIX, text, ...args)
}

const serverError = (text: string, ...args: any) => {
  if (PRINT_MODE & PRINT_MODE_ERROR) log(ERROR_PREFIX, text, ...args)
}

export default {
  serverInfo,
  serverWarn,
  serverError,
}
