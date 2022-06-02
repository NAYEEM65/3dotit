export default {
    name: 'herobanner',
    title: 'Hero-Banner',
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
            name: 'subHeading',
            title: 'SubHeading',
            type: 'string',
        },
        {
            name: 'btnText',
            title: 'BtnText',
            type: 'string',
        },
    ],
};
