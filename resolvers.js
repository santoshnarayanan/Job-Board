export const resolvers = {
    Query:{
        job: () => 
        {return{
            id:'test-job',
            title: 'The title',
            description: 'The description',
        };}
    },
};