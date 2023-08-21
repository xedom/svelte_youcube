const toBin = (i: number) => i.toString(2);
const toInt = (b: string) => parseInt(b, 2);

const PRINT_MODE = 7; // 111
const PRINT_MODE_INFO = 1; // 001
const PRINT_MODE_WARN = 2; // 010
const PRINT_MODE_ERROR = 3; // 100

const ERROR_PREFIX = `[SERVER ERROR]`;
const WARN_PREFIX = `[SERVER WARN]`;
const INFO_PREFIX = `[SERVER INFO]`;

function log(prefix: string, text:string, ...args: any) {
  console.log(prefix, `>`, `${text}`, ...args)
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
