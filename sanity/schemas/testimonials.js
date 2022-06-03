export default {
    name: 'testimonials',
    title: 'Testimonials',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },

        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'rating',
            title: 'Rating',
            type: 'number',
        },
    ],
};
