declare module "*.svg?inline" {
    const content: any;
    export default content;
}

declare module "*.svg" {
    const content: any;
    export default content;
}

interface ImportMetaEnv extends Readonly<Record<string, string>> {
    readonly VITE_NODE_ENV: "development" | "production";
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
