
import { AbstractWorker } from 'node-oop-worker-pool/dist/lib/AbstractWorker';

export default class ComputeService extends AbstractWorker {

    static path = __filename;

    async run(data: any): Promise<any> {
        console.log("start " + data + " - ", data);
        for (let i = 0; i < 9999999999; i++);
        return "done" + data;
    }

}

