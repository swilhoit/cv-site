import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '5ub8rtqs',
    dataset: 'production'
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})
