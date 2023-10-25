import { getJobs } from "./db/jobs.js";
export const resolvers = {
    Query: {
        jobs: async() => 
        {
            const jobs = await getJobs();
            console.log(jobs);
            return jobs;
            /* return [
                {
                    id: 'test-job1',
                    title: 'Accountant',
                    description: 'Prepare company B/S',
                },
                {
                    id: 'test-job2',
                    title: 'Carpenter',
                    description: 'Create wooden tables and chairs',
                },
            ] */
        }
    },
};