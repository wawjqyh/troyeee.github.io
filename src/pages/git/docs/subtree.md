# subtree

git subtree 的主要命令有：

```bash
# 添加子仓库
git subtree add   --prefix=<目录> <仓库地址> <分支> <参数>
git subtree pull  --prefix=<目录> <仓库地址> <分支> <参数>
git subtree push  --prefix=<目录> <仓库地址> <分支> <参数>
git subtree merge --prefix=<目录> <分支/commit id>
git subtree split --prefix=<目录> [OPTIONS] [<commit>]
```
