import { Job } from "./interfaces/job";
import { ResponseTable } from "./interfaces/response-tables";

export function calculate(job: Job, lastProcessingTime: number): ResponseTable {

    const currentFlowTime = job.processingTime + lastProcessingTime;

    return {
        name: job.name,
        processingTime: job.processingTime,
        flowTime: currentFlowTime,
        deliveryDate: job.remainingDays,
        delay: currentFlowTime < job.remainingDays ? 0 : currentFlowTime - job.remainingDays,
    };
}

export function organiceJobs(jobs: Job[]): ResponseTable[] {

    let lastFlowTime = 0;

    return jobs.map(job => {
        const result = calculate(job, lastFlowTime);
        lastFlowTime = result.flowTime;
        return result;
    });
}