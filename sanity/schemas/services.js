export default {
    name: 'services',
    title: 'Services',
    type: 'document',
    fields: [
        {
            name: 'heading',
            title: 'Heading',
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
            name: 'btnText',
            title: 'BtnText',
            type: 'string',
        },
    ],
};
