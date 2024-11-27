---
sidebar_position: 0
---
# Install VIM

## Win

```shell
winget install Neovim.Neovim
```

### Instalar gerenciador de plugin

```shell
iwr -useb https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim |` ni "$(@($env:XDG_DATA_HOME, $env:LOCALAPPDATA)[$null -eq $env:XDG_DATA_HOME])/nvim-data/site/autoload/plug.vim" -Force
```
