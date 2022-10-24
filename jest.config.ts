import { getJestProjects } from '@nrwl/jest';

let projects = getJestProjects();

projects = projects.filter(project => !project.includes('vibrant-core'));

projects = projects.concat('packages/vibrant-core/jest.config.web.ts', 'packages/vibrant-core/jest.config.native.ts');

export default {
  projects,
};
