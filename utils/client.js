import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: '4516gefe',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: 'true',
});

const builder = imageUrlBuilder(client);

export const urlForThumnail = (source) => builder.image(source).width(300).url();
export const urlFor = (source) => builder.image(source);
