// To see all options:
// https://vuepress.vuejs.org/config/
// https://vuepress.vuejs.org/theme/default-theme-config.html
module.exports = {
  title: "RBAC Manager Documentation",
  description: "Documentation for Fairwinds' Rbac Manager",
  themeConfig: {
    docsRepo: "FairwindsOps/rbac-manager",
    sidebar: [
      {
        title: "RBAC Manager",
        path: "/",
        sidebarDepth: 0,
      },
      {
        title: "Introduction",
        path: "/introduction",
      },
      {
        title: "RBAC Definitions",
        path: "/rbacdefinitions"
      },
      {
        title: "Upgrades",
        path: "/upgrades",
      },
      {
        title: "Cloud Provider Auth",
        children: [
          {
            title: "AWS",
            path: "/aws"
          },
          {
            title: "AKS",
            path: "/aks"
          },
          {
            title: "GKE",
            path: "/gke",
          }
        ]
      },
      {
        title: "Contributing",
        children: [
          {
            title: "Guide",
            path: "contributing/guide"
          },
          {
            title: "Code of Conduct",
            path: "contributing/code-of-conduct"
          }
        ]
      }
    ]
  },
}
