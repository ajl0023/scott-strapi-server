module.exports = {
  ezforms: {
    config: {
      enableFormName: true,
      captchaProvider: {
        name: "none",
      },
      notificationProviders: [],
    },
  },
  "drag-drop-content-types": {
    enabled: true,
  },
  "netlify-deployments": {
    enabled: true,
    config: {
      accessToken: process.env.NETLIFY_DEPLOYMENTS_PLUGIN_ACCESS_TOKEN,
      sites: [
        {
          name: "leafy-llama-2bca9e",
          id: "217565c8-b71b-4270-844f-776fa2c1bd45",
          buildHook: process.env.NETLIFY_BUILD_HOOK,
          branch: "main", // optional
        },
      ],
    },
  },
};
