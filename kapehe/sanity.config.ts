import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

const config = defineConfig({
    projectId: 'h775wynk',
    dataset: 'production',
    title: 'personal-website',
    apiVersion: '2023-06-23',
    basePath: '/admin',
    plugins: [deskTool()],

});


export default config;
