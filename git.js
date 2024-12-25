//—————————————————————————生成公钥、私钥命令在git bash中执行———————————————

//生成公钥、私钥
ssh-keygen -t rsa -C "516367513@qq.com"

//查看公钥
cat ~/.ssh/id_rsa.pub


//—————————————————————————以下可在命令行执行———————————————————————————————

//设置ssh凭据位置 #如果已经有凭据可以将凭据复制到特定的位置并通过此命令设置位置
git config --global core.sshCommand "ssh -i ~/.ssh/fengwaer_1"

//添加远程仓库地址
git remote add origin git@github.com:fengwaer/help.git

//设置远程仓库地址
git remote set-url origin git@github.com:fengwaer/help.git

//查看远程仓库地址
git remote -v

//跟上这个参数拉取远程仓库代码的同时不创建新的目录;clone原理相同
git pull origin master --allow-unrelated-histories

//推送仓库时加上-u关联本地和远程仓库
git push -u origin master

