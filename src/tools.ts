import Apache from './components/logos/Apache.vue';
import Aws from './components/logos/Aws.vue';
import Behat from './components/logos/Behat.vue';
import CreativeCloud from './components/logos/CreativeCloud.vue';
import D3js from './components/logos/D3js.vue';
import Docker from './components/logos/Docker.vue';
import Doctrine from './components/logos/Doctrine.vue';
import ElasticSearch from './components/logos/ElasticSearch.vue';
import Eslint from './components/logos/Eslint.vue';
import Express from './components/logos/Express.vue';
import Figma from './components/logos/Figma.vue';
import Git from './components/logos/Git.vue';
import Github from './components/logos/Github.vue';
import Gitlab from './components/logos/Gitlab.vue';
import Go from './components/logos/Go.vue';
import GoogleCloud from './components/logos/GoogleCloud.vue';
import Hyperdx from './components/logos/Hyperdx.vue';
import Jest from './components/logos/Jest.vue';
import JetBrains from './components/logos/JetBrains.vue';
import K6 from './components/logos/K6.vue';
import Kubernetes from './components/logos/Kubernetes.vue';
import Mongodb from './components/logos/Mongodb.vue';
import Mysql from './components/logos/Mysql.vue';
import Nest from './components/logos/Nest.vue';
import Nginx from './components/logos/Nginx.vue';
import Node from './components/logos/Node.vue';
import Nuxt from './components/logos/Nuxt.vue';
import Php from './components/logos/Php.vue';
import Phpstan from './components/logos/Phpstan.vue';
import PhpUnit from './components/logos/PhpUnit.vue';
import Postgresql from './components/logos/Postgresql.vue';
import Prisma from './components/logos/Prisma.vue';
import Psalm from './components/logos/Psalm.vue';
import Python from './components/logos/Python.vue';
import Rabbitmq from './components/logos/Rabbitmq.vue';
import Redis from './components/logos/Redis.vue';
import Sass from './components/logos/Sass.vue';
import Sentry from './components/logos/Sentry.vue';
import Serverless from './components/logos/Serverless.vue';
import Symfony from './components/logos/Symfony.vue';
import Tailwind from './components/logos/Tailwind.vue';
import Traefik from './components/logos/Traefik.vue';
import Typescript from './components/logos/Typescript.vue';
import Vercel from './components/logos/Vercel.vue';
import VisualStudio from './components/logos/VisualStudio.vue';
import Vite from './components/logos/Vite.vue';
import Vue from './components/logos/Vue.vue';
import Vuetify from './components/logos/Vuetify.vue';
import Webpack from './components/logos/Webpack.vue';

export const TOOL_LABELS = {
  backend: 'Backend',
  frontend: 'Frontend',
  infrastructure: 'Infrastructure',
  persistence: 'Persistence',
  quality: 'Quality',
  cicd: 'CI/CD',
  monitoring: 'Monitoring',
  vcs: 'VCS',
  design: 'Design',
  other: 'Other',
};

export type ToolLabelKey = keyof typeof TOOL_LABELS;
export const LABEL_KEYS = Object.keys(TOOL_LABELS) as ToolLabelKey[];

export type ToolType = {
  key: string;
  name: string;
  component: unknown;
  labels: ToolLabelKey[] & string[];
};

// prettier-ignore
export const ALL_TOOLS = {
  php:              { key: 'php',           name: 'PHP',               component: Php,             labels: ['backend'] }                    as ToolType,
  symfony:          { key: 'symfony',       name: 'Symfony',           component: Symfony,         labels: ['backend'] }                    as ToolType,
  doctrine:         { key: 'doctrine',      name: 'Doctrine',          component: Doctrine,        labels: ['backend', 'persistence'] }     as ToolType,
  node:             { key: 'node',          name: 'Node.js',           component: Node,            labels: ['backend'] }                    as ToolType,
  typescript:       { key: 'typescript',    name: 'Typescript',        component: Typescript,      labels: ['backend', 'frontend'] }        as ToolType,
  nest:             { key: 'nest',          name: 'NestJS',            component: Nest,            labels: ['backend'] }                    as ToolType,
  express:          { key: 'express',       name: 'Express',           component: Express,         labels: ['backend'] }                    as ToolType,
  prisma:           { key: 'prisma',        name: 'Prisma',            component: Prisma,          labels: ['backend', 'persistence'] }     as ToolType,
  go:               { key: 'go',            name: 'Go',                component: Go,              labels: ['backend'] }                    as ToolType,
  python:           { key: 'python',        name: 'Python',            component: Python,          labels: ['backend'] }                    as ToolType,
  vue:              { key: 'vue',           name: 'Vue.js',            component: Vue,             labels: ['frontend'] }                   as ToolType,
  vuetify:          { key: 'vuetify',       name: 'Vuetify',           component: Vuetify,         labels: ['frontend'] }                   as ToolType,
  nuxt:             { key: 'nuxt',          name: 'Nuxt.js',           component: Nuxt,            labels: ['frontend'] }                   as ToolType,
  d3js:             { key: 'd3js',          name: 'D3.js',             component: D3js,            labels: ['frontend'] }                   as ToolType,
  tailwind:         { key: 'tailwind',      name: 'Tailwind',          component: Tailwind,        labels: ['frontend'] }                   as ToolType,
  sass:             { key: 'sass',          name: 'Sass',              component: Sass,            labels: ['frontend'] }                   as ToolType,
  vite:             { key: 'vite',          name: 'Vite',              component: Vite,            labels: ['other'] }                      as ToolType,
  webpack:          { key: 'webpack',       name: 'Webpack',           component: Webpack,         labels: ['other'] }                      as ToolType,
  phpUnit:          { key: 'phpUnit',       name: 'PHP Unit',          component: PhpUnit,         labels: ['quality'] }                    as ToolType,
  behat:            { key: 'behat',         name: 'Behat',             component: Behat,           labels: ['quality'] }                    as ToolType,
  psalm:            { key: 'psalm',         name: 'Psalm',             component: Psalm,           labels: ['quality'] }                    as ToolType,
  phpstan:          { key: 'phpstan',       name: 'PhpStan',           component: Phpstan,         labels: ['quality'] }                    as ToolType,
  jest:             { key: 'jest',          name: 'Jest',              component: Jest,            labels: ['quality'] }                    as ToolType,
  eslint:           { key: 'eslint',        name: 'ESLint',            component: Eslint,          labels: ['quality'] }                    as ToolType,
  k6:               { key: 'k6',            name: 'K6',                component: K6,              labels: ['quality'] }                    as ToolType,
  sentry:           { key: 'sentry',        name: 'Sentry',            component: Sentry,          labels: ['quality', 'monitoring'] }      as ToolType,
  hyperdx:          { key: 'hyperdx',       name: 'HyperDX',           component: Hyperdx,         labels: ['monitoring'] }                 as ToolType,
  postgresql:       { key: 'postgresql',    name: 'PostgreSQL',        component: Postgresql,      labels: ['persistence'] }                as ToolType,
  mysql:            { key: 'mysql',         name: 'MySQL',             component: Mysql,           labels: ['persistence'] }                as ToolType,
  mongodb:          { key: 'mongodb',       name: 'MongoDB',           component: Mongodb,         labels: ['persistence'] }                as ToolType,
  redis:            { key: 'redis',         name: 'Redis',             component: Redis,           labels: ['persistence'] }                as ToolType,
  elasticSearch:    { key: 'elasticSearch', name: 'ElasticSearch',     component: ElasticSearch,   labels: ['persistence', 'monitoring'] }  as ToolType,
  rabbitmq:         { key: 'rabbitmq',      name: 'RabbitMQ',          component: Rabbitmq,        labels: ['persistence'] }                as ToolType,
  docker:           { key: 'docker',        name: 'Docker',            component: Docker,          labels: ['infrastructure', 'cicd'] }     as ToolType,
  kubernetes:       { key: 'kubernetes',    name: 'Kubernetes',        component: Kubernetes,      labels: ['infrastructure', 'cicd'] }     as ToolType,
  googleCloud:      { key: 'googleCloud',   name: 'Google Cloud',      component: GoogleCloud,     labels: ['infrastructure', 'cicd'] }     as ToolType,
  aws:              { key: 'aws',           name: 'AWS',               component: Aws,             labels: ['infrastructure', 'cicd'] }     as ToolType,
  vercel:           { key: 'vercel',        name: 'Vercel',            component: Vercel,          labels: ['infrastructure', 'cicd'] }     as ToolType,
  serverless:       { key: 'serverless',    name: 'Serverless',        component: Serverless,      labels: ['infrastructure', 'cicd'] }     as ToolType,
  traefik:          { key: 'traefik',       name: 'Traefik',           component: Traefik,         labels: ['infrastructure'] }             as ToolType,
  nginx:            { key: 'nginx',         name: 'Nginx',             component: Nginx,           labels: ['infrastructure'] }             as ToolType,
  apache:           { key: 'apache',        name: 'Apache',            component: Apache,          labels: ['infrastructure'] }             as ToolType,
  git:              { key: 'git',           name: 'Git',               component: Git,             labels: ['vcs'] }                        as ToolType,
  github:           { key: 'github',        name: 'GitHub',            component: Github,          labels: ['vcs', 'cicd'] }                as ToolType,
  gitlab:           { key: 'gitlab',        name: 'GitLab',            component: Gitlab,          labels: ['vcs', 'cicd'] }                as ToolType,
  figma:            { key: 'figma',         name: 'Figma',             component: Figma,           labels: ['design'] }                     as ToolType,
  creativeCloud:    { key: 'creativeCloud', name: 'Creative Cloud',    component: CreativeCloud,   labels: ['design'] }                     as ToolType,
  jetBrains:        { key: 'jetBrains',     name: 'JetBrains',         component: JetBrains,       labels: ['other'] }                      as ToolType,
  visualStudio:     { key: 'visualStudio',  name: 'Visual Studio',     component: VisualStudio,    labels: ['other'] }                      as ToolType,
};
