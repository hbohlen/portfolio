import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import social from './social';
import pageInfo from './pageInfo';
import project from './project';
import skill from './skill';

export default createSchema({
  name: 'default',

  types: schemaTypes.concat([pageInfo, social, project, skill])
});
