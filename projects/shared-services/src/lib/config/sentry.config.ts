export interface SentryEnvironment {
    key: string;
    environment: string;
    dsn: string | undefined;
}
export class SentryConfiguration {
    constructor(
        public defaultConfig: SentryEnvironment,
        public localConfig: SentryEnvironment,
        public config: SentryEnvironment[]) {
    }
}
