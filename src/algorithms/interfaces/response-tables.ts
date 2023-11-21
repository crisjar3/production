export type ResponseTable = {
    name: string;
    processingTime: number;
    flowTime: number;
    deliveryDate: number;
    delay: number;
}

export type ResultsPlaning = {
    Jobs: ResponseTable[];
    AverageCompletionType: number;
    MeasureUse: number;
    AverageJobs: number;
    AverageDelay: number;
}