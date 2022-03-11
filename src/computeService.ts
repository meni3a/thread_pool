import { AbstractWorker } from 'node-oop-worker-pool';

export default class ComputeService extends AbstractWorker {

	// optional way to expose the path to the main file
    static path = __filename;

	// when the worker starts, this function will be called automatically.
    async runTask(data: number): Promise<number> {
        console.log("start processing data: ", data);
        // example of thread blocking task
        for (let i = 0; i < 9999999999; i++);
		// modified the data
        const modifiedData = data*2;
		//return data to main file
		return modifiedData;
    }

}