module.exports = {
  apps: [
    {
      name: 'az-az365pro-web',
      script: './node_modules/next/dist/bin/next',
      args: 'start -p ' + 3000,
      watch: false,
      autorestart: true
    }
  ]
}
