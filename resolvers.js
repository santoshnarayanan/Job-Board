import { getJobs } from "./db/jobs.js";
export const resolvers = {
    Query: {
        jobs: () => getJobs(),
    },

    Job:{
        date: (job) => {
            console.log(job);
            return toIsoDate(job.createdAt);
        }
    }
};

function toIsoDate(value){
    return value.slice(0,'yyyy-MM-dd'.length);
}