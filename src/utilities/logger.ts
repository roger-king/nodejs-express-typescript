import * as Debug from 'debug';

export const logger = (mod: string = ''): { debug: Debug.IDebugger; error: (msg: string) => void } => {
    return {
        debug: Debug(`app:${mod}`),
        error: (msg: string) => {
            // tslint:disable-next-line
            console.error(msg);
        },
    };
};
