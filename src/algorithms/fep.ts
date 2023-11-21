// import { Job } from "./interfaces/job";
// import { ResultsPlaning } from "./interfaces/response-tables";
// import { calculateResult } from "./Planning";

// export function organizeJobs(jobs: Job[]): ResultsPlaning {
//     jobs = jobs.reverse();

//     let lastFlowTime = 0;

//     const jobsPLanned = jobs.map(job => {
//         const result = calculateResult(job, lastFlowTime);

//         lastFlowTime = result.flowTime;

//         return result;
//     });

//     const totalFlowTime = jobsPLanned.reduce((sum, job) => sum + job.flowTime, 0);
//     const totalProccesingTime = jobsPLanned.reduce((sum, job) => sum + job.processingTime, 0);
//     const totalDelayTime = jobsPLanned.reduce((sum, job) => sum + job.delay, 0);


//     const averageCompletionTime = totalFlowTime / jobs.length;

//     return {
//         Jobs: jobsPLanned,
//         AverageCompletionType: averageCompletionTime,
//         MeasureUse: totalProccesingTime / totalFlowTime,
//         AverageJobs: totalFlowTime / totalProccesingTime,
//         AverageDelay: totalDelayTime / jobs.length
//     }
// }