import { getJestProjects } from '@nrwl/jest';

const projects = getJestProjects()
  .filter(project => !project.includes('vibrant-core'))
  .concat('packages/vibrant-core/jest.config.web.ts', 'packages/vibrant-core/jest.config.native.ts');

export default {
  projects,
};
