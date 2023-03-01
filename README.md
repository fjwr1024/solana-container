# solana関連のライブラリをDocker上で実行できるか試すだけのリポジトリ

## command

### build

```
docker build -t solana-container .
```

### イメージができたか確認

```
docker images
```

### 起動

```
docker container run -it --name solana_conatiner solana_conatiner
```