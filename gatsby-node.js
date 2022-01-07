const path = require("path");

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      policies:allMdx (filter: {frontmatter: {type: {eq: "policy"}}}){
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  result.data.policies.nodes.forEach(({ frontmatter: { slug } }) => {
    createPage({
      path: `/politicas/${slug}`,
      component: path.resolve(`src/templates/policy-template.js`),
      context: {
        slug,
      },
    });
  });
  
};
