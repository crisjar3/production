import { Job } from "./interfaces/job";
import { ResponseTable } from "./interfaces/response-tables";
import { calculate } from "./peps";

export function organiceJobs(jobs: Job[]): ResponseTable[] {
    
    let lastFlowTime = 0;
    jobs.sort((a, b) => a.processingTime - b.processingTime);
    
    return jobs.map(job => {
        const result = calculate(job, lastFlowTime);
        lastFlowTime = result.flowTime;
        return result;
    });
}