import { getJestProjects } from '@nrwl/jest';

const projects = getJestProjects()
  .filter(project => !(project.includes('vibrant-core') || project.includes('vibrant-icons')))
  .concat(
    'packages/vibrant-core/jest.config.web.ts',
    'packages/vibrant-core/jest.config.native.ts',
    'packages/vibrant-icons/jest.config.web.ts',
    'packages/vibrant-icons/jest.config.native.ts'
  );

export default {
  projects,
};
