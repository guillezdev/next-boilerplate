import EnvConfig from "@/types/env";

declare global {
	namespace NodeJS {
		interface ProcessEnv extends EnvConfig {}
	}
}

// The main reason for export a empty object is to tell the TypeScript
// compiler that we have finished declaring the global interfaces
export {}; // <- DO NOT REMOVE!
