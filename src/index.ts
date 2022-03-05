import path from "path";
import ComputeService from "./computeService";
import WorkersPool from "node-oop-worker-pool/dist/lib/WorkersPool";

(async () => {
    console.log("start")
    const promises = [];
    for (const data of Array.from(Array(10).keys())) {
        const task = WorkersPool.Task(data, ComputeService.path);
        promises.push(task);
    }
    await Promise.all(promises);
    WorkersPool.destroy();
    console.log("finish all")
})();



