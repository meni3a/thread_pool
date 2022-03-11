
import { WorkerPool } from "node-oop-worker-pool";
import ComputeService from "./computeService";

class MainService{

    async handleCPUIntensiveTask(dataToProcess: number[]){ 
        
        // wait all workers to finish
        const result = await Promise.all(dataToProcess.map((data: number)=>{
            return WorkerPool.runTask(data, ComputeService.path);
        }));
    
        console.log("finish all tasks", result);
    
        WorkerPool.destroy();
    }
	
}

const mainService = new MainService();
mainService.handleCPUIntensiveTask([1,2,3,4,5,6,7,8,9,10,11]);
