export default {
    name: 'about',
    title: 'About',
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
            name: 'btnText',
            title: 'BtnText',
            type: 'string',
        },
    ],
};
